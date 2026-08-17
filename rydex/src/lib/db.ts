import mongoose from "mongoose";

declare global {
  var mongoose: {
    conn: mongoose.Connection | null;
    promise: Promise<mongoose.Connection> | null;
  } | undefined;
}

let cached = global.mongoose;
if (!cached) {
  cached = global.mongoose = { conn: null, promise: null };
}

const connectDb = async () => {
  const mongodbUrl = process.env.MONGODB_URL;

  if (!mongodbUrl) {
    console.warn("MONGODB_URL is not defined in environment variables.");
    return null;
  }

  if (cached.conn) {
    return cached.conn;
  }

  if (!cached.promise) {
    cached.promise = mongoose.connect(mongodbUrl).then((conn) => conn.connection);
  }

  try {
    const conn = await cached.promise;
    cached.conn = conn;
    return conn;
  } catch (error) {
    console.error("MongoDB Connection Error:", error);
    cached.promise = null;
    throw error;
  }
};

export default connectDb;