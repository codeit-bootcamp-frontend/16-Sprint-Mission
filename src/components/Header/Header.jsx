import pandaMarket from "../../images/PandaMarket.png";
import UserLogo from "../../images/UserLogo.svg";
import "./Header.css";

const Header = () => {
  const isMarketPage = window.location.pathname === "/items";

  return (
    <div className="Header">
      <a href="./items" target="_blank" rel="noopener noreferrer">
        <img
          className="Header__logo"
          src={pandaMarket}
          alt="판마다켓 홈페이지 로고"
        />
      </a>
      <div className="Header__menu">
        <a
          className="Header__menu__items"
          href="/items"
          target="_blank"
          rel="noopener noreferrer"
        >
          자유게시판
        </a>
        <a
          className={`Header__menu__items ${isMarketPage ? "active" : ""}`}
          href="/items"
          target="_blank"
          rel="noopener noreferrer"
        >
          중고마켓
        </a>
      </div>
      <a href="./items" target="_blank" rel="noopener noreferrer">
        <img className="Header__user" src={UserLogo} alt="유저 아이콘" />
      </a>
    </div>
  );
};

export default Header;
