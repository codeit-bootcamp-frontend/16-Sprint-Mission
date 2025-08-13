const debounce = <T extends (...args: Parameters<T>) => ReturnType<T>>(
  fn: T,
  timeout: number
) => {
  let timer: ReturnType<typeof setTimeout> | null = null;

  const debounced = (...args: Parameters<T>) => {
    if (timer) clearTimeout(timer);

    timer = setTimeout(() => {
      fn.apply(this, args);
    }, timeout);
  };

  return debounced;
};

export default debounce;
