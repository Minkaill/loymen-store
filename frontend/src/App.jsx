import React from "react";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Home from "./pages/Home/index";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Logout from "./pages/Logout";
import PersonalCabinet from "./pages/PersonalCabinet/index";
import FullCategory from "./pages/FullCategory";
import Cart from "./pages/Cart";
import FullProduct from "./pages/FullProduct";
import Favorite from "./pages/Favorite";
import Catalog from "./pages/Catalog/index";

function App() {
  return (
    <div className="app">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/logout" element={<Logout />} />
        <Route path="/personal-cabinet" element={<PersonalCabinet />} />
        <Route path="/category/:id" element={<FullCategory />} />
        <Route path="/category/product/:id" element={<FullProduct />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/favorite" element={<Favorite />} />
        <Route path="/catalog" element={<Catalog />} />
      </Routes>
    </div>
  );
}

export default App;
