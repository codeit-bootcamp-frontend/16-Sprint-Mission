import { ReactNode } from "react";

export default function Container({ children }: { children: ReactNode }) {
  return <div className="max-w-[1200px] m-auto py-[20px]">{children}</div>;
}
