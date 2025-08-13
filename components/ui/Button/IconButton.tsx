import { MouseEvent, ComponentType } from "react";
import clsx from "clsx";

interface IconButtonStyleProps {
  color?: string;
  radius?: "rounded" | "full";
  width?: number;
  height?: number;
  hasBgColor?: boolean;
}

interface IconButtonProps extends IconButtonStyleProps {
  type?: "button" | "submit" | "reset" | undefined;
  icon: ComponentType<{ className?: string }>;
  imgAlt?: string;
  onClick: (e: MouseEvent<HTMLButtonElement>) => void;
  className?: string;
  id?: string;
  title?: string;
}

const IconButton = ({
  type = "button",
  icon: Icon,
  radius = "rounded",
  width,
  height,
  hasBgColor = false,
  className,
  onClick,
}: IconButtonProps) => {
  return (
    <button
      type={type}
      className={clsx(`icon-btn ${className ?? ""}`, {
        "rounded-full": radius === "full",
        "rounded-lg": radius === "rounded",
        "bg-gray-400": hasBgColor,
      })}
      onClick={onClick}
    >
      <Icon className={`w-[${width}px] h-[${height}px]`} />
    </button>
  );
};

export default IconButton;
