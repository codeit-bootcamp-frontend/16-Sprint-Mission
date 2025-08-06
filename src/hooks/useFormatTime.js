function useFormatTime(time) {
  const now = new Date();
  const date = new Date(time);
  const diffTime = now.getTime() - date.getTime();

  const diffHours = Math.floor(diffTime / (1000 * 60 * 60));

  return `${diffHours}시간 전`;
}

export default useFormatTime;
