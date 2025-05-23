import styles from "./Header.module.css";
import logoPandaImg from "../../assets/images/logo-panda.svg";
import logoTxtImg from "../../assets/images/logo-txt.svg";
import avatarImg from "../../assets/images/img-avatar.png";
import Nav from "../Nav";
import Avatar from "../Avatar";

const Header = () => {
  const handleAvatarClick = () => {
    console.log("clicked user avatar");
  };

  return (
    <header className={styles.header}>
      <div className={styles["header-container"]}>
        <div className={styles.logo}>
          <img
            className={styles["logo-img"]}
            src={logoPandaImg}
            alt="판다마켓 로고 이미지"
          />
          <img
            className={styles["logo-txt"]}
            src={logoTxtImg}
            alt="판다마켓 로고 텍스트"
          />
        </div>
        <Nav />
        <Avatar
          imgSrc={avatarImg}
          onClick={handleAvatarClick}
          className={styles["header-avatar"]}
        />
      </div>
    </header>
  );
};

export default Header;
