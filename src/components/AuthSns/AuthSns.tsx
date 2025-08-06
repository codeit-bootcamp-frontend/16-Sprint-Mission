import { Link } from "react-router-dom";
import snsGoogle from "../../assets/images/icons/ic_sns_google.svg";
import snsKakao from "../../assets/images/icons/ic_sns_kakao.svg";
import styled from "@emotion/styled/macro";

const AuthSns = () => {
  return (
    <AuthSnsBox>
      <AuthSnsLabel>간편 로그인하기</AuthSnsLabel>
      <AuthSnsList>
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
      </AuthSnsList>
    </AuthSnsBox>
  );
};

const AuthSnsBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 24px;
  padding: 16px 23px;
  background-color: #e6f2ff;
  border-radius: 8px;
`;

const AuthSnsLabel = styled.h2`
  display: block;
  font-size: 16px;
  font-weight: 500;
`;

const AuthSnsList = styled.ul`
  display: flex;
  align-items: center;
  gap: 16px;
`;

export default AuthSns;
