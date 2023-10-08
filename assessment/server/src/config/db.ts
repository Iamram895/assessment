// import dotenv from "dotenv";
import mongoose from "mongoose";

// dotenv.config();

const DATABASE_URL =
"mongodb+srv://tasks:tasks123@cluster0.fxfgmvm.mongodb.net/assessment_db"

const connectDB = async () => {
  try {
    const options = {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    } as mongoose.ConnectOptions;

    await mongoose.connect(DATABASE_URL, options);
    console.log("Connection to DB was successful");
  } catch (err) {
    console.error("Connection to DB failed", err);
  }
};

const db = mongoose.connection;

db.on("error", console.error.bind(console, "MongoDB connection failed"));

export default connectDB;
