// 상단 네비게이션바
import { Link, useLocation } from "react-router-dom";
import "../styles/Navi.css";

const Navi = () => {
  const location = useLocation();

  const isAddItemPage = location.pathname === "/additem";

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
          <Link
            to="/additem"
            className={`nav-link ${isAddItemPage ? "highlight" : ""}`}
          >
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
