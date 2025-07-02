import { Routes, Route } from "react-router-dom";
import { Main } from "./pages/Main";
import Nav from "./components/common/Nav";
import ProductPage from "./pages/ProductPage";
import AddProductPage from "./pages/AddProductPage";
import "./styles/App.css";

function App() {
  return (
    <>
      <Nav />
      <div className="sectionWrapper">
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/items" element={<ProductPage />} />
          <Route path="/additem" element={<AddProductPage />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
