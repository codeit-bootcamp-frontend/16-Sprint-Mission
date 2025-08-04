import styled from "@emotion/styled/macro";
import ProductInquiryItem from "@pages/ProductDetailPage/components/ProductInquiry/ProductInquiryItem";
import { mq } from "@styles/mixins";
import { InquiryItemType } from "types/productType";

interface Props {
  inquiryList: InquiryItemType[];
}

const ProductInquiryList = ({ inquiryList }: Props) => {
  return (
    <InquiryListStyle>
      {inquiryList.map((inquiry) => {
        return <ProductInquiryItem key={inquiry.id} inquiry={inquiry} />;
      })}
    </InquiryListStyle>
  );
};

export const InquiryListStyle = styled.ul`
  margin-top: 24px;

  ${mq["mobile"]} {
    margin-top: 40px;
  }

  > li {
    position: relative;

    margin-bottom: 24px;
    border-bottom: 1px solid ${({ theme }) => theme.colors.gray300};
    padding-bottom: 12px;

    ${mq["mobile"]} {
      margin-bottom: 16px;
    }

    .inquiry_text {
      font-size: 14px;
      color: ${({ theme }) => theme.colors.gray800};
    }

    .inquiry_meta {
      display: flex;
      justify-content: space-between;
      align-items: flex-end;
      margin-top: 24px;

      .edit_btns {
        display: flex;
        align-items: center;
        gap: 4px;
      }
    }
  }
`;

export default ProductInquiryList;
