import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { styled } from "styled-components";
import Button from "../components/button";
import CardImageUpload from "../components/CardImageUpload";
import Input from "../components/input";
import TagInput from "../components/Tag/TagInput";
import Textarea from "../components/textarea";
import Avatar from "../public/items/avatar.png";
import NavBarLogo from "../public/navbar-button.png";
import "../theme.css";

function AddItem() {
  const [itemImage, setItemImage] = useState("");
  const [itemName, setItemName] = useState("");
  const [itemDescription, setItemDescription] = useState("");
  const [itemPrice, setItemPrice] = useState("");
  const [itemTag, setItemTag] = useState([]);
  const [isButtonDisable, setIsButtonDisable] = useState(true);

  useEffect(() => {
    if (itemName && itemDescription && itemPrice && itemTag.length !== 0) {
      setIsButtonDisable(false);
    } else {
      setIsButtonDisable(true);
    }
  }, [itemName, itemDescription, itemPrice, itemTag]);

  return (
    <>
      <header className="header">
        <nav className="navbar">
          <div className="navbar-left-container">
            <Link to="/">
              <img
                src={NavBarLogo}
                alt="내비게이션바 판다마켓 로고"
                className="navbar-image"
              />
            </Link>
            <span className="navbar-button">자유게시판</span>
            <span className="navbar-button">중고마켓</span>
          </div>
          <img
            src={Avatar}
            alt="내비게이션바 나의 아바타 아이콘"
            className="navbar-avatar"
          />
        </nav>
      </header>
      <Wrapper>
        <Main>
          <RegisterItemBar>
            <Title>상품 등록하기</Title>
            <Button size="button-small" disabled={isButtonDisable}>
              등록
            </Button>
          </RegisterItemBar>
          <Content>
            <Subtitle>상품 이미지</Subtitle>
            <CardImageUpload handleImageUrl={setItemImage} />
            {itemImage && (
              <WarningMessage>
                *이미지 등록은 최대 1개까지 가능합니다.
              </WarningMessage>
            )}
          </Content>
          <Content>
            <Subtitle>상품명</Subtitle>
            <Input
              placeholder="상품명을 입력해주세요"
              onChange={(e) => setItemName(e.target.value)}
            />
          </Content>
          <Content>
            <Subtitle>상품 소개</Subtitle>
            <Textarea
              placeholder="상품 소개를 입력해주세요"
              height="282px"
              onChange={(e) => setItemDescription(e.target.value)}
            />
          </Content>
          <Content>
            <Subtitle>판매 가격</Subtitle>
            <Input
              placeholder="판매 가격을 입력해주세요"
              onChange={(e) => setItemPrice(e.target.value)}
            />
          </Content>
          <Content>
            <Subtitle>태그</Subtitle>
            <TagInput
              placeholder="태그를 입력해주세요"
              handleTagInput={setItemTag}
            />
          </Content>
        </Main>
      </Wrapper>
    </>
  );
}

export default AddItem;

const Wrapper = styled.div`
  width: 100%;
  margin-top: 16px;
  padding: 16px;
  display: flex;
  justify-content: center;
  box-sizing: border-box;
`;

const Main = styled.main`
  width: 1200px;
  display: flex;
  flex-direction: column;
  gap: 32px;

  @media (max-width: 1200px) {
    width: 100%;
  }
`;

const RegisterItemBar = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Title = styled.h1`
  font-size: 20px;
  font-weight: 700;
  line-height: 32px;
`;

const Subtitle = styled.h2`
  font-size: 18px;
  font-weight: 700;
  line-height: 26px;
`;

const Content = styled.section`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

const WarningMessage = styled.span`
  color: red;
  font-size: 14px;
`;
