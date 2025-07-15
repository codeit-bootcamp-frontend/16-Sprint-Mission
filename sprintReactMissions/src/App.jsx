import axios from "axios";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import "./styles/App.css";
import Navi from "./components/Navi.jsx";
import ItemsMarket from "./pages/ItemsMarket.jsx";
import "./styles/Product-toolbar.css";
import "./components/ProductList.jsx";
import "./styles/AllItemSection.css";
import Main from "./pages/Main";
import AddItemPage from "./pages/AddItemPage.jsx";

function App() {
  return (
    <BrowserRouter>
      <Navi style={{ paddingTop: "80px" }} />
      <Routes>
        <Route path="/" element={<Navigate to="/main" replace />} />
        <Route path="/main" element={<Main />} />
        <Route path="/items" element={<ItemsMarket />} />
        <Route path="/additem" element={<AddItemPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
