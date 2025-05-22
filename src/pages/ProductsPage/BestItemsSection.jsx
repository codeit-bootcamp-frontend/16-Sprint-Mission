import { useEffect, useState } from "react";
import { getProducts } from "../../api";
import Item from "./Item";

const getPageSize = () => {
  const width = window.innerWidth;
  if (width < 768) {
    //mobile
    return 1;
  } else if (width < 1280) {
    //tablet
    return 2;
  } else {
    //desktop
    return 4;
  }
};

function BestItemsSection() {
  const [itemList, setItemList] = useState([]);
  const [pageSize, setPageSize] = useState(getPageSize());

  const fetchData = async ({ orderBy, pageSize }) => {
    const products = await getProducts({ orderBy, pageSize });
    setItemList(products.list);
  };

  useEffect(() => {
    const handleSize = () => {
      setPageSize(getPageSize);
    };

    window.addEventListener("resize", handleSize);
    fetchData({ orderBy: "favorite", pageSize });

    return () => {
      window.removeEventListener("resize", handleSize);
    };
  }, [pageSize]);

  return (
    <div>
      <h1>베스트 상품</h1>
      <div>
        {itemList?.map((item) => (
          <Item item={item} />
        ))}
      </div>
    </div>
  );
}

export default BestItemsSection;
