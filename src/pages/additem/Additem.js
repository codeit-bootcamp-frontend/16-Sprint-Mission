import styles from "./Additem.module.css";
import { useForm } from "./hooks/useForm";
import ImageUpload from "./components/ImageUpload";
import TextInputField from "./components/TextInputField";
import TagInput from "./components/TagInput";
import { useValidation } from "./hooks/useValidation";
import { useRef } from "react";
import { formatWithCommas } from "./utils/formatUtils";

export default function Additem() {
  const productNameRef = useRef();
  const productDescriptionRef = useRef();
  const productPriceRef = useRef();
  const { validations } = useValidation();
  const { data, errors, handleChange, handleBlur, handleSubmit } = useForm({
    initialValues: {
      productName: "",
      productDescription: "",
      productPrice: "",
      productTag: [],
      uploadImage: null,
    },
    validations,
    onSubmit: (formData) => {
      // 콤마 제거 + 숫자형으로 변환
      const numericPrice = Number(formData.productPrice.replace(/,/g, ""));
      const payload = {
        ...formData,
        productPrice: numericPrice,
      };
      console.log("제출 데이터:", payload);
    },
  });

  const handlePriceChange = (e) => {
    const formatted = formatWithCommas(e.target.value);
    // 1) React state 갱신
    handleChange(
      "productPrice",
      formatWithCommas
    )({ target: { value: formatted } });
    // 2) DOM value도 즉시 갱신
    productPriceRef.current.value = formatted;
  };

  // 필수 필드만 모두 채워졌는지 확인
  const isSubmitEnabled =
    data.productName.trim() !== "" &&
    data.productDescription.trim() !== "" &&
    data.productPrice.trim() !== "" &&
    Array.isArray(data.productTag) &&
    data.productTag.length > 0;

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <header className={styles.header}>
        <h1 className={styles.title}>상품 등록하기</h1>
        <button
          type="submit"
          className={styles.submitButton}
          disabled={!isSubmitEnabled}
        >
          등록
        </button>
      </header>
      <div className={styles.inputContainer}>
        <ImageUpload
          onImageChange={(file) => {
            handleChange(
              "uploadImage",
              () => file
            )({ target: { value: file } });
          }}
          previewUrl={data.uploadImage && URL.createObjectURL(data.uploadImage)}
        />
        {<p className={styles.errorText}>{errors.uploadImage || "\u00A0"}</p>}

        <TextInputField
          label="상품명"
          name="productName"
          defaultValue=""
          ref={productNameRef}
          onChange={handleChange("productName")}
          onBlur={handleBlur("productName")}
          placeholder="상품명을 입력해주세요"
          error={errors.productName}
          wrapperClass={styles.inputWrapper}
          inputClass={styles.input}
          errorClass={styles.errorText}
        />

        <TextInputField
          as="textarea"
          label="상품 소개"
          name="productDescription"
          defaultValue=""
          ref={productDescriptionRef}
          onChange={handleChange("productDescription")}
          onBlur={handleBlur("productDescription")}
          placeholder="상품 소개를 입력해주세요"
          error={errors.productDescription}
          wrapperClass={styles.inputWrapper}
          textAreaClass={styles.textArea}
          errorClass={styles.errorText}
        />

        <TextInputField
          label="상품 가격"
          name="productPrice"
          defaultValue=""
          ref={productPriceRef}
          onChange={handlePriceChange}
          onBlur={handleBlur("productPrice")}
          placeholder="숫자만 입력해주세요"
          error={errors.productPrice}
          wrapperClass={styles.inputWrapper}
          inputClass={styles.input}
          errorClass={styles.errorText}
        />

        <TagInput
          name="productTag"
          label="태그"
          tags={data.productTag}
          // 태그 배열이 바뀔 때만 호출될 “상태 업데이트” 함수
          setTags={(newTags) =>
            // newTags 배열을 e.target.value처럼 흉내내서 useForm의 handleChange 실행
            handleChange(
              "productTag",
              () => newTags
            )({
              target: { value: newTags },
            })
          }
          onChange={handleChange("productTag")}
          onBlur={handleBlur("productTag")}
          error={errors.productTag}
          wrapperClass={styles.inputWrapper}
          inputClass={styles.input}
          errorClass={styles.errorText}
          tagContainerClass={styles.tagsContainer}
          tagClass={styles.tag}
          removeButtonClass={styles.removeTagButton}
        />
      </div>
    </form>
  );
}
