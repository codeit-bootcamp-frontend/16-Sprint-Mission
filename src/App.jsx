import { BrowserRouter, Routes, Route } from "react-router-dom";
import { LoginProvider } from "./contexts/LoginContext";
import HomePage from "./pages/HomePage/HomePage";
import LoginPage from "./pages/AuthPage/LoginPage";
import SignupPage from "./pages/AuthPage/SignupPage";
import ItemsPage from "./pages/ItemsPage/ItemsPage";
import AddItemPage from "./pages/AddItemPage/AddItemPage";
import PrivacyPage from "./pages/PrivacyPage/PrivacyPage";
import FaqPage from "./pages/FaqPage/FaqPage";
import BoardPage from "./pages/BoardPage/BoardPage";
import ItemDetailsPage from "./pages/ItemDetailsPage/ItemDetailsPage";

function App() {
  return (
    <BrowserRouter>
      <LoginProvider>
        <Routes>
          <Route path="/">
            <Route index element={<HomePage />} />
            <Route path="items">
              <Route index element={<ItemsPage />} />
              <Route path=":itemId" element={<ItemDetailsPage />} />
            </Route>
            <Route path="board" element={<BoardPage />} />
            <Route path="additem" element={<AddItemPage />} />
            <Route path="privacy" element={<PrivacyPage />} />
            <Route path="faq" element={<FaqPage />} />
          </Route>
          <Route path="/login" element={<LoginPage />} />
          <Route path="/signup" element={<SignupPage />} />
        </Routes>
      </LoginProvider>
    </BrowserRouter>
  );
}

export default App;
