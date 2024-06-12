import Image from 'next/image';
import Link from 'next/link';
import { Navbar } from '@/components/Navbar';

export const Header = () => {
  return (
    <header>
      <div className='max-w-4xl mx-auto px-3 py-4'>
        <div className='navbar bg-base-100 p-0'>
          <div className='flex-1'>
            <Link
              href='/'
              className='flex items-center gap-2 text-xl font-bold'
            >
              <Image src='/logo.svg' alt='logo' width={40} height={40} />
              GameVibe
            </Link>
          </div>
          <div className='flex-none'>
            <Navbar />
          </div>
        </div>
      </div>
    </header>
  );
};
