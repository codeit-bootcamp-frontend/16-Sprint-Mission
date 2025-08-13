const getImageSrc = (imgSrc: File | string | null | undefined) => {
  if (!imgSrc) return "";
  if (typeof imgSrc === "string") return imgSrc;
  return URL.createObjectURL(imgSrc);
};

export default getImageSrc;
