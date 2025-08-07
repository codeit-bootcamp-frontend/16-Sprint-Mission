const debounce = <F extends (...args: Parameters<F>) => ReturnType<F>>(
  fn: F,
  timeout = 300
) => {
  let timer: ReturnType<typeof setTimeout> | null = null;

  const debounced = (...args: Parameters<F>) => {
    if (timer) clearTimeout(timer);

    timer = setTimeout(() => {
      fn.apply(this, args);
    }, timeout);
  };

  debounced.cancel = () => {
    if (timer) {
      clearTimeout(timer);
      timer = null;
    }
  };

  return debounced as F & { cancel: () => void };
};

export default debounce;
