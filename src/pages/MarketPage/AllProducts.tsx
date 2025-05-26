import style from './AllProducts.module.scss';
import PageNations from './PageNations';
function AllProducts() {
  return (
    <div className={style['all-products']}>
      <div className={style['all-products__header']}>
        <h2>전체 상품</h2>
        <div className={style['all-products-filter-container']}>
          {/* 검색창 및 필터 */}
        </div>
      </div>
      {/* 전체 상품 리스트 */}
      <div className={style['all-products-list']}></div>

      {/* 페이지네이션 컴포넌트 */}
      <PageNations />
    </div>
  );
}
export default AllProducts;
