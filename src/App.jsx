import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Items from "./pages/Items";
import Header from "./components/Header";
import "./styles/reset.css";
import "./styles/global.css";
import "./App.css";
import Login from "./pages/Login";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Header></Header>}>
          <Route path="/" element={<Home></Home>}></Route>
          <Route path="items" element={<Items></Items>}></Route>
        </Route>
        <Route path="login" element={<Login />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
