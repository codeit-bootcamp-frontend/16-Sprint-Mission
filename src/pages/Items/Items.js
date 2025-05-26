import style from "./Items.module.css"
import BestProducts from "./components/best-products/BestProducts";
import AllProducts from "./components/all-products/AllProducts";
import { BEST_PRODUCTS_PER_DEVICE,ALL_PRODUCTS_PER_DEVICE } from "../../constants/products";
import { TITLE_ALL_PRODUCTS_COMP,TITLE_BEST_PRODUCTS_COMP } from "../../constants/titles";
function Items() {
  return (
    <div className={style.container}>
      <BestProducts title={TITLE_BEST_PRODUCTS_COMP} itemsPerDevice={BEST_PRODUCTS_PER_DEVICE} />
      <AllProducts title={TITLE_ALL_PRODUCTS_COMP} itemsPerDevice={ALL_PRODUCTS_PER_DEVICE} />
    </div>
  );
}

export default Items;
