"use client";

import { ChangeEvent, useRef, useState } from "react";
import ImgIcon from "@/assets/images/ico-img.svg";
import PlusIcon from "@/assets/images/ico-plus.svg";
import EditIcon from "@/assets/images/ico-edit.svg";
import Image from "next/image";
import useImageUpload from "@/hooks/useImageUpload";
import LoadingSpinner from "@/components/Loader/LoadingSpinner";
import clsx from "clsx";

const ImageUploader = () => {
  const fileRef = useRef<HTMLInputElement>(null);
  const [preview, setPreview] = useState<File | null>(null);
  const { mutate: uploadImage, isPending } = useImageUpload();

  const handleClick = () => {
    if (!fileRef.current) return;
    fileRef.current.click();
  };

  const handleFileChange = async (e: ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (!files) return;

    const file = files[0];
    setPreview(file);

    uploadImage(file, {
      onError: () => {
        alert("이미지 업로드에 실패했습니다.");
      },
    });
  };

  return (
    <div className="relative flex items-center justify-center w-[384px] h-[310px] rounded-3xl border-2 border-dashed border-gray-300 bg-gray-50 hover:bg-primary-100 hover:border-primary transition-colors overflow-hidden">
      <input
        ref={fileRef}
        type="file"
        className="hidden"
        onChange={handleFileChange}
      />

      {preview && (
        <Image
          src={URL.createObjectURL(preview)}
          alt="이미지 미리보기"
          width={384}
          height={310}
          className="absolute object-cover z-[1] w-full h-full pointer-events-none"
        />
      )}

      <button
        onClick={handleClick}
        disabled={isPending}
        className="group relative flex items-center justify-center w-full h-full"
      >
        <ImgIcon className="w-16 h-16 text-gray-200 group-hover:text-white z-0" />
        <span
          className={clsx("btn-upload-base", {
            "btn-upload": !preview,
            "btn-edit": preview,
          })}
        >
          {isPending ? (
            <LoadingSpinner />
          ) : !preview ? (
            <PlusIcon className="group-hover:text-white" />
          ) : (
            <EditIcon className="text-white" />
          )}
        </span>
      </button>
    </div>
  );
};

export default ImageUploader;
