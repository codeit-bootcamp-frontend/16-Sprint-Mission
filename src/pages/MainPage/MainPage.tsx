import { Link } from "react-router-dom";
import styles from "./MainPage.module.scss";
import Footer from "../../layouts/Footer";

const MainPage = () => {
  return (
    <>
      <div id="container" className={styles["mainPage"]}>
        {/* sec__top-banner */}
        <section className={styles["sec__top-banner"]}>
          <div className={styles["inner"]}>
            <div className={styles["top-banner__textArea"]}>
              <h2 className={styles["mainPage__title"]}>
                일상의 모든 물건을 <br />
                거래해 보세요
              </h2>
              <Link
                to="/items"
                aria-label="물건 목록 페이지로 이동 하기"
                className={`btn lg ${styles["textArea__link"]}`}
              >
                구경하러 가기
              </Link>
            </div>
            <figure className={styles["top-banner__imgArea"]}>
              <img
                width="746"
                height="340"
                srcSet={`
                ${process.env.PUBLIC_URL}/assets/images/main/top_banner_img_mo.png 375w,
                ${process.env.PUBLIC_URL}/assets/images/main/top_banner_img.png 746w
              `}
                sizes="(max-width: 767px) 375px, 746px"
                src={`${process.env.PUBLIC_URL}/assets/images/main/top_banner_img.png`}
                alt="판다가 손을 들고 있는 이미지"
              />
            </figure>
          </div>
        </section>
        {/* sec__service */}
        <section className={styles["sec__service"]}>
          <div className={styles["inner"]}>
            {/* service__item-hot */}
            <article className={styles["service__article"]}>
              <div
                className={`${styles["service__item"]} ${styles["service__item--hot"]}`}
              >
                <figure className={styles["service__imgArea"]}>
                  <img
                    width="588"
                    height="444"
                    srcSet={`
                  ${process.env.PUBLIC_URL}/assets/images/main/service_hot_img_mo.png 375w,
                  ${process.env.PUBLIC_URL}/assets/images/main/service_hot_img.png 588w
                `}
                    sizes="(max-width: 767px) 375px, 588px"
                    src={`${process.env.PUBLIC_URL}/assets/images/main/service_hot_img.png`}
                    alt="Hot item 서비스 이미지"
                  />
                </figure>
                <div className={styles["service__textArea"]}>
                  <span className={styles["textArea__cat"]}>Hot item</span>
                  <h2 className={styles["textArea__title"]}>
                    인기 상품을
                    <br /> 확인해 보세요
                  </h2>
                  <p className={styles["textArea__desc"]}>
                    가장 HOT한 중고거래 물품을 판다 마켓에서 확인해 보세요
                  </p>
                </div>
              </div>
            </article>
            {/* service__item-search */}
            <article className={styles["service__article"]}>
              <div
                className={`${styles["service__item"]} ${styles["service__item--search"]}`}
              >
                <figure className={styles["service__imgArea"]}>
                  <img
                    width="579"
                    height="444"
                    srcSet={`
                  ${process.env.PUBLIC_URL}/assets/images/main/service_search_img_mo.png 375w,
                  ${process.env.PUBLIC_URL}/assets/images/main/service_search_img.png 579w
                `}
                    sizes="(max-width: 767px) 375px, 579px"
                    src={`${process.env.PUBLIC_URL}/assets/images/main/service_search_img.png`}
                    alt="Search 서비스 이미지"
                  />
                </figure>
                <div className={styles["service__textArea"]}>
                  <span className={styles["textArea__cat"]}>Search</span>
                  <h2 className={styles["textArea__title"]}>
                    구매를 원하는 <br />
                    상품을 검색하세요
                  </h2>
                  <p className={styles["textArea__desc"]}>
                    구매하고 싶은 물품은 검색해서 쉽게 찾아보세요
                  </p>
                </div>
              </div>
            </article>
            {/* service__item-register */}
            <article className={styles["service__article"]}>
              <div
                className={`${styles["service__item"]} ${styles["service__item--register"]}`}
              >
                <figure className={styles["service__imgArea"]}>
                  <img
                    width="572"
                    height="444"
                    srcSet={`
                  ${process.env.PUBLIC_URL}/assets/images/main/service_register_img_mo.png 375w,
                  ${process.env.PUBLIC_URL}/assets/images/main/service_register_img.png 572w
                `}
                    sizes="(max-width: 767px) 375px, (max-width: 1199px) 744px, 572px"
                    src={`${process.env.PUBLIC_URL}/assets/images/main/service_register_img.png`}
                    alt="Register 서비스 이미지"
                  />
                </figure>
                <div className={styles["service__textArea"]}>
                  <span className={styles["textArea__cat"]}>Register</span>
                  <h2 className={styles["textArea__title"]}>
                    판매를 원하는 <br />
                    상품을 등록하세요
                  </h2>
                  <p className={styles["textArea__desc"]}>
                    어떤 물건이든 판매하고 싶은 상품을 쉽게 등록하세요
                  </p>
                </div>
              </div>
            </article>
          </div>
        </section>
        {/* sec__bottom-banner */}
        <section className={styles["sec__bottom-banner"]}>
          <div className={styles["inner"]}>
            <div className={styles["bottom-banner__textArea"]}>
              <h2 className={styles["mainPage__title"]}>
                믿을 수 있는 <br />
                판다마켓 중고 거래
              </h2>
            </div>
            <figure className={styles["bottom-banner__imgArea"]}>
              <img
                srcSet={`
                ${process.env.PUBLIC_URL}/assets/images/main/bottom_banner_img_mo.png 375w,
                ${process.env.PUBLIC_URL}/assets/images/main/bottom_banner_img.png 746w
              `}
                sizes="(max-width: 767px) 375px, 746px"
                src={`${process.env.PUBLIC_URL}/assets/images/bottom_banner_img.png`}
                alt="배너 영역의 판다 캐릭터끼리 대화 하는 모습이 담긴 이미지"
              />
            </figure>
          </div>
        </section>
      </div>
      <Footer />
    </>
  );
};

export default MainPage;
