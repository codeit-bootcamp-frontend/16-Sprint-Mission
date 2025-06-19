import styles from "./Additem.module.css";
import { useRef, useState } from "react";
import ImageUpload from "./components/ImageUpload";
import { validateField } from "./hooks/useValidation";
import TextInputField from "./components/TextInputField";
import TagInput from "./components/TagInput";

function Additem() {
  const formRef = useRef(null);
  const [errors, setErrors] = useState("");
  const [imageFile, setImageFile] = useState(null);
  const [imagePreviewUrl, setImagePreviewUrl] = useState(null);
  const [tags, setTags] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = formRef.current;

    const newErrors = {};
    let isValid = true;

    for (const field of form.elements) {
      if (!field.name) continue;

      // 태그는 상태에서 검사
      const value =
        field.name === "productTag"
          ? tags
          : field.name === "uploadImage"
          ? imageFile
          : field.value;

      const error = validateField(field.name, value);

      if (error) {
        isValid = false;
        newErrors[field.name] = error;
      }
    }

    setErrors(newErrors);
    if (!isValid) return;

    // 유효하면 데이터 수집
    const formData = {};
    for (const field of form.elements) {
      if (
        !field.name ||
        field.name === "productTag" ||
        field.name === "uploadImage"
      )
        continue;
      formData[field.name] = field.value;
    }

    formData["productTag"] = tags;
    formData["uploadImage"] = imageFile;

    console.log("제출 데이터:", formData);
  };

  const handleImageChange = (file, previewUrl) => {
    setImageFile(file);
    setImagePreviewUrl(previewUrl);
  };

  const handleBlur = (e) => {
    const { name, value } = e.target;
    const error = validateField(name, value);

    setErrors((prev) => ({
      ...prev,
      [name]: error,
    }));
  };

  return (
    <form ref={formRef} className={styles.form} onSubmit={handleSubmit}>
      <header className={styles.header}>
        <h1 className={styles.title}>상품 등록하기</h1>
        <button type="submit" className={styles.submitButton}>
          등록
        </button>
      </header>
      <div className={styles.inputContainer}>
        <ImageUpload onImageChange={handleImageChange} />
        <TextInputField
          label="상품명"
          name="productName"
          onChange={handleBlur}
          onBlur={handleBlur}
          placeholder="상품명을 입력해주세요"
          error={errors.productName}
          wrapperClass={styles.inputWrapper}
          inputClass={styles.input}
          errorClass={styles.errorText}
        />
        <TextInputField
          label="상품 소개"
          name="productDescription"
          onChange={handleBlur}
          onBlur={handleBlur}
          placeholder="상품 소개를 입력해주세요"
          as="textarea"
          error={errors.productDescription}
          wrapperClass={styles.inputWrapper}
          textAreaClass={styles.textArea}
          errorClass={styles.errorText}
        />
        <TextInputField
          label="상품가격"
          name="productPrice"
          onChange={handleBlur}
          onBlur={handleBlur}
          placeholder="상품가격을 입력해주세요"
          error={errors.productPrice}
          wrapperClass={styles.inputWrapper}
          inputClass={styles.input}
          errorClass={styles.errorText}
        />
        <TagInput
          name="productTag"
          label="태그"
          tags={tags}
          setTags={setTags}
          error={errors.productTag}
          onBlur={handleBlur}
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
export default Additem;
