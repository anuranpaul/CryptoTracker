import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { ThemeProvider } from "./Contaxt/themeContext.jsx";
//import Cursor from "./Components/Common/Cursor/Cursor.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ThemeProvider>
    
      <App />
    </ThemeProvider>
    <ToastContainer />
  </React.StrictMode>
);
