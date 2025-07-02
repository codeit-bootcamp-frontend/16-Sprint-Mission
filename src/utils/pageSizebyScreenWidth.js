export const pageSizebyScreenWidth = (width) => {
  if (width < 768) {
    return { all: 4, best: 1 };
  } else if (width < 1200) {
    return { all: 6, best: 2 };
  } else {
    return { all: 12, best: 4 };
  }
};
