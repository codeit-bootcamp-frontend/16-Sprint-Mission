import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./components/App";
import ItemsPage from "./pages/ItemsPage";
import BoardPage from "./pages/BoardPage";
import AddItemPage from "./pages/AddItemPage";

const Main = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<ItemsPage />} />
          <Route path="/items" element={<ItemsPage />} />
          <Route path="/board" element={<BoardPage />} />
          <Route path="/addItem" element={<AddItemPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Main;
