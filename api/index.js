import express from "express";
import cors from "cors";
import connectDb from "./config/db.js";
import {User} from "./models/userModel.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import cookieParser from "cookie-parser";

const app = express();
const PORT = 4000;

const bcryptSalt = bcrypt.genSaltSync(10);
const jwtSecret = "sdfhmsgwsrff32535esgdgcgbdf";

connectDb();

app.use(express.json());
app.use(cookieParser());

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

app.listen(PORT, () => {
    console.log(`Server live on ${PORT}`);
});
