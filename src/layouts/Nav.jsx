import logoImg from "../assets/logo/panda-face_small.svg";
import styles from "./Nav.module.css";
import { Link, Outlet, useLocation } from "react-router-dom";

const Nav = () => {
  const location = useLocation();
  const isMarketPage =
    location.pathname === "/items" || location.pathname === "/additem";

  return (
    <>
      <nav className={styles.container}>
        <div className={styles["link-container"]}>
          <div className={styles["logo-container"]}>
            <img
              src={logoImg}
              alt="판다마켓 로고"
              className={styles["logo-img"]}
            />
            <button className={`btn ${styles.logo}`} type="button">
              <Link to="/">판다마켓</Link>
            </button>
          </div>
          <button className={`btn ${styles.link}`} type="button">
            자유게시판
          </button>
          <button
            className={`btn ${styles.link} ${
              isMarketPage ? styles.selected : ""
            }`}
            type="button"
          >
            <Link to={"/items"}>중고마켓</Link>
          </button>
        </div>
        <Link to="/login">
          <button
            className={`btn primary-btn ${styles["login-btn"]}`}
            type="button"
          >
            로그인
          </button>
        </Link>
      </nav>
      <main>
        <Outlet />
      </main>
    </>
  );
};

export default Nav;
