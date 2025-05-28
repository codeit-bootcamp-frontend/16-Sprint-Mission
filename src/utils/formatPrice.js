export const formatPrice = (value) => {
  if (value === "" || isNaN(value)) return "";
  return Number(value).toLocaleString();
};

export const unformatPrice = (formattedValue) => {
  return formattedValue.replace(/,/g, "");
};
