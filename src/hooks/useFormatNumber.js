import { useState } from 'react';

export default function useFormatNumber(initialValue = '') {
  const [value, setValue] = useState(initialValue);

  // 천단위 콤마 함수
  const formatNumber = (value) => {
    const onlyNumber = value.replace(/[^0-9]/g, '');
    return onlyNumber.replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  };

  const handleChange = (e) => {
    setValue(formatNumber(e.target.value));
  };

  return [value, handleChange];
}
