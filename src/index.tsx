import React from "react";
import ThemeProvider from "@mui/material/styles/ThemeProvider";
import ReactDOM from "react-dom";
import "./styles/index.css";
import App from "./App";
import "@fontsource/roboto";
import { main } from "./styles/themes/main";

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={main}>
      <App />
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
