import express from "express";
import {
	addTask,
	deleteTask,
	getTask,
	updateTask,
} from "../controllers/taskControllers.js";
import { isAuthenticated } from "../middlewares/auth.js";

const taskRouter = express.Router();

taskRouter.post("/add", isAuthenticated, addTask);
taskRouter.get("/get", isAuthenticated, getTask);
taskRouter.route("/:id").put(updateTask).delete(deleteTask);
export default taskRouter;
