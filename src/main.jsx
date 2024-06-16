import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./index.css";

import App from "./App.jsx";
import Success from "./Success.jsx";


ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    {/* <App /> */}
    <Router>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/final" element={<Success />} />
      </Routes>
    </Router>
  </React.StrictMode>
);
