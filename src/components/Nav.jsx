import { NavLink } from "react-router-dom";
import mobileLogeImg from "../assets/img_logo_m.png";
import logeImg from "../assets/img_logo.png";
import ProfileImg from "../assets/profile.png";
import "./css/Nav.css";

function getLinkStyle({ isActive }) {
  return {
    color: isActive ? "#3692FF" : "#333",
  };
}

function Nav() {
  return (
    <header className="header">
      <div className="header__logo">
        <a href="/" aria-label="홈으로 이동">
          <img
            className="header__logo-img"
            src={mobileLogeImg}
            srcSet={`${mobileLogeImg} 103w, ${logeImg} 153w`}
            sizes="(max-width: 767px) 103px, 153px"
            alt="판다마켓"
          />
        </a>
      </div>
      <ul className="nav">
        <li>
          <NavLink to="/" style={getLinkStyle}>
            자유게시판
          </NavLink>
        </li>
        <li>
          <NavLink to="/items" style={getLinkStyle}>
            중고마켓
          </NavLink>
        </li>
      </ul>
      <div className="profile">
        <img src={ProfileImg} alt="프로필" />
      </div>
    </header>
  );
}

export default Nav;
