import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Items from './Pages/Items/Items.jsx';

function App() {
  return (
    <BrowserRouter>
        <Routes>
          <Route path="/" element={<Items />} />
        </Routes>
    </BrowserRouter>
  );
}

export default App