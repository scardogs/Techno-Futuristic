import mongoose from "mongoose";

let isConnected = 0;

export async function connectToDatabase() {
  if (isConnected) return;
  const uri = process.env.MONGODB_URI;
  if (!uri) {
    throw new Error("Missing MONGODB_URI in environment variables");
  }
  const conn = await mongoose.connect(uri, {
    dbName: process.env.MONGODB_DB || undefined,
  });
  isConnected = conn.connections[0]?.readyState ?? 0;
}
