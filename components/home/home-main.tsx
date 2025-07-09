import Image, { StaticImageData } from "next/image";

type HomeMainProps = {
  itemImg: StaticImageData;
  title: string;
  subTitle: string;
  subTitle2: string;
  content: string;
  content2: string;
  reverse?: boolean;
};

export default function HomeMain({
  itemImg,
  title,
  subTitle,
  subTitle2,
  content,
  content2,
  reverse = false,
}: HomeMainProps) {
  return (
    <section
      className={`flex flex-col m-auto my-[40px] gap-[40px] max-w-[344px] 
      md:max-w-[696px] xl:items-center xl:max-w-[988px] xl:my-[138px] xl:gap-[64px] ${
        reverse ? "xl:flex-row-reverse" : "xl:flex-row"
      }`}
    >
      <Image
        src={itemImg}
        alt="판다 마켓 메인"
        className="w-full object-cover h-[259px] rounded-[12px] md:h-[524px] xl:w-[579px] xl:h-[444px]"
      />
      <div className={`mt-[24px] flex flex-col ${reverse && "text-end"}`}>
        <h6 className="text-primary-100 font-bold mb-[8px] md:mb-[16px] md:text-[18px] xl:font-extrabold xl:mb-[12px]">
          {title}
        </h6>
        <h1 className="font-bold text-secondary-700 text-[24px] mb-[16px] md:text-[32px] md:mb-[24px] xl:text-[40px] xl:mb-[24px]">
          {subTitle}
          <br className="hidden xl:inline" />
          {subTitle2}
        </h1>
        <p className="font-medium md:text-[18px] xl:text-[24px]">{content}</p>
        <p className="font-medium md:text-[18px] xl:text-[24px]">{content2}</p>
      </div>
    </section>
  );
}
