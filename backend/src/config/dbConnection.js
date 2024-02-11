import mongoose from "mongoose";

const connectDB = async () =>{
    const uri = "mongodb+srv://syrok:lrorgxoHBF2bcMQ6@cluster0.q1gmete.mongodb.net/?retryWrites=true&w=majority";
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