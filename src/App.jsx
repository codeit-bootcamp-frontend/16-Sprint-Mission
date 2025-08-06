import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Header from './components/Header';
import AddItem from './pages/AddItem';
import FreeBoard from './pages/FreeBoard';
import Home from './pages/Home';
import Market from './pages/Market';
function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/freeboard' element={<FreeBoard />} />
          <Route path='/items' element={<Market />} />
          <Route path='/addItem' element={<AddItem />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
