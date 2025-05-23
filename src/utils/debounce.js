const DEFAULT_DEBOUNCE_MS = 300;

export default function debounce(func, timeout = DEFAULT_DEBOUNCE_MS) {
  let timer;
  return (...args) => {
    clearTimeout(timer);
    timer = setTimeout(() => {
      func.apply(this, args);
    }, timeout);
  };
}
