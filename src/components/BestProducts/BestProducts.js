import useBestProducts from "../../hooks/useBestProducts";
import ProductSection from "../ProductSection/ProductSection";

function BestProducts({ title, itemsPerDevice }) {
 
  const bestProducts = useBestProducts(itemsPerDevice);

return <ProductSection title={title} products={bestProducts} productCardSize="best" />;
}

export default BestProducts;
