const DEFAULT_DEBOUNCE_MS = 300;

export default function debounce(func, timeout = DEFAULT_DEBOUNCE_MS) {
  let timer;

  const debounceFn = (...args) => {
    clearTimeout(timer);
    timer = setTimeout(() => {
      func.apply(this, args);
    }, timeout);
  };

  debounceFn.cancel = () => {
    clearTimeout(timer); // timer 강제 cleanup (메모리 누수 방지)
  };

  return debounceFn;
}
