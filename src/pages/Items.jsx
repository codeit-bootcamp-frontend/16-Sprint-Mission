import ProductsFavorite from "../components/ProductsFavorite";
import ProductsAll from "../components/ProductsAll";
import ProductAllContextProvider from "../context/ProductAllContext";
import "../styles/item.css";

function Items() {
  return (
    <main className="items">
      <div className="items__container">
        <ProductsFavorite></ProductsFavorite>
        <ProductAllContextProvider>
          <ProductsAll></ProductsAll>
        </ProductAllContextProvider>
      </div>
    </main>
  );
}

export default Items;
