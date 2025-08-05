import { Link } from "react-router-dom";
import getLogo from "../utils/getLogo";
import userThumbnail from "../assets/images/icons/ic_user_thumbnail.svg";
import { useState } from "react";
import Gnb from "../components/Gnb/Gnb";

const Header = () => {
  const [isLogin, setIsLogin] = useState(true);

  const handleClick = () => setIsLogin(false);

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
        <Gnb />
        <div className="header__member">
          {isLogin ? (
            <button onClick={handleClick}>
              <img src={userThumbnail} alt="유저 썸네일" />
            </button>
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
