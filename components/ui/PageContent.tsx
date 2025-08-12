import { ReactNode } from "react";

export interface PageContentType {
  children: ReactNode;
  className?: string;
}

const PageContent = ({ children, className }: PageContentType) => {
  return (
    <section
      className={`${
        className ?? ""
      } w-full my-auto p-4 md:p-6 wide:w-[12.5rem] wide:mx-6 wide:my-auto wide:pt-2 wide:pb-16`}
    >
      {children}
    </section>
  );
};

export default PageContent;
