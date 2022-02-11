import { Button } from "./components";
import React from "react";
import ReactDOM from "react-dom";
import "./index.css";

export const App = () => {
  return <div>Button</div>;
};

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
