import { useState } from "react";

const IMAGE_DEFAULT_URL = "/images/img_items_default_md.png";

const ItemImageViewer = ({ src, alt = "", defaultWidth = 100, borderRadius = 0 }) => {
  const [isImageValid, setIsImageValid] = useState(true);

  const imgSrc = isImageValid && src ? src : IMAGE_DEFAULT_URL;

  const imageStyle = {
    aspectRatio: "1 / 1",
    borderRadius: borderRadius,
    width: "100%",
  };

  return (
    <img
      style={imageStyle}
      src={imgSrc}
      alt={alt}
      onError={() => setIsImageValid(false)}
      width={defaultWidth}
    />
  );
};

export default ItemImageViewer;
