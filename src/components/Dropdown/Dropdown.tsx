import DropdownProvider from "@components/Dropdown/DropdownContext";
import DropdownItem from "@components/Dropdown/DropdownItem";
import DropdownList from "@components/Dropdown/DropdownList";
import DropdownTrigger from "@components/Dropdown/DropdownTrigger";
import styled from "@emotion/styled/macro";
import useOutsideClick from "@hooks/useClickOutside";
import { ReactNode, useState } from "react";

const Dropdown = ({ children, ...props }: { children: ReactNode }) => {
  const [isOpen, setIsOpen] = useState(false);
  const handleOutside = () => setIsOpen(false);
  const ref = useOutsideClick(handleOutside);

  return (
    <DropdownProvider value={{ isOpen, setIsOpen }}>
      <DropdownStyle ref={ref} {...props}>
        {children}
      </DropdownStyle>
    </DropdownProvider>
  );
};

const DropdownStyle = styled.div`
  position: relative;
`;

Dropdown.Trigger = DropdownTrigger;
Dropdown.List = DropdownList;
Dropdown.Item = DropdownItem;

export default Dropdown;
