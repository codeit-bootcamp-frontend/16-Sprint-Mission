import { useState } from "react";
import icfavorite from "../../assets/images/ic_heart.png";
import "../../styles/ProductDisplay.css";

function ProductDisplay({ sortedItems, bestList }) {
  // 이미지 로드 상태를 관리 변수
  const [imgLoadStatus, setImgLoadStatus] = useState({});

  // 2. 이미지 로드 실패 시 호출되는 함수
  const handleImageError = (productId) => {
    setImgLoadStatus((prev) => ({
      ...prev, //스프레드 연산자로 기존 상태를 복사해오는 역할
      [productId]: "error",
    }));
  };

  // 이미지가 성공적으로 로드되었을 때 호출되는 함수
  const handleImageLoad = (productId) => {
    setImgLoadStatus((prev) => ({
      ...prev,
      [productId]: "loaded",
    }));
  };

  return (
    // ProductList__content
    <ul className={bestList ? "Product__content bestList" : "Product__content all"}>
      {sortedItems.map((product) => {
        const isError = !product.images[0] || imgLoadStatus[product.id] === "error";

        return (
          <li key={product.id}>
            <div className="product__image">
              {isError ? (
                // 3. 이미지 로드 실패 시 대체 UI
                <div className="product__image-placeholder">
                  <span className="product__title-placeholder">{product.name}</span>
                </div>
              ) : (
                // 1. 이미지 로드 시도
                <img
                  src={product.images[0]}
                  alt={product.name}
                  // product.id를 사용하는 이유는, 각 상품의 이미지 로드 상태를 개별적으로 추적하기 위해 쓰인다.
                  // 상품의 배열에서 고유하게 구분할 수 있는 값
                  onError={() => handleImageError(product.id)}
                  onLoad={() => handleImageLoad(product.id)}
                />
              )}
            </div>
            <div className="product__title">{product.name}</div>
            <div className="product__price">{product.price.toLocaleString()}원</div>
            <div className="product__favorite">
              <img src={icfavorite} alt="좋아요" />
              {product.favoriteCount}
            </div>
          </li>
        );
      })}
    </ul>
  );
}

export default ProductDisplay;
