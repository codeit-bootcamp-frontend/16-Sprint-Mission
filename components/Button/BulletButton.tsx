"use client";

import clsx from "clsx";

interface BulletButtonProps {
  variant: string;
  onClick?: () => void;
}

const BulletButton = ({ variant, onClick }: BulletButtonProps) => {
  return (
    <button
      className={clsx("bullet-base", {
        "bullet-todo": variant === "todo",
        "bullet-done": variant === "done",
      })}
      onClick={onClick}
    ></button>
  );
};

export default BulletButton;
