import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    username:{type:String,require:true},
    email:{type:String,required:true,lowercase:true,unique:true,trim:true},
    password:{
        type:String,
        required:true,
        trim:true
    },
    
},{timestamps:true})

export const User = mongoose.model('User',userSchema);