import { createBrowserRouter, RouterProvider } from "react-router-dom";
import routes from "./routes";
import "./styles/style.scss";
import ToastContainer from "./components/Toast/ToastContainer";
import { Global, ThemeProvider } from "@emotion/react";
import { globalStyle } from "./styles/globalStyle";
import { theme } from "@styles/theme";

function App() {
  const router = createBrowserRouter(routes, {
    future: {
      v7_relativeSplatPath: true,
    },
  });
  return (
    <>
      <ThemeProvider theme={theme}>
        <Global styles={globalStyle(theme)} />
        <RouterProvider router={router} future={{ v7_startTransition: true }} />
        <ToastContainer />
      </ThemeProvider>
    </>
  );
}

export default App;
