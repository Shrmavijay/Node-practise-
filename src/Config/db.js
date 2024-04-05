import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();

async function connectDB() {
  try {
    // console.log("MONFFO", process.env.MONGO_URI);
    await mongoose.connect(process.env.MONGO_URI);
    console.log("Connected to MongoDB!");
  } catch (error) {
    // console.log("HHGGAGAGAGAG", error.message);
    console.error("Error connecting to MongoDB:", error);
  }
}

export default connectDB;
