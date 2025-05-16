import { useState, useEffect } from "react";
import debounce from "../utils/debounce";

function getWindowDimensions() {
  const { innerWidth: width, innerHeight: height } = window;
  return { width, height };
}

export default function useWindowDimensions() {
  const [windowDimensions, setWindowDimensions] = useState(
    getWindowDimensions()
  );

  useEffect(() => {
    const debouncedHandleResize = debounce(() => {
      setWindowDimensions(getWindowDimensions());
    }, 300);

    window.addEventListener("resize", debouncedHandleResize);
    return () => window.removeEventListener("resize", debouncedHandleResize);
  }, []);

  return windowDimensions;
}
