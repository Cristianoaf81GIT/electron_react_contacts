import React from "react";
import ThemeProvider from "@mui/material/styles/ThemeProvider";
import ReactDOM from "react-dom";
import "./styles/index.css";
import App from "./App";
import "@fontsource/roboto";
import { main } from "./styles/themes/main";
import { Provider } from "react-redux";
import { store } from "./store";

ReactDOM.render(
  <Provider store={store}>
    <ThemeProvider theme={main}>
      <App />
    </ThemeProvider>
  </Provider>,
  document.getElementById("root")
);
