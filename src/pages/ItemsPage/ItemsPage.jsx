import "./ItemsPage.css";
import { usePageSizeByBreakPoint } from "../../hooks/usePageSizeByBreakPoint";

import Nav from "../../components/layout/Nav/Nav";
import BestItemsSection from "./sections/BestItemsSection";
import CurrentItemsSection from "./sections/CurrentItemsSection";

const ItemsPage = () => {
  const { pageSizeList } = usePageSizeByBreakPoint();
  return (
    <>
      <Nav currentSection={"items"} />
      <main className={"items-page-main"}>
        <BestItemsSection pageSize={pageSizeList?.best} />
        <CurrentItemsSection pageSize={pageSizeList?.current} />
      </main>
    </>
  );
};

export default ItemsPage;
