import mongoose from 'mongoose';

const messageSchema = new mongoose.Schema(
    {
        sender: {type: mongoose.Schema.Types.ObjectId, ref: 'User'},
        message: String,
        chat: {type: mongoose.Schema.Types.ObjectId, ref: 'Request'},
    }, 
    {timestamps:true}
    );

export const Message = mongoose.model("Message", messageSchema);