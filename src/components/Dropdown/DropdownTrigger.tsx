import { ButtonHTMLAttributes, ReactNode } from "react";
import { useDropdownContext } from "@components/Dropdown/DropdownContext";

interface BaseProps {
  children: ReactNode;
}

type DropdownTriggerProps = ButtonHTMLAttributes<HTMLButtonElement> & BaseProps;

const DropdownTrigger = ({ children, ...props }: DropdownTriggerProps) => {
  const { isOpen, setIsOpen } = useDropdownContext();
  const handleClick = () => setIsOpen(!isOpen);

  return (
    <button onClick={handleClick} {...props}>
      {children}
    </button>
  );
};

export default DropdownTrigger;
