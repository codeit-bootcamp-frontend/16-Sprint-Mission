import { useEffect, useState } from "react";
import styles from "./ImagePreview.module.scss";
import Skeleton from "../Skeleton/Skeleton";
import { useToastStore } from "../../store/toastStore";

const ImagePreview = ({ file, id, onDelete }) => {
  const [preview, setPreview] = useState();
  const createToast = useToastStore((state) => state.createToast);

  useEffect(() => {
    // 여기서 이미지 업로드 실패가 아니라, 나중에 api를 사용해서 이미지를 업로드 해야하니깐
    // api를 붙일때, 이미지 업로드에 대한 성공/실패 메세지를 전달하는게 맞는거 같음.
    // 우선 임시로 여기 놔두기.
    if (!file) {
      createToast({ message: "이미지 업로드에 실패하였습니다." });
      return;
    }

    const fileURL = URL.createObjectURL(file);
    setPreview(fileURL);
    createToast({ message: "이미지 업로드에 성공하였습니다." });

    return () => {
      URL.revokeObjectURL(fileURL);
    };
  }, [file, createToast]);

  const handleClickDelete = () => {
    onDelete(id);
    createToast({ message: "이미지를 삭제하였습니다." });
  };

  if (!preview) {
    return (
      <div className={styles.imagePreview__skeleton}>
        <Skeleton width={"100%"} height={"100%"} />
      </div>
    );
  }

  return (
    <div className={styles.imagePreview}>
      <img
        src={preview}
        alt="미리보기 이미지"
        className={styles.imagePreview__image}
      />
      <button
        type="button"
        className={styles.imagePreview__delBtn}
        onClick={handleClickDelete}
      >
        닫기
      </button>
    </div>
  );
};

export default ImagePreview;
