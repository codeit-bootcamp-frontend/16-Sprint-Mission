import "./css/HomePage.css";
import Button from "../components/Button";
import { useNavigate } from "react-router-dom";

const HomePage = () => {
  const navigate = useNavigate();
  const onClickVisit = () => {
    navigate("/items");
  };
  return (
    <main>
      {/* 상단 배너*/}
      <section className="banner">
        <div className="banner__content">
          <div className="banner__content__text">
            <span className="banner__content__text__title">
              일상의 모든 물건을
              <br />
              거래해 보세요
            </span>
            <Button type="large" onClick={onClickVisit}>
              구경하러 가기
            </Button>
          </div>
          <img
            src="img/Img_home_top.png"
            alt="판다마켓 메인배너 이미지"
            className="banner__content__img"
          />
        </div>
      </section>

      {/* 섹션 1 */}
      <section className="feature">
        {/* 1 */}
        <div className="feature__content">
          <img
            src="img/Img_home_01.png"
            className="feature__content__img"
            alt="물품을 구경하는 판다 이미지"
          />
          <div className="feature__content__text">
            <span className="feature__content__text__point">Hot item</span>
            <span className="feature__content__text__title">
              인기 상품을
              <br />
              확인해 보세요
            </span>
            <span className="feature__content__text__subtitle">
              가장 HOT한 중고거래 물품을
              <br />
              판다 마켓에서 확인해 보세요
            </span>
          </div>
        </div>
        {/* 2 */}
        <div className="feature__content feature__content__reverse">
          <div className="feature__content__text search-text">
            <span className="feature__content__text__point">Search</span>
            <span className="feature__content__text__title">
              구매를 원하는
              <br />
              상품을 검색하세요
            </span>
            <span className="feature__content__text__subtitle">
              구매하고 싶은 물품은 검색해서
              <br />
              쉽게 찾아보세요
            </span>
          </div>
          <img
            src="img/Img_home_02.png"
            className="feature__content__img"
            alt="상품 검색 이미지"
          />
        </div>
        {/* 3 */}
        <div className="feature__content">
          <img
            src="img/Img_home_03.png"
            className="feature__content__img"
            alt="상품 등록 이미지"
          />
          <div className="feature__content__text">
            <span className="feature__content__text__point">Register</span>
            <span className="feature__content__text__title">
              판매를 원하는
              <br />
              상품을 등록하세요
            </span>
            <span className="feature__content__text__subtitle">
              어떤 물건이든 판매하고 싶은 상품을
              <br />
              쉽게 등록하세요
            </span>
          </div>
        </div>
      </section>

      {/* 하단 배너 */}
      <section className="promotion__banner">
        <div className="promotion__banner__content">
          <span className="promotion__banner__content__title">
            믿을 수 있는
            <br />
            판다마켓 중고 거래
          </span>
          <img
            src="img/Img_home_promotion.png"
            alt="판다마켓 하단 프로모션 배너"
            className="promotion__banner__content__img"
            loading="lazy"
          />
        </div>
      </section>
    </main>
  );
};

export default HomePage;
