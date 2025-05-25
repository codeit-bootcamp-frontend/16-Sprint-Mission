import { Link } from "react-router-dom";
import getLogo from "../utils/getLogo";

const Header = () => {
  return (
    <header id="header">
      <div className="inner">
        <h1 className="header__logo">
          <Link to="/" aria-label="판다마켓 홈으로 이동">
            <img
              width="153"
              height="51"
              srcSet={`${getLogo("sx")} 81w, ${getLogo("md")} 153w`}
              sizes="(max-width: 767px) 81px, 153px"
              src={getLogo("md")}
              alt="판다마켓 로고 이미지"
            />
          </Link>
        </h1>
        <nav className="header__gnb">
          <ul>
            <li>
              <Link to="">자유게시판</Link>
            </li>
            <li>
              <Link to="/items">중고마켓</Link>
            </li>
          </ul>
        </nav>
        <Link
          to="/login"
          aria-label="로그인 페이지로 이동"
          className="btn h48 header__login-link"
        >
          로그인
        </Link>
      </div>
    </header>
  );
};

export default Header;
