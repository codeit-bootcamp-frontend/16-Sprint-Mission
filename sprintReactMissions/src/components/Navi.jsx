// 상단 네비게이션바
import { NavLink, useLocation } from "react-router-dom";
import "../styles/Navi.css";

const Navi = () => {
  const location = useLocation();

  const isAddItemPage = location.pathname === "/additem";

  return (
    <nav className="navi">
      <div className="logo-section">
        <NavLink to="/">
          <img src="src/assets/Logo.png" alt="Logo" className="logo" />
        </NavLink>
        <div className="menu-section">
          <NavLink to="/free-board" className="nav-link">
            자유게시판
          </NavLink>
          <NavLink
            to="/additem"
            className={({ isActive }) =>
              `nav-link ${isActive ? "highlight" : ""}`
            }
          >
            중고마켓
          </NavLink>
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
