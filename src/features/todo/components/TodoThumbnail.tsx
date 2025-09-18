"use client";

import LoadingSpinner from "@/components/LoadingSpinner";
import ThumbnailImage from "@/components/ThumbnailImage";
import ThumbnailEmpty from "@/components/ThumbnailEmpty";
import useUploadImage from "@/hooks/useUploadImage";
import { ChangeEvent } from "react";

interface Props {
  value: string | null;
  onChange: (imageUrl: string) => void;
}

const TodoThumbnail = ({ value, onChange }: Props) => {
  const { handleChangeImage, isUploading } = useUploadImage();

  const isImageEmpty = value === null;
  const handleChange = async (e: ChangeEvent<HTMLInputElement>) => {
    const url = await handleChangeImage(e);
    if (url) {
      onChange(url);
    }
  };

  return (
    <div className="relative w-[384px] shrink-0 grow-0 basis-auto rounded-3xl overflow-hidden">
      {isImageEmpty ? (
        <ThumbnailEmpty onChange={handleChange} />
      ) : (
        <ThumbnailImage onChange={handleChange} image={value} />
      )}
      {isUploading && (
        <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center bg-slate-200/50">
          <LoadingSpinner />
        </div>
      )}
    </div>
  );
};

export default TodoThumbnail;
