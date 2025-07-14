import { useRef, useState } from 'react';
import kebabIcon from '@assets/icon/ic_kebab.png';
import useOutsideClick from '../hooks/useOutsideClick';
import styles from '../styles/KebabMenu.module.css';

function makeHtmlAttr(selector) {
  const dropDownHtmlAttr = {
    ['role']: 'option',
    ['data-value']: selector,
  };

  return dropDownHtmlAttr;
}

function KebabMenu({ dropdownList, onSelect = () => {} }) {
  const [isOpen, setIsOpen] = useState(false);
  const kebabRef = useRef(null);

  function handleToggleDropDown() {
    setIsOpen(!isOpen);
  }

  function handleClick(selector) {
    onSelect(selector);
    setIsOpen(false);
  }

  function onCloseDropdown() {
    setIsOpen(false);
  }

  useOutsideClick(kebabRef, onCloseDropdown);

  return (
    <div className={styles.kebab} ref={kebabRef}>
      <button onClick={handleToggleDropDown}>
        <img src={kebabIcon} alt="케밥 아이콘" />
      </button>
      {isOpen && (
        <ul role="listbox">
          {dropdownList?.map((selector) => (
            <li
              key={selector}
              {...makeHtmlAttr(selector)}
              onClick={() => handleClick(selector)}
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
