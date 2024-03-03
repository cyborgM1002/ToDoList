import express from "express";
import { config } from "dotenv";
import userRouter from "./routes/userRoutes.js";
import cookieParser from "cookie-parser";
import taskRouter from "./routes/taskRoutes.js";
import { errorMiddleware } from "./middlewares/error.js";
import cors from "cors";

export const app = express();
config({ path: "./.env" });
const URL = process.env.FRONTEND_URI_DEVELOPMENT
app.use(
  cors({
    origin: [URL],
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true,
  })
);
app.use(cookieParser());
app.use(express.json());
app.use(express.static("public"));
app.use(express.urlencoded({ extended: false }));
app.use(express.static("../app/dist"));
app.use("/users", userRouter);
app.use("/task", taskRouter);
app.use(errorMiddleware);

