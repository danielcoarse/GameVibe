import Link from 'next/link';
import { Heart } from 'lucide-react';

export const Footer = () => {
  return (
    <footer className='w-full mx-auto p-2 bg-base-100 text-center mt-auto'>
      <Link href='#' className='btn btn-ghost'>
        Made with <Heart size={20} /> by{' '}
        <span className='text-red-600'>Daniel</span>
      </Link>
    </footer>
  );
};
