//반응형 UI로직을 만들 때, 화면 계산을 하는 용도
export function getLimitFromWindowWidth(desktop, tablet, mobile) {
  const width = window.innerWidth;
  if (width >= 1200) return Number(desktop);
  if (width >= 768) return Number(tablet);
  return Number(mobile);
}
