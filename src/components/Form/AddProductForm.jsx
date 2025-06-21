/** @jsxImportSource @emotion/react */
import { useRef } from "react";
import * as styles from "./AddProductFormStyle";
import SectionTitle from "../ui/SectionTitle";
import Button from "../ui/Button";
import FormControl from "../ui/Form/FormControl";
import FormLabel from "../ui/Form/FormLabel";
import ImageFileUploader from "../ImageFileUploader/ImageFileUploader";
import Input from "../ui/Input";
import Textarea from "../ui/Textarea";
import TagsInput from "../ui/Tag/TagsInput";
import useForm from "../../hooks/useForm";

const AddProductForm = ({ title }) => {
  const formRef = useRef(null);

  const {
    tags,
    handleTagsChange,
    handlePriceInput,
    handleBlur,
    validateForm,
    isFormValid,
  } = useForm(formRef);

  return (
    <form
      css={styles.ProductFormContainer}
      onSubmit={validateForm}
      ref={formRef}
    >
      <header css={styles.FormHeader}>
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
        <Input
          id="productName"
          name="name"
          placeholder="상품명을 입력해주세요"
          onBlur={handleBlur}
        />
      </FormControl>

      <FormControl>
        <FormLabel inputId="productDesc">상품 소개</FormLabel>
        <Textarea
          id="productDesc"
          name="description"
          placeholder="상품 소개를 입력해주세요"
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
          onChange={handlePriceInput}
          onBlur={handleBlur}
        />
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
