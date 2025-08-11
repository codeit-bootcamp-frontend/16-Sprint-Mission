"use client";

import clsx from "clsx";

interface BulletButtonProps {
  variant?: string;
  type?: "submit" | "button";
  onClick?: () => void;
}

const BulletButton = ({
  variant,
  type = "button",
  onClick,
}: BulletButtonProps) => {
  return (
    <button
      className={clsx("bullet-base", {
        "bullet-todo": variant === "todo",
        "bullet-done": variant === "done",
      })}
      onClick={onClick}
      type={type}
    ></button>
  );
};

export default BulletButton;
