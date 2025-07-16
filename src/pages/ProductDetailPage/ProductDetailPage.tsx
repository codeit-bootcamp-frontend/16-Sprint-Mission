/** @jsxImportSource @emotion/react */
import styled from "@emotion/styled/macro";
import ProductInfo from "@pages/ProductDetailPage/components/ProductInfo";
import ProductInquiry from "@pages/ProductDetailPage/components/ProductInquiry";
import { mq } from "@styles/mixins";

const ProductDetailPage = () => {
  return (
    <div id="container">
      <Inner>
        <ProductInfo />
        <ProductInquiry />
      </Inner>
    </div>
  );
};

const Inner = styled.div`
  max-width: 1200px;
  width: calc(100% - 48px);
  margin: 0 auto;
  padding-top: 24px;
  padding-bottom: 100px;

  ${mq["mobile"]} {
    width: calc(100% - 30px);
    padding-top: 16px;
    padding-bottom: 50px;
  }
`;

export default ProductDetailPage;
