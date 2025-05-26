import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App";
import "./css/base/reset.css";
import "./css/base/variables.css";
import "./css/base/common.css";
import ItemsPage from "./pages/ItemsPage";
import ItemRegisterPage from "./pages/ItemRegisterPage";

function Main() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route path="items">
            <Route index element={<ItemsPage />}></Route>
            <Route path="addItem" element={<ItemRegisterPage />}></Route>
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default Main;
