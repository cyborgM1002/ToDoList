import { Home } from "./components/Home";
import { Navbar } from "./components/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ToDoList from "./components/TodoList";
import { Profile } from "./components/Profile";
import { Login } from "./common/Login";
import { Register } from "./common/Register";
import { Toaster } from "react-hot-toast";
function App() {
  return (
    <>
      <BrowserRouter>
        <div className="fixed w-full">
          <Navbar />
        </div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/task" element={<ToDoList />} />
          <Route path="/register" element={<Register />} />
        </Routes>
        <Toaster />
      </BrowserRouter>
    </>
  );
}

export default App;
