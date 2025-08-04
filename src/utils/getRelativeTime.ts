export function getRelativeTime(date: string) {
  const current = new Date(date);
  const now = new Date();
  const diff = now.getTime() - current.getTime();

  const seconds = Math.floor(diff / 1000);
  const minutes = Math.floor(seconds / 60);
  const hours = Math.floor(minutes / 60);
  const days = Math.floor(hours / 24);
  const month = Math.floor(days / 30);
  const year = Math.floor(month / 365);

  if (year > 0) return `${year}년 전`;
  if (month > 0) return `${month}개월 전`;
  if (days > 0) return `${days}일 전`;
  if (hours > 0) return `${hours}시간 전`;
  if (minutes > 0) return `${minutes}분 전`;
  if (seconds > 0) return `${seconds}초 전`;
  return "방금 전";
}
