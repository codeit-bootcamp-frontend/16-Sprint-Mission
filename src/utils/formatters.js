export const formatPrice = (value) => {
  const price = Number(value.replaceAll(",", ""));
  const formatValue = isNaN(price) ? "0" : price.toLocaleString("ko-KR");
  return formatValue;
};
