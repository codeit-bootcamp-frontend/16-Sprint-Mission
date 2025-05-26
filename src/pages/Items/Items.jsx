import ProductsFavorite from "./ProductsFavorite";
import ProductsAll from "./ProductsAll";
import ProductAllContextProvider from "@context/ProductAllContext";
import "@styles/item.css";

function Items() {
  return (
    <main className="items">
      <div className="items__container">
        <ProductsFavorite />
        <ProductAllContextProvider>
          <ProductsAll />
        </ProductAllContextProvider>
      </div>
    </main>
  );
}

export default Items;
