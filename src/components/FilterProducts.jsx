import styles from '../css/ItemTemp.module.css';
// import { useQueryStrings, useSetQueryStrings } from "../context/ProductAllContext"

function FilterProducts({queryStrings,setQueryStrings}) {
  // 옵션 선택하면 누르면 queryStrings orderBy수정
  const handleChange = (e) => {
    if(!e.target.tagName==='LI')return;
    setQueryStrings((prev) => ({
      ...prev,
      orderBy: e.target.dataset.value,
    }));
  };

  return (
    <div className={styles['filter-bar']}>
      <button>상품 등록하기</button>
      <div className={styles.search}>
        <label className={styles.searchIcon} htmlFor="searchInput" aria-label="검색창 아이콘"/>
        <input id='searchInput' className={styles.searchInput} placeholder="검색할 상품을 입력해주세요"></input>
      </div>
      <label htmlFor='showDropdown' className={styles.select} >{queryStrings.orderBy==='recent'?'최신 순': '좋아요 순'}
        <input id='showDropdown' type='checkbox'></input>
        <ul>
          <li onClick={handleChange} data-value="recent">최신 순</li>
          <li onClick={handleChange} data-value="favorite">좋아요 순</li>
        </ul>
      </label>
    </div>
  );
}

export default FilterProducts;
