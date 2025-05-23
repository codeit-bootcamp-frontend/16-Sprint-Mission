import styled from "@emotion/styled/macro";
import { useState } from "react";
import SectionTitle from "../../ui/SectionTitle";
import Button from "../../ui/Button";
import Label from "../../ui/Label";
import Input from "../../ui/Input";

const AddProductForm = ({ title }) => {
  const [isFormValid, setIsFormValid] = useState(false);

  return (
    <FormContainer>
      <FormHeader>
        <SectionTitle title={title} />
        <Button size="sm" variant="primary" disabled={!isFormValid}>
          등록
        </Button>
      </FormHeader>
      <FormControl>
        <Label inputId="productName">상품명</Label>
        <Input id="productName" placeholder="상품명을 입력해주세요" />
      </FormControl>
    </FormContainer>
  );
};

export default AddProductForm;

const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;

const FormHeader = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;

  h4 {
    margin-bottom: 0;
  }
`;

const FormControl = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;
