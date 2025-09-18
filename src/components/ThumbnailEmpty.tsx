import Image from "next/image";
import { ChangeEvent } from "react";
import PlustIcon from "@/assets/icons/PlusIcon.svg";

interface EmptyThumbnailProps {
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
}

const ThumbnailEmpty = ({ onChange }: EmptyThumbnailProps) => {
  return (
    <div className="flex items-center justify-center h-full border-2 border-dashed border-slate300 bg-slate-50 rounded-3xl ">
      <Image
        src="/images/FileUploadIcon.svg"
        width={64}
        height={64}
        alt="이미지를 업로드해주세요."
      />
      <div className="absolute bottom-[16px] right-[16px] w-16 h-16">
        <input
          type="file"
          name="imageUrl"
          id="imageUrl"
          className="hidden"
          onChange={onChange}
        />

        <label
          htmlFor="imageUrl"
          className="flex items-center justify-center w-full h-full rounded-full cursor-pointer bg-slate200"
        >
          <PlustIcon className="w-6 h-6 text-slate500" />
        </label>
      </div>
    </div>
  );
};

export default ThumbnailEmpty;
