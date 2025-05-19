import ProductsFavorite from "../components/ProductsFavorite";
import ProductsAll from "../components/ProductsAll";
import "../styles/item.css";
import ProductAllContextProvider from "../context/ProductAllContext";

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
