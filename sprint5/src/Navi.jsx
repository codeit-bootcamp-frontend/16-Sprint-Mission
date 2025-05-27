// 상단 네비게이션바
import { Link } from "react-router-dom";

const Navi = () => {
  return (
    <nav>
      <Link to="/">
        <img
          src="src/assets/Logo.png"
          alt="Logo"
          style={{ cursor: "pointer" }}
        />
      </Link>
      <p>자유게시판</p>
      <Link to="/items">중고마켓</Link>
      <img src="src/assets/profilePicture.png" alt="profilePicture" />
    </nav>
  );
};

export default Navi;
