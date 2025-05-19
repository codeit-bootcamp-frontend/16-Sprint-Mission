import styles from "./BestProducts.module.css";
import useBestProducts from "../../hooks/useBestProducts";
import ProductSection from "../ProductSection/ProductSection";

function BestProducts({ title, itemsPerDevice }) {
 
  const bestProducts = useBestProducts(itemsPerDevice);

return <ProductSection title={title} products={bestProducts} />;
}

export default BestProducts;
