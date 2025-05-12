const pageSizeByDevice = {
  best: (deviceType) => {
    return deviceType === 'lg'
      ? 4
      : deviceType === 'md'
      ? 2
      : deviceType === 'sm'
      ? 1
      : 0;
  },
  current: (deviceType) => {
    return deviceType === 'lg'
      ? 10
      : deviceType === 'md'
      ? 6
      : deviceType === 'sm'
      ? 4
      : 0;
  },
};

console.log(pageSizeByDevice.current('lg'));
