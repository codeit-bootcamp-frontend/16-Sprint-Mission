import styled from "@emotion/styled/macro";

const ImageFileUpload = () => {
  return (
    <div>
      <SquareButton type="button">이미지 등록</SquareButton>
    </div>
  );
};

export default ImageFileUpload;

const SquareButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  height: var(--form-input-max-height);
  aspect-ratio: 1/1;
  background-color: var(--gray200);
  color: var(--gray400);
  border-radius: var(--border-radius-sm);
`;
