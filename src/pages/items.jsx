import './items.css';
import { Link } from "react-router-dom";
import NavBarLogo from '../public/navbar-button.png'
import Avatar from '../public/items/avatar.png';

function Items() {
  return (
    <>
      <header className='header'>
        <nav className="navbar">
          <div className='navbar-left-container'>
            <Link to='/'>
              <img src={NavBarLogo} alt="내비게이션바 판다마켓 로고" className="navbar-image" />
            </Link>
            <span className='navbar-button'>자유게시판</span>
            <span className='navbar-button'>중고마켓</span>
          </div>
          <img src={Avatar} alt='내비게이션바 나의 아바타 아이콘' className='navbar-avatar' />
        </nav>
      </header>
    </>
  );
}

export default Items;
