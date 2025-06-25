export const formatWithCommas = (v) => {
  const onlyNums = v.replace(/[^0-9]/g, "");
  // 3자리마다 콤마
  return onlyNums.replace(/\B(?=(\d{3})+(?!\d))/g, ",");
};