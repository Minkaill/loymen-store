import React from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import Home from "./pages/Home/index";
import Login from "./pages/Login";
import Register from "./pages/Register";
import { Protector, userData } from "./helper";

function App() {
  return (
    <div className="app">
      <Header />
      <Routes>
        <Route path="/" element={<Protector Component={<Home />} />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </div>
  );
}

export default App;
