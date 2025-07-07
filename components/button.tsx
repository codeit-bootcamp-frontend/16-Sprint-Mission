import Link from "next/link";

type Button = "submit" | "reset" | "button" | undefined;

type ButtonType = {
  type?: Button;
  className?: string;
  children?: string;
  href?: string;
  disabled?: boolean;
};

export default function Button({
  type = "button",
  className,
  children,
  href,
  disabled = false,
}: ButtonType) {
  return (
    <button type={type} className={className} disabled={disabled}>
      {href ? <Link href={href}>{children}</Link> : children}
    </button>
  );
}
