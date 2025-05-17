import BestProducts from "../components/BestProducts/BestProducts";
// import styles from "./Items.module.css";
import { BEST_PRODUCTS_PER_DEVICE } from "../api/config";

function Items() {
  return (
    <>
      <BestProducts title="베스트 상품" itemsPerDevice={BEST_PRODUCTS_PER_DEVICE} />
    </>
  );
}

export default Items;
