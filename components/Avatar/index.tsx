import { MouseEvent } from "react";
import Image from "next/image";

interface AvatarProps {
  imgSrc: string;
  className?: string;
  onClick?: (e: MouseEvent<HTMLButtonElement>) => void;
}

const Avatar = ({ imgSrc, className, onClick }: AvatarProps) => {
  return (
    <button className={className} onClick={onClick}>
      <Image src={imgSrc} alt="프로필 이미지" width="40" height="40" />
    </button>
  );
};

export default Avatar;
