export const formatNumberWithCommas = value => {
  const num = Number(value);
  if (isNaN(num)) return;

  return num.toLocaleString('ko-KR');
};
