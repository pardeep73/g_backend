import express, { urlencoded } from 'express';
import dotenv from "dotenv";
import cors from 'cors';
import chatbot from './src/routes/openai.js';
import Users from './src/routes/user.routes.js';
import expressStatusMonitor from 'express-status-monitor';
import connectDB from './src/db/db.js';
import cookieParser from 'cookie-parser';
dotenv.config({
    path:'./.env'
})

const app = express();


app.use(cors({
    origin:'http://localhost:3000',
    credentials:true 
}));
app.use(express.json());
app.use(urlencoded({extended:true}));
app.use(cookieParser());
app.use('/api/bot',chatbot);
app.use('/api/user',Users);
app.use(expressStatusMonitor());


const port = process.env.PORT || 5000; 
  

connectDB()
.then(()=>{
    app.listen(port,()=>{
        console.log("Server is running on ",port);
    })
})
.catch((error)=>{
    console.log('connection error',error)
})

