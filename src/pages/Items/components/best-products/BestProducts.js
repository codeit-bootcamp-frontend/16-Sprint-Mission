import { useEffect, useState } from "react";
import { fetchProducts } from "../../../../api/products";
import { getLimitFromWindowWidth } from "../../../../utils/getLimitFromWindowWidth";
import ProductSection from "../product-section/ProductSection";

function BestProducts({ title, itemsPerDevice }) {
  const [bestProducts, setBestProducts] = useState([]);

  useEffect(() => {
    const updateProducts = async () => {
      const data = await fetchProducts();
      const sorted = data.sort((a, b) => b.favoriteCount - a.favoriteCount);
      const limit = getLimitFromWindowWidth(
        itemsPerDevice.desktop,
        itemsPerDevice.tablet,
        itemsPerDevice.mobile
      );
      setBestProducts(sorted.slice(0, limit));
    };

    updateProducts();
    const resizeHandler = () => updateProducts();
    window.addEventListener("resize", resizeHandler);

    return () => window.removeEventListener("resize", resizeHandler);
  }, [itemsPerDevice]);

  return <ProductSection title={title} products={bestProducts} />;
}

export default BestProducts;
