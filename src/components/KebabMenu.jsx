import { useEffect, useRef, useState } from 'react';
import kebabIcon from '@assets/icon/ic_kebab.png';
import styles from '../styles/KebabMenu.module.css';

function makeHtmlAttr(selector) {
  const dropDownHtmlAttr = {
    ['role']: 'option',
    ['data-value']: selector,
  };

  return dropDownHtmlAttr;
}

function KebabMenu({ dataList = ['수정하기', '삭제하기'], onSelect }) {
  const [isOpen, setIsOpen] = useState(false);
  const kebabRef = useRef(null);

  function handleToggleDropDown() {
    setIsOpen(!isOpen);
  }

  function handleClick(e) {
    onSelect();
    setIsOpen(false);
  }

  useEffect(() => {
    function closeDropDown(e) {
      if (!kebabRef.current.contains(e.target)) {
        setIsOpen(false);
      }
    }

    window.addEventListener('click', closeDropDown);

    return () => window.removeEventListener('click', closeDropDown);
  }, []);

  return (
    <div className={styles.kebab}>
      <button ref={kebabRef} onClick={handleToggleDropDown}>
        <img src={kebabIcon} alt="케밥 아이콘" />
      </button>

      {isOpen && (
        <ul role="listbox">
          {dataList?.map((selector) => (
            <li
              key={`${selector}`}
              {...makeHtmlAttr(selector)}
              onClick={(e) => handleClick(e)}
            >
              {selector}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default KebabMenu;
