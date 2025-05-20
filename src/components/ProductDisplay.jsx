import { useState } from "react";
import "../components/css/ProductDisplay.css";

function ProductDisplay({ sortedItems, bestList }) {
  // 이미지 로드 상태를 관리하기 위한 객체
  const [imgLoadStatus, setImgLoadStatus] = useState({});

  // 이미지 로드 실패 시 호출되는 함수
  const handleImageError = (productId) => {
    setImgLoadStatus((prev) => ({
      ...prev,
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
    <ul className={bestList ? "ProductList__content bestList" : "ProductList__content list"}>
      {sortedItems.map((product) => (
        <li key={product.id}>
          {/* <img src={product.images[0]} alt={product.name} onError={() => handleImageError} /> */}

          <div className="product-image-container">
            {imgLoadStatus[product.id] === "error" ? (
              // 이미지 로드 실패 시 대체 UI
              <div className="image-placeholder">
                <span className="product-name-placeholder">{product.name.charAt(0)}</span>
              </div>
            ) : (
              // 이미지 로드 시도
              <img
                src={product.images[0]}
                alt={product.name}
                onError={() => handleImageError(product.id)}
                onLoad={() => handleImageLoad(product.id)}
              />
            )}
          </div>

          <span>{product.name}</span>
          <span>{product.price}</span>
          <span>{product.favoriteCount}</span>
        </li>
      ))}
    </ul>
  );
}

export default ProductDisplay;
