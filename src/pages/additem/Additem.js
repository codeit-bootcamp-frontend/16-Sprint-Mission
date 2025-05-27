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
  const [isPriceFocused, setIsPriceFocused] = useState(false);
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
      // 🔥 이미지가 이미 등록되어 있다면 덮어쓰기 막기
      setErrors((prev) => ({
        ...prev,
        imagePreview: "이미지는 한 개만 등록할 수 있어요!",
      }));

      // 선택창에서 파일 선택해도 input 상태는 유지됨 → 값 리셋 필요
      e.target.value = "";

      return;
    }

    const imageUrl = URL.createObjectURL(file);
    setImagePreview(imageUrl);

    // 🔥 이미지 정상 등록 시 에러 초기화
    setErrors((prev) => ({
      ...prev,
      imagePreview: "",
    }));
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === "price") {
      // 쉼표 제거 후 숫자만 추출
      const rawValue = value.replace(/,/g, "");
      if (!/^\d*$/.test(rawValue)) return; // 숫자만 입력 허용

      setForm((prev) => ({
        ...prev,
        price: rawValue,
      }));

      const error = validateField(name, rawValue);
      setErrors((prev) => ({
        ...prev,
        [name]: error,
      }));
      return;
    }

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

    // ✅ 이미지 추가 검사
    if (!imagePreview) {
      validationResults.imagePreview = "이미지를 등록해주세요.";
    }

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
            onClick={(e) => {
              e.target.value = "";
            }}
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
          </div>
          {errors.imagePreview && (
            <p className={styles.errorText}>{errors.imagePreview}</p>
          )}
        </div>
        <div className={styles.inputWrapper}>
          <h3>상품명</h3>
          <input
            name="productName"
            value={form.productName}
            onChange={handleChange}
            onBlur={handleChange}
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
            onBlur={handleChange}
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
            value={
              isPriceFocused
                ? form.price
                : Number(form.price || 0).toLocaleString()
            }
            onFocus={() => setIsPriceFocused(true)}
            onBlur={() => setIsPriceFocused(false)}
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
            onBlur={handleChange}
            onKeyDown={(e) => {
              if (e.key === "Enter" && !isComposing) {
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
