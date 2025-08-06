import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App";
import "./css/base/reset.css";
import "./css/base/variables.css";
import "./css/base/common.css";
import ItemsPage from "./pages/ItemsPage";
import ItemRegisterPage from "./pages/ItemRegisterPage";
import ItemDetailPage from "./pages/ItemDetailPage";
import HomePage from "./pages/HomePage";
import SignupPage from "./pages/SignupPage";
import LoginPage from "./pages/LoginPage";

const Main = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<HomePage />} />
          <Route path="items">
            <Route path=":id" element={<ItemDetailPage />}></Route>
            <Route index element={<ItemsPage />}></Route>
          </Route>
          <Route path="additem" element={<ItemRegisterPage />}></Route>
          <Route path="signup" element={<SignupPage />}></Route>
          <Route path="login" element={<LoginPage />}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Main;
