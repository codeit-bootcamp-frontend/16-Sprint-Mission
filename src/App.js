import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Items from "./pages/Items";
import DefaultLayout from "./layouts/DefaultLayout";
import "pretendard/dist/web/static/pretendard.css";
import "./styles/global.css";
import Additem from "./pages/Additem";

function App() {

  return (
    <div className="app">
      <Routes>
        <Route element={<DefaultLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/items" element={<Items />} />
          <Route path="/additem" element={<Additem />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
