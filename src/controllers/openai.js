
import { GoogleGenerativeAI } from '@google/generative-ai';
import { response } from '../models/response.js';
import dotenv from "dotenv";

dotenv.config({
    path:'./.env'
})

const genAI = new GoogleGenerativeAI(`${process.env.google_secret}`);
const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

export const getmessage = async (req, res) => {
  
  const userId = req.id;

  console.log(req.body);
  const question = req.body.bot;
 
  const prompt = question;
  const result = await model.generateContent(prompt);
  const generated = result.response.text();

  console.log('response :-',result.response.candidates[0].content.parts[0].text);

  res.write(generated);
  res.end();

  await response.create({
    question,
    generate:generated,
    userchats:userId
  })


}

export const responses = async (req,res) => {
  try {
    const userId = req.id;
    const chats = await response.find({userchats:userId}).sort({createdAt:-1});
    if(!chats){
      return res.json({
        status:400,
        success:false,
        message:'data not found'
      })
    }

    return res.status(200).json({
      success:true,
      chats
    })


  } catch (error) {
    console.log(error)
  }
}