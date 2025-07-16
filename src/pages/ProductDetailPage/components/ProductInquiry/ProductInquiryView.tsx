import { css } from "@emotion/react";
import DetailDropdown from "@pages/ProductDetailPage/components/DetailDropdown/DetailDropdown";
import InquiryUserProfile from "@pages/ProductDetailPage/components/ProductInquiry/InquiryUserProfile";
import { InquiryItemType } from "types/productType";

interface Props {
  inquiry: InquiryItemType;
  content: string;
  enableEditMode: () => void;
}

const InquiryView = ({ inquiry, content, enableEditMode }: Props) => {
  const { writer, updatedAt } = inquiry;
  return (
    <>
      <p className="inquiry_text">{content}</p>
      <div className="inquiry_meta">
        <InquiryUserProfile writer={writer} updatedAt={updatedAt} size="sm" />
      </div>
      <DetailDropdown
        onDelete={() => console.log("삭제하기")}
        onEdit={enableEditMode}
        css={DropdownCustom}
      />
    </>
  );
};

const DropdownCustom = css`
  position: absolute;
  top: 0;
  right: 0;
`;

export default InquiryView;
