import mongoose from "mongoose";

export const mongoDB = () => {
  mongoose
    .connect(process.env.MONGO_URI, { dbName: "ToDoList" })
    .then(() => {
      console.log("Database Connected");
    })
    .catch((err) => {
      console.log(err);
    });
};
