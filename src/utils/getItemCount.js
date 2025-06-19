export const getItemCount = (itemCountInfo) => {
  const viewWidth = window.innerWidth;
  if (viewWidth <= 767) {
    // mobile 0 ~ 767
    return itemCountInfo["MOBILE"];
  } else if (viewWidth <= 1199) {
    // tablet 768 ~ 1199
    return itemCountInfo["TABLET"];
  }
  // web 1200 ~
  return itemCountInfo["WEB"];
};
