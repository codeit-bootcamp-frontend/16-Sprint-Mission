import { BrowserRouter, Routes, Route } from 'react-router-dom'
import "./App.css";
import Navbar from "./components/Navbar";
import HomePage from './pages/HomePage';
import ItemsPage from './pages/ItemsPage';
import AddItemPage from './pages/AddItemPage';


function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path='/' element={<HomePage/>}/>
        <Route path='/item' element={<ItemsPage />}/>
        <Route path='/additem' element={<AddItemPage />}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
