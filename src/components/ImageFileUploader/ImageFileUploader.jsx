/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { useEffect, useRef, useState } from "react";
import plusIcon from "../../assets/images/ic_plus.svg";
import closeIcon from "../../assets/images/ic_close_white.svg";
import IconButton from "../ui/Button/IconButton";

const ImageFileUploader = () => {
  const [previewUrl, setPreviewUrl] = useState(null);
  const imageFileRef = useRef(null);

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (!file) return;

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
    <div css={ImageFileUploaderWrapStyle}>
      <div css={ImageFileUploaderStyle}>
        <input
          type="file"
          name="imageFileInput"
          id="productImageInput"
          accept="image/png, image/gif, image/jpeg"
          ref={imageFileRef}
          css={FileInputStyle}
          onChange={handleFileChange}
        />
        <button
          type="button"
          css={AddFileButtonStyle}
          onClick={handleAddFileClick}
        >
          <img width="48" height="48" src={plusIcon} alt="이미지 등록 버튼" />
          <span>이미지 등록</span>
        </button>
        {previewUrl && (
          <div css={ImagePreviewStyle}>
            <img
              src={previewUrl}
              alt="이미지 미리보기"
              className="img-preview"
            />
            <IconButton
              cssOverride={FileDeleteBtnStyle}
              imgSrc={closeIcon}
              imgAlt="첨부 이미지 제거"
              radius="round"
              onClick={removeImageFile}
            />
          </div>
        )}
      </div>
      <p className="hint">*이미지 등록은 최대 1개까지 가능합니다.</p>
    </div>
  );
};

export default ImageFileUploader;

const ImageFileUploaderWrapStyle = css`
  .hint {
    margin-top: 1rem;
    color: var(--error-color);
    font-size: 1rem;
  }
`;

const ImageFileUploaderStyle = css`
  display: flex;
  gap: 10px;

  @media (min-width: 768px) {
    gap: 24px;
  }
`;

const FileInputStyle = css`
  display: none;
`;

const AddFileButtonStyle = css`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 12px;
  width: calc(48% - 12px);
  max-width: var(--form-input-max-height);
  aspect-ratio: 1/1;
  flex-grow: 1;
  background-color: var(--gray200);
  color: var(--gray400);
  border-radius: var(--border-radius-sm);
  font-size: 1rem;

  @media (min-width: 768px) {
    width: auto;
    height: var(--form-input-max-height);
    flex-grow: 0;
  }
`;

const ImagePreviewStyle = css`
  position: relative;
  width: calc(48% - 12px);
  max-width: var(--form-input-max-height);
  aspect-ratio: 1/1;
  flex-grow: 1;
  border-radius: var(--border-radius-sm);
  overflow: hidden;

  .img-preview {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  @media (min-width: 768px) {
    width: auto;
    height: var(--form-input-max-height);
    flex-grow: 0;
  }
`;

const FileDeleteBtnStyle = css`
  position: absolute;
  right: 14px;
  top: 14px;
`;
