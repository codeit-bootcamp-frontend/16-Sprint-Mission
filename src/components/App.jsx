import { Outlet } from "react-router-dom";
import styles from "./App.module.css";
import Header from "./Header";

function App() {
  return (
    <>
      <Header />
      <Outlet />
    </>
  );
}

export default App;
