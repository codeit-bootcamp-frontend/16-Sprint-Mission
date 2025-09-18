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
      } w-full my-auto p-4 sm:p-6 lg:w-[12.5rem] lg:mx-6 lg:my-auto lg:pt-2 lg:pb-16`}
    >
      {children}
    </section>
  );
};

export default PageContent;
