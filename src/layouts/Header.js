import { Link, useLocation } from "react-router-dom";
import getLogo from "../utils/getLogo";
import userThumbnail from "../assets/images/icons/ic_user_thumbnail.svg";
import { useState } from "react";

const GNB_MENU = [
  { path: "/free", title: "자유게시판" },
  { path: "/items", title: "중고마켓" },
];

const Header = () => {
  const location = useLocation();
  const [isLogin, setIsLogin] = useState(true);

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
            {GNB_MENU.map((gnb) => (
              <li key={gnb.path}>
                <Link
                  to={gnb.path}
                  className={location.pathname === gnb.path ? "current" : ""}
                >
                  {gnb.title}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        <div className="header__member">
          {isLogin ? (
            <Link to="/">
              <img src={userThumbnail} alt="유저 썸네일" />
            </Link>
          ) : (
            <Link
              to="/login"
              aria-label="로그인 페이지로 이동"
              className="btn h48 header__login-link"
            >
              로그인
            </Link>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
