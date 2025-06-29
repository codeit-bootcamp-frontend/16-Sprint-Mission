import Button from '../../../components/Button/Button';

const BannerTop = () => {
  return (
    <section className='bg-[#CFE5FF] '>
      <div
        className='flex max-w-[1110px] mx-auto overflow-hidden items-center 
        gap-[132px] pt-[48px] flex-col
        md:gap-[211px] md:pt-[84px] md:flex-col
        xl:gap-[8px] xl:pt-[200px] xl:flex-row'
      >
        <div
          className='flex flex-col justify-center items-center gap-[18px]
          w-[240px]
          md:w-[520px]
          xl:pb-[60px]'
        >
          <h1
            className='font-pretendard font-bold text-[#374151] break-keep
            text-center text-[32px]/[140%]
            md:text-center md:text-[40px]/[140%]
            xl:text-left xl:text-[40px]/[140%]'
          >
            일상의 모든 물건을 거래해보세요
          </h1>
          <Button
            className='w-[240px] md:w-[357px] h-[48px] rounded-[40px]
            text-[18px]/[26px]
            md:text-[20px]/[32px]'
          >
            구경하러 가기
          </Button>
        </div>
        <img src='/images/Img_home_top.png' className='min-w-[448px] w-full' />
      </div>
    </section>
  );
};

export default BannerTop;
