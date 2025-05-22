import "./ItemsPage.css";
import { usePageSizeByBreakPoint } from "../../hooks/usePageSizeByBreakPoint";
import BestItemsSection from "../../components/BestItemsSection";
import CurrentItemsSection from "../../components/CurrentItemsSection";
import Nav from "../../components/layout/Nav/Nav";

const ItemsPage = () => {
  const { pageSizeList } = usePageSizeByBreakPoint();
  return (
    <>
      <Nav currentSection={"items"} />
      <main className={"items-page-main"}>
        {pageSizeList.best && <BestItemsSection pageSize={pageSizeList.best} />}
        {pageSizeList.current && <CurrentItemsSection pageSize={pageSizeList.current} />}
      </main>
    </>
  );
};

export default ItemsPage;
