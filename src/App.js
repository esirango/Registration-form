import React from "react";
import SignUp from "./components/SignUp";
import "./App.css";
import Login from "./components/Login";
import { Navigate, Route, Routes } from "react-router-dom";

const App = () => {
  return (
    <div className="main">
      <Routes>
        <Route path="/signin" element={<SignUp />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/" element={<Navigate to="/signin" />} />
      </Routes>
    </div>
  );
};

export default App;
