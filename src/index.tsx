import React from "react";
import ReactDOM from "react-dom/client";
import { AuthContextProvider } from "./store/auth-context";
import { transitions, positions, Provider as AlertProvider } from "react-alert";
import AlertTemplate from "./components/React-Alert-Template/index";
import "./index.css";
import App from "./App";
// Bootstrap CSS
import "bootstrap/dist/css/bootstrap.min.css";
// Bootstrap Bundle JS
import "bootstrap/dist/js/bootstrap.bundle.min";

// optional configuration
const options = {
  // you can also just use 'bottom center'
  position: positions.BOTTOM_CENTER,
  timeout: 1000,
  offset: "100px",
  containerStyle: {
    zIndex: 100,
  },
  // you can also just use 'scale'
  transition: transitions.SCALE,
};
const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

root.render(
  <AlertProvider template={AlertTemplate} {...options}>
    <AuthContextProvider>
      <App />
    </AuthContextProvider>
  </AlertProvider>
);
