import BestProducts from "../components/BestProducts/BestProducts";
// import styles from "./Items.module.css";
import { ALL_PRODUCTS_PER_DEVICE, BEST_PRODUCTS_PER_DEVICE } from "../api/config";
import AllProducts from "../components/AllProducts/AllProducts";

function Items() {
  return (
    <>
      <BestProducts title="베스트 상품" itemsPerDevice={BEST_PRODUCTS_PER_DEVICE} />
      <AllProducts title="전체 상품" itemsPerDevice={ALL_PRODUCTS_PER_DEVICE} />
    </>
  );
}

export default Items;
