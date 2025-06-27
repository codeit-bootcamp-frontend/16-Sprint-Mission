/** @jsxImportSource @emotion/react */
import styles from "./ImageFileUploaderStyle";
import { useEffect, useRef, useState } from "react";
import plusIcon from "../../assets/images/ic_plus.svg";
import closeIcon from "../../assets/images/ic_close_white.svg";
import IconButton from "../ui/Button/IconButton";

const ImageFileUploader = () => {
  const [previewUrl, setPreviewUrl] = useState(null);
  const [isImgLoading, setIsImgLoading] = useState(false);
  const imageFileRef = useRef(null);

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (!file) return;

    setIsImgLoading(true);
    const newPreview = URL.createObjectURL(file);
    setPreviewUrl(newPreview);
  };

  const handleAddFileClick = () => {
    imageFileRef.current.click();
  };

  const removeImageFile = () => {
    setPreviewUrl("");
    if (imageFileRef.current) {
      imageFileRef.current.value = "";
    }
  };

  useEffect(() => {
    return () => {
      if (previewUrl) {
        URL.revokeObjectURL(previewUrl);
      }
    };
  }, [previewUrl]);

  return (
    <div css={styles.ImageFileUploaderWrapStyle}>
      <div css={styles.ImageFileUploaderStyle}>
        <input
          type="file"
          name="imageFileInput"
          id="productImageInput"
          accept="image/png, image/gif, image/jpeg"
          ref={imageFileRef}
          css={styles.FileInputStyle}
          onChange={handleFileChange}
        />
        <button
          type="button"
          css={styles.AddFileButtonStyle}
          onClick={handleAddFileClick}
        >
          <img width="48" height="48" src={plusIcon} alt="이미지 등록 버튼" />
          <span>{isImgLoading ? "등록중..." : "이미지 등록"}</span>
        </button>
        {previewUrl && (
          <div css={styles.ImagePreviewStyle}>
            <img
              src={previewUrl}
              alt="이미지 미리보기"
              className="img-preview"
              onLoad={() => setIsImgLoading(false)}
              onError={(e) => {
                e.target.onerror = null; // 이미지 로드 에러 시 무한 깜빡임 현상 방지
                setIsImgLoading(false);
              }}
            />
            <IconButton
              cssOverride={styles.FileDeleteBtnStyle}
              imgSrc={closeIcon}
              imgAlt="첨부 이미지 제거"
              radius="round"
              onClick={removeImageFile}
            />
          </div>
        )}
      </div>
      {!previewUrl && (
        <p className="hint">*이미지 등록은 최대 1개까지 가능합니다.</p>
      )}
    </div>
  );
};

export default ImageFileUploader;
