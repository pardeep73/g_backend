import mongoose from "mongoose";

const responseSchema = new mongoose.Schema({
    question:{
        type:String
    },
    generate :{
        type:String,
    },
    userchats:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'User'
    }
},{timestamps:true})

export const response = mongoose.model('response',responseSchema);
