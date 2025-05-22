import { Link } from "react-router-dom";
import TextLogo from "../img/logo_text.jpg";
import Logo from "../img/logo.jpg";
import User from "../img/user.jpg";
import "../css/pages/nav.css";

function Nav() {
  return (
    <header className="header">
      <div className="header__content">
        <div className="header__content__navigation__group">
          <Link to="/">
            <img
              src={TextLogo}
              srcSet={`${TextLogo} 103w, ${Logo} 153w`}
              sizes={"(min-width: 768px) 153px, 103px"}
              alt="판다마켓 로고"
              className="header__content__logo"
            />
          </Link>
          <ul>
            <li>자유게시판</li>
            <li>중고마켓</li>
          </ul>
        </div>
        <div className="header__content__user">
          <img src={User} alt="사용자 아이콘" />
        </div>
      </div>
    </header>
  );
}

export default Nav;
