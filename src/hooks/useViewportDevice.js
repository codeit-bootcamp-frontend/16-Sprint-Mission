import { useEffect, useState } from 'react';

import useWindowWidth from './useWindowWidth';
import { getInitialDeviceType } from '../utils/getInitialDeviceType';

const useViewportDevice = () => {
  const windowWidth = useWindowWidth();
  const [deviceType, setDeviceType] = useState(
    getInitialDeviceType(windowWidth)
  );

  useEffect(() => {
    setDeviceType(getInitialDeviceType(windowWidth));
  }, [windowWidth]);

  return deviceType;
};

export default useViewportDevice;
