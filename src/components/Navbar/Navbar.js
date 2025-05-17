import styles from "./Navbar.module.css";
import logo from "../../assets/images/logo-panda-face.png";
import profile from "../../assets/images/profile-image.png";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className={styles.nav}>
      <div className={styles.heading}>
        <Link to="/" className={styles.logo}>
          <img src={logo} alt="판다 로고" className={styles.logoImage} />
          <span>판다마켓</span>
        </Link>
        <ul className={styles.links}>
          <li>
            <Link to="/board" className={styles.link}>
              자유게시판
            </Link>
          </li>
          <li>
            <Link to="/items" className={styles.link}>
              중고마켓
            </Link>
          </li>
        </ul>
      </div>
      <div>
        <img src={profile} alt="유저 프로필 이미지" className={styles.profileImage} />
      </div>
    </nav>
  );
}

export default Navbar;
