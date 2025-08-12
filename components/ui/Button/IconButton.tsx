import { MouseEvent } from "react";
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
  imgSrc: string;
  imgAlt?: string;
  onClick: (e: MouseEvent<HTMLButtonElement>) => void;
  className?: string;
  id?: string;
  title?: string;
}

const IconButton = ({
  type = "button",
  imgSrc,
  imgAlt,
  radius = "rounded",
  width,
  height,
  hasBgColor = false,
  onClick,
}: IconButtonProps) => {
  return (
    <button
      type={type}
      className={clsx("icon-btn", {
        "rounded-full": radius === "full",
        "rounded-lg": radius === "rounded",
        "bg-gray-400": hasBgColor,
      })}
      onClick={onClick}
    >
      <img src={imgSrc} alt={imgAlt} width={width} height={height} />
    </button>
  );
};

export default IconButton;
