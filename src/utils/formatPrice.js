export const formatPriceKRW = (price) => {
  return String(price).replace(/\B(?=(\d{3})+(?!\d))/g, ",") + '원';
};

export const formatNumber = (price) => {
	return String(price).replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

export const formatDateKRW = (isoString) => {
	const date = new Date(isoString);
	const year = date.getFullYear();
	const month = String(date.getMonth()+1).padStart(2,0);
	const day = String(date.getDate()).padStart(2,0);
	return `${year}. ${month}. ${day}`;
}