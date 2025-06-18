import { Outlet } from "react-router-dom";

const ProductsLayout = () => {
  return <div className="products-page">{<Outlet />}</div>;
};

export default ProductsLayout;
