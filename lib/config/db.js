import mongoose from "mongoose";

export const ConnectDB= async () => {
    await mongoose.connect(`mongodb+srv://minaR:tQgwe9XeJJwKOOUG@cluster0.quzmzoi.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`);
    console.log("DB connected");
    
}
