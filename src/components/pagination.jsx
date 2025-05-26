import './paginaton.css';
import { ReactComponent as ChevronLeft } from '../public/components/chevron-left.svg';
import { ReactComponent as ChevronRight } from '../public/components/chevron-right.svg';

function Circle({ className, children, onClick }) {
  return (
    <button className={className} onClick={() => onClick()}>
      {children}
    </button>
  )
}

function Pagination({ currentPage, totalPage, callback }) {
  const pageNumberArr = Array.from({ length: totalPage }, (v, i) => i + 1);
  let slicedArr = [];

  if (currentPage % 5 === 0) {
    slicedArr = pageNumberArr.slice(currentPage - 5, currentPage);
  } else {
    slicedArr = pageNumberArr.slice(currentPage - currentPage % 5, Math.ceil(currentPage / 5) * 5)
  }

  console.log(currentPage)

  return (
    <footer className='footer-wrapper'>
      <Circle onClick={() => callback('prev')} className='circle'><ChevronLeft /></Circle>
      {slicedArr.map((el, i) => (
        <Circle key={i} onClick={() => callback(el)} className={currentPage === el ? 'circle circle-active' : 'circle'}>{el}</Circle>
      ))}
      <Circle onClick={() => callback('next')} className='circle'><ChevronRight /></Circle>
    </footer>
  )
}

export default Pagination;
