import { useState } from "react";
import pwShow from "../assets/images/icons/ic_pw_show.svg";
import pwHide from "../assets/images/icons/ic_pw_hide.svg";

const usePasswordToggle = () => {
  const [toggle, setToggle] = useState(false);

  const handleClickToggle = () => {
    setToggle(() => !toggle);
  };

  const toggleImg = toggle ? pwShow : pwHide;

  return {
    toggle,
    handleClickToggle,
    toggleImg,
  };
};

export default usePasswordToggle;
