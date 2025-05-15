import ItemList from "../components/ItemList";

const ItemsPage = () => {
  return (
    <section className="page-content">
      <ItemList title="베스트 상품" pageSize={4} orderBy="favorite" />
    </section>
  );
};

export default ItemsPage;
