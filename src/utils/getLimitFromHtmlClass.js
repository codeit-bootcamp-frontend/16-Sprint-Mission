export function getLimitFromHtmlClass(desktop, tablet, mobile) {
  const html = document.documentElement;
  if (html.classList.contains('desktop')) return Number(desktop);
  if (html.classList.contains('tablet')) return Number(tablet);
  return Number(mobile);
}
