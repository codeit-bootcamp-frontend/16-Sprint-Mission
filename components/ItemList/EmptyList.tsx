import Image from "next/image";
import { ItemListBaseProps } from "@/types/todo";

const EmptyList = ({
  emptyImg,
  emptyMsg,
}: Pick<ItemListBaseProps, "emptyImg" | "emptyMsg">) => {
  return (
    <div className="flex flex-col items-center justify-center">
      <Image src={emptyImg} alt="비어 있는 리스트" width="240" height="240" />
      <p className="text-gray-400 text-base text-center">{emptyMsg}</p>
    </div>
  );
};

export default EmptyList;
