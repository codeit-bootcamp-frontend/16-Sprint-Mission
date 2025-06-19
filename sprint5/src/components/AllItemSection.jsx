// 전체 상품 묶음 컴포넌트
import ItemCard from "./ItemCard";

const AllItemSection = ({ items }) => {
  return (
    <section className="item-card-container">
      {items.slice(0, 10).map((item) => (
        <ItemCard key={item.id} item={item} />
      ))}
    </section>
  );
};

export default AllItemSection;
