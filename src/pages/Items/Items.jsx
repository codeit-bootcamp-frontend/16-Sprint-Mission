import ProductsFavorite from "./ProductsFavorite";
import ProductsAll from "./ProductsAll";
import ProductDataProvider from "./ProductDataProvider";
import "@styles/item.css";

function Items() {
  return (
    <main className="items">
      <div className="items__container">
        <ProductsFavorite />
        <ProductDataProvider>
          <ProductsAll />
        </ProductDataProvider>
      </div>
    </main>
  );
}

export default Items;
