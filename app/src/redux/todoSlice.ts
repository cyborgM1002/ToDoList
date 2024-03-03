import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isAuthenticated: false,
  loading: false,
};

const todoSlice = createSlice({
  name: "todoSlice",
  initialState,
  reducers: {
    setIsAuthenticated: (state, action) => {
      state.isAuthenticated = action.payload;
    },
    setLoading: (state, action) => {
      state.loading = action.payload;
    },
  },
});

export const { setIsAuthenticated, setLoading } = todoSlice.actions;
export default todoSlice.reducer;
