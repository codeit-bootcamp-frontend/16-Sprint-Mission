import styled from "@emotion/styled/macro";
import { useState } from "react";
import SectionTitle from "../../ui/SectionTitle";
import Button from "../../ui/Button";
import Label from "../../ui/Label";
import ImageFileUpload from "../ImageFileUpload";
import Input from "../../ui/Input";
import Textarea from "../../ui/Textarea";
import Tag from "../../ui/Tag";

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
        <Label>상품 이미지</Label>
        <ImageFileUpload />
      </FormControl>
      <FormControl>
        <Label inputId="productName">상품명</Label>
        <Input id="productName" placeholder="상품명을 입력해주세요" />
      </FormControl>
      <FormControl>
        <Label inputId="productDescription">상품 소개</Label>
        <Textarea
          id="productDescription"
          placeholder="상품 소개를 입력해주세요"
        />
      </FormControl>
      <FormControl>
        <Label inputId="productPrice">판매 가격</Label>
        <Input
          type="number"
          id="productPrice"
          placeholder="판매 가격을 입력해주세요"
        />
      </FormControl>
      <FormControl>
        <Label inputId="productTag">태그</Label>
        <Input id="productTag" placeholder="태그를 입력해주세요" />
        <FormTagList>
          <Tag>티셔츠</Tag>
          <Tag>상의</Tag>
        </FormTagList>
      </FormControl>
    </FormContainer>
  );
};

export default AddProductForm;

const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  padding-bottom: 70px;
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

const FormTagList = styled.div`
  display: flex;
  gap: 12px;
`;
