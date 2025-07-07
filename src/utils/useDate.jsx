export const useDate = dateString => {
	const date = new Date(dateString);
	const year = date.getFullYear();
	const month = String(date.getMonth() + 1).padStart(2, '0');
	const day = String(date.getDate()).padStart(2, '0');

	return `${year}.${month}.${day}`;
};


export const useDateNow = dateString => {
  const now = new Date();
  const date = new Date(dateString);

  
  const diffMs = now.getTime() - date.getTime();

  const diffSec = diffMs / 1000;
  const diffMin = diffSec / 60;
  const diffHour = diffMin / 60;
  const diffDay = diffHour / 24; 

  if (diffSec < 60) {
    return `${Math.floor(diffSec)}초 전`; 
  }
  if (diffMin < 60) {
    return `${Math.floor(diffMin)}분 전`; 
  }
  if (diffHour < 24) {
    return `${Math.floor(diffHour)}시간 전`; 
  }
  if (diffDay < 30) { // 대략 한 달 이내
    return `${Math.floor(diffDay)}일 전`;
  }

  const diffMonth = diffDay / 30; 
  const diffYear = diffDay / 365; 

  if (diffMonth < 12) { 
    return `${Math.floor(diffMonth)}개월 전`; 
  }

  return `${Math.floor(diffYear)}년 전`; 
};