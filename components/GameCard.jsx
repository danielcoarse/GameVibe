import Image from 'next/image';
import Link from 'next/link';
import { Joystick } from 'lucide-react';

export const GameCard = ({ title, slug, imgSrc }) => {
  return (
    <Link
      href={`games/${slug}`}
      className='card w-96 bg-base-100 shadow-xl image-full'
    >
      <figure>
        <Image
          src={imgSrc}
          alt={title}
          fill
          sizes='100vw'
          className='rounded-3xl hover:scale-110'
        />
      </figure>
      <div className='card-body'>
        <h2 className='card-title flex justify-between'>
          {title} <Joystick size={30} />
        </h2>

        {/* <div className='card-actions justify-end'>
          <button className='btn btn-primary'>Choose</button>
        </div> */}
      </div>
    </Link>
  );
};
