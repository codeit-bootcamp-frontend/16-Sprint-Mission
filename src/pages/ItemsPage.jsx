import ItemList from "../components/ItemList";
import BestItemList from "../components/BestItemList";
import useWindowDimensions from "../hooks/useWindowDimensions";

const DESKTOP = 1200;
const TABLET = 768;

const ItemsPage = () => {
  const { width } = useWindowDimensions();

  return (
    <section className="page-content">
      <BestItemList
        title="베스트 상품"
        pageSize={width >= DESKTOP ? 4 : width >= TABLET ? 2 : 1}
      />
      <ItemList
        title="전체 상품"
        pageSize={width >= DESKTOP ? 10 : width >= TABLET ? 6 : 4}
      />
    </section>
  );
};

export default ItemsPage;
