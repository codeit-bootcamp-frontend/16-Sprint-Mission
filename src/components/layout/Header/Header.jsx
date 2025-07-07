/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { Link, useNavigate } from "react-router-dom";
import logoPandaImg from "../../../assets/images/logo-panda.svg";
import logoTxtImg from "../../../assets/images/logo-txt.svg";
import avatarImg from "../../../assets/images/img-avatar.png";
import Nav from "../../Nav";
import Avatar from "../../Avatar";
import Button from "@/components/ui/Button";
import useAuth from "@/hooks/useAuth";

const Header = () => {
  const { isSignedIn } = useAuth();
  const navigate = useNavigate();

  const handleAvatarClick = () => {
    console.log("clicked user avatar");
  };

  return (
    <header css={HeaderStyle}>
      <div css={HeaderContainerStyle}>
        <Link to="/" css={LogoStyle}>
          <img
            src={logoPandaImg}
            alt="판다마켓 로고 이미지"
            className="logo-img"
          />
          <img
            src={logoTxtImg}
            alt="판다마켓 로고 텍스트"
            className="logo-txt"
          />
        </Link>
        <Nav />

        <div css={HeaderActionsStyle}>
          {isSignedIn ? (
            <Avatar imgSrc={avatarImg} onClick={handleAvatarClick} />
          ) : (
            <Button
              variant="primary"
              size="sm"
              onClick={() => navigate("/login")}
            >
              로그인
            </Button>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;

const HeaderStyle = css`
  position: sticky;
  left: 0;
  top: 0;
  width: 100%;
  height: 70px;
  padding: 0 var(--header-padding-lr);
  z-index: 9;
  background: #fff;
  display: flex;
  border-bottom: 1px solid #dfdfdf;
`;

const HeaderContainerStyle = css`
  display: flex;
  align-items: center;
  width: 100%;
  padding: 0.714rem 0;
`;

const LogoStyle = css`
  display: flex;
  align-items: center;
  gap: 8px;
  margin-right: 8px;

  .logo-img {
    display: none;
    width: 40px;
    margin-right: 8px;
  }

  @media (min-width: 600px) {
    margin-right: 32px;

    .logo-img {
      display: inline-block;
    }
  }
`;

const HeaderActionsStyle = css`
  margin-left: auto;
`;
