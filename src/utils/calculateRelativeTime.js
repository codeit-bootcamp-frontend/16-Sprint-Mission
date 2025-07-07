const timeObj = {
  second: 1000,
  minute: 1000 * 60,
  hour: 1000 * 60 * 60,
  day: 1000 * 60 * 60 * 24,
  week: 1000 * 60 * 60 * 24 * 7,
  month: 1000 * 60 * 60 * 24 * 30,
  year: 1000 * 60 * 60 * 24 * 365,
};

const timeDict = {
  second: '초',
  minute: '분',
  hour: '시간',
  day: '일',
  week: '주',
  month: '달',
  year: '년',
};

export function calculateRelativeTime(time) {
  if (!time) return;

  const targetDate = new Date(time).getTime();
  const nowDate = new Date().getTime();

  const difference = nowDate - targetDate;

  const timeArr = Object.values(timeObj);
  const timeKeys = Object.keys(timeObj);

  for (let i = 0; i < timeArr.length; i++) {
    if (difference / timeArr[i] < timeArr[i + 1] / timeArr[i]) {
      const value = difference / timeArr[i];
      return `${Math.floor(value)}${timeDict[timeKeys[i]]} 전`;
    }
  }
}
