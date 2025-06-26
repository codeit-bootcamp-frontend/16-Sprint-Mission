import { useState } from "react";
import Input from "../components/common/input/Input";
import Header from "../components/layout/Header";
import { Link } from "react-router-dom";
import Nav from "../components/layout/Nav";
import styled from "styled-components";
import Button from "../components/common/Button/Button";

function AddItem() {
  const [itemName, setItemName] = useState("");

  return (
    <div>
      <Header
        leftChild={
          <Link to="/">
            <div style={{ display: "flex", alignItems: "center" }}>
              <img src="/src/assets/Logo.jpg" alt="Logo" /> <Nav />
            </div>
          </Link>
        }
        rightChild={
          <img src="/src/assets/ProfileIcon.jpg" alt="Profile Icon" />
        }
      />
      <StyledWrapper>
        <div>
          <h1>상품등록하기</h1>
          <Button variant="inactive" text="등록" />
        </div>
        <h2>상품 이미지</h2>
        <Input placeholder="이미지 등록" />
        <h2>상품명</h2>
        <Input value={itemName} placeholder="상품명을 입력해주세요" />
        <h2>상품 소개</h2>
        <Input placeholder="상품 소개를 입력해주세요" />
        <h2>판매 가격</h2>
        <Input placeholder="판매 가격을 입력해주세요" />
        <h2>태그</h2>
        <Input placeholder="태그를 입력해주세요" />
      </StyledWrapper>
    </div>
  );
}

export default AddItem;

const StyledWrapper = styled.div`
  margin: 0 auto;
  width: 100%;
  max-width: 344px;
  @media (min-width: 768px) {
    padding: 0 24px;
    max-width: 696px;
  }

  @media (min-width: 1200px) {
    padding: 0 0;
    max-width: 1200px;
  }
`;
