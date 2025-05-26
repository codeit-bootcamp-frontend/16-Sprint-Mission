import { useRef, useState } from "react";

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
    <form onSubmit={handleSubmit}>
      <header style={{ display: "flex", justifyContent: "space-between" }}>
        <h1>상품 등록하기</h1>
        <button
          type="submit"
          disabled={!isFormValid()}
          style={{
            backgroundColor: isFormValid() ? "#3692FF" : "#ccc",
            color: "white",
            cursor: isFormValid() ? "pointer" : "not-allowed",
          }}
        >
          등록
        </button>
      </header>

      <h3>상품 이미지</h3>
      <input
        type="file"
        accept="image/*"
        ref={fileInputRef}
        onChange={handleImageChange}
        style={{ display: "none" }}
      />
      <button type="button" onClick={() => fileInputRef.current.click()}>
        이미지 등록
      </button>
      {imagePreview && (
        <div style={{ marginTop: "12px" }}>
          <img src={imagePreview} alt="미리보기" width="200" />
          <button
            type="button"
            onClick={() => {
              setImagePreview(null);
              fileInputRef.current.value = "";
            }}
            style={{
              marginLeft: "8px",
              background: "transparent",
              border: "none",
              cursor: "pointer",
              fontWeight: "bold",
            }}
          >
            ×
          </button>
        </div>
      )}
      {errors.image && <p style={{ color: "red" }}>{errors.image}</p>}

      <h3>상품명</h3>
      <input
        name="productName"
        value={form.productName}
        onChange={handleChange}
      />
      {errors.productName && <p style={{ color: "red" }}>{errors.productName}</p>}

      <h3>상품 소개</h3>
      <textarea
        name="productDescription"
        value={form.productDescription}
        onChange={handleChange}
      />
      {errors.productDescription && (
        <p style={{ color: "red" }}>{errors.productDescription}</p>
      )}

      <h3>판매 가격</h3>
      <input name="price" value={form.price} onChange={handleChange} />
      {errors.price && <p style={{ color: "red" }}>*{errors.price}</p>}

      <h3>태그</h3>
      <input
        type="text"
        value={tagInput}
        onChange={(e) => setTagInput(e.target.value)}
        onKeyDown={(e) => {
          if (e.key === "Enter") {
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
        placeholder="태그 입력 후 Enter"
      />
      {errors.tags && <p style={{ color: "red" }}>{errors.tags}</p>}

      <div style={{ display: "flex", flexWrap: "wrap", marginTop: "12px" }}>
        {form.tags.map((tag, idx) => (
          <div
            key={idx}
            style={{
              display: "flex",
              alignItems: "center",
              padding: "6px 10px",
              backgroundColor: "#f0f0f0",
              borderRadius: "20px",
              marginRight: "8px",
              marginBottom: "8px",
              fontSize: "14px",
            }}
          >
            #{tag}
            <button
              type="button"
              onClick={() => {
                setForm((prev) => ({
                  ...prev,
                  tags: prev.tags.filter((t) => t !== tag),
                }));
              }}
              style={{
                marginLeft: "8px",
                background: "transparent",
                border: "none",
                cursor: "pointer",
                fontWeight: "bold",
              }}
            >
              ×
            </button>
          </div>
        ))}
      </div>
    </form>
  );
}

export default Additem;
