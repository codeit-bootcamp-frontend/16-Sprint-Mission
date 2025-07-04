import { Routes, Route } from "react-router-dom";
import "pretendard/dist/web/static/pretendard.css";
import "./styles/global.css";
import Home from "./pages/home/Home.tsx";
import DefaultLayout from "./layouts/DefaultLayout";
import Additem from "./pages/additem/Additem.js";
import Items from "./pages/Items/Items.js";
import ItemsDetail from "./pages/ItemsDetail/ItemsDetail.js";
import Login from "./pages/login/Login";
import SignUp from "./pages/signUp/SignUp";

function App() {
  return (
    <div className="app">
      <Routes>
        <Route element={<DefaultLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/items" element={<Items />} />
          <Route path="/items/:productId" element={<ItemsDetail />} />
          <Route path="/additem" element={<Additem />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
