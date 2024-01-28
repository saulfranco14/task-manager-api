import mongoose from "mongoose";
import { config as dotenvConfig } from "dotenv";

dotenvConfig();

const mongoURI = process.env.MONGO_URL;

const connectToMongo = async () => {
  try {
    await mongoose.connect(mongoURI);
    console.log("Success DB");
  } catch (error) {
    console.error("Error al conectar a MongoDB:", error.message);
  }
};

export default connectToMongo;
