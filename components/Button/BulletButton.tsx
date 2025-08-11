"use client";

import clsx from "clsx";
import Image from "next/image";
import { MouseEvent } from "react";

interface BulletButtonProps {
  variant?: string;
  type?: "submit" | "button";
  onClick?: (e: MouseEvent<HTMLButtonElement>) => void;
}

const BulletButton = ({
  variant,
  type = "button",
  onClick,
}: BulletButtonProps) => {
  return (
    <button
      className={clsx("group relative bullet-base", {
        "bullet-todo": variant === "todo",
        "bullet-done": variant === "done",
      })}
      onClick={onClick}
      type={type}
    >
      <Image
        src="/images/ico-check-wt.svg"
        alt="완료된 할 일"
        width="20"
        height="20"
        className={clsx(
          "absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 transition-opacity",
          {
            "opacity-100": variant === "done",
            "opacity-0 group-hover:opacity-100": variant === "todo",
          }
        )}
      />
    </button>
  );
};

export default BulletButton;
