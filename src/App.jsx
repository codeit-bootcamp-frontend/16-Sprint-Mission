import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import "./styles/reset.css";
import "./styles/global.css";
import "./App.css";
import Home from "./pages/Home";
import Items from "./pages/Items";
import Header from "./components/Header";

function App() {
  return (
    <div className="page-wrapper">
      <BrowserRouter>
        <Header></Header>
        <Routes>
          <Route path="/" element={<Home></Home>}></Route>
          <Route path="/items" element={<Items></Items>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
