import style from "./ProductSection.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import SortSelect from "../sort-select/SortSelect";
import ProductCard from "../product-card/ProductCard";
import { useNavigate } from "react-router-dom";

function ProductSection({
  title,
  products,
  sort,
  showSearch = false,
  showRegisterButton = false,
  onChangeSort,
}) {
  const navigate = useNavigate();

  return (
    <section className={style.container}>
      <div className={style.controls}>
        <h3 className={style.title}>{title}</h3>
        <div className={style.blank}></div>
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
          <button
            className={style.registerButton}
            onClick={() => navigate("/additem")}
          >
            상품 등록하기
          </button>
        )}
        {onChangeSort && (
          <span className={style.sortSelect}>
            <SortSelect value={sort} onChange={onChangeSort}/>
          </span>
        )}
      </div>
      <div className={style.grid}>
        {products.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
          />
        ))}
      </div>
    </section>
  );
}

export default ProductSection;
