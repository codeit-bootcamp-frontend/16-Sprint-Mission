import { ReactNode } from "react";
import { StaticImageData } from "next/image";
import Image from "next/image";
import clsx from "clsx";
import { BREAKPOINTS } from "@/constants";

interface MainSectionProps {
  title: string | ReactNode;
  label?: string;
  ariaLabel?: string;
  description?: string | ReactNode;
  imgSrc: string | StaticImageData;
  imgMobileSrc?: string | StaticImageData;
  imgAlt: string;
  reverse?: boolean;
}

const MainSection = ({
  title,
  label,
  ariaLabel,
  description,
  imgSrc,
  imgMobileSrc,
  imgAlt,
  reverse = false,
}: MainSectionProps) => {
  return (
    <section
      className="flex justify-center bg-white mb-10 lg:pt-0 lg:px-6 lg:pb-[138px]"
      aria-label={ariaLabel}
    >
      <div
        className={clsx(
          "flex flex-col justify-center items-start gap-6 flex-grow md:flex-grow-0 lg:items-center lg:flex-row lg:w-[988px] lg:gap-16 lg:bg-gray-50 lg:overflow-hidden lg:py-0 lg:px-6",
          {
            "items-end": reverse,
          }
        )}
      >
        <picture className="w-full lg:max-w-[50%]">
          <source
            media={`(min-width: ${BREAKPOINTS.sm}px`}
            srcSet={typeof imgSrc === "string" ? imgSrc : imgSrc.src}
          />
          <Image
            src={imgMobileSrc ?? imgSrc}
            alt={imgAlt}
            width={572}
            height={444}
            sizes={`(min-width: 640px) 580px, (min-width: 480px) 696px, 344px`}
            loading="lazy"
            className="w-full lg:order-2"
          />
        </picture>

        <div
          className={clsx("text-gray-700", {
            "text-right": reverse,
          })}
        >
          <span className="block mb-2 md:mb-4 lg:mb-3 text-base md:text-lg font-bold text-primary">
            {label}
          </span>
          <h2 className="mb-4 md:mb-6 text-2xl md:text-[32px] lg:text-[40px] font-bold break-keep leading-normal">
            {title}
          </h2>
          <p className="text-base md:text-lg lg:text-2xl font-medium ">
            {description}
          </p>
        </div>
      </div>
    </section>
  );
};

export default MainSection;
