import { Link } from "react-router-dom";
import styles from "./Nav.module.css";
import { useIsLogin } from "../contexts/LoginStateContext";

const LINK_CLASSNAME = {
  false: "",
  true: "active",
};

const Nav = ({ currentSection }) => {
  const isLogin = useIsLogin();

  return (
    <header className={styles["page-header"]}>
      <nav className={styles["nav-container"]} aria-label="메인 페이지로 이동">
        <Link to="/" className={styles["nav-logo-container"]}>
          <img
            className={styles["nav-logo-img"]}
            src={"/images/Img_logo.png"}
            width={40}
            alt={"판다마켓 로고"}
            title={"판다마켓 로고"}
          />
          <span className={styles["nav-logo-text"]}>판다마켓</span>
        </Link>
        {isLogin && (
          <>
            <div className={styles["nav-link-container"]}>
              <Link
                to="/board"
                className={`${styles[`nav-link`]} ${
                  styles[LINK_CLASSNAME[currentSection === "board"]]
                }`}
              >
                자유게시판
              </Link>
              <Link
                to="/items"
                className={`${styles[`nav-link`]} ${
                  styles[LINK_CLASSNAME[currentSection === "items"]]
                }`}
              >
                중고마켓
              </Link>
            </div>
            <img
              className={styles["nav-profile"]}
              src={"/images/icon_profile.png"}
              width={40}
            />
          </>
        )}
        {!isLogin && (
          <Link
            to="/login"
            className={`button-style ${styles["nav-button"]}`}
            aria-label="로그인 페이지로 이동"
          >
            로그인
          </Link>
        )}
      </nav>
    </header>
  );
};

export default Nav;
