import { useEffect, useRef, useState } from 'react';
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
import Pagination from '../components/pagination';

const orderSelect = [
  {
    name: "최신순",
    value: 'recent'
  },
  {
    name: "좋아요순",
    value: 'favorite'
  }
]

function Items() {
  const [bestCardData, setBestCardData] = useState([]);
  const [cardData, setCardData] = useState([]);
  const [sort, setSort] = useState('recent');
  const [currentPage, setCurrentPage] = useState(1);
  const totalCount = useRef(0);
  const totalPage = useRef(0);

  const ITEMS_PER_PAGE = 10;

  const handleChange = (el) => {
    if (el === 'favorite') {
      setSort('favorite');
      fetchLists(ITEMS_PER_PAGE, 1, el).then((res) => setCardData(res.list));
    } else if (el === 'recent') {
      setSort('recent');
      fetchLists(ITEMS_PER_PAGE, 1, el).then((res) => setCardData(res.list));
    }
  }

  const handlePaginationClick = (e) => {
    switch (e) {
      case 'next':
        setCurrentPage((prevPage) => prevPage >= prevPage % 5 * 5 ? prevPage + 1 : prevPage);
        fetchLists(ITEMS_PER_PAGE, currentPage + 1, sort).then((res) => setCardData(res.list));
        break;
      case 'prev':
        setCurrentPage((prevPage) => prevPage >= prevPage % 5 * 5 ? prevPage - 1 : prevPage);
        fetchLists(ITEMS_PER_PAGE, currentPage - 1, sort).then((res) => setCardData(res.list));
        break;
      default:
        setCurrentPage(e);
        fetchLists(ITEMS_PER_PAGE, e, sort).then((res) => setCardData(res.list));
    }

  }

  useEffect(() => {
    fetchLists(4, 1, 'favorite').then((res) => setBestCardData(res.list));
    fetchLists(ITEMS_PER_PAGE, 1, 'recent').then((res) => {
      setCardData(res.list);
      totalCount.current = res.totalCount;
      totalPage.current = Math.round(res.totalCount / ITEMS_PER_PAGE);
    });
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
              <Button radius='8px' size='button-small' link='/additem'>상품 등록하기</Button>
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
      <Pagination currentPage={currentPage} totalPage={totalPage.current} callback={handlePaginationClick} />
    </>
  );
}

export default Items;
