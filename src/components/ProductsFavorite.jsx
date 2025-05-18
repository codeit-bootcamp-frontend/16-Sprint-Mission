import { useEffect, useState } from "react";
import ProductItem from "./ProductItem";
import { getProducts } from "../api";
import styles from '../css/ItemTemp.module.css';
import {reRequestByResizeFavor} from '../util'


function ProductsFavorite({innerWidth}) {
  const [favoriteItems, setFavoriteItems] = useState([]);
 const [favoriteQueryString, setFavoriteQueryStrings]=useState({
    page:1,
    orderBy:'favorite',
    pageSize:4
  })

  //마운트 시 + 페이보릿 쿼리 변경 시 페이보릿 아이템들 전시하기
  useEffect(() => {
    async function temp() {
      const result = await getProducts(favoriteQueryString);
      setFavoriteItems(result.list);
    }
    temp();
  }, [favoriteQueryString]);



  useEffect(()=>{
      reRequestByResizeFavor(innerWidth, setFavoriteQueryStrings);
  },[innerWidth])


  return (
    <div className={styles.favoriteItems}>
      <h2>베스트 상품</h2>
      <ul>
        {favoriteItems.map((item) => (
          <li key={item.id}>
            <ProductItem item={item}></ProductItem>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ProductsFavorite;
