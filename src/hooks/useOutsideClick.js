import { useEffect } from 'react';

function useOutsideClick(ref, onCloseDropdown) {
  useEffect(() => {
    function closeDropdownHandler(e) {
      if (ref.current && !ref.current.contains(e.target)) {
        onCloseDropdown();
      }
    }

    window.addEventListener('click', closeDropdownHandler);

    return () => window.removeEventListener('click', closeDropdownHandler);
  }, [ref, onCloseDropdown]);
}

export default useOutsideClick;
