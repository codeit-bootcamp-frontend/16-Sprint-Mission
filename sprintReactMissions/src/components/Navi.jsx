// 상단 네비게이션바
import { Link } from "react-router-dom";
import "../styles/Navi.css";

const Navi = () => {
  return (
    <nav className="navi">
      <div className="logo-section">
        <Link to="/">
          <img src="src/assets/Logo.png" alt="Logo" className="logo" />
        </Link>
        <div className="menu-section">
          <Link to="/free-board" className="nav-link">
            자유게시판
          </Link>
          <Link to="/items" className="nav-link">
            중고마켓
          </Link>
        </div>
      </div>
      <div className="profile-section">
        <img
          src="src/assets/profilePicture.png"
          alt="profile"
          className="profile-pic"
        />
      </div>
    </nav>
  );
};

export default Navi;
