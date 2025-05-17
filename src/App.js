import { createBrowserRouter, RouterProvider } from "react-router-dom";
import routes from "./routes";
import "./styles/_style.scss";

function App() {
  const router = createBrowserRouter(routes, {
    future: {
      v7_relativeSplatPath: true,
    },
  });
  return (
    <RouterProvider router={router} future={{ v7_startTransition: true }} />
  );
}

export default App;
