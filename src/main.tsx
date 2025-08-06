import { createRoot } from "react-dom/client";
import "../public/common.css";
import "./index.css";
import App from "./App.jsx";

createRoot(document.getElementById("root") as HTMLElement).render(<App />);
