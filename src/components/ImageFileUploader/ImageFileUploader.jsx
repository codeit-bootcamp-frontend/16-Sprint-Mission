import styled from "@emotion/styled/macro";
import plusIcon from "../../assets/images/ic_plus.svg";

const ImageFileUploader = () => {
  return (
    <div>
      <SquareButton type="button">
        <img src={plusIcon} alt="이미지 등록 버튼" />
        <span>이미지 등록</span>
      </SquareButton>
    </div>
  );
};

export default ImageFileUploader;

const SquareButton = styled.button`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 12px;
  height: var(--form-input-max-height);
  aspect-ratio: 1/1;
  background-color: var(--gray200);
  color: var(--gray400);
  border-radius: var(--border-radius-sm);
  font-size: 1rem;
`;
