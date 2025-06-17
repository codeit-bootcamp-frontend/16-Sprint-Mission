/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

const styles = {
  ImageFileUploaderWrapStyle: css`
    .hint {
      margin-top: 1rem;
      color: var(--error-color);
      font-size: 1rem;
    }
  `,

  ImageFileUploaderStyle: css`
    display: flex;
    gap: 10px;

    @media (min-width: 768px) {
      gap: 24px;
    }
  `,

  FileInputStyle: css`
    display: none;
  `,

  AddFileButtonStyle: css`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 12px;
    width: calc(48% - 12px);
    max-width: 168px;
    aspect-ratio: 1/1;
    flex-grow: 1;
    background-color: var(--gray200);
    color: var(--gray400);
    border-radius: var(--border-radius-sm);
    font-size: 1rem;

    @media (min-width: 600px) {
      max-width: var(--form-input-max-height);
    }

    @media (min-width: 768px) {
      width: auto;
      height: var(--form-input-max-height);
      flex-grow: 0;
    }
  `,

  ImagePreviewStyle: css`
    position: relative;
    width: calc(48% - 12px);
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
  `,

  FileDeleteBtnStyle: css`
    position: absolute;
    right: 14px;
    top: 14px;
  `,
};

export default styles;
