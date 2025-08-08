/** @jsxImportSource @emotion/react */
import Button from "@components/Button/Button";
import TextArea from "@components/TextArea/TextArea";
import { css } from "@emotion/react";
import styled from "@emotion/styled/macro";
import { mq } from "@styles/mixins";
import { theme } from "@styles/theme";
import { FormEvent, FormHTMLAttributes, useState } from "react";

type BaseProps = FormHTMLAttributes<HTMLFormElement> & {
  onSubmitForm: (value: string) => void;
};

const ProductInquiryForm = ({ onSubmitForm }: BaseProps) => {
  const [inquiryContent, setInquiryContent] = useState("");

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    onSubmitForm(inquiryContent);
    setInquiryContent("");
  };

  return (
    <>
      <InquiryFormTitle>문의하기</InquiryFormTitle>
      <form onSubmit={handleSubmit}>
        <TextArea
          name={"inquiry"}
          value={inquiryContent}
          onChange={(e) => setInquiryContent(e.target.value)}
          placeholder={
            "개인정보를 공유 및 요청하거나, 명예 훼손, 무단 광고, 불법 정보 유포시 모니터링 후 삭제될 수 있으며, 이에 대한 민형사상 책임은 게시자에게 있습니다."
          }
          css={TextAreaCustom}
        />
        <Button disabled={!inquiryContent.length} css={ButtonCustom}>
          등록
        </Button>
      </form>
    </>
  );
};

export const InquiryFormTitle = styled.h3`
  margin-bottom: 9px;
  color: ${theme.colors.gray900};

  ${mq["mobile"]} {
    margin-bottom: 16px;
    font-weight: 600;
    color: ${theme.colors.gray800};
  }
`;

const TextAreaCustom = css`
  ${mq["mobile"]} {
    height: 129px;
  }
`;

const ButtonCustom = css`
  display: block;
  min-width: 74px;
  margin-top: 16px;
  margin-left: auto;
`;

export default ProductInquiryForm;
