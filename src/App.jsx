import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header/Header';
import AddItem from './pages/AddItem/AddItem';
import Login from './pages/Auth/Login/Login';
import SignUp from './pages/Auth/SignUp/SignUp';
import Home from './pages/Home/Home';
import Items from './pages/Items/Items';
import ProductDetail from './pages/ProductDetail/ProductDetail';
import './styles/reset.css';
import './styles/global.css';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Header />}>
          <Route path="/" element={<Home />} />
          <Route path="/items" element={<Items />} />
          <Route path="/items/:id" element={<ProductDetail />} />
          <Route path="/additem" element={<AddItem />} />
        </Route>
        <Route path="/login" element={<Login />} />
        <Route path="/sign_up" element={<SignUp />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
