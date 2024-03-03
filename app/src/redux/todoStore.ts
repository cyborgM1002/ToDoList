import { configureStore } from "@reduxjs/toolkit";
import todoSlice from "./todoSlice";

const todoStore = configureStore({
  reducer: todoSlice,
});

export default todoStore;
