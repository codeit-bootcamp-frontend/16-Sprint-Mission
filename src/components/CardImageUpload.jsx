import { useRef, useState } from "react";
import { styled } from "styled-components";
import { ReactComponent as CloseButton } from "../public/components/ic_X.svg";

function CardImageUpload({ handleImageUrl }) {
  const [image, setImage] = useState("");
  const fileRef = useRef(null);

  const handleAddImageClick = () => {
    if (image) {
      handleImageUrl(image);
    } else {
      fileRef.current.click();
    }
  };

  const handleImageChange = (img) => {
    if (image) {
      URL.revokeObjectURL(image);
    }

    const objUrl = URL.createObjectURL(img);
    setImage(objUrl);
  };

  const handleRemoveImageClick = () => {
    URL.revokeObjectURL(image);
    setImage("");
    handleImageUrl("");
  };

  return (
    <>
      <PhotosWrapper>
        <AddPhotoButton onClick={handleAddImageClick}>
          <AddPhotoButtonContent>
            <PlusButton>+</PlusButton>
            <AddPhotoButtonContentText>이미지 등록</AddPhotoButtonContentText>
          </AddPhotoButtonContent>
        </AddPhotoButton>
        {image && (
          <ImageCard>
            <img src={image} alt="업로드된 이미지" />
            <CloseButton onClick={handleRemoveImageClick} />
          </ImageCard>
        )}
      </PhotosWrapper>
      <input
        type="file"
        style={{ display: "none" }}
        ref={fileRef}
        onChange={(img) => handleImageChange(img.target.files[0])}
      />
    </>
  );
}

export default CardImageUpload;

const PhotosWrapper = styled.div`
  display: flex;
  gap: 24px;
`;

const AddPhotoButton = styled.button`
  width: 282px;
  height: 282px;
  background-color: var(--secondary-200);
  border: 0;
  border-radius: 12px;
  cursor: pointer;

  @media (max-width: 1200px) {
    width: 168px;
    height: 168px;
  }
`;

const AddPhotoButtonContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  align-items: center;
`;

const PlusButton = styled.h1`
  margin: 0;
  font-size: 48px;
  font-weight: 400;
  color: var(--secondary-400);
`;

const AddPhotoButtonContentText = styled.span`
  font-size: 16px;
  font-weight: 400;
  line-height: 26px;
  color: var(--secondary-400);
`;

const ImageCard = styled.div`
  position: relative;
  width: 282px;
  height: 282px;

  @media (max-width: 1200px) {
    width: 168px;
    height: 168px;
  }

  img {
    width: 100%;
    height: 100%;
    border-radius: 16px;
    object-fit: cover;
  }

  svg {
    position: absolute;
    top: 12px;
    right: 12px;
  }
`;
