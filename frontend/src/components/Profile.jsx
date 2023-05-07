import React, { useContext } from "react";
import { Context } from "../main";
import LinearProgress from "@mui/material/LinearProgress";

export const Profile = () => {
	const { loading, user } = useContext(Context);
	return (
		<div className="pt-12">
			{loading ? (
				<LinearProgress />
			) : (
				<div>
					<h1>{user.name} </h1>
					<h3>{user.email}</h3>
				</div>
			)}
		</div>
	);
};
