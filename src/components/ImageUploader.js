import "./css/ImageUploader.css";
import { useRef, useState } from "react";
import ImageAddCard from "./ImageAddCard";
import ImagePreviewCard from "./ImagePreviewCard";

const ImageUploader = ({
  onAdd = () => {},
  onDelete = () => {},
  onChange = () => {},
  isValid = null,
  message,
}) => {
  const statusMessageClass = {
    null: "",
    false: "image__uploader__message--error",
  };

  const showMessage = message && isValid === false;
  const [imageUrl, setImageUrl] = useState("");
  const fileInputRef = useRef(null);
  const handleOnClickAdd = () => {
    if (!imageUrl) {
      fileInputRef.current.click();
    } else {
      /* 부모 컴포넌트에서 유효성 체크 */
      onAdd();
    }
  };

  const onClickDelete = () => {
    // 메모리 해제
    URL.revokeObjectURL(imageUrl);
    fileInputRef.current.value = null;
    setImageUrl("");
    onDelete();
  };

  const onChangeFile = (e) => {
    // 이미지 데이터 세팅 및 미리보기
    if (e.target.files) {
      const file = e.target.files[0];
      onChange(file);
      setImageUrl(URL.createObjectURL(file));
    }
  };

  return (
    <>
      <div className="image__uploader">
        <div className="image__uploader__card">
          <ImageAddCard onClickAdd={handleOnClickAdd}>
            <input
              ref={fileInputRef}
              hidden
              type="file"
              accept="image/*"
              onChange={onChangeFile}
            />
          </ImageAddCard>
          {imageUrl && (
            <ImagePreviewCard
              onClickDelete={onClickDelete}
              imageUrl={imageUrl}
            />
          )}
        </div>

        {showMessage && (
          <div
            className={`${"image__uploader__message"} ${
              statusMessageClass[isValid]
            }`}
          >
            {message}
          </div>
        )}
      </div>
    </>
  );
};

export default ImageUploader;
