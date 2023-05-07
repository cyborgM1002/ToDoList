import React from "react";

const TaskItems = ({
	title,
	description,
	isCompleted,
	updateHandler,
	deleteHandler,
	id,
}) => {
	return (
		<>
			<div>
				<h1>{title}</h1>
				<h4>{description}</h4>
			</div>
			<div>
				<input
					type="checkbox"
					onChange={() => updateHandler(id)}
					checked={isCompleted}
				/>
				<button onClick={() => deleteHandler(id)}>Delete</button>
			</div>
		</>
	);
};

export default TaskItems;
