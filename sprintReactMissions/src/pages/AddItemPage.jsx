// 상품 등록 페이지
import React, { useState } from "react";
import SubmissionButton from "../components/SubmissionButton";
import ItemImagesUpload from "../components/ItemImagesUpload";
import TagInput from "../components/TagInput";
import "../styles/additempage.css";
import FormField from "../components/FormField";

function AddItemPage() {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [tags, setTags] = useState([]);

  const isFormFilled =
    name.trim() && description.trim() && price.trim() && tags.length > 0;

  return (
    <section className="add-item-page">
      <header className="add-item-header">
        <h3 className="add-item-title">상품 등록하기</h3>
        <SubmissionButton isEnabled={isFormFilled} />
      </header>

      <form className="add-item-form">
        <div className="form-group">
          <label className="form-label">상품이미지</label>
          <ItemImagesUpload />
        </div>

        <FormField label="상품명">
          <input
            className="form-input"
            placeholder="상품명을 입력해주세요"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </FormField>

        <FormField label="상품 소개">
          <input
            className="form-big-input"
            placeholder="상품 소개를 입력해주세요"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </FormField>

        <FormField label="판매가격">
          <input
            className="form-input"
            placeholder="판매가격을 입력해주세요"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
          />
        </FormField>

        <div className="form-group">
          <label className="form-label">태그</label>
          <TagInput tags={tags} setTags={setTags} />
        </div>
      </form>
    </section>
  );
}

export default AddItemPage;
