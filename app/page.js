import Link from 'next/link';
import Image from 'next/image';
import { experiences } from '@/lib/data';
import clsx from 'clsx';

export default function Home() {
  return (
    <>
      <div className='mb-8 text-center'>
        <h1 className='text-4xl md:text-5xl font-bold tracking-tight mb-10'>
          Discover the best games to meet your expectations
        </h1>
        <p className='text-lg md:text-xl'>
          Choose what kind of experience you want to get from the next game:
        </p>
      </div>
      <div className='flex flex-wrap justify-center gap-5 '>
        {experiences.map((el, i) => (
          <Link
            key={el.title}
            href={`/games/${el.slug}`}
            className={clsx(
              'btn',
              (i + 1) % 2 === 0 ? 'btn-primary' : 'btn-secondary'
            )}
          >
            {el.title}
            <Image src={el.image} alt={el.title} width={30} height={30} />
          </Link>
        ))}
      </div>
    </>
  );
}
