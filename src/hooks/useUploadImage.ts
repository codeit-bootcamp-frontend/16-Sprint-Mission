import { postImage } from "@/features/todo/services/todoApi";
import getRandomEngLetter from "@/utils/getRandomEngLetter";
import { ChangeEvent, useState } from "react";

const ONE_MB = 1024 * 1024;
const MAX_SIZE = ONE_MB * 5; // 5MB

const useUploadImage = () => {
  const [isUploading, setIsUploading] = useState(false);

  const fetchImage = async (file: File) => {
    // 영문으로만 파일명 구성되도록 변경
    const ext = file.name.split(".").pop();
    const randomText = getRandomEngLetter();
    const convertFileName = `image_todo_${randomText}.${ext}`;

    const convertFile = new File([file], convertFileName, {
      type: file.type,
    });

    const formData = new FormData();
    formData.append("image", convertFile);

    try {
      const { url } = await postImage(formData);
      return url;
    } catch (error) {
      console.error(error);
      throw error;
    } finally {
      setIsUploading(false);
    }
  };

  const handleChangeImage = (e: ChangeEvent<HTMLInputElement>) => {
    if (!e.target.files) return;
    if (!e.target.files.length) return;

    const file = e.target.files[0];
    e.target.value = ""; // 중복 업로드 가능하도록 초기화

    // 사진 용량 검증
    if (file.size > MAX_SIZE) {
      alert(`사진 최대 용량은 ${MAX_SIZE / ONE_MB}MB입니다.`);
      return;
    }

    setIsUploading(true);

    return fetchImage(file);
  };

  return { handleChangeImage, isUploading };
};

export default useUploadImage;
