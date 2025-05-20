import { Route, Routes } from 'react-router-dom';
import './App.css';
import Root from './pages/root';
import Login from './pages/login';
import Register from './pages/register';

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Root />} />
        <Route path='/items' element={<Root />} />
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />
      </Routes>
    </>
  );
}

export default App;
