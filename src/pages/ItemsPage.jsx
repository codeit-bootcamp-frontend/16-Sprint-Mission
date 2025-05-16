import ItemList from "../components/ItemList";
import BestItemList from "../components/BestItemList";

const ItemsPage = () => {
  return (
    <section className="page-content">
      <BestItemList />
      <ItemList title="전체 상품" pageSize={10} orderBy="recent" />
    </section>
  );
};

export default ItemsPage;
