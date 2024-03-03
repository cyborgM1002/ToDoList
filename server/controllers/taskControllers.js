import { taskModel } from "../models/taskModel.js";
import ErrorHandler from "../utils/errorHandler.js";

export const addTask = async (req, res, next) => {
	try {
		const { title, description } = req.body;
		await taskModel.create({ title, description, user: req.user });
		res.status(200).json({
			success: true,
			message: "Task added successfully",
		});
	} catch (err) {
		next(err);
	}
};
export const getTask = async (req, res, next) => {
	try {
		const userId = req.user.id;
		// console.log(userId);
		const tasks = await taskModel.find({ user: userId });
		// console.log(tasks);
		res.status(200).json({
			success: true,
			tasks,
		});
	} catch (err) {
		next(err);
	}
};

export const updateTask = async (req, res, next) => {
	try {
		const task = await taskModel.findById(req.params.id);
		if (!task) return next(new ErrorHandler("Task not Found", 404));
		task.isCompleted = !task.isCompleted;
		await task.save();
		res.status(200).json({ success: true, message: "Task updated" });
	} catch (err) {
		next(err);
	}
};
export const deleteTask = async (req, res, next) => {
	try {
		const task = await taskModel.findById(req.params.id);
		if (!task) return next(new ErrorHandler("Task not Found", 404));
		await task.deleteOne();
		res.status(200).json({ success: true, message: "Task deleted" });
	} catch (err) {
		next(err);
	}
};
