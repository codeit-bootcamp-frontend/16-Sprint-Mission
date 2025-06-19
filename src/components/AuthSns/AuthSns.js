import { Link } from "react-router-dom";
import snsGoogle from "../../assets/images/icons/ic_sns_google.svg";
import snsKakao from "../../assets/images/icons/ic_sns_kakao.svg";

const AuthSns = () => {
  return (
    <div className="auth-sns">
      <h2 className="auth-sns__label">간편 로그인하기</h2>
      <ul className="auth-sns__list">
        <li>
          <Link
            to="https://www.google.com/"
            aria-label="구글 간편 로그인하러 가기로 이동"
          >
            <img src={snsGoogle} alt="구글 아이콘" width="44" height="44" />
          </Link>
        </li>
        <li>
          <Link
            to="https://www.kakaocorp.com/page/"
            aria-label="카카오톡 간편 로그인하러 가기로 이동"
          >
            <img src={snsKakao} alt="카카오톡 아이콘" width="44" height="44" />
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default AuthSns;
