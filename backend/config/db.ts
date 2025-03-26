import { MongoClient } from "mongodb";
import dotenv from "dotenv";

dotenv.config();

export const client = new MongoClient(process.env.MONGO_CONN_STRING!);

export const connectToDB = async () => {
  try {
    const connection = await client.connect();
    console.log("Successfully connected to Atlas");
  } catch (error) {
    console.error("Error connecting to MongoDB:", error);
  }
};

export const database = client.db("Store");
export const collection = database.collection("products");
