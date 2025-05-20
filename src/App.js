import BestProductList  from "./components/BestProductList";
import ProductList from "./components/ProductList";
import './components/css/App.css'

function App() {
  return (
    <div className="bg">
      <BestProductList/>
      <ProductList/>
    </div>
  );
}

export default App;