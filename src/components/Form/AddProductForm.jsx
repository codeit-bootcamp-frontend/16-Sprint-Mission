/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { useRef } from "react";
import SectionTitle from "../ui/SectionTitle";
import Button from "../ui/Button";
import FormControl from "../ui/Form/FormControl";
import FormLabel from "../ui/Form/FormLabel";
import ImageFileUploader from "../ImageFileUploader/ImageFileUploader";
import Input from "../ui/Input";
import Textarea from "../ui/Textarea";
import TagsInput from "../ui/Tag/TagsInput";
import useForm from "../../hooks/useForm";
import FormStyle, { FormHeaderStyle } from "./FormStyle";

const AddProductForm = ({ title }) => {
  const formRef = useRef(null);

  const formOptions = {
    customFieldValidators: {
      tags: (tags) => tags.length > 0,
    },
  };

  const {
    tags,
    handleTagsChange,
    handlePriceInput,
    handleBlur,
    validateForm,
    isFormValid,
    fieldErrors,
  } = useForm(formRef, formOptions);

  return (
    <form
      css={AddProductFormStyle}
      onSubmit={validateForm}
      ref={formRef}
      data-include-tags="true"
    >
      <header css={FormHeaderStyle}>
        <SectionTitle title={title} />
        <Button
          size="sm"
          variant="primary"
          disabled={!isFormValid}
          type="submit"
        >
          등록
        </Button>
      </header>

      <FormControl>
        <FormLabel>상품 이미지</FormLabel>
        <ImageFileUploader />
      </FormControl>

      <FormControl>
        <FormLabel inputId="productName">상품명</FormLabel>
        <div className="input-hint-wrap">
          <Input
            id="productName"
            name="name"
            placeholder="상품명을 입력해주세요"
            onBlur={handleBlur}
            isError={fieldErrors.name}
          />
          <span className="form-input-hint">{fieldErrors.name}</span>
        </div>
      </FormControl>

      <FormControl>
        <FormLabel inputId="productDesc">상품 소개</FormLabel>
        <div className="input-hint-wrap">
          <Textarea
            id="productDesc"
            name="description"
            placeholder="상품 소개를 입력해주세요"
            onBlur={handleBlur}
            isError={fieldErrors.description}
          />
          <span className="form-input-hint">{fieldErrors.description}</span>
        </div>
      </FormControl>

      <FormControl>
        <FormLabel inputId="productPrice">판매 가격</FormLabel>
        <div className="input-hint-wrap">
          <Input
            id="productPrice"
            name="price"
            type="text"
            placeholder="판매 가격을 입력해주세요"
            onChange={handlePriceInput}
            onBlur={handleBlur}
            isError={fieldErrors.price}
          />
          <span className="form-input-hint">{fieldErrors.price}</span>
        </div>
      </FormControl>

      <FormControl>
        <FormLabel inputId="tags">태그</FormLabel>
        <TagsInput
          id="tags"
          placeholder="태그를 입력해주세요"
          tags={tags}
          isFormTag={true}
          onTagsChange={handleTagsChange}
          onBlur={handleBlur}
        />
      </FormControl>
    </form>
  );
};

export default AddProductForm;

const AddProductFormStyle = css`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  padding-bottom: 70px;

  ${FormStyle};
`;
