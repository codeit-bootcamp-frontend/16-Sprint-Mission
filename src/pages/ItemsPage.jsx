import ItemList from "../components/ItemList";

const ItemsPage = () => {
  return (
    <section className="page-content">
      <ItemList
        title="베스트 상품"
        pageSize={4}
        orderBy="favorite"
        type="best"
      />
      <ItemList title="전체 상품" pageSize={10} orderBy="recent" type="all" />
    </section>
  );
};

export default ItemsPage;
