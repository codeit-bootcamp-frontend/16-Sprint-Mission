/** @jsxImportSource @emotion/react */
import Button from "@components/Button/Button";
import TextArea from "@components/TextArea/TextArea";
import { css } from "@emotion/react";
import InquiryUserProfile from "@pages/ProductDetailPage/components/ProductInquiry/InquiryUserProfile";
import { ChangeEvent, useState } from "react";
import { InquiryItemType } from "types/productType";

interface Props {
  inquiry: InquiryItemType;
  content: string;
  updateContent: (value: string) => void;
  disableEditMode: () => void;
}

const InquiryEditor = ({
  inquiry,
  content,
  updateContent,
  disableEditMode,
}: Props) => {
  const { writer, updatedAt } = inquiry;

  const [editText, setEditText] = useState(content ?? content);

  const handleChangeText = (e: ChangeEvent<HTMLTextAreaElement>) =>
    setEditText(e.target.value);
  const handleUpdateContent = () => {
    updateContent(editText);
    disableEditMode();
  };

  return (
    <>
      <TextArea
        name={`edit_form1`}
        value={editText}
        onChange={handleChangeText}
        height={80}
      />
      <div className="inquiry_meta">
        <InquiryUserProfile writer={writer} updatedAt={updatedAt} size="sm" />
        <div className="edit_btns">
          <Button
            color="custom"
            onClick={disableEditMode}
            css={CancelButtonCustom}
          >
            취소
          </Button>
          <Button onClick={handleUpdateContent} css={SubmitButtonCustom}>
            수정 완료
          </Button>
        </div>
      </div>
    </>
  );
};

const CancelButtonCustom = css`
  width: 68px;
  height: 47px;
  font-weight: 600;
  color: var(--gray500);
  background: none;
`;

const SubmitButtonCustom = css`
  min-width: 106px;
`;

export default InquiryEditor;
