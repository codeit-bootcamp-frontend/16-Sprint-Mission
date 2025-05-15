import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home/Home';
import Login from './pages/Auth/Login';
import Signup from './pages/Auth/Signup';
import Items from './pages/Items/Items';
import Privacy from './pages/Privacy/Privacy';
import Faq from './pages/Faq/Faq';
import AddItem from './pages/AddItem/AddItem';
import { LoginStateProvider } from './contexts/LoginStateContext';
import Board from './pages/Board/Board';

function App() {
  return (
    <BrowserRouter>
      <LoginStateProvider>
        <Routes>
          <Route path="/">
            <Route index element={<Home />} />
            <Route path="items" element={<Items />} />
            <Route path="board" element={<Board />} />
            <Route path="additem" element={<AddItem />} />
            <Route path="privacy" element={<Privacy />} />
            <Route path="faq" element={<Faq />} />
          </Route>
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
        </Routes>
      </LoginStateProvider>
    </BrowserRouter>
  );
}

export default App;
