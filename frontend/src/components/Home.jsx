import React, { useContext, useEffect, useState } from "react";
import { LinearProgress } from "@mui/material";
import axios from "axios";
import { nodeServer } from "../main";
import { toast } from "react-hot-toast";
import TaskItems from "../common/TaskItems";
import { Context } from "../main";
import { Navigate } from "react-router-dom";

export const Home = () => {
	const [title, setTitle] = useState("");
	const [description, setDescription] = useState("");
	const [loading, setLoading] = useState(false);
	const [tasks, setTasks] = useState([]);
	const [refresh, setRefresh] = useState(false);
	const { isAuthenticated } = useContext(Context);

	useEffect(() => {
		axios
			.get(`${nodeServer}/task/get`, {
				withCredentials: true,
			})
			.then((res) => {
				setTasks(res.data.tasks);
				// console.log(res.data.tasks);
			})
			.catch((err) => {
				toast.error(err.response.data.message);
			});
	}, [refresh]);

	const updateHandler = async (id) => {
		try {
			const { data } = await axios.put(
				`${nodeServer}/task/${id}`,
				{},
				{ withCredentials: true }
			);
			setRefresh(!refresh);
			toast.success(data.message);
		} catch (error) {
			toast.error(error.response.data.message);
		}
	};
	const deleteHandler = async (id) => {
		try {
			const { data } = await axios.delete(
				`${nodeServer}/task/${id}`,

				{ withCredentials: true }
			);
			setRefresh(!refresh);
			toast.success(data.message);
		} catch (error) {
			toast.error(error.response.data.message);
		}
	};

	const handleAddTask = async (e) => {
		e.preventDefault();
		setLoading(true);
		try {
			const { data } = await axios.post(
				`${nodeServer}/task/add`,
				{ title, description },
				{
					headers: { "Content-Type": "application/json" },
					withCredentials: true,
				}
			);
			toast.success(data.message);
			setRefresh(!refresh);
			setTitle("");
			setDescription("");
			setLoading(false);
		} catch (err) {
			toast.error(err.response.data.message);
			setLoading(false);
		}
	};

	if (!isAuthenticated) return <Navigate to={"/login"} />;

	return (
		<>
			<div className="py-12">
				{loading ? (
					<LinearProgress />
				) : (
					<div className="container">
						<div className="form-container">
							<form onSubmit={handleAddTask}>
								<input
									type="text"
									name="title"
									placeholder="Title"
									value={title}
									onChange={(e) => {
										setTitle(e.target.value);
									}}
									required
								/>
								<input
									type="text"
									name="description"
									placeholder="Description"
									value={description}
									onChange={(e) => {
										setDescription(e.target.value);
									}}
									required
								/>

								<button disabled={loading} type="submit">
									Add
								</button>
							</form>
						</div>
						<div className="task-container">
							{tasks.map((data) => (
								<TaskItems
									id={data._id}
									key={data._id}
									title={data.title}
									description={data.description}
									isCompleted={data.isCompleted}
									updateHandler={updateHandler}
									deleteHandler={deleteHandler}
								/>
							))}
						</div>
					</div>
				)}
			</div>
		</>
	);
};
