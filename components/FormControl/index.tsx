import { ReactNode } from "react";

const FormControl = ({ children }: { children: ReactNode }) => {
  return <div className="flex items-center gap-4">{children}</div>;
};

export default FormControl;
