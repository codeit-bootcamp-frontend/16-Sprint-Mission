/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import SectionSubTitle from "../../ui/SectionTitle/SectionSubTitle";
import Button from "../../ui/Button";
import { useState } from "react";

const AddProductForm = ({ title }) => {
  const [isFormValid, setIsFormValid] = useState(false);

  return (
    <form action="">
      <header css={FormHeader}>
        <SectionSubTitle title={title} />
        <Button size="sm" variant="primary" disabled={!isFormValid}>
          등록
        </Button>
      </header>
    </form>
  );
};

export default AddProductForm;

const FormHeader = css`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
