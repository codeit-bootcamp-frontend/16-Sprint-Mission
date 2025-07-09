import { Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Products from "./components/Products";
import PandaMarketPage from "./components/PandaMarketPage";
import Login from "./components/Login";
import Signup from "./components/Signup";
import Faq from "./components/Faq";
import AddItem from "./components/AddItem";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route
          path="/"
          element={<PandaMarketPage />} // 메인 페이지
        />
        <Route path="/items" element={<Products />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/faq" element={<Faq />} />
        <Route path="/additem" element={<AddItem />} />
      </Routes>
    </>
  );
}

export default App;
