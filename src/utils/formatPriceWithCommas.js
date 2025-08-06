const formatPriceWithCommas = (price) => {
  if (typeof price !== 'number')
    throw new TypeError('가격은 숫자(정수 또는 실수)여야 합니다.');

  return price.toLocaleString('en-US');
};

export default formatPriceWithCommas;
