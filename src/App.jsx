import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Items from './Pages/Items/Items.jsx';
import AddItem from './Pages/AddItem/AddItem.jsx';

import './App.css'

function App() {
  return (
    <BrowserRouter>
        <Routes>
          <Route path="/" element={<Items />} />
          <Route path='additem' element={<AddItem />}/>
        </Routes>
    </BrowserRouter>
  );
}

export default App