import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App";
import ItemsPage from "./pages/ItemsPage";
import "./css/base/reset.css";
import "./css/base/variables.css";
import "./css/base/common.css";

function Main() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route path="items" element={<ItemsPage />}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default Main;
