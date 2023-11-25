import mongoose from "mongoose";

let isConnected = false;
const connectDB = async () => {
  if (isConnected) return console.log("DB already connected");
  try {
    await mongoose.connect(process.env.MONGODB_URL!, { dbName: "devoverflow" });
    isConnected = true;
    return console.log("DB connected");
  } catch (e: any) {
    console.log("Error connecting to database", e.message);
  }
};

export default connectDB;
