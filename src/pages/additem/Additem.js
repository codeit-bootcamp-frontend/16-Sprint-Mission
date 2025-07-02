import styles from "./Additem.module.css";
import { useForm } from "./hooks/useForm";
import ImageUpload from "./components/ImageUpload";
import TextInputField from "./components/TextInputField";
import TagInput from "./components/TagInput";
import { useValidation } from "./hooks/useValidation";
import { formatWithCommas } from "./utils/formatUtils";

export default function Additem() {
  console.count('rendering')
  const { validations } = useValidation();
  const {
    errors,
    handleChange,
    handleBlur,
    handleSubmit,
    getFieldValue,
    setFieldValue,
  } = useForm({
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

  // 필수 필드만 모두 채워졌는지 확인
  const isSubmitEnabled =
    getFieldValue("productName").trim() !== "" &&
    getFieldValue("productDescription").trim() !== "" &&
    getFieldValue("productPrice").trim() !== "" &&
    Array.isArray(getFieldValue("productTag")) &&
    getFieldValue("productTag").length > 0;

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
          previewUrl={
            getFieldValue("uploadImage") &&
            URL.createObjectURL(getFieldValue("uploadImage"))
          }
        />
        {<p className={styles.errorText}>{errors.uploadImage || "\u00A0"}</p>}

        <TextInputField
          label="상품명"
          name="productName"
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
          onChange={handleChange("productPrice")}
          onBlur={handleBlur("productPrice", formatWithCommas)}
          placeholder="숫자만 입력해주세요"
          error={errors.productPrice}
          wrapperClass={styles.inputWrapper}
          inputClass={styles.input}
          errorClass={styles.errorText}
        />

        <TagInput
          name="productTag"
          label="태그"
          tags={getFieldValue("productTag")}
          // 태그 배열이 바뀔 때만 호출될 “상태 업데이트” 함수
          setTags={(newTags) => {
            setFieldValue("productTag", newTags);
          }}
          onChange={handleChange("productTag")}
          onBlur={() =>
            handleBlur("productTag")({
              target: { value: getFieldValue("productTag") },
            })
          }
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
