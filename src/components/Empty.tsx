import Image from "next/image";
import { ReactNode } from "react";

interface Props {
  src: string;
  width: number;
  height: number;
  alt: string;
  children: ReactNode;
}

const Empty = ({ src, width, height, alt, children }: Props) => {
  return (
    <div className="flex flex-col items-center py-16">
      <Image src={src} width={width} height={height} alt={alt} />
      <p className="mt-6 font-bold text-center text-slate400">{children}</p>
    </div>
  );
};

export default Empty;
