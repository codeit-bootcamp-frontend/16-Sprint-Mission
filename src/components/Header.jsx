import "./Header.css";
import logo from "../assets/logo.png";
import logo_text from "../assets/logo_text.png";
import profile from "../assets/profile.png";
import { useNavigate, useLocation } from "react-router-dom";

const Header = ({ title }) => {
  const nav = useNavigate();
  const location = useLocation();

  return (
    <header>
      <div className="header_wrapper">
        <div className="header_left">
          <img
            className="header_left_logo"
            src={logo}
            alt="logo"
            onClick={() => {
              nav("/items");
            }}
          />
          <img
            className="header_left_logo_text"
            src={logo_text}
            alt="logo_text"
            onClick={() => {
              nav("/items");
            }}
          />
          <div className="header_menu_board">자유게시판</div>
          <div
            className={`header_menu_market ${
              location.pathname === "/items" ? "active" : ""
            }`}
            onClick={() => {
              nav("/items");
            }}
          >
            중고마켓
          </div>
        </div>
        <img
          className="header_left_logo_profile"
          src={profile}
          alt="profile"
          onClick={() => {
            nav("/items");
          }}
        />
      </div>
    </header>
  );
};
export default Header;
