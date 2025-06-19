import { Link } from "react-router-dom";
import styles from "./ItemControls.module.css";
import SortDropdown from "./SortDropdown";

/**
 * ItemControls 컴포넌트
 * @param {Object} props
 * @param {string} props.orderBy - 현재 선택된 정렬 기준
 * @param {(value: string) => void} props.onSortChange - 정렬 기준 변경 핸들러
 * @param {(keyword: string) => void} props.onSearch - 검색 실행 핸들러
 */

function ItemControls({ orderBy, onSortChange }) {
  return (
    <div className={styles.controlsWrapper}>
      <div className="searchInput">
        <input
          className={styles.searchInput}
          type="text"
          placeholder="검색할 상품을 입력해주세요"
        />
      </div>
      <Link to="/additem" className={styles.addItemLink}>
        상품 등록하기
      </Link>
      <SortDropdown value={orderBy} onChange={onSortChange} />
    </div>
  );
}

export default ItemControls;
