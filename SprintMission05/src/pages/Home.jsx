import { Link } from "react-router-dom";
import styled from "styled-components";

import Button from "../components/common/Button/Button";
import Footer from "../components/layout/Footer";
import Header from "../components/layout/Header";
import FeatureSection from "../components/layout/FeatureSection";
import HighlightBox from "../components/layout/HighlightBox";

import facebook from "../assets/social/facebook-logo.svg";
import twitter from "../assets/social/twitter-logo.svg";
import youtube from "../assets/social/youtube-logo.svg";
import instagram from "../assets/social/instagram-logo.svg";
import topImg from "../assets/home/hero-image.png";
import bottomImg from "../assets/home/bottom-banner-image.png";
import Feature1 from "../assets/home/feature1-image.png";
import Feature2 from "../assets/home/feature2-image.png";
import Feature3 from "../assets/home/feature3-image.png";

function Home() {
  return (
    <div>
      <Header
        leftChild={
          <Link to="/">
            <img src="/src/assets/Logo.jpg" alt="Logo" />
          </Link>
        }
        rightChild={
          <Link to="/Login">
            <Button text="로그인" />
          </Link>
        }
      />

      <main>
        <HighlightBox
          leftChild={
            <>
              <h1>일상의 모든 물건을 거래해보세요</h1>{" "}
              <Link to="/items">
                <Button variant="primary large round" text="구경하러가기" />
              </Link>
            </>
          }
          rightChild={
            <StyledHighlightImage
              src={topImg}
              alt="판다마켓의 마스코트인 판다가 손을 흔들고 있는 이미지입니다."
            />
          }
        />

        <FeatureSection
          leftChild={<StyledFeatureImage src={Feature1} alt="Feature 1" />}
          rightChild={
            <FeatureText>
              <h2>Hot item</h2>
              <h3>인기 상품을 확인해 보세요</h3>
              <p>
                가장 HOT한 중고거래 물품을 <br />
                판다 마켓에서 확인해 보세요
              </p>
            </FeatureText>
          }
        />

        <FeatureSection
          align="right"
          leftChild={
            <FeatureText>
              <h2>Search</h2>
              <h3>구매를 원하는 상품을 검색하세요</h3>
              <p>
                구매하고 싶은 물품은 검색해서 <br />
                쉽게 찾아보세요
              </p>
            </FeatureText>
          }
          rightChild={<StyledFeatureImage src={Feature2} alt="Feature 2" />}
        />

        <FeatureSection
          leftChild={<StyledFeatureImage src={Feature3} alt="Feature 3" />}
          rightChild={
            <FeatureText>
              <h2>Register</h2>
              <h3>판매를 원하는 상품을 등록하세요</h3>
              <p>
                어떤 물건이든 판매하고 싶은 상품을 <br />
                쉽게 등록하세요
              </p>
            </FeatureText>
          }
        />

        <HighlightBox
          leftChild={
            <FeatureText>
              <h1>믿을 수 있는</h1>
              <h1>판다마켓 중고 거래</h1>
            </FeatureText>
          }
          rightChild={
            <StyledHighlightImage
              src={bottomImg}
              alt="두 마스코트 판다가 즐겁게 거래하는 이미지입니다."
            />
          }
        />
      </main>

      <Footer
        leftChild="©codeit - 2024"
        centerChild={
          <div style={{ display: "flex", gap: "30px" }}>
            <Link to="/Privacy">Privacy Policy</Link>
            <Link to="/FAQ">FAQ</Link>
          </div>
        }
        rightChild={
          <div style={{ display: "flex", gap: "12px" }}>
            <a
              href="https://www.facebook.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={facebook} alt="페이스북" />
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={twitter} alt="트위터" />
            </a>
            <a
              href="https://www.youtube.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={youtube} alt="유튜브" />
            </a>
            <a
              href="https://www.instagram.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={instagram} alt="인스타그램" />
            </a>
          </div>
        }
      />
    </div>
  );
}

export default Home;

const StyledHighlightImage = styled.img`
  width: 375px;
  height: auto;

  @media (min-width: 768px) {
    width: 744px;
  }

  @media (min-width: 1200px) {
    width: 746px;
  }
`;

const StyledFeatureImage = styled.img`
  width: 344px;
  height: 259px;

  @media (min-width: 768px) {
    width: 696px;
    height: 524px;
  }

  @media (min-width: 1200px) {
    width: 579px;
    height: 444px;
  }
`;

const FeatureText = styled.div`
  h2 {
    font-size: 16px;
    font-weight: 700;
    color: var(--Blue-100);
  }

  h3 {
    font-size: 24px;
    font-weight: 700;
    margin: 8px 0;
  }

  p {
    font-size: 16px;
    font-weight: 500;
    line-height: 1.5;
    color: var(--gray-700);
    margin: 16px 0;
  }
`;
