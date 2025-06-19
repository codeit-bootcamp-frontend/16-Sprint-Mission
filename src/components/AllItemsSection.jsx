import { useState, useEffect } from "react";
import useItem from "./Hooks/useItem";
import ItemCard from "./ItemCard";
import ItemControls from "./ItemControls";
import styles from "../pages/ItemsPage.module.css";
import Pagination from "./Pagination";

function AllItemsSectoin({ bp }) {
  // 정렬 모드 & 페이지
  const [orderBy, setOrderBy] = useState("recent");
  const [page, setPage] = useState(1);

  // 브레이크포인트에 따라 한 번에 불러올 개수
  const pageSizeMap = { mobile: 4, tablet: 6, desktop: 10 };
  const pageSize = pageSizeMap[bp];

  // pageSize가 바뀌면 페이지 번호 초기화
  useEffect(() => {
    setPage(1);
  }, [pageSize]);

  //데이터 패칭
  const { items: allItems = [], totalCount = 0 } = useItem({
    page,
    pageSize,
    orderBy,
  });

  return (
    <section>
      <div className={styles.sectionHeader}>
        <h2>전체 상품</h2>
        <ItemControls orderBy={orderBy} onSortChange={setOrderBy} />
      </div>
      <div className={styles.allGrid}>
        {allItems.map((item) => {
          return (
            <ItemCard
              key={item.id}
              imageClassName={styles.allImgWrap}
              image={item.images[0]}
              name={item.name}
              price={item.price}
              favoriteCount={item.favoriteCount}
            />
          );
        })}
      </div>
      <Pagination
        page={page}
        totalCount={totalCount}
        pageSize={pageSize}
        onPageChange={(newPage) => setPage(newPage)}
      />
    </section>
  );
}

export default AllItemsSectoin;
