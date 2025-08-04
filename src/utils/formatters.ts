export const formatPrice = (value: string | number) => {
  const price =
    typeof value === "string" ? Number(value.replaceAll(",", "")) : value;
  const formatValue = isNaN(price) ? "0" : price.toLocaleString("ko-KR");
  return formatValue;
};

export function formatToTwoDigits(value: number | string) {
  return Number(value) < 10 ? `0${value}` : value;
}

export function formatDate(value: Date) {
  const year = value.getFullYear();
  const month = formatToTwoDigits(value.getMonth());
  const date = formatToTwoDigits(value.getDate());

  return `${year}. ${month}. ${date}`;
}
