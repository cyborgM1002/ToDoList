import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import { Navbar } from "../../components/navbar/Navbar";
import { Provider } from "react-redux";
import todoStore from "../../redux/todoStore";
import { Login } from "../../components/login/Login";
import { Profile } from "../../components/profile/Profile";
import { Register } from "../../components/register/Register";
import TodoHome from "../home/TodoHome";

const Layout = () => {
  return (
    <Provider store={todoStore}>
      <BrowserRouter>
        <div className="fixed w-full">
          <Navbar />
        </div>
        <Routes>
          <Route path="/" element={<TodoHome />} />
          <Route path="/login" element={<Login />} />
          <Route path="/profile" element={<Profile />} />
          {/* <Route path="/task" element={<ToDoList />} /> */}
          <Route path="/register" element={<Register />} />
        </Routes>
        <Toaster />
      </BrowserRouter>
    </Provider>
  );
};

export default Layout;
