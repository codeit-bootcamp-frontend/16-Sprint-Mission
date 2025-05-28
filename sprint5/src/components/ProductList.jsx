// 정렬 드롭다운 기능 구현
import { useEffect, useState } from "react";
import axios from "axios";
import SortDropdown from "./SortDropdown";

const ProductList = () => {
  const [sortOption, setSortOption] = useState("recent");
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const res = await axios.get(
        `https://panda-market-api.vercel.app/products?page=1&pageSize=10&orderBy=${sortOption}`
      );
      setProducts(res.data.list);
    };

    fetchData();
  }, [sortOption]);

  return (
    <div>
      <SortDropdown sortOption={sortOption} onChange={setSortOption} />
      <ul>
        {products.map((p) => (
          <li key={p.id}>
            {p.name} - {p.price}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProductList;
