import { Link, NavLink } from "react-router-dom";
import "./Header.css";
import usermenu from "../assets/userMenu.png";
import logo from "../assets/logo.png";

function Header() {
  return (
    <header className="header">
      <div className="headerLeft">
        <Link to="/" className="logo">
          <img src={logo} alt="판다마켓 로고" width="40px" />
          <a href="/" aria-label="홈으로 이동">
            판다마켓
          </a>
        </Link>
        <nav>
          <ul className="headerNav">
            <li>
              <NavLink to="/community">자유게시판</NavLink>
            </li>
            <li>
              <NavLink to="/items">중고마켓</NavLink>
            </li>
          </ul>
        </nav>
      </div>

      <Link className="headerUser" to="/login">
        <img src={usermenu} alt="유저메뉴" />
      </Link>
    </header>
  );
}

export default Header;
