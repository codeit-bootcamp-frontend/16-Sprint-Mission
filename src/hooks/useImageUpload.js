import { useEffect, useRef, useState } from "react";

const INIT_VALID = {
  isValid: null,
  msg: "",
};
const CONSTANTS = {
  ONE_MB: 1024 * 1024, // 1MB
  DEFAULT_MAX_SIZE_MB: 5,
  ERROR_MESSAGES: {
    MAX_SIZE: (size) => `* 업로드 가능한 최대 용량은 ${size}MB입니다.`,
    MAX_LENGTH: (count) => `* 이미지 등록은 최대 ${count}개까지 가능합니다.`,
  },
};

const checkValidMaxSize = (currentSize, maxSize) => {
  const convertSize = maxSize / CONSTANTS.ONE_MB;
  if (currentSize > maxSize) {
    return {
      isValid: false,
      msg: CONSTANTS.ERROR_MESSAGES.MAX_SIZE(convertSize),
    };
  }

  return { isValid: true, msg: "" };
};

const checkValidMaxLength = (currentLength, maxLength) => {
  if (currentLength > maxLength) {
    return {
      isValid: false,
      msg: CONSTANTS.ERROR_MESSAGES.MAX_LENGTH(maxLength),
    };
  }

  return { isValid: true, msg: "" };
};

const useImageUpload = ({
  maxLength = null,
  maxSizeMB = CONSTANTS.DEFAULT_MAX_SIZE_MB, // MB 단위
}) => {
  const fileRef = useRef();
  const [uploadImgs, setUploadImgs] = useState([]);
  const [imgValid, setImgValid] = useState(INIT_VALID);
  const maxFileSize = CONSTANTS.ONE_MB * maxSizeMB;

  const handleUploadImg = (e) => {
    if (!e.target.files.length) return;
    const files = Array.from(e.target.files); // 파일 객체들

    // 최대 개수 체크 : maxLength가 있을 때만 체크
    if (maxLength !== null) {
      const validLength = checkValidMaxLength(
        uploadImgs.length + files.length,
        maxLength
      );
      if (!validLength.isValid) {
        setImgValid(validLength);
        return;
      }
    }

    // 파일별 최대 용량 체크
    for (const file of files) {
      const validSize = checkValidMaxSize(file.size, maxFileSize);

      if (!validSize.isValid) {
        setImgValid(validSize);
        return;
      }
    }

    // 추가된 파일에 대해 개수/용량 검증 완료 후, api 붙이기
    setUploadImgs((prev) => [...prev, ...files]);
    setImgValid({ isValid: true, msg: "" });
  };

  const handleDeleteImg = (id) => {
    setUploadImgs((prev) => prev.filter((_, idx) => idx !== id));
  };

  useEffect(() => {
    if (fileRef.current.value) fileRef.current.value = ""; // 이미지 중복 업로드를 위해 값 초기화

    if (!maxLength) return; // maxLength 값 없으면 return

    setImgValid(checkValidMaxLength(uploadImgs.length, maxLength));
  }, [maxLength, uploadImgs]);

  return { uploadImgs, imgValid, handleUploadImg, handleDeleteImg, fileRef };
};

export default useImageUpload;
