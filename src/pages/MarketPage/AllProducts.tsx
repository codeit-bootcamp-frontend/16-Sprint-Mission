import style from './AllProducts.module.scss';
import PageNations from './PageNations';
import getMediaCount from '@/utils/getMediaCount';
import useApi from '@/hooks/useApi';
import { fetchProducts } from '@/api/products';
function AllProducts() {
  //현재 화면 사이즈 종류
  // 미디어 쿼리에 따라 전체 상품의 개수를 설정합니다.
  const { allProductsCount } = getMediaCount();
  //api를 통해 전체 상품을 가져오기
  const { data, loading, error } = useApi(
    () => fetchProducts(page, allProductsCount, sort, keword),
    [allProductsCount]
  );
  // 페이지네이션에 따른 페이지

  return (
    <div className={style['all-products']}>
      <div className={style['all-products__header']}>
        {/* 검색창 및 필터 */}
        <h2 className={style['all-products__title']}>전체 상품</h2>
        <div className={style['all-products__filter-wrap']}>
          <input
            type="text"
            placeholder="검색할 상품을 입력하세요"
            className={style['all-products__search']}
          />
          <button className={style['all-products__add']}>상품 등록하기</button>

          <select
            className={style['all-products__filter']}
            aria-label="상품 정렬"
          >
            <option value="recent">최신순</option>
            <option value="favorite">좋아요순</option>
          </select>
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
