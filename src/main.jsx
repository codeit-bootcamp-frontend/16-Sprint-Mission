import { createRoot } from "react-dom/client";
import "./index.css";
import "./styles/reset.css";
import "./styles/colors.css";
import "./styles/font.css";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";

createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);
