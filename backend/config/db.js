import mongoose from "mongoose";
import "dotenv/config";
import dns from "dns";

if (process.env.NODE_ENV !== "production") {
  dns.setServers(["8.8.8.8", "1.1.1.1"]);
}

const MONGO_URI = process.env.MONGO_URI;

const connectDB = async () => {
  try {
    await mongoose.connect(MONGO_URI);
    console.log("mongoDB connected!");
  } catch (err) {
    console.log(err);
  }
};

export default connectDB;
