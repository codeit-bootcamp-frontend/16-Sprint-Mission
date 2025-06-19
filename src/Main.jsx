import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App";
import "../src/components/css/reset.css";
import "../src/components/css/common.css";
import "../src/components/css/font.css";

function Main() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/items" element={<App />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Main;
