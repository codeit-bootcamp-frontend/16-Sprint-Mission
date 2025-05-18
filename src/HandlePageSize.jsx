import { useEffect, useState } from "react";
import { reRequestByResize } from "./util";

function HandlePageSize({
  setInnerWidth,
  innerWidth,
  setQueryStrings,
}) {
  
  // 디바운스 이너위드 갱신
  useEffect(() => {
    const temp = () => {
      setInnerWidth(window.innerWidth);
    };

    const timer = setTimeout(() => {
      window.addEventListener("resize", temp);
    }, 300);

    return () => {
      window.removeEventListener("resize", temp);
      clearTimeout(timer);
    };
  }, []);

  useEffect(() => {
    reRequestByResize(innerWidth, setQueryStrings);
  }, [innerWidth]);

  return <></>;
}

export default HandlePageSize;
