import React, { useState, useRef } from "react";
import deleteIcon from "../../assets/ic_X.png";
import plusIcon from "../../assets/ic_plus.png";

type ImageType = {
  file: File;
  preview: string | ArrayBuffer | null;
};

type ImageUploadProps = {
  onImageChange: (image: ImageType | null) => void;
};

const ImageUpload = ({ onImageChange }: ImageUploadProps) => {
  const [image, setImage] = useState<ImageType | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleImageAddClick = () => {
    fileInputRef.current?.click();
  };

  const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onloadend = () => {
      const newImage: ImageType = { file, preview: reader.result };
      setImage(newImage);
      onImageChange(newImage);
    };
    reader.readAsDataURL(file);

    // input 초기화 (빈 문자열로)
    event.target.value = "";
  };

  const handleImageRemove = () => {
    setImage(null);
    onImageChange(null);
  };

  return (
    <div className="space-y-4">
      <div className="flex gap-4 items-start">
        <button
          type="button"
          onClick={handleImageAddClick}
          className="w-[168px] h-[168px] bg-gray-100 text-gray-400 rounded flex flex-col items-center justify-center font-normal text-[16px]"
        >
          <img src={plusIcon} alt="플러스 아이콘" />
          <br />
          이미지 등록
        </button>

        {image && (
          <div className="w-[168px] h-[168px] relative border rounded overflow-hidden">
            <img
              src={image.preview as string}
              alt="preview"
              className="w-full h-full object-cover"
            />
            <button
              onClick={handleImageRemove}
              className="absolute top-3 right-3"
              type="button"
            >
              <img src={deleteIcon} alt="삭제버튼" className="w-5 h-5" />
            </button>
          </div>
        )}

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
