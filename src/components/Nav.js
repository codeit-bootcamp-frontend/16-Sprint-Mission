import { Link, NavLink } from "react-router-dom";
import textLogoIcon from "../img/logo_text.jpg";
import logoIcon from "../img/logo.jpg";
import userIcon from "../img/user.jpg";
import "../css/components/Nav.css";

function getLinkStyle({ isActive }) {
  return {
    color: isActive ? `var(--color-primary-100)` : undefined,
  };
}

function Nav() {
  return (
    <header className="header">
      <div className="header__content">
        <div className="header__content__navigation__group">
          <Link to="/">
            <img
              src={textLogoIcon}
              srcSet={`${textLogoIcon} 103w, ${logoIcon} 153w`}
              sizes={"(min-width: 768px) 153px, 103px"}
              alt="판다마켓 로고"
              className="header__content__logo"
            />
          </Link>
          <ul>
            <NavLink to="board" style={getLinkStyle}>
              <li>자유게시판</li>
            </NavLink>
            <NavLink to="items" style={getLinkStyle}>
              <li>중고마켓</li>
            </NavLink>
          </ul>
        </div>
        <div className="header__content__user">
          <Link to="user">
            <img
              src={userIcon}
              alt="사용자 아이콘"
              className="header__content__user__icon"
            />
          </Link>
        </div>
      </div>
    </header>
  );
}

export default Nav;
