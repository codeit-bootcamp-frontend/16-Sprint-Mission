import Nav from "./components/Nav";
import BestProductList  from "./components/BestProductList";
import ProductList from "./components/ProductList";
import './components/css/App.css'

function App() {
  return (
    <>
      <Nav />
      <div className="Products__warp">
        <BestProductList/>
        <ProductList/>
      </div>
    </>
  );
}

export default App;