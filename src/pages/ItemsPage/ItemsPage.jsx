import "./ItemsPage.css";
import Nav from "../../components/Nav";
import { usePageSizeByBreakPoint } from "../../hooks/usePageSizeByBreakPoint";
import BestItemsSection from "../../components/BestItemsSection";
import CurrentItemsSection from "../../components/CurrentItemsSection";

const ItemsPage = () => {
  const { pageSizeList } = usePageSizeByBreakPoint();

  return (
    <>
      <Nav currentSection={"items"} />
      <main className={"items-page-main"}>
        <BestItemsSection pageSize={pageSizeList.best} />
        <CurrentItemsSection pageSize={pageSizeList.current} />
      </main>
    </>
  );
};

export default ItemsPage;
