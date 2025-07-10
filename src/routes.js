import Layout from "./layouts/Layout";
import MainPage from "./pages/MainPage/MainPage";
import LoginPage from "./pages/LoginPage/LoginPage";
import SignupPage from "./pages/SignupPage/SignupPage";
import ItemsPage from "./pages/ItemsPage/ItemsPage";
import PrivacyPage from "./pages/PrivacyPage/PrivacyPage";
import FaqPage from "./pages/FaqPage/FaqPage";
import AddItemPage from "./pages/AddItemPage/AddItemPage";
import ProductDetailPage from "./pages/ProductDetailPage/ProductDetailPage";

const routes = [
  {
    path: "/",
    element: <Layout />,
    children: [
      { path: "/", element: <MainPage /> },
      { path: "/items", element: <ItemsPage /> },
      { path: "/items/:productId", element: <ProductDetailPage /> },
      { path: "/additem", element: <AddItemPage /> },
      { path: "/privacy", element: <PrivacyPage /> },
      { path: "/faq", element: <FaqPage /> },
    ],
  },
  {
    path: "/login",
    element: <LoginPage />,
  },
  {
    path: "/signup",
    element: <SignupPage />,
  },
];

export default routes;
