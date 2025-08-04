import {
  TagItemStyleButton,
  TagItemStyleText,
} from "@components/TagItem/TagItemStyle";
import { ButtonHTMLAttributes, HTMLAttributes, ReactNode } from "react";

interface TagItemBase {
  children: ReactNode;
}

type TextProps = HTMLAttributes<HTMLSpanElement> &
  TagItemBase & {
    type: "text";
  };
type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> &
  TagItemBase & {
    type: "button";
    onClick: () => void;
  };

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
