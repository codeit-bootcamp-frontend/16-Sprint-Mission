import { Route, Routes } from "react-router-dom";
import "./App.css";
import Root from "./pages/root.jsx";
import Login from "./pages/login.jsx";
import Register from "./pages/register.jsx";
import Items from "./pages/items.jsx";
import AddItem from "./pages/additem.jsx";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Root />} />
        <Route path="/items" element={<Items />} />
        <Route path="/additem" element={<AddItem />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </>
  );
}

export default App;
