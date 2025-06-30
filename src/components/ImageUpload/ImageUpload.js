import { forwardRef } from "react";
import styles from "./ImageUpload.module.scss";

const ImageUpload = forwardRef(({ name, onChange, multiple = false }, ref) => {
  return (
    <div className={`${styles.imageUpload}`}>
      <input
        type="file"
        name={name}
        id={name}
        onChange={onChange}
        accept=".jpg, .jpeg, .png"
        multiple={multiple}
        ref={ref}
        className={`${styles.imageUpload__input}`}
      />
      <label htmlFor={name} className={`${styles.imageUpload__label}`}>
        <span>이미지 등록</span>
      </label>
    </div>
  );
});

export default ImageUpload;
