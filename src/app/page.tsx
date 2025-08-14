import Button from '@/components/Button';
import Link from 'next/link';
import LogoIcon from '../../public/logo_1.svg';
import Image from 'next/image';

export default function Home() {
  return (
    <div className='flex flex-col justify-center items-center h-screen gap-10'>
      <Image src={LogoIcon} alt='Logo' width={500} height={500} />
      <Link href='/boards'>
        <Button>boards 페이지로 이동하기</Button>
      </Link>
    </div>
  );
}
