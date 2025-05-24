import styled from "@emotion/styled/macro";
import { useState } from "react";
import SectionTitle from "../../ui/SectionTitle";
import Button from "../../ui/Button";
import FormControl from "../../ui/Form/FormControl";
import FormLabel from "../../ui/Form/FormLabel";
import ImageFileUploader from "../ImageFileUploader/ImageFileUploader";
import Input from "../../ui/Input";
import Textarea from "../../ui/Textarea";
import TagInput from "../../ui/Input/TagInput";
import TagList from "../../ui/Tag/TagList";

const AddProductForm = ({ title }) => {
  const [isFormValid, setIsFormValid] = useState(false);

  return (
    <ProductFormContainer>
      <FormHeader>
        <SectionTitle title={title} />
        <Button size="sm" variant="primary" disabled={!isFormValid}>
          등록
        </Button>
      </FormHeader>

      <FormControl>
        <FormLabel>상품 이미지</FormLabel>
        <ImageFileUploader />
      </FormControl>

      <FormControl>
        <FormLabel inputId="productName">상품명</FormLabel>
        <Input id="productName" placeholder="상품명을 입력해주세요" />
      </FormControl>

      <FormControl>
        <FormLabel inputId="productDescription">상품 소개</FormLabel>
        <Textarea
          id="productDescription"
          placeholder="상품 소개를 입력해주세요"
        />
      </FormControl>

      <FormControl>
        <FormLabel inputId="productPrice">판매 가격</FormLabel>
        <Input
          type="number"
          id="productPrice"
          placeholder="판매 가격을 입력해주세요"
        />
      </FormControl>

      <FormControl>
        <FormLabel inputId="productTags">태그</FormLabel>
        <TagInput id="productTags" placeholder="태그를 입력해주세요" />
        <TagList tags={["티셔츠", "바지"]} />
      </FormControl>
    </ProductFormContainer>
  );
};

export default AddProductForm;

const ProductFormContainer = styled.form`
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
