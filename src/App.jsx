import { BrowserRouter, Routes, Route } from "react-router-dom";
import Items from "./pages/items.jsx";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/items" element={<Items />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
