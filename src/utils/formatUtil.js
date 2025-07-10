export const formatDate = (newDate) => {
  const date = new Date(newDate);
  const formattedDate = date.toLocaleDateString("ko-KR", {
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
  });
  return formattedDate;
};

export const formatPrice = (price) => {
  return price?.toLocaleString("ko-KR");
};
