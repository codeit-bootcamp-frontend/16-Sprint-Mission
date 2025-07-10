import { createBrowserRouter, RouterProvider } from "react-router-dom";
import routes from "./routes";
import "./styles/style.scss";
import ToastContainer from "./components/Toast/ToastContainer";

function App() {
  const router = createBrowserRouter(routes, {
    future: {
      v7_relativeSplatPath: true,
    },
  });
  return (
    <>
      <RouterProvider router={router} future={{ v7_startTransition: true }} />
      <ToastContainer />
    </>
  );
}

export default App;
