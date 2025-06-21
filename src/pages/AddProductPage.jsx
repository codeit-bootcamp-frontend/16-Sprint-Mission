import FormField from "../components/FormField";
import ImageUploadField from "../components/ImageUploadField";
import Button from "../components/Button";
import "../styles/addProduct.css";
import { useState } from "react";

function AddProductPage() {
  const [tags, setTags] = useState(["티셔츠", "상의"]);
  const [form, setForm] = useState({
    name: "",
    description: "",
    price: "",
    tags: "",
  });

  const handleTagDelete = (target) => {
    setTags((prev) => prev.filter((tag) => tag !== target));
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const isFormValid = Object.values(form).every((val) => val.trim() !== "");

  return (
    <>
      <form className="row">
        <div className="addProduct__header">
          <h1 className="addProduct__title">상품 등록하기</h1>
          <Button btnSize="small" width="74px" radius="xs" ariaLabel="상품 등록" isDisabled={!isFormValid}>
            등록
          </Button>
        </div>

        <ImageUploadField>
          {(fileInputProps, previewUrl, handleDelete) => (
            <div className="addProductImg__wrapper input__wrapper row">
              <label htmlFor="productImgUpload">상품 이미지</label>
              <input id="productImgUpload" {...fileInputProps} />
              <div className="addProductImg__field">
                <button
                  className="productImg__upload"
                  type="button"
                  aria-label="상품 이미지 추가"
                  onClick={fileInputProps.onClick}
                ></button>
                {previewUrl && (
                  <div className="productImg__preview">
                    <img className="productImg__preview" src={previewUrl} alt="추가된 상품 이미지" />
                    <button
                      className="productImg__preview-delete"
                      type="button"
                      aria-label="추가된 상품 이미지 삭제"
                      onClick={handleDelete}
                    ></button>
                  </div>
                )}
              </div>
            </div>
          )}
        </ImageUploadField>

        <FormField id="addProduct-name" name="name" placeholder="상품명을 입력해주세요" value={form.name} onChange={handleChange}>
          상품명
        </FormField>
        <FormField
          id="addProduct-description"
          name="description"
          placeholder="상품 소개를 입력해주세요"
          isTextarea={true}
          value={form.description}
          onChange={handleChange}
        >
          상품 소개
        </FormField>
        <FormField id="addProduct-price" name="price" placeholder="판매 가격을 입력해주세요" value={form.price} onChange={handleChange}>
          판매 가격
        </FormField>
        <FormField id="addProduct-tags" name="tags" placeholder="태그를 입력해주세요" value={form.tags} onChange={handleChange}>
          태그
        </FormField>
        <div className="addProduct__tags">
          {tags.map((tag) => (
            <span key={tag} className="addProduct__tag" onClick={() => handleTagDelete(tag)}>
              #{tag}
            </span>
          ))}
        </div>
      </form>
    </>
  );
}

export default AddProductPage;
