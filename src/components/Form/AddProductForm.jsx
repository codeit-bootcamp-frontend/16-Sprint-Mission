/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import SectionTitle from "../ui/SectionTitle";
import Button from "../ui/Button";
import FormControl from "../ui/Form/FormControl";
import FormLabel from "../ui/Form/FormLabel";
import ImageFileUploader from "../ImageFileUploader/ImageFileUploader";
import Input from "../ui/Input";
import Textarea from "../ui/Textarea";
import TagsInput from "../ui/Tag/TagsInput";
import useForm from "../../hooks/useForm";

const INITIAL_VALUES = {
  name: "",
  description: "",
  price: "",
  tags: [],
};

const AddProductForm = ({ title }) => {
  const {
    formData,
    isFormValid,
    handleChange,
    handlePriceChange,
    handleTagsChange,
    handleBlur,
  } = useForm(INITIAL_VALUES);

  return (
    <form css={ProductFormContainer}>
      <header css={FormHeader}>
        <SectionTitle title={title} />
        <Button size="sm" variant="primary" disabled={!isFormValid}>
          등록
        </Button>
      </header>

      <FormControl>
        <FormLabel>상품 이미지</FormLabel>
        <ImageFileUploader />
      </FormControl>

      <FormControl>
        <FormLabel inputId="productName">상품명</FormLabel>
        <Input
          id="productName"
          name="name"
          placeholder="상품명을 입력해주세요"
          value={formData.name}
          onChange={handleChange}
          onBlur={handleBlur}
        />
      </FormControl>

      <FormControl>
        <FormLabel inputId="productDesc">상품 소개</FormLabel>
        <Textarea
          id="productDesc"
          name="description"
          placeholder="상품 소개를 입력해주세요"
          value={formData.description}
          onChange={handleChange}
          onBlur={handleBlur}
        />
      </FormControl>

      <FormControl>
        <FormLabel inputId="productPrice">판매 가격</FormLabel>
        <Input
          id="productPrice"
          name="price"
          type="text"
          placeholder="판매 가격을 입력해주세요"
          value={formData.price}
          onChange={handlePriceChange}
          onBlur={handleBlur}
        />
      </FormControl>

      <FormControl>
        <FormLabel inputId="tags">태그</FormLabel>
        <TagsInput
          id="tags"
          placeholder="태그를 입력해주세요"
          onTagsChange={handleTagsChange}
          onBlur={handleBlur}
        />
      </FormControl>
    </form>
  );
};

export default AddProductForm;

const ProductFormContainer = css`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  padding-bottom: 70px;
`;

const FormHeader = css`
  display: flex;
  align-items: center;
  justify-content: space-between;

  h4 {
    margin-bottom: 0;
  }
`;
