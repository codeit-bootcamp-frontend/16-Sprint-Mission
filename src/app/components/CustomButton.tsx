import { MouseEventHandler } from "react";
import Icon from "./Icon";

type HoverColor = "violet" | "rose" | "lime";

const colorMap: Record<HoverColor, string> = {
  violet: "group-hover:bg-violet-600",
  rose: "group-hover:bg-rose-500",
  lime: "group-hover:bg-lime-300",
};

interface CustomButtonProps {
  title: string;
  containerStyle?: string;
  handleClick?: MouseEventHandler<HTMLButtonElement>;
  btnType?: "button" | "submit";
  textStyle?: string;
  leftIcon: string;
  iconStyle?: string;
  hoverColor?: HoverColor;
}

export default function CustomButton({
  title,
  containerStyle,
  handleClick,
  btnType,
  textStyle,
  leftIcon,
  iconStyle,
  hoverColor,
}: CustomButtonProps) {
  return (
    <button
      type={btnType || "button"}
      disabled={false}
      onClick={handleClick}
      className={`group relative w-[168px] h-14 mt-6 cursor-pointer ${containerStyle}`}
    >
      <div className="relative flex justify-center items-center gap-1 z-20  group-hover:text-amber-50  transition-colors duration-200">
        <Icon id={leftIcon} className={`fill-slate-900 h-5 w-5 ${iconStyle}`} />
        <span
          className={`font-[--font-nanumsquareB] font-bold leading-none translate-y-[1.5px] ${textStyle}`}
        >
          {title}
        </span>
      </div>
      <div
        className={`absolute inset-[1px] rounded-3xl bg-[#f5f8fc] border border-black transition-colors duration-200 z-10 ${
          colorMap[hoverColor || "violet"]
        }`}
      ></div>
      <div className="absolute left-[9px] right-[-4px] top-[5px] h-14 rounded-3xl bg-black z-0"></div>
    </button>
  );
}
