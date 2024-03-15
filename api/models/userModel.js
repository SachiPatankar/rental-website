import mongoose from 'mongoose';

const userSchema = mongoose.Schema(
    {
        name: {
            type: String,
            // required: true
        },
        surname: {
            type: String,
            // required: true
        },
        gender: {
            type: String,
            // required: true,
        },
        dob:{
            type:String,
            // required:true
        },
        locality: {
            type: String,
            // required: true
        },
        city: {
            type: String,
            // required: true
        },
        email: {
            type: String,
            unique:true,
            // required: true
        },
        pswd: {
            type: String,
            unique:false
            // required: true,
        },   
    },
    {
        timestamps: true 
    }
);

export const User = mongoose.model("User", userSchema);