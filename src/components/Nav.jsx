import mobileLogeImg from "../assets/img_logo_m.png";
import logeImg from "../assets/img_logo.png";
import ProfileImg from "../assets/profile.png";
import "./css/Nav.css";

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
          <a href="/">자유게시판</a>
        </li>
        <li>
          <a href="/">중고마켓</a>
        </li>
      </ul>
      <div className="profile">
        <img src={ProfileImg} alt="프로필" />
      </div>
    </header>
  );
}

export default Nav;
