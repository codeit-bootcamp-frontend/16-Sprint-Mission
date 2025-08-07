const debounce = <F extends (...args: Parameters<F>) => ReturnType<F>>(
  fn: F,
  timeout = 300
) => {
  let timer: ReturnType<typeof setTimeout>;
  return (...args: Parameters<F>) => {
    clearTimeout(timer);

    timer = setTimeout(() => {
      fn.apply(this, args);
    }, timeout);
  };
};

export default debounce;
