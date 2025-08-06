export const getInitialDeviceType = (width) => {
  if (width >= 1200) return 'desktop';
  else if (768 <= width && width < 1200) return 'tablet';
  else return 'mobile';
};
