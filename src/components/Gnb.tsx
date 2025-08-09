import Link from 'next/link';

import DoitIconLogo from '@/assets/icons/doit_icon_logo.svg';
import DoitTextLogo from '@/assets/icons/doit_text_logo.svg';

const Gnb = () => {
  return (
    <header className='h-[3.75rem] py-2.5 bg-white border-b border-b-gray-200 flex xl:justify-center items-center'>
      {/* <nav> */}
      <div className='w-full pl-4 xl:p-0 lg:w-[1200px]'>
        <Link href='/' className='flex items-center gap-2'>
          <DoitIconLogo />
          <DoitTextLogo className='hidden md:block' />
        </Link>
      </div>
      {/* </nav> */}
    </header>
  );
};

export default Gnb;
