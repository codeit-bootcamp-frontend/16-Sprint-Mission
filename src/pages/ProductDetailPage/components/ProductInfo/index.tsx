/** @jsxImportSource @emotion/react */
import {
  DetailInfoBox,
  DetailInfoImg,
  DetailInfoText,
} from "@pages/ProductDetailPage/components/ProductInfo/indexStyle";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { ProductItemType } from "types/productType";
import ProductInfoContent from "@pages/ProductDetailPage/components/ProductInfo/ProductInfoContent";
import { getProductInfo } from "@data/api";

const ProductInfo = () => {
  const { productId } = useParams();
  const [productInfo, setProductInfo] = useState<ProductItemType | null>(null);

  useEffect(() => {
    const getProduct = async () => {
      try {
        const data = await getProductInfo(Number(productId));
        setProductInfo(data);
      } catch (error) {
        console.error(error);
      }
    };

    getProduct();
  }, [productId]);

  if (!productInfo) return null;

  return (
    <DetailInfoBox>
      <DetailInfoImg>
        <img src={productInfo.images[0]} alt="" />
      </DetailInfoImg>
      <DetailInfoText>
        <ProductInfoContent productInfo={productInfo} />
      </DetailInfoText>
    </DetailInfoBox>
  );
};

export default ProductInfo;
