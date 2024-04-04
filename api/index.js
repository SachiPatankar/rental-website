import express from "express";
import cors from "cors";
import connectDb from "./config/db.js";
import {User} from "./models/userModel.js";
import {Product} from "./models/productModel.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import cookieParser from "cookie-parser";
import download from "image-downloader";
import { fileURLToPath } from 'url';
import path from 'path';
import multer from "multer";
import fs from "fs";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = 4000;

const bcryptSalt = bcrypt.genSaltSync(10);
const jwtSecret = "sdfhmsgwsrff32535esgdgcgbdf";

connectDb();

app.use(express.json());

app.use(cookieParser());

app.use('/uploads', express.static(__dirname + "/uploads"));


app.use(cors({
    credentials:true,
    origin:"http://localhost:5173",
}));

app.get("/test", (req, res)=>{
    res.json("a okay");
});

app.post("/register", async (req,res) => {
    const {
        name,
        surname,
        gender,
        dob,
        locality,
        city,
        email,
        pswd,
      } = req.body;
      try{
        const newUser =  await User.create({
            name,
            surname,
            gender,
            dob,
            locality,
            city,
            email,
            pswd:bcrypt.hashSync(pswd, bcryptSalt),
          });
          res.json(newUser);
        }catch (e) {
            console.error("Error in /register route: ", e); // Detailed error log
            res.status(422).json({ error: e.message }); // Sending error message to client
        }
     
});

app.post("/login", async(req,res) => {
    const {email,pswd} = req.body;
    console.log(email,pswd);
        try{
            const userDetails = await User.findOne({email});

            if (userDetails){
                // res.json("Found");
                const passOk = bcrypt.compareSync(pswd, userDetails.pswd);
                console.log(passOk);
                if (passOk)
                {
                    jwt.sign({email:userDetails.email, id:userDetails._id, name: userDetails.name}, 
                              jwtSecret, 
                              {}, 
                              (err, token)=>{
                                if (err) throw err;
                                res.cookie('token', token).json(userDetails);
                              }
                    );
                   
                }
                else
                {
                    res.status(422).json("pass not ok");
                }
            }else{
                res.json("Not found");
            }
            
        }catch(e){
            console.error("Error in /register route: ", e);
            res.status(422).json({error: e.message});
        }
});

// app.get("/profile", (req,res) => {
//     const token = req.cookies.token;
//     if (token){
//         jwt.verify(token.token, jwtSecret, {}, async(err, userData) => {
//             if (err) throw err;
//             const userDoc = await User.findById(userData.id);
//             res.json(userDoc);

//         })
//     }else{
//         res.json(null)
//     }
//     res.json(req.cookies);
// })

app.get('/profile', (req,res) => {
    const {token} = req.cookies;
    if (token) {
      jwt.verify(token, jwtSecret, {}, async (err, userData) => {
        if (err) throw err;
        const {name,email,_id} = await User.findById(userData.id);
        res.json({name,email,_id});
      });
    } else {
      res.json(null);
    }
  });

app.post("/logout", (req,res)=>{
  res.cookie('token', "").json(true);
})

app.post('/upload-by-link' , async (req,res) =>{
    const link = req.body.link;
    const newName = Date.now() + '.jpg';

    const options = {
      url: link,
      dest: __dirname+ "/uploads/" + newName,    
    };
    
    download.image(options)
      .then(({ filename }) => {
        res.json(newName);
        console.log('Saved to', filename); 
      })
      .catch((err) => console.error(err)); 
})

const photosMiddleware = multer({dest:'uploads'})
app.post("/upload", photosMiddleware.array('photos', 100) ,(req,res)=>{
  
  const uploadedFiles = [];
  for(let i = 0; i < req.files.length; i++)
  {
    const {path, originalname} = req.files[i];
    const parts = originalname.split('.');
    const ext = parts[parts.length - 1];
    const newPath = path + '.' + ext;
    fs.renameSync(path, newPath);
    uploadedFiles.push(newPath.replace("uploads\\", ''));

  }
  res.json(uploadedFiles)
})

app.post("/products", (req,res)=>{
  
  const {token} = req.cookies;

  const {name,description,area,category,price,addedphotos} = req.body
  jwt.verify(token, jwtSecret, {}, async (err, userData) => {
    if (err) throw err;
    const productDoc = await Product.create({
      name: name,
      description: description ,
      area: area,
      category: category,
      price: price,
      owner: userData.id,
      photos: addedphotos,
      isAvailable: true,
    });
    res.json(productDoc);
  });
})

app.get("/products", async(req,res) => {
  try{
    const data = await Product.find();
    res.json(data);
    console.log(data);
  }catch(e){
    console.error("Error in /register route: ", e);
    res.status(422).json({error: e.message});
  }
});

app.get("/product/:id", async(req,res) => {
  const id = req.params.id;
  try{
    const data = await Product.findById(id);
    res.json(data);
    console.log(data);
  }catch(e){
    console.error("Error in /register route: ", e);
    res.status(422).json({error: e.message});
  }
});

app.put('/products', async (req,res) => {
  const {token} = req.cookies;
  const {id,name,description,area,category,price,addedphotos, owner} = req.body
  jwt.verify(token, jwtSecret, {}, async (err, userData) => {
    if (err) throw err;

    const productDoc = await Product.findById(id);
    if (userData.id === productDoc.owner.toString()) {
      productDoc.set({
        name,description,area,category,price,photos:addedphotos
      });
      await productDoc.save();
      res.json('ok');
    }
  });
});

app.delete("/product/:id", async (req, res) => {
  const id = req.params.id;
  try {
    const product = await Product.findById(id);

    if (!product) {
      return res.status(404).json({ message: "Note not found" });
    }
    await product.deleteOne();
    res.json({ message: "Note deleted" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.listen(PORT, () => {
    console.log(`Server live on ${PORT}`);
});
