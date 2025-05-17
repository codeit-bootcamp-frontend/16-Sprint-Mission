import logoLg from "../assets/images/common/logo_lg.svg";
import logoMd from "../assets/images/common/logo_md.svg";
import logoSm from "../assets/images/common/logo_sm.svg";
import logoSx from "../assets/images/common/logo_sx.svg";

const logoSize = {
  lg: logoLg,
  md: logoMd,
  sm: logoSm,
  sx: logoSx,
};

const getLogo = (size) => logoSize[size];

export default getLogo;
