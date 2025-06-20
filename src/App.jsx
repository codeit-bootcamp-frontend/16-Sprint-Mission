import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import FreeBoard from "./pages/FreeBoard";
import Market from "./pages/Market";
import Home from "./pages/Home";
function App() {
  return (
    <>
      <BrowserRouter>
        <Header /> {/*메뉴*/}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/freeboard" element={<FreeBoard />} />
          <Route path="/items" element={<Market />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
