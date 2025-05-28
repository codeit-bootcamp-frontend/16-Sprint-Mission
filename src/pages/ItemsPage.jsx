import useBreakpoint from "../components/Hooks/useBreakpoint";
import BestItemsSection from "../components/BestItemsSection";
import AllItemsSection from "../components/AllitemsSection";
import styles  from "./ItemsPage.module.css"


function ItemsPage() {
 const bp = useBreakpoint();

  return (
    <div className={`container ${styles.wrap}`}>
      <BestItemsSection bp={bp}/>
      <AllItemsSection bp={bp}/>
    </div>
  );
}

export default ItemsPage;