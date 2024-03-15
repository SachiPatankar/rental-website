import express from "express";
import cors from "cors";
import connectDb from "./config/db.js";
import {User} from "./models/userModel.js";
import bcrypt from "bcryptjs";

const app = express();
const PORT = 4000;

const bcryptSalt = bcrypt.genSaltSync(10);

connectDb();

app.use(express.json());

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

app.listen(PORT, () => {
    console.log(`Server live on ${PORT}`);
});
