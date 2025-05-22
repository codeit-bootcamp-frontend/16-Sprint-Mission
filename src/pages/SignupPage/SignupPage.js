import { Link } from "react-router-dom";
import getLogo from "../../utils/getLogo";
import pwHide from "../../assets/images/icons/ic_pw_hide.svg";
import AuthSns from "../../components/AuthSns/AuthSns";
import AuthGuide from "../../components/AuthGuide/AuthGuide";
import styles from "./SignupPage.module.scss";
import "../../styles/auth.scss";

const SignupPage = () => {
  return (
    <div id="wrap" className={styles.signupPage}>
      <div className="auth-container">
        <h1 className="logo">
          <Link to="/" aria-label="판다마켓 홈으로 이동">
            <img
              width="396"
              height="132"
              src={getLogo("lg")}
              alt="판다마켓 로고 이미지"
            />
          </Link>
        </h1>
        <form className="auth-form">
          {/* 이메일 */}
          <div className="auth-form__item">
            <label htmlFor="email" className="auth-form__label">
              이메일
            </label>
            <div className="auth-form__input-box">
              <input
                type="email"
                name="email"
                id="email"
                placeholder="이메일을 입력해주세요."
              />
            </div>
          </div>
          {/* 닉네임 */}
          <div className="auth-form__item">
            <label htmlFor="nickname" className="auth-form__label">
              닉네임
            </label>
            <div className="auth-form__input-box">
              <input
                type="nickname"
                name="nickname"
                id="nickname"
                placeholder="닉네임을 입력해주세요."
              />
            </div>
          </div>
          {/* 비밀번호 */}
          <div className="auth-form__item">
            <label htmlFor="password" className="auth-form__label">
              비밀번호
            </label>
            <div className="auth-form__input-box auth-form__input-box--pw">
              <input
                type="password"
                name="password"
                id="password"
                placeholder="비밀번호를 입력해주세요."
              />
              <button
                type="button"
                className="auth-form__toggle-btn"
                aria-label="비밀번호 표시"
                aria-pressed="false"
              >
                <img
                  src={pwHide}
                  width="24"
                  height="24"
                  alt="비밀번호 보기 아이콘"
                />
              </button>
            </div>
          </div>
          {/* 비밀번호 확인 */}
          <div className="auth-form__item">
            <label htmlFor="passwordConfirm" className="auth-form__label">
              비밀번호 확인
            </label>
            <div className="auth-form__input-box auth-form__input-box--pw">
              <input
                type="password"
                name="passwordConfirm"
                id="passwordConfirm"
                placeholder="비밀번호를 다시 한 번 입력해주세요"
              />
              <button
                type="button"
                className="auth-form__toggle-btn"
                aria-label="비밀번호 표시"
                aria-pressed="false"
              >
                <img
                  src={pwHide}
                  width="24"
                  height="24"
                  alt="비밀번호 보기 아이콘"
                />
              </button>
            </div>
          </div>
          <button disabled className="btn lg auth-form__submit-btn">
            회원가입
          </button>
        </form>
        <AuthSns />
        <AuthGuide
          guideTxt="이미 회원이신가요?"
          linkTxt="로그인"
          linkUrl="/login"
        />
      </div>
    </div>
  );
};

export default SignupPage;
