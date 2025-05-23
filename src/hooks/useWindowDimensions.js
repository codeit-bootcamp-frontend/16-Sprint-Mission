import { useState, useEffect } from "react";
import debounce from "../utils/debounce";

const RESIZE_DEBOUNCE_MS = 300;

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
    }, RESIZE_DEBOUNCE_MS);

    window.addEventListener("resize", debouncedHandleResize);
    return () => window.removeEventListener("resize", debouncedHandleResize);
  }, []);

  return windowDimensions;
}
