import React, { createContext, useState } from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";

export const nodeServer = "http://localhost:3000/api/v1";

export const Context = createContext({ isAuthenticated: false });
const AppWrapper = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  return (
    <>
      <Context.Provider value={{ isAuthenticated, setIsAuthenticated }}>
        <App />
      </Context.Provider>
    </>
  );
};

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AppWrapper />
  </React.StrictMode>
);
