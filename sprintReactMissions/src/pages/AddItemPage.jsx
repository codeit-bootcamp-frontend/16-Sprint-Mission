// 상품 등록 페이지
import React, { useState } from "react";
import SubmissionButton from "../components/SubmissionButton";
import ItemImagesUpload from "../components/ItemImagesUpload";
import TagInput from "../components/TagInput";
import "../styles/additempage.css";

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

      <form>
        <div>
          <label>상품이미지</label>
          <ItemImagesUpload />
        </div>

        <div>
          <label>상품명</label>
          <input
            placeholder="상품명을 입력해주세요"
            value={name}
            onChange={(e) => setName(e.target.value)}
          ></input>
        </div>

        <div>
          <label>상품 소개</label>
          <input
            placeholder="상품 소개를 입력해주세요"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          ></input>
        </div>

        <div>
          <label>판매가격</label>
          <input
            placeholder="판매가격을 입력해주세요"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
          ></input>
        </div>

        <div>
          <label>태그</label>
          <TagInput tags={tags} setTags={setTags} />
        </div>
      </form>
    </section>
  );
}

export default AddItemPage;
