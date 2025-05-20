import { Route, Routes } from 'react-router-dom';
import './App.css';
import Root from './pages/root';
import Login from './pages/login';

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Root />} />
        <Route path='/items' element={<Root />} />
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Root />} />
      </Routes>
    </>
  );
}

export default App;
