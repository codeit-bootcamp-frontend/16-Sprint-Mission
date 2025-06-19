const date = '2025-05-08T00:35:32.211Z'

const formatTimeStamp = (isoString) => {
	const dateInput = new Date(isoString);
	const dateNow = new Date();

	const diffPerSec = (dateNow.getTime() - dateInput.getTime()) / 1000;
	console.log(diffPerSec);
	if (diffPerSec < 60) return `${diffPerSec}초 전`;

	const diffPerMin = diffPerSec / 60;
	console.log(diffPerMin);
	if (diffPerMin < 60) return `${diffPerMin}분 전`;

	const diffPerHour = diffPerMin / 60;
	console.log(diffPerHour);
	if (diffPerHour < 24) return `${diffPerHour}시간 전`;

	const diffPerDay = diffPerHour / 30;
	console.log(diffPerDay);
	if (diffPerDay < 30) return `${diffPerDay}일 전`;
	
	const yearDiff = dateNow.getFullYear() - dateInput.getFullYear();
	const monthDiff = dateNow.getMonth() - dateInput.getMonth();
	const diffPerMonth = yearDiff * 12 + monthDiff;
	if (diffPerMonth < 12 ) return `${diffPerMonth}개월 전`
	return `${yearDiff}년 전`
}

console.log(formatTimeStamp(date));