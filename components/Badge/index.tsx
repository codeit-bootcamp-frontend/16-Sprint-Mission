import santokki from "@/assets/fonts/HSSantokki/santokki";
import clsx from "clsx";

interface BadgeProps {
  text?: string;
  variant?: "todo" | "done";
  className?: string;
}

const Badge = ({ text, variant, className }: BadgeProps) => {
  return (
    <span
      className={clsx(`badge-base ${santokki.className} ${className}`, {
        "badge-todo": variant === "todo",
        "badge-done": variant === "done",
      })}
    >
      {text}
    </span>
  );
};

export default Badge;
