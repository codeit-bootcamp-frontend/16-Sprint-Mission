import { useEffect, useState } from 'react';
import { Link } from "react-router-dom";
import fetchLists from '../api/fetchCardList';
import Card from '../components/card';
import Button from '../components/button';
import Input from '../components/input';
import Avatar from '../public/items/avatar.png';
import NavBarLogo from '../public/navbar-button.png';
import SearchIcon from '../public/items/ic_search.png';
import './items.css';
import Select from '../components/select';

const orderSelect = [
  {
    name: "최신순",
    value: 'newest'
  },
  {
    name: "좋아요순",
    value: 'likest'
  }
]

function Items() {
  const [bestCardData, setBestCardData] = useState([]);
  const [cardData, setCardData] = useState([]);

  const handleChange = (el) => {
    if (el === 'likest') {
      setCardData((prevData) => prevData.toSorted((a, b) => b.favoriteCount - a.favoriteCount))
    } else if (el === 'newest') {
      setCardData((prevData) => prevData.toSorted((a, b) => b.createdAt.localeCompare(a.createdAt)))
    }
  }

  useEffect(() => {
    fetchLists(4).then((res) => setBestCardData(res));
    fetchLists(10).then((res) => setCardData(res));
  }, [])

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
      <main className='main'>
        <section className='best-section'>
          <h1>베스트 상품</h1>
          <div className='best-card-section'>
            {bestCardData ? (
              <>
                {bestCardData.map((el) => (
                  <Card key={el.id} element={el} />
                ))}
              </>
            ) : (
              <></>
            )}
          </div>
        </section>
        <section className='all-section'>
          <div className='all-section-titlebar'>
            <h1>전체 상품</h1>
            <div className='all-section-toolbar'>
              <Input slot={SearchIcon} slotDirection='left' placeholder='검색할 상품을 입력해주세요' />
              <Button radius='8px' size='button-small'>상품 등록하기</Button>
              <Select select={orderSelect} callback={(el) => handleChange(el)} />
            </div>
          </div>
          <div className='all-card-section'>
            {cardData ? (
              <>
                {cardData.map((el) => (
                  <Card key={el.id} element={el} />
                ))}
              </>
            ) : (
              <></>
            )}
          </div>
        </section>
      </main>
    </>
  );
}

export default Items;
