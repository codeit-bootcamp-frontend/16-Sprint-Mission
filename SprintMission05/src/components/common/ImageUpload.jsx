import React, { useState, useRef } from "react";
import deleteIcon from "../../assets/ic_X.png";
import plusIcon from "../../assets/ic_plus.png";

const ImageUpload = ({ onImageChange }) => {
  const [image, setImage] = useState(null);
  const fileInputRef = useRef(null);

  const handleImageAddClick = () => {
    fileInputRef.current.click();
  };

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onloadend = () => {
      const newImage = { file, preview: reader.result };
      setImage(newImage);
      if (onImageChange) onImageChange(newImage);
    };
    reader.readAsDataURL(file);
    event.target.value = null;
  };

  const handleImageRemove = () => {
    setImage(null);
    if (onImageChange) onImageChange(null);
  };

  return (
    <div className="space-y-4">
      <div className="flex gap-4 items-start">
        <button
          type="button"
          onClick={handleImageAddClick}
          className="w-[168px] h-[168px] bg-gray-100 text-gray-400 rounded flex flex-col items-center justify-center font-normal text-[16px]"
        >
          <img src={plusIcon} />
          <br />
          이미지 등록
        </button>

        {/* 오른쪽: 이미지 미리보기 */}
        {image && (
          <div className="w-[168px] h-[168px] relative border rounded overflow-hidden">
            <img
              src={image.preview}
              alt="preview"
              className="w-full h-full object-cover"
            />
            <button
              onClick={handleImageRemove}
              className="absolute top-3 right-3"
            >
              <img src={deleteIcon} alt="삭제버튼" className="w-5 h-5" />
            </button>
          </div>
        )}

        {/* 숨겨진 파일 선택 input */}
        <input
          type="file"
          accept="image/*"
          ref={fileInputRef}
          onChange={handleImageChange}
          style={{ display: "none" }}
        />
      </div>
    </div>
  );
};

export default ImageUpload;
