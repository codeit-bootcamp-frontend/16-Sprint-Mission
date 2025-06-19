import style from './AllProductsHeader.module.scss';

export type SortKey = 'recent' | 'favorite';

interface Props {
  keyword: string;
  sort: SortKey;
  onKeywordChange: (newKeyword: string) => void;
  onSortChange: (newSort: SortKey) => void;
  onAddClick: () => void;
}
// 전체 상품 헤더 컴포넌트
// 검색창, 필터, 상품 등록 버튼을 포함합니다.
function AllProductsHeader({
  keyword,
  sort,
  onKeywordChange,
  onSortChange,
  onAddClick,
}: Props) {
  return (
    <div className={style['all-products-header']}>
      {/* 검색창 및 필터 */}
      <h2 className={style['all-products-header__title']}>전체 상품</h2>
      <div className={style['all-products-header__filter-wrap']}>
        <input
          type="text"
          placeholder="검색할 상품을 입력하세요"
          className={style['all-products-header__search']}
          onChange={(e) => onKeywordChange(e.currentTarget.value)}
        />
        <button
          className={style['all-products-header__add']}
          onClick={onAddClick}
        >
          상품 등록하기
        </button>

        <select
          className={style['all-products-header__filter']}
          aria-label="상품 정렬"
          onChange={(e) => onSortChange(e.currentTarget.value as SortKey)}
        >
          <option value="recent">최신순</option>
          <option value="favorite">좋아요순</option>
        </select>
      </div>
    </div>
  );
}

export default AllProductsHeader;
