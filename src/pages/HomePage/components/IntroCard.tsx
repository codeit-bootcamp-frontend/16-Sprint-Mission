interface CardItem {
  imageUrl: string;
  tag: string;
  title: string;
  subtitle: string[];
}

interface Props {
  items: CardItem;
  reverse: boolean;
}

const IntroCard = ({ items, reverse }: Props) => {
  const { imageUrl, tag, title, subtitle } = items;
  return (
    <article
      className='bg-[#FCFCFC] w-full mx-auto rounded-[12px]
      xl:items-center xl:justify-center xl:max-w-[988px]'
    >
      <div
        className={`flex flex-col justify-center gap-[23.24px]
        md:gap-[64px]
        xl:items-center
        ${reverse ? 'xl:flex-row-reverse' : 'xl:flex-row'}`}
      >
        <img src={imageUrl} className='w-full xl:w-[588px]' />
        <div
          className={`font-pretendard
          ${reverse ? 'text-right' : 'text-left'}
          ${reverse ? 'pl-[24px]' : 'pr-[24px]'}`}
        >
          <span
            className='inline-block font-bold text-primary-100
            text-[16px]/[26px] mb-[8px]
            md:text-[18px]/[26px] md:mb-[16px]'
          >
            {tag}
          </span>
          <h2
            className='font-bold text-gray-700 break-keep
            text-[24px]/[32px] mb-[16px]
            md:text-[32px]/[42px] md:mb-[24px]
            xl:text-[40px]/[140%] xl:mb-[24px] xl:w-[293px]'
          >
            {title}
          </h2>
          <h3
            className='flex flex-col font-medium whitespace-nowrap text-gray-700
            text-[16px]/[26px]
            md:text-[18px]/[26px]
            xl:text-[24px]/[32px]'
          >
            {subtitle.map((v) => {
              return <span>{v}</span>;
            })}
          </h3>
        </div>
      </div>
    </article>
  );
};

export default IntroCard;
