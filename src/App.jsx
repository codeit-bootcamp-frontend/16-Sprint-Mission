import "./App.css";
import { Routes, Route } from "react-router-dom";
import Items from "./pages/Items";
import AddItem from "./pages/AddItem";
import Notfound from "./pages/Notfound";

function App() {
  return (
    <>
      <Routes>
        <Route path="/items" element={<Items />}></Route>
        <Route path="/additem" element={<AddItem />}></Route>
        <Route path="*" element={<Notfound />}></Route>
      </Routes>
    </>
  );
}

export default App;
