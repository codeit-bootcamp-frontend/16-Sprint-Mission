import ItemList from "../components/ItemList";
import BestItemList from "../components/BestItemList";
import { useEffect, useState } from "react";
import useWindowDimensions from "../hooks/useWindowDimensions";

const DESKTOP = 1200;
const LAPTOP = 768;

const ItemsPage = () => {
  const { width } = useWindowDimensions();

  return (
    <section className="page-content">
      <BestItemList
        title="베스트 상품"
        pageSize={width >= DESKTOP ? 4 : width >= LAPTOP ? 2 : 1}
      />
      <ItemList
        title="전체 상품"
        pageSize={width >= DESKTOP ? 10 : width >= LAPTOP ? 6 : 4}
        showSearch
        showItemAddBtn
        showOrderDropdown
      />
    </section>
  );
};

export default ItemsPage;
