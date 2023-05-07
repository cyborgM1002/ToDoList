import React, { useContext, useState } from "react";
import { Link, Navigate } from "react-router-dom";
import { Context, nodeServer } from "../main";
import { toast } from "react-hot-toast";
import axios from "axios";

export const Login = () => {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const { isAuthenticated, setIsAuthenticated, loading, setLoading } =
		useContext(Context);

	const handleSubmit = async (e) => {
		e.preventDefault();
		setLoading(true);
		try {
			const { data } = await axios.post(
				`${nodeServer}/users/login`,
				{ email, password },
				{
					headers: { "Content-Type": "application/json" },
					withCredentials: true,
				}
			);
			toast.success(data.message);
			setIsAuthenticated(true);
			setLoading(false);
		} catch (err) {
			toast.error(err.response.data.message);
			setIsAuthenticated(false);
			setLoading(false);
		}
	};

	if (isAuthenticated) return <Navigate to={"/"} />;
	return (
		<div className="py-14">
			<form onSubmit={handleSubmit}>
				<input
					type="email"
					name="email"
					placeholder="Enter your email"
					value={email}
					onChange={(e) => {
						setEmail(e.target.value);
					}}
					required
				/>
				<input
					type="password"
					name="password"
					placeholder="Enter your password"
					value={password}
					onChange={(e) => {
						setPassword(e.target.value);
					}}
					required
				/>
				{/* <input type="submit" value="Log-In" /> */}
				<button disabled={loading} type="submit">
					Log-In
				</button>
				<h1>Or</h1>
				<Link to="/register">Sign-Up</Link>
			</form>
		</div>
	);
};
