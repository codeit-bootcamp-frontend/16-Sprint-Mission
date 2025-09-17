import { ReactNode } from "react";
import { StaticImageData } from "next/image";
import Button from "@/components/ui/Button";
import { useRouter } from "next/navigation";
import Image from "next/image";

interface BannerProps {
  title: string | ReactNode;
  imgSrc: string | StaticImageData;
  imgAlt: string;
  linkTo?: string;
  ariaLabel?: string;
  loading?: "lazy" | "eager";
}

const Banner = ({
  title,
  linkTo,
  imgSrc,
  imgAlt,
  ariaLabel,
  loading = "lazy",
}: BannerProps) => {
  const router = useRouter();

  return (
    <article
      className="min-h-[540px] bg-primary-light text-gray-700 text-center"
      aria-label={ariaLabel}
    >
      <div className="flex flex-col justify-between h-full min-h-[540px]">
        <div className="pt-[120px] md:pt-[84px] md:px-0 md:pb-[210px] md:max-w-none lg:items-start lg:pb-24">
          <h2 className="text-fluid mb-[18px] md:mb-6 lg:mb-8 break-keep font-bold">
            {title}
          </h2>
          {linkTo && (
            <Button
              onClick={() => router.push(linkTo)}
              aria-label="상품 페이지로 이동"
              variant="primary"
              size="lg"
              shape="round"
              className="px-[70px] md:px-[124px]"
            >
              구경하러 가기
            </Button>
          )}
        </div>
        <Image
          className="w-full max-w-[744px] my-0 mx-auto"
          loading={loading}
          src={imgSrc}
          alt={imgAlt}
          width={746}
          height={340}
        />
      </div>
    </article>
  );
};

export default Banner;
