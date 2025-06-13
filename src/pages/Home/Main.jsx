import styles from "./styles/Main.module.css";
import heroImg from "@assets/images/top_main.png";
import hotItemImg from "@assets/images/hot_item.png";
import searchImg from "@assets/images/search.png";
import registerImg from "@assets/images/register.png";
import bannerImg from "@assets/images/bottom_banner.png";
import { Link } from "react-router-dom";

function Main() {
  return (
    <main className={styles.main}>
      <section className={styles.main__hero}>
        <article className={`${styles.hero__content} ${styles.container} container`}>
          <div className={styles.hero__text}>
            <h2>일상의 모든 물건을 거래해보세요</h2>
            <Link to="items">
              <button aria-label="판다마켓 아이템으로 이동" type="button">
                <span>구경하러 가기</span>
              </button>
            </Link>
          </div>
          <img className={styles.hero__img} src={heroImg} alt="판다마켓메인이미지" />
        </article>
      </section>
      <section className={styles['main__hot-item']}>
        <article className={`${styles['hot-item__content']} ${styles.container} container`}>
          <img src={hotItemImg} alt="핫아이템" />
          <div className={styles['hot-item__text']}>
            <span>Hot item</span>
            <h2>인기 상품을 확인해 보세요</h2>
            <p>가장 HOT한 중고거래 물품을 판다 마켓에서 확인해 보세요</p>
          </div>
        </article>
      </section>
      <section className={styles.main__search}>
        <article className={`${styles.search__content} ${styles.container} container`}>
          <div className={styles.search__text}>
            <span>Search</span>
            <h2>구매를 원하는 상품을 검색하세요</h2>
            <p>구매하고 싶은 물품은 검색해서 쉽게 찾아보세요</p>
          </div>
          <img src={searchImg} alt="상품검색" />
        </article>
      </section>
      <section className={styles.main__register}>
        <article className={`${styles.register__content} ${styles.container} container`}>
          <img src={registerImg} alt="판매등록" />
          <div className={styles.register__text}>
            <span>Register</span>
            <h2>판매를 원하는 상품을 등록하세요</h2>
            <p>어떤 물건이든 판매하고 싶은 상품을 쉽게 등록하세요</p>
          </div>
        </article>
      </section>
      <section className={styles.main__banner}>
        <div className={`${styles.container} container`}>
          <div className={styles.banner__text}>
            믿을 수 있는
            <br />
            판다마켓 중고 거래
          </div>
          <img src={bannerImg} alt="판다마켓광고" />
        </div>
      </section>
    </main>
  );
}

export default Main;
