import mongoose from "mongoose";

export const mongoDB = async () => {
  const MONGO_URI = process.env.MONGO_URI
  try {
    console.log("Connecting to Database...");
    await mongoose
      .connect(MONGO_URI, {})
      .then(() => {
        console.log(`Database Connected to Database`);
      })
      .catch((err) => {
        console.log(err);
      });
  } catch (error) {
    console.log(error);
  }
};
