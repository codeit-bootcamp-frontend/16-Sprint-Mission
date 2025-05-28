/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { useEffect, useState } from "react";
import SectionTitle from "../ui/SectionTitle";
import Button from "../ui/Button";
import FormControl from "../ui/Form/FormControl";
import FormLabel from "../ui/Form/FormLabel";
import ImageFileUploader from "../ImageFileUploader/ImageFileUploader";
import Input from "../ui/Input";
import Textarea from "../ui/Textarea";
import TagsInput from "../ui/Tag/TagsInput";
import {
  validateProductName,
  validateProductDescription,
  validateProductPrice,
} from "../../utils/validators";
import debounce from "../../utils/debounce";

const INITIAL_VALUES = {
  name: "",
  description: "",
  price: 0,
  tags: [],
};

const CHECK_FORM_DEBOUNCE_MS = 100;

const AddProductForm = ({ title }) => {
  const [formData, setFormData] = useState(INITIAL_VALUES);
  const [isFormValid, setIsFormValid] = useState(false);

  const handleFormInputChange = (e) => {
    const { name, value } = e.target;

    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleTagsChange = (updatedTags) => {
    setFormData((prev) => ({
      ...prev,
      tags: updatedTags,
    }));
  };

  const validateForm = (formData) => {
    const { name, description, price, tags } = formData;

    const isNameValid = validateProductName(name).isValid;
    const isDescriptionValid = validateProductDescription(description).isValid;
    const isPriceValid = validateProductPrice(price).isValid;
    const isTagsValid = tags.length > 0;

    const isAllValid =
      isNameValid && isDescriptionValid && isPriceValid && isTagsValid;
    setIsFormValid(isAllValid);
  };

  const handleFormInputBlur = () => {
    validateForm(formData);
  };

  useEffect(() => {
    debounce(validateForm(formData), CHECK_FORM_DEBOUNCE_MS);
  }, [formData]);

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
          onChange={handleFormInputChange}
          onBlur={handleFormInputBlur}
        />
      </FormControl>

      <FormControl>
        <FormLabel inputId="productDesc">상품 소개</FormLabel>
        <Textarea
          id="productDesc"
          name="description"
          placeholder="상품 소개를 입력해주세요"
          value={formData.description}
          onChange={handleFormInputChange}
          onBlur={handleFormInputBlur}
        />
      </FormControl>

      <FormControl>
        <FormLabel inputId="productPrice">판매 가격</FormLabel>
        <Input
          id="productPrice"
          name="price"
          type="number"
          placeholder="판매 가격을 입력해주세요"
          value={formData.price}
          onChange={handleFormInputChange}
          onBlur={handleFormInputBlur}
        />
      </FormControl>

      <FormControl>
        <FormLabel inputId="tags">태그</FormLabel>
        <TagsInput
          id="tags"
          placeholder="태그를 입력해주세요"
          onTagsChange={handleTagsChange}
          onBlur={handleFormInputBlur}
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
