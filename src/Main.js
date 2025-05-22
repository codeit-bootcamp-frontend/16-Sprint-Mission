import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App";
import ItemsPage from "./pages/ItemsPage";
import "./css/reset.css";

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
