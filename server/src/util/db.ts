import * as dotenv from 'dotenv'
import mongoose from "mongoose";
dotenv.config()
async function connectDB() {
  try {
    if (process.env.DATABASE_URI) {
      await mongoose.connect(process.env.DATABASE_URI,{family:4});
      console.log('Connected to the database');
    } else {
      console.log('DATABASE_URI is not defined');
    }
  } catch (error) {
    console.error('Error connecting to the database:', error);
  }
}

connectDB();
