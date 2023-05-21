import React from "react";
import { MdEdit } from "react-icons/md";

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
			<div className="w-full bg-white rounded-lg mb-3 shadow dark:border md:mt-0 sm:max-w-md dark:bg-gray-800 dark:border-gray-700">
				<div className="dark:bg-gray-800 hover:dark:bg-gray-600 break-all text-xl min-h-[56px] flex items-center justify-between px-2 rounded-lg">
					<div className="flex justify-start items-center w-[65%]">
						<h1 className="block capitalize mx-2 text-base font-medium text-gray-900 dark:text-white">
							{title} :
						</h1>
						<h4 className="block capitalize text-sm font-medium text-gray-900 dark:text-white/[0.7]">
							{description ? description.slice(0, 50) : ""}
						</h4>
					</div>
					<div className="w-[35%] gap-3 sm:gap-4 flex justify-evenly items-center">
						<input
							className="sm:w-[20px] sm:h-[20px] w-[15px] h-[15px]"
							type="checkbox"
							onChange={() => updateHandler(id)}
							checked={isCompleted}
						/>
						{/* <MdEdit className="sm:text-2xl text-xl text-white" /> */}
						<button
							className=" dark:bg-gray-800 text-xs sm:text-sm md:text-[15px] sm:px-3 px-2 py-1 bg-gray-800 rounded-xl hover:dark:bg-red-800 shadow dark:border text-white/[0.9] "
							onClick={() => deleteHandler(id)}
						>
							Delete
						</button>
					</div>
				</div>
			</div>
		</>
	);
};

export default TaskItems;
