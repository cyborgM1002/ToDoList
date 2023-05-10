import express from "express";
import { config } from "dotenv";
import userRouter from "./routes/userRoutes.js";
import cookieParser from "cookie-parser";
import taskRouter from "./routes/taskRoutes.js";
import { errorMiddleware } from "./middlewares/error.js";
import cors from "cors";

export const app = express();

app.use(cookieParser());
config({
	path: "./database/config.env",
});

app.use(express.json());
app.use(
	cors({
		origin: [process.env.FRONTEND_URI],
		methods: ["GET", "POST", "PUT", "DELETE"],
		credentials: true,
	})
);
app.use("/api/v1/users", userRouter);
app.use("/api/v1/task", taskRouter);
app.use(errorMiddleware);
