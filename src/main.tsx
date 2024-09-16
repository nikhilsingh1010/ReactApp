import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css"; // Optional, if you have custom styles
import App from "./App"; // Import your App component

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
