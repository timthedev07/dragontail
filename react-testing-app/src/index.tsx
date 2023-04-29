import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { DragontailProvider, ToastProvider } from "dragontail-experimental";
import "dragontail-experimental/dist/build.css";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <DragontailProvider theme="dark">
      <ToastProvider>
        <App />
      </ToastProvider>
    </DragontailProvider>
  </React.StrictMode>
);
