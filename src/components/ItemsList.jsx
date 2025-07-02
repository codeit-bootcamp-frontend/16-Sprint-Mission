import Item from "./Item";
import styled from "styled-components";
const ItemList = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: ${(props) => (props.$bestItemChk ? "nowrap" : "wrap")};
  gap: ${(props) => (props.$bestItemChk ? "8px" : "0")};
`;
function ItemsList({ items, itemsCount, bestItemsFlag }) {
  return (
    <ItemList $bestItemChk={bestItemsFlag}>
      {items.map((item) => (
        <Item
          bestItemsFlag={bestItemsFlag}
          itemsCount={itemsCount}
          key={item.id}
          name={item.name}
          desc={item.desc}
          price={item.price}
          src={item.images}
          favorite={item.favoriteCount}
        />
      ))}
    </ItemList>
  );
}
export default ItemsList;
