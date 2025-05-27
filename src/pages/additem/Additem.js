import styles from "./Additem.module.css";
import { useRef, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faTimesCircle } from "@fortawesome/free-solid-svg-icons";

function Additem() {
  const fileInputRef = useRef(null);

  const [form, setForm] = useState({
    productName: "",
    productDescription: "",
    price: "",
    tags: [],
  });
  const [imagePreview, setImagePreview] = useState(null);
  const [tagInput, setTagInput] = useState("");
  const [isComposing, setIsComposing] = useState(false);
  const [errors, setErrors] = useState({});

  const validateField = (name, value) => {
    switch (name) {
      case "productName":
        if (!value.trim()) return "상품명을 입력해주세요.";
        break;
      case "productDescription":
        if (!value.trim()) return "상품 소개를 입력해주세요.";
        break;
      case "price":
        if (!value.trim()) return "가격을 입력해주세요.";
        if (isNaN(value)) return "숫자만 입력해주세요.";
        break;
      default:
        return "";
    }
    return "";
  };

  const isFormValid = () => {
    const hasError = Object.values(errors).some((error) => error);
    const hasEmpty =
      !form.productName.trim() ||
      !form.productDescription.trim() ||
      !form.price.trim();
    return !(hasError || hasEmpty);
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (!file) return;
    if (imagePreview) {
      alert("이미지는 한 개만 등록할 수 있어요!");
      e.target.value = "";
      return;
    }

    const imageUrl = URL.createObjectURL(file);
    setImagePreview(imageUrl);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]: value,
    }));

    const error = validateField(name, value);
    setErrors((prev) => ({
      ...prev,
      [name]: error,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationResults = {};
    Object.entries(form).forEach(([key, val]) => {
      const err = validateField(key, val);
      if (err) validationResults[key] = err;
    });

    setErrors(validationResults);
    if (Object.keys(validationResults).length > 0) return;

    alert("등록되었습니다 (는 아직 저장 안 됨)");
    console.log({ ...form, imagePreview });
  };

  return (
    <form onSubmit={handleSubmit} className={styles.form}>
      <header className={styles.header}>
        <h1 className={styles.title}>상품 등록하기</h1>
        <button
          type="submit"
          disabled={!isFormValid()}
          className={styles.submitButton}
        >
          등록
        </button>
      </header>
      <div className={styles.inputContainer}>
        <div className={styles.inputWrapper}>
          <h3>상품 이미지</h3>
          <input
            type="file"
            accept="image/*"
            ref={fileInputRef}
            onChange={handleImageChange}
            style={{ display: "none" }}
          />
          <div className={styles.imageWrapper}>
            <div
              className={styles.imageUploadBox}
              onClick={() => fileInputRef.current.click()}
            >
              <FontAwesomeIcon icon={faPlus} className={styles.plus} />
              <div>이미지 등록</div>
            </div>
            {imagePreview && (
              <div className={styles.imagePreviewWrapper}>
                <img
                  src={imagePreview}
                  alt="미리보기"
                  className={styles.imagePreview}
                />
                <div
                  type="button"
                  onClick={() => {
                    setImagePreview(null);
                    fileInputRef.current.value = "";
                  }}
                  className={styles.removeImageButton}
                >
                  <FontAwesomeIcon icon={faTimesCircle} />
                </div>
              </div>
            )}
            {errors.image && <p className={styles.errorText}>{errors.image}</p>}
          </div>
        </div>
        <div className={styles.inputWrapper}>
          <h3>상품명</h3>
          <input
            name="productName"
            value={form.productName}
            onChange={handleChange}
            className={styles.input}
            placeholder="상품명을 입력해주세요"
          />
          {errors.productName && (
            <p className={styles.errorText}>{errors.productName}</p>
          )}
        </div>
        <div className={styles.inputWrapper}>
          <h3>상품 소개</h3>
          <textarea
            name="productDescription"
            value={form.productDescription}
            onChange={handleChange}
            className={styles.textArea}
            placeholder="상품 소개를 입력해주세요"
          />
          {errors.productDescription && (
            <p className={styles.errorText}>{errors.productDescription}</p>
          )}
        </div>
        <div className={styles.inputWrapper}>
          <h3>판매 가격</h3>
          <input
            name="price"
            value={form.price}
            onChange={handleChange}
            className={styles.input}
            placeholder="판매 가격을 입력해주세요"
          />
          {errors.price && <p className={styles.errorText}>*{errors.price}</p>}
        </div>
        <div className={styles.inputWrapper}>
          <h3>태그</h3>
          <input
            type="text"
            value={tagInput}
            onChange={(e) => setTagInput(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "Enter"&& !isComposing) {
                e.preventDefault();
                const trimmed = tagInput.trim();
                if (trimmed && !form.tags.includes(trimmed)) {
                  setForm((prev) => ({
                    ...prev,
                    tags: [...prev.tags, trimmed],
                  }));
                }
                setTagInput("");
              }
            }}
            onCompositionStart={() => setIsComposing(true)}
            onCompositionEnd={() => setIsComposing(false)}
            placeholder="태그를 입력하고 Enter키를 눌러주세요"
            className={styles.input}
          />
          {errors.tags && <p className={styles.errorText}>{errors.tags}</p>}

          <div className={styles.tagsContainer}>
            {form.tags.map((tag, idx) => (
              <div key={idx} className={styles.tag}>
                #{tag}
                <button
                  type="button"
                  onClick={() => {
                    setForm((prev) => ({
                      ...prev,
                      tags: prev.tags.filter((t) => t !== tag),
                    }));
                  }}
                  className={styles.removeTagButton}
                >
                  <FontAwesomeIcon icon={faTimesCircle} />
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </form>
  );
}

export default Additem;
