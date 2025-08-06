interface Props {
  className: string;
  imgSrc: string;
  keyword: string;
  title: string;
  description: string;
}

const Introduction = ({
  className,
  imgSrc,
  keyword,
  title,
  description,
}: Props) => {
  return (
    <section
      className={`flex flex-col gap-lg text-text-grey700 
      xl:bg-background-light xl:flex-row xl:items-center xl:gap-16 xl:w-[988px] xl:mx-auto xl:rounded-[12px]
      ${className}`}
    >
      <img
        className="w-[100%]
        xl:w-[579px]"
        src={imgSrc}
        alt="사이트의 주요 기능을 보여주는 이미지"
        loading="lazy"
      />
      <div>
        <div
          className="mb-sm font-bold text-primary
        md:text-lg"
        >
          {keyword}
        </div>
        <div
          className="mb-md font-bold text-[24px]
        md:text-[32px]
        xl:whitespace-pre-wrap"
        >
          {title}
        </div>
        <div
          className="font-medium whitespace-pre-wrap
        md:text-lg"
        >
          {description}
        </div>
      </div>
    </section>
  );
};

export default Introduction;
