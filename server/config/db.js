import mongoose from "mongoose";

export const connectDb=async()=>{
    try {
        mongoose.connection.on("connected",()=>console.log("mongo db connected"))
        await mongoose.connect(`${process.env.MONGODB_URI}/pingup`)
    } catch (error) {
        console.log("somthing wrong",error)
    }
}