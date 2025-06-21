import { Link, NavLink, useLocation } from "react-router-dom";
import textLogoIcon from "../img/logo_text.jpg";
import logoIcon from "../img/logo.svg";
import userIcon from "../img/user.svg";
import "./css/Nav.css";

const Nav = () => {
  const location = useLocation();

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
            <li>
              <NavLink
                to="board"
                className={({ isActive }) =>
                  isActive ? "header__content__link--active" : ""
                }
              >
                자유게시판
              </NavLink>
            </li>

            <li>
              <NavLink
                to="/items"
                className={({ isActive }) =>
                  isActive || location.pathname === "/additem"
                    ? "header__content__link--active"
                    : ""
                }
              >
                중고마켓
              </NavLink>
            </li>
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
};

export default Nav;
