import axios from "axios";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import "./components/App.css";
import Navi from "./components/Navi.jsx";
import ItemsMarket from "./pages/ItemsMarket.jsx";
import "./components/Product-toolbar.css";
import "./components/ProductList.jsx";
import "./components/AllItemSection.css";
import Main from "./pages/Main";

function App() {
  return (
    <BrowserRouter>
      <Navi style={{ paddingTop: "80px" }} />
      <Routes>
        <Route path="/" element={<Navigate to="/main" replace />} />
        <Route path="/main" element={<Main />} />
        <Route path="/items" element={<ItemsMarket />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
