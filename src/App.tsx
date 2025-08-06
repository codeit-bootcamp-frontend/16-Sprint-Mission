import { BrowserRouter, Routes, Route } from "react-router-dom";
import Nav from "./layouts/Nav";
import ItemsPage from "./pages/ItemsPage/ItemsPage";
import AddItemPage from "./pages/AddItemPage/AddItemPage";
import ItemDetialsPage from "./pages/ItemDetailsPage/ItemDetailsPage";
import MainPage from "./pages/MainPage/MainPage";
import LoginPage from "./pages/Login_SignupPage/LoginPage";
import SignupPage from "./pages/Login_SignupPage/SignupPage";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Nav />}>
          <Route path="/" element={<MainPage />} />
          <Route path="/items" element={<ItemsPage />} />
          <Route path="/additem" element={<AddItemPage />} />
          <Route path="/items/:productId" element={<ItemDetialsPage />} />
        </Route>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignupPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
