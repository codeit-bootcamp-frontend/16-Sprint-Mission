import { createBrowserRouter, RouterProvider } from "react-router-dom";
import routes from "./routes";
import "./styles/style.scss";
import ToastContainer from "./components/Toast/ToastContainer";
import { Global } from "@emotion/react";
import { globalStyle } from "./styles/globalStyle";

function App() {
  const router = createBrowserRouter(routes, {
    future: {
      v7_relativeSplatPath: true,
    },
  });
  return (
    <>
      <Global styles={globalStyle} />
      <RouterProvider router={router} future={{ v7_startTransition: true }} />
      <ToastContainer />
    </>
  );
}

export default App;
