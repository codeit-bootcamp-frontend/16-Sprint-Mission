import { ButtonHTMLAttributes, ReactNode } from "react";

interface BaseProps {
  children: ReactNode;
}

type DropdownItemProps = ButtonHTMLAttributes<HTMLButtonElement> & BaseProps;

const DropdownItem = ({ children, ...props }: DropdownItemProps) => {
  return (
    <li>
      <button {...props}>{children}</button>
    </li>
  );
};

export default DropdownItem;
