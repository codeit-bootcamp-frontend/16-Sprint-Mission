import Button from "../components/common/Button/Button";
import Footer from "../components/layout/Footer";
import Header from "../components/layout/Header";
import facebook from "../assets/social/facebook-logo.svg";
import twitter from "../assets/social/twitter-logo.svg";
import youtube from "../assets/social/youtube-logo.svg";
import instagram from "../assets/social/instagram-logo.svg";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div>
      <Header
        leftChild={
          <Link to="/">
            <img src="/src/assets/Logo.jpg" alt="Logo" />
          </Link>
        }
        rightChild={
          <Link to="/Login">
            <Button text="로그인" />
          </Link>
        }
      />
      <main>
        <h1>메인</h1>
      </main>
      <Footer
        leftChild="©codeit - 2024"
        centerChild={
          <div style={{ display: "flex", gap: "30px" }}>
            <Link to="/Privacy">Privacy Policy</Link>
            <Link to="/FAQ">FAQ</Link>
          </div>
        }
        rightChild={
          <div style={{ display: "flex", gap: "12px" }}>
            <a
              href="https://www.facebook.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={facebook} alt="페이스북" />
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={twitter} alt="트위터" />
            </a>
            <a
              href="https://www.youtube.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={youtube} alt="유튜브" />
            </a>
            <a
              href="https://www.instagram.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={instagram} alt="인스타그램" />
            </a>
          </div>
        }
      />
    </div>
  );
}

export default Home;
