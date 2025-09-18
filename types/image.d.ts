export interface ImageType {
  imgSrc: string | StaticImageData;
  imgAlt: string;
  loading?: "lazy" | "eager";
}
