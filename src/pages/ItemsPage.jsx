import ItemList from "../components/ItemList";
import BestItemList from "../components/BestItemList";

const ItemsPage = () => {
  return (
    <section className="page-content">
      <BestItemList title="베스트 상품" pageSize={4} />
      <ItemList
        title="전체 상품"
        pageSize={10}
        showSearch
        showItemAddBtn
        showOrderDropdown
      />
    </section>
  );
};

export default ItemsPage;
