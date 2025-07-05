import Header from "../components/Header";
import "./Items.css"
import { getProducts } from "../api";
import { useEffect, useState } from "react";
import AllProductList from "../components/AllProductList";
import BestProductList from "../components/BestProductList";

const Items = () => {
  const [items, setItems] = useState([]);
  const [totalCount, setTotalCount] = useState(0);

  //options는...
  //handleLoad 함수는 options라는 객체를 받아서, 그걸 getProducts(options)에 넘김
  //options은 handleLoad({ items, offset: 0, limit: 1000 })에서 넘긴값
  //getProducts 함수가 어떤 데이터를 요청할지 정하는 설정 값들
  const handleLoad = async (options) => {
    const { list, totalCount } = await getProducts(options);
    setItems(list);
    setTotalCount(totalCount);
  };

  useEffect(() => {
    handleLoad({ offset: 0, limit: 1000 });
  }, []);

  return (
    <div>
      <Header />
      <main>
        <BestProductList items={items} totalCount={totalCount} />
        <AllProductList items={items} totalCount={totalCount} />
      </main>
    </div>
  );
};
export default Items;
