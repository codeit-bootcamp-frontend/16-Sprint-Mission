import { Link } from "react-router-dom";
import styles from "./Home.module.css";
import homeTopImg from "../../assets/images/Img_home_top.png";
import homeBottomImg from "../../assets/images/Img_home_bottom.png";
import mainImg1 from "../../assets/images/Img_home_01.png";
import mainImg2 from "../../assets/images/Img_home_02.png";
import mainImg3 from "../../assets/images/Img_home_03.png";
import Footer from "../../components/Footer/Footer";

export default function Home() {
  return (
    <>
      <div className={styles.wrapper}>
        <main>
          <section className={styles.heroSection}>
            <div className={styles.heroInner}>
              <div className={styles.heroText}>
                <h1 className={styles.title}>
                  <div>일상의 모든 물건을</div>
                  <div>거래해 보세요</div>
                </h1>
                <Link to="/items" className={styles.btnMd}>
                  구경하러 가기
                </Link>
              </div>
              <div className={styles.heroImageContainer}>
                <img
                  src={homeTopImg}
                  alt="랜딩 페이지 이미지"
                  className={styles.heroImage}
                />
              </div>
            </div>
          </section>

          <section className={styles.contentSection}>
            <div className={styles.contentBlock}>
              <div className={styles.imageContainer}>
                <img
                  src={mainImg1}
                  alt="첫 번째 아이템 콘텐츠 이미지"
                  className={styles.contentImage}
                />
              </div>
              <div className={styles.textBlock}>
                <p className={styles.category}>Hot item</p>
                <h2 className={styles.heading}>
                  <span>인기 상품을 </span>
                  확인해 보세요
                </h2>
                <p className={styles.description}>
                  가장 HOT한 중고거래 물품을
                  <br />
                  판다마켓에서 확인해 보세요
                </p>
              </div>
            </div>

            <div className={`${styles.contentBlock} ${styles.reverse}`}>
              <div className={styles.imageContainer}>
                <img
                  src={mainImg2}
                  alt="두 번째 아이템 콘텐츠 이미지"
                  className={styles.contentImage}
                />
              </div>
              <div className={styles.textBlockRight}>
                <p className={styles.category}>Search</p>
                <h2 className={styles.heading}>
                  <span>구매를 원하는 </span>
                  상품을 검색하세요
                </h2>
                <p className={styles.description}>
                  구매하고 싶은 물품은 검색해서
                  <br />
                  쉽게 찾아보세요
                </p>
              </div>
            </div>

            <div className={styles.contentBlock}>
              <div className={styles.imageContainer}>
                <img
                  src={mainImg3}
                  alt="세번째 아이템 콘텐츠 이미지"
                  className={styles.contentImage}
                />
              </div>
              <div className={styles.textBlock}>
                <p className={styles.category}>Register</p>
                <h2 className={styles.heading}>
                  <span>판매를 원하는 </span>
                  상품을 등록하세요
                </h2>
                <p className={styles.description}>
                  어떤 물건이든 판매하고 싶은 상품을
                  <br />
                  쉽게 등록하세요
                </p>
              </div>
            </div>
          </section>

          <section className={styles.bottomSection}>
            <div className={styles.heroInner}>
              <div className={styles.heroText}>
                <h1 className={styles.title}>
                  <div>믿을 수 있는</div>
                  <div>판다마켓 중고 거래</div>
                </h1>
              </div>
              <div className={styles.bottomImageContainer}>
                <img
                  src={homeBottomImg}
                  alt="랜딩 페이지 이미지"
                  className={styles.heroImage}
                />
              </div>
            </div>
          </section>
        </main>
      </div>
      <Footer />
    </>
  );
}
