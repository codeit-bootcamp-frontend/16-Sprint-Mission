import ProductInquiryEditor from "@pages/ProductDetailPage/components/ProductInquiry/ProductInquiryEditor";
import ProductInquiryView from "@pages/ProductDetailPage/components/ProductInquiry/ProductInquiryView";
import { useState } from "react";
import { InquiryItemType } from "types/productType";

interface Props {
  inquiry: InquiryItemType;
}

const ProductInquiryItem = ({ inquiry }: Props) => {
  const [isEdit, setIsEdit] = useState(false);
  const [content, setContent] = useState(inquiry.content);

  const enableEditMode = () => setIsEdit(true);
  const disableEditMode = () => setIsEdit(false);
  const updateContent = (value: string) => {
    setContent(value);
  };

  return (
    <li>
      {isEdit ? (
        <ProductInquiryEditor
          inquiry={inquiry}
          content={content}
          updateContent={updateContent}
          disableEditMode={disableEditMode}
        />
      ) : (
        <ProductInquiryView
          inquiry={inquiry}
          content={content}
          enableEditMode={enableEditMode}
        />
      )}
    </li>
  );
};

export default ProductInquiryItem;
