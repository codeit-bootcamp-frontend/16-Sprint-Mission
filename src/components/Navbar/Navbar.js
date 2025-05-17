import "./Navbar.css";
import logo from "../../assets/images/logo-panda-face.png";
import profile from "../../assets/images/profile-image.png";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav>
      <div className="heading">
        <Link to="/" className="logo">
          <img src={logo} alt="판다 로고" />
          <span>판다마켓</span>
        </Link>
        <ul className="links">
          <li>
            <Link to="/board" className="link">
              자유게시판
            </Link>
          </li>
          <li>
            <Link to="/items" className="link">
              중고마켓
            </Link>
          </li>
        </ul>
      </div>
      <div>
        <img src={profile} alt="유저 프로필 이미지" className="profile-image" />
      </div>
    </nav>
  );
}

export default Navbar;
