import mongoose from "mongoose";
import {DB_NAME} from "../constants.js";


const connectDB = async ()=>{
    try{
      const connectInsantance =  await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`);
      console.log(`MongoDB connection successful ${
        connectInsantance.connection.host
      }`);
    }catch(error){
        console.log("MOngoDB connection error: ", error);
        process.exit(1);
    }
}

export default connectDB;