import { useEffect, useState } from "react";
import styled from "styled-components";

import { Bold16, Medium14 } from "../style/Font";

const BestProducts_Style = styled.div`
  display: grid;
  gap: 16px;
  justify-content: center;
  height: 434px;

  margin-bottom: 24px;

  grid-template-columns: repeat(1, 343px);

  @media (min-width: 768px) {
    grid-template-columns: repeat(2, 343px);
    margin-bottom: 40px;
  }

  @media (min-width: 1200px) {
    grid-template-columns: repeat(4, 282px);
    height: 378px;
  }
`;
const ProductCard = styled.div``;
const ProductImage = styled.img`
  width: 100%;
  border-radius: 12px;
  height: 343px;

  @media (min-width: 768px) {
    height: 343px;
    border-radius: 16px;
  }

  @media (min-width: 1200px) {
    height: 282px;
  }
`;

function BestProducts({ products }) {
  const [imgCount, setImgCount] = useState(1);

  useEffect(() => {
    function updateImgCount() {
      const width = window.innerWidth;
      if (width >= 1200) setImgCount(4);
      else if (width >= 768) setImgCount(2);
      else setImgCount(1);
    }
    updateImgCount();
    window.addEventListener("resize", updateImgCount);
    return () => window.removeEventListener("resize", updateImgCount);
  }, []);

  return (
    <section>
      <h4 style={{ margin: "16px" }}>베스트 상품</h4>
      <BestProducts_Style>
        {products
          .slice()
          .sort((a, b) => b.favoriteCount - a.favoriteCount)
          .slice(0, imgCount)
          .map((product) => (
            <ProductCard key={product.id}>
              <ProductImage src={product.images[0]} alt={product.name} />
              <Medium14 style={{ margin: "16px 0 0 0" }}>
                {product.name}
              </Medium14>
              <Bold16 style={{ margin: "6px 0" }}>{product.price}원</Bold16>
              <div>
                <img src="./images/main-page/favoriteIcon.png" />
                <span style={{ marginLeft: "4px" }}>
                  {product.favoriteCount}
                </span>
              </div>
            </ProductCard>
          ))}
      </BestProducts_Style>
    </section>
  );
}
export default BestProducts;
