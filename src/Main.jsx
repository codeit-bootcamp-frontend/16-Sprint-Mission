import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./components/App";
import HomePage from "./pages/HomePage";
import ItemsPage from "./pages/ItemsPage";
import BoardPage from "./pages/BoardPage";

const Main = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<HomePage />} />
          <Route path="/items" element={<ItemsPage />} />
          <Route path="/board" element={<BoardPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Main;
