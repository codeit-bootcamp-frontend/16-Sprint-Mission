import style from "./ProductSection.module.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import SortSelect from "../SortSelect/SortSelect";
import ProductCard from "../ProductCard/ProductCard";

function ProductSection({
  title,
  products,
  sort,
  showSearch = false,
  showRegisterButton = false,
  onChangeSort,
}) {
  return (
    <section className={style.container}>
      <div className={style.heading}>
        <h3 className={style.title}>{title}</h3>
        <div className={style.controls}>
          {showSearch && (
            <div className={style.searchWrapper}>
              <FontAwesomeIcon icon={faSearch} className={style.searchIcon} />
              <input
                type="text"
                placeholder="검색할 상품을 입력해주세요"
                className={style.searchInput}
              />
            </div>
          )}
          {showRegisterButton && (
            <button className={style.registerButton}>상품 등록하기</button>
          )}
          {onChangeSort && <SortSelect value={sort} onChange={onChangeSort} />}
        </div>
      </div>
      <div className={style.grid}>
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </section>
  );
}

export default ProductSection;
