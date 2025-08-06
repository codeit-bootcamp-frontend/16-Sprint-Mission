import {
  TagItemStyleButton,
  TagItemStyleText,
} from "@components/TagItem/TagItemStyle";
import { ButtonHTMLAttributes, HTMLAttributes, ReactNode } from "react";

interface TextProps extends HTMLAttributes<HTMLSpanElement> {
  type: "text";
  children: ReactNode;
}
interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  type: "button";
  onClick: () => void;
  children: ReactNode;
}

type TagItemProps = TextProps | ButtonProps;

const DEFAULT_TYPE = "text";

const TagItem = ({
  children,
  type = DEFAULT_TYPE,
  onClick,
  ...props
}: TagItemProps) => {
  if (type === "button") {
    return (
      <TagItemStyleButton onClick={onClick} {...props}>
        {children}
      </TagItemStyleButton>
    );
  }
  return <TagItemStyleText {...props}>{children}</TagItemStyleText>;
};

export default TagItem;
