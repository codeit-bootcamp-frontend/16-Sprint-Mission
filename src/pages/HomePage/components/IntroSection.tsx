import IntroCard from './IntroCard';

interface CardItem {
  imageUrl: string;
  tag: string;
  title: string;
  subtitle: string[];
}

const CardMap: CardItem[] = [
  {
    imageUrl: '/images/Img_home_01.png',
    tag: 'Hot Item',
    title: '인기 상품을 확인해보세요',
    subtitle: ['가장 HOT한 중고거래 물품을', '판다 마켓에서 확인해보세요'],
  },
  {
    imageUrl: '/images/Img_home_02.png',
    tag: 'Search',
    title: '구매를 원하는 상품을 검색하세요',
    subtitle: ['구매하고 싶은 물품은 검색해서', '쉽게 찾아보세요'],
  },
  {
    imageUrl: '/images/Img_home_03.png',
    tag: 'register',
    title: '판매를 원하는 상품을 등록하세요',
    subtitle: ['어떤 물건이든 판매하고 싶은 상품을', '쉽게 등록하세요'],
  },
];

const IntroSection = () => {
  return (
    <section className='bg-[#FCFCFC] pb-[138px]'>
      <div
        className='
        flex flex-col
        gap-[40px] pt-[52px] px-[16px] pb-[83px]
        md:gap-[52px] md:pt-[24px] md:px-[24px] md:pb-[56px]
        xl:gap-[276px] xl:pt-[138px] xl:px-0 xl:pb-[138px] xl:bg-white
      '
      >
        {CardMap.map((CardItem, i) => (
          <IntroCard key={i} items={CardItem} reverse={i % 2 === 0 ? false : true} />
        ))}
      </div>
    </section>
  );
};

export default IntroSection;
