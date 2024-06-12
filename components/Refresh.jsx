'use client';

import { useRouter } from 'next/navigation';
import { Sparkles } from 'lucide-react';

export const Refresh = () => {
  const router = useRouter();

  return (
    <button
      onClick={router.refresh}
      className='btn btn-block btn-secondary btn-outline capitalize'
    >
      Impress more
      <Sparkles size={20} />
    </button>
  );
};
