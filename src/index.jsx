import React from "react";
import ReactDOM from "react-dom/client";
import CareerBoostHome from "./CareerBoostHome";
import "./index.css"; // Optional if you’re using Tailwind or other global styles

const rootElement = document.getElementById("root");

if (!rootElement) {
  throw new Error("No root element found. Make sure your index.html has a <div id='root'></div>.");
}

const root = ReactDOM.createRoot(rootElement);

root.render(
  <React.StrictMode>
    <CareerBoostHome />
  </React.StrictMode>
);
