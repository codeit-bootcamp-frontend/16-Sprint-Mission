import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import Items from "./pages/Items/Items";
import Header from "./components/Header/Header";
import "./styles/reset.css";
import "./styles/global.css";
import "./App.css";
import Login from "./pages/Auth/Login";
import SignUp from "./pages/Auth/SignUp";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Header />}>
          <Route path="/" element={<Home />}></Route>
          <Route path="/items" element={<Items />}></Route>
        </Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/sign_up" element={<SignUp />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
