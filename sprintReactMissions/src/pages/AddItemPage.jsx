// 상품 등록 페이지
import React from "react";
import ItemImagesUpload from "../components/ItemImagesUpload";
import "../styles/additempage.css";

function AddItemPage() {
  return (
    <section>
      <div>
        <h3>상품 등록하기</h3>
        <button>등록</button>
      </div>

      <form>
        <div>
          <label>상품이미지</label>
          <ItemImagesUpload />
        </div>

        <div>
          <label>상품명</label>
          <input placeholder="상품명을 입력해주세요"></input>
        </div>

        <div>
          <label>상품 소개</label>
          <input placeholder="상품 소개를 입력해주세요"></input>
        </div>

        <div>
          <label>판매가격</label>
          <input placeholder="판매가격을 입력해주세요"></input>
        </div>

        <div>
          <label>태그</label>
          <input placeholder="태그를 입력해주세요"></input>
        </div>
      </form>
    </section>
  );
}

export default AddItemPage;
