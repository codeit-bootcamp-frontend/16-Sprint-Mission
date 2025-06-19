import { useState } from 'react';
import { fetchProducts, Product } from '@/api/products';
import useApi from '@/hooks/useApi';
import AllProductsHeader, { SortKey } from './AllProductsHeader';
import style from './AllProducts.module.scss';
import PageNations from './PageNations';
import getMediaCount from '@/utils/getMediaCount';
import ProductCard from '@/components/Cards/ProductCard';
import SkeletonCard from '@/components/Cards/SkeletonCard';
import useDebounce from '@/hooks/useDebounce';
import { useNavigate } from 'react-router-dom';
function AllProducts() {
  const navigate = useNavigate();
  // 미디어 쿼리에 따라 페이지당 제품의 개수를 설정합니다.
  const { allProductsCount: pageSize } = getMediaCount();

  //상태 선언
  const [page, setPage] = useState(1);
  const [sort, setSort] = useState<SortKey>('recent');
  const [keyword, setKeyword] = useState('');
  // 키워드 디바운스 처리
  const debouncedKeyword = useDebounce(keyword, 300);
  //api를 통해 전체 상품을 가져오기
  const { data, loading, error } = useApi(
    () => fetchProducts(page, pageSize, sort, debouncedKeyword),
    [pageSize, page, sort, debouncedKeyword]
  );
  // 전체 상품 수
  const totalCount: number = data?.totalCount ?? 0;
  // 페이지당 상품 목록
  const products: Product[] = data?.list ?? [];

  //핸들러 함수 선언
  // 페이지 변경 핸들러
  const handlePageChange = (newPage: number) => {
    setPage(newPage);
  };
  // 검색 핸들러
  const handleKeywordChange = (newKeyword: string) => {
    setKeyword(newKeyword);
    setPage(1); // 검색 시 항상 1페이지로
  };
  // 정렬 변경 핸들러
  const handleSortChange = (newSort: SortKey) => {
    setSort(newSort);
    setPage(1); // 정렬 변경 시에도 1페이지로
  };

  // 상품 추가 버튼 클릭 핸들러
  const handleAddClick = () => {
    // /additem 으로 이동
    navigate('/additem');
    console.log('상품 추가 버튼 클릭');
  };

  return (
    <div className={style['all-products']}>
      {/* 전체 상품 헤더 */}
      <AllProductsHeader
        keyword={keyword}
        sort={sort}
        onKeywordChange={handleKeywordChange}
        onSortChange={handleSortChange}
        onAddClick={handleAddClick}
      />

      {/* 전체 상품 리스트 */}
      <div className={style['all-products__list']}>
        {loading
          ? Array.from({ length: pageSize }).map((_, idx) => (
              <SkeletonCard key={idx} />
            ))
          : products.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
      </div>
      {/* 페이지네이션 컴포넌트 */}
      <PageNations
        currentPage={page}
        pageSize={pageSize}
        totalCount={data?.totalCount ?? 0}
        onPageChange={handlePageChange}
      />
    </div>
  );
}
export default AllProducts;
