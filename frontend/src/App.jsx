import React from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import Home from "./pages/Home/index";
import Login from "./pages/Login";
import Register from "./pages/Register";
import { Protector, userData } from "./helper";
import Logout from "./pages/Logout";
import PersonalCabinet from "./pages/PersonalCabinet/index";

function App() {
  const { jwt } = userData();
  return (
    <div className="app">
      <Header jwt={jwt} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/logout" element={<Logout />} />
        <Route path="/personal-cabinet" element={<PersonalCabinet />} />
      </Routes>
    </div>
  );
}

export default App;
