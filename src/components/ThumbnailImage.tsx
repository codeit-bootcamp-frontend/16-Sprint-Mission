import Image from "next/image";
import { ChangeEvent } from "react";

interface ImageThumbnailProps {
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  image: string;
}
const ThumbnailImage = ({ onChange, image }: ImageThumbnailProps) => {
  return (
    <div className="flex items-center justify-center h-full rounded-3xl">
      <Image
        src={image}
        alt="투두 이미지"
        width={384}
        height={311}
        className="w-full h-full object-cover"
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
          className="flex items-center justify-center w-full h-full rounded-full cursor-pointer border-2 border-slate900 bg-slate900/50"
        >
          <Image
            src="/images/ImageEditIcon.svg"
            width={24}
            height={24}
            alt="이미지 수정 버튼 아이콘"
          />
        </label>
      </div>
    </div>
  );
};
export default ThumbnailImage;
