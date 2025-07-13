import { createContext, ReactNode, useContext } from "react";

interface DropdownContextType {
  isOpen: boolean;
  setIsOpen: (value: boolean) => void;
}

interface DropdownProviderProps {
  value: DropdownContextType;
  children: ReactNode;
}

const DropdownContext = createContext<DropdownContextType>({
  isOpen: false,
  setIsOpen: () => {},
});

const DropdownProvider = ({ value, children }: DropdownProviderProps) => {
  return (
    <DropdownContext.Provider value={value}>
      {children}
    </DropdownContext.Provider>
  );
};

export const useDropdownContext = () => {
  const context = useContext(DropdownContext);
  if (!context)
    throw new Error("DropdownContext 내부에서만 사용가능한 값입니다.");
  const { isOpen, setIsOpen } = context;

  return { isOpen, setIsOpen };
};

export default DropdownProvider;
