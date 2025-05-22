export const formatPriceKRW = (price) => {
  return price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",") + '원';
};

export const formatNumber = (price) => {
	return price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}