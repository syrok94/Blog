import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();


const connectDB = async () =>{
    const uri = process.env.MONGO_URI;
    try{
        const connect = await mongoose.connect(uri);
        console.log("Database Connected :" , connect.connection.host , connect.connection.name);
    }
    catch (err){
        console.log(err);
        process.exit(1);
    }
}

export default connectDB;