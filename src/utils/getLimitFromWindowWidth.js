export function getLimitFromWindowWidth(desktop, tablet, mobile) {
  const width = window.innerWidth;
  if (width >= 1200) return Number(desktop);
  if (width >= 768) return Number(tablet);
  return Number(mobile);
}
