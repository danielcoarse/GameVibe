'use client';

import Link from 'next/link';
import { Sparkles, ChevronLeft } from 'lucide-react';
import { usePathname } from 'next/navigation';

export const Navbar = () => {
  const pathname = usePathname();

  return (
    <nav className='flex items-center'>
      {pathname !== '/' ? (
        <Link
          href='/'
          className='btn md:btn-square-none btn-outline btn-primary btn-sm capitalize'
        >
          <ChevronLeft size={20} />
          back
        </Link>
      ) : (
        <Link
          href='/games/random'
          className='btn md:btn-square-none btn-outline btn-primary btn-sm capitalize'
        >
          <span className='hidden md:block'>Impress Me!</span>
          <Sparkles size={20} />
        </Link>
      )}
    </nav>
  );
};
