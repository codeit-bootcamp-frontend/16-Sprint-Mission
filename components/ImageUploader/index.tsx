import Image from "next/image";
import ImgIcon from "@/assets/images/ico-img.svg";
import PlusIcon from "@/assets/images/ico-plus.svg";

const ImageUploader = () => {
  return (
    <div className="flex items-center justify-center w-[384px] h-[310px] rounded-3xl border-2 border-dashed border-gray-300 bg-gray-50 hover:bg-primary-100 hover:border-primary transition-colors">
      <button className="group relative flex items-center justify-center w-full h-full">
        {/* <Image
          src="/images/ico-img.svg"
          alt="이미지 추가하기"
          width={64}
          height={64}
        /> */}
        <ImgIcon className="w-16 h-16 text-gray-200 group-hover:text-white" />
        <span className="absolute right-4 bottom-4 flex items-center justify-center w-16 h-16 rounded-full bg-gray-200 text-gray-500 transition-colors group-hover:bg-primary">
          <PlusIcon className="group-hover:text-white" />
        </span>
      </button>
    </div>
  );
};

export default ImageUploader;
