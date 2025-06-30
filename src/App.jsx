import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Items from './Pages/Items/Items.jsx';
import AddItem from './Pages/AddItem/AddItem.jsx';
import Product from './Pages/Product/Product.jsx';

import './App.css'

function App() {
  return (
    <BrowserRouter>
        <Routes>
          <Route path="/" element={<Items />} />
          <Route path='additem' element={<AddItem />}/>
          <Route path='items/:id' element={<Product />}/>
        </Routes>
    </BrowserRouter>
  );
}

export default App