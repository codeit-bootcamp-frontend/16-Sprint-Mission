import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home/Home';
import Login from './pages/Auth/Login';
import Signup from './pages/Auth/Signup';
import Items from './pages/Items/Items';
import Privacy from './pages/Privacy/Privacy';
import Faq from './pages/Faq/Faq';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/items" element={<Items />} />
        <Route path="/privacy" element={<Privacy />} />
        <Route path="/faq" element={<Faq />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
