import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

/*
  This is the point of entry into the DOM, the React object is injected into the DOM
    at the <div> with id 'root' in index.html.
*/
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
