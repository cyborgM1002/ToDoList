import { CgMenu, CgClose } from "react-icons/cg";
import { useContext, useState } from "react";
import { FcTodoList } from "react-icons/fc";
import { Link, Navigate } from "react-router-dom";
import { Context } from "../main";
import axios from "axios";
import { nodeServer } from "../main";
import { toast } from "react-hot-toast";
// import { RiFileList3Line } from "react-icons/ri";

export const Navbar = () => {
	const [openMenu, setOpenMenu] = useState(false);
	const { isAuthenticated, setIsAuthenticated, loading, setLoading } =
		useContext(Context);
	const handleLogout = async () => {
		setLoading(true);
		try {
			await axios.get(`${nodeServer}/users/logout`, { withCredentials: true });
			toast.success("Logged Out Successfully");
			setIsAuthenticated(false);
			setLoading(false);
		} catch (err) {
			toast.error(err.response.data.message);
			setIsAuthenticated(true);
			setLoading(false);
		}
	};
	return (
		<>
			<div className="flex dark:bg-gray-800 w-full h-12 justify-between items-center">
				<div className="text-3xl flex text-white font-bold pl-4 my-3">
					{/* <RiFileList3Line className="text-white text-[2rem] m-2" /> */}
					<FcTodoList className="text-white text-[2rem] m-2" />
					<h1 className="m-auto font-bold tracking-wider rounded-lg text-center text-white ">
						TickTick
					</h1>
				</div>
				<ul className="hidden md:flex gap-5 text-white text-lg pr-4 ">
					<Link to={"/"} className="cursor-pointer">
						Home
					</Link>
					<Link to={"/task"} className="cursor-pointer ">
						Tasks
					</Link>
					{isAuthenticated ? (
						<Link to={"/profile"} className="cursor-pointer">
							Profile
						</Link>
					) : (
						""
					)}
					{isAuthenticated ? (
						<button disabled={loading} onClick={handleLogout}>
							Logout
						</button>
					) : (
						<Link to={"/login"} className="cursor-pointer">
							Login
						</Link>
					)}
				</ul>
				{openMenu ? (
					<CgClose
						className="md:hidden text-white text-[2.5rem] pr-4 z-50 duration-200"
						onClick={() => {
							setOpenMenu(!openMenu);
						}}
					/>
				) : (
					<CgMenu
						className="md:hidden text-white text-[2.5rem] pr-4 z-50 duration-200"
						onClick={() => {
							setOpenMenu(!openMenu);
						}}
					/>
				)}
				<ul
					className={`md:hidden top-12 text-white bg-black h-screen w-full p-4 text-xl fixed ${
						openMenu ? "left-[0]" : "left-[-100%]"
					} duration-500`}
				>
					<Link to={"/"} className="cursor-pointer p-4">
						Home
					</Link>
					<Link to={"/task"} className="cursor-pointer p-4 ">
						Tasks
					</Link>
					<Link to={"/profile"} className="cursor-pointer p-4">
						Profile
					</Link>
					<Link to={"/login"} className="cursor-pointer p-4">
						Login
					</Link>
				</ul>
			</div>
		</>
	);
};
