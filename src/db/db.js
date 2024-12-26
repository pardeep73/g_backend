import mongoose, { Error } from "mongoose";

const connectDB = async () => {
    try {
        await mongoose.connect(`${process.env.MONGO_DB}/chatbot`);
        console.log('Database connected')
    } catch (error) {
        throw new Error(error)
    }
}

export default connectDB;