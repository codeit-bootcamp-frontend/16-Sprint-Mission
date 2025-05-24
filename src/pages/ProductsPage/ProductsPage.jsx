import "./Products.css";
import BestItemsSection from "./BestItemsSection";
import AllItemsSection from "./AllItemsSection";

function ProductPage() {
  return (
    <>
      <div className="productsWrapper">
        <BestItemsSection />
        <AllItemsSection />
      </div>
      <footer></footer>
    </>
  );
}

export default ProductPage;
