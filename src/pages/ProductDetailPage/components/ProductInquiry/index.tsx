/** @jsxImportSource @emotion/react */
import { useEffect, useState } from "react";
import BackIcon from "@assets/images/icons/ic_back.svg";
import {
  BackButtonCustom,
  BackLinkRow,
} from "@pages/ProductDetailPage/components/ProductInquiry/indexStyle";
import { useParams } from "react-router-dom";
import { getProductInquiries } from "data/api";
import ProductInquiryList from "@pages/ProductDetailPage/components/ProductInquiry/ProductInquiryList";
import { InquiryItemType } from "types/productType";
import LinkButton from "@components/Button/LinkButton";
import ProductInquiryForm from "@pages/ProductDetailPage/components/ProductInquiry/ProductInquiryForm";

const ProductInquiry = () => {
  const { productId } = useParams();
  const [inquiryList, setInquiryList] = useState<InquiryItemType[] | null>(
    null
  );

  useEffect(() => {
    const getInquiries = async () => {
      try {
        const data = await getProductInquiries(Number(productId));
        setInquiryList([...data.list]);
      } catch (err) {
        console.error(err);
      }
    };

    getInquiries();
  }, [productId]);

  if (!inquiryList) return null;

  return (
    <div>
      <ProductInquiryForm
        onSubmitForm={(value) => {
          console.log(value);
        }}
      />
      <ProductInquiryList inquiryList={inquiryList} />
      <BackLinkRow>
        <LinkButton to="/items" size="lg" round css={BackButtonCustom}>
          <span>목록으로 돌아가기</span>
          <img src={BackIcon} alt="" />
        </LinkButton>
      </BackLinkRow>
    </div>
  );
};

export default ProductInquiry;
