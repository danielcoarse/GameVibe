import Image from 'next/image';
import Link from 'next/link';
import { getCategoryBySlug } from '@/lib/utils';
import { fetchDataFromUrls } from '@/app/actions';
import { Gamepad2, BookCopy } from 'lucide-react';
import { Refresh } from '@/components/Refresh';
import Loading from '@/app/loadning';
import { getRandomNumber } from '@/lib/utils';

const GamePage = async ({ params }) => {
  const categoryData = getCategoryBySlug(params.slug);
  const data = await fetchDataFromUrls(categoryData.genres);
  const gameData = getRandomNumber(data);

  return (
    <>
      {gameData ? (
        <>
          <div className='card lg:card-side bg-base-100 shadow-xl mb-10'>
            <div className='relative'>
              {gameData.cover?.url ? (
                <Image
                  src={`https:${gameData.cover?.url.replace(
                    't_thumb',
                    't_1080p'
                  )}`}
                  alt={gameData.name}
                  width={264}
                  height={374}
                  className='object-cover object-center'
                />
              ) : (
                <Image
                  src='/no-image.png'
                  alt='no game image'
                  width={264}
                  height={374}
                  priority
                />
              )}
            </div>
            <div className='card-body'>
              <h2 className='card-title mb-8'>{gameData.name}</h2>
              <div>
                <div className='flex flex-wrap items-center gap-2 mb-4'>
                  <div className='flex items-center gap-1'>
                    <BookCopy size={20} />
                    Genre:
                  </div>
                  <div className='flex flex-wrap gap-2'>
                    {gameData.genres &&
                      gameData.genres.map((el) => (
                        <div
                          key={el.name}
                          className='badge badge-secondary badge-outline'
                        >
                          {el.name}
                        </div>
                      ))}
                  </div>
                </div>

                <div className='flex flex-wrap items-center gap-2 mb-4'>
                  <div className='flex items-center gap-1'>
                    <Gamepad2 size={20} />
                    Platforms:
                  </div>
                  <div className='flex flex-wrap gap-2'>
                    {gameData.platforms &&
                      gameData.platforms.map((el) => (
                        <div
                          key={el.name}
                          className='badge badge-secondary badge-outline'
                        >
                          {el.name}
                        </div>
                      ))}
                  </div>
                </div>
              </div>
              <div className='card-actions justify-end mt-auto'>
                <Link
                  href={gameData.url}
                  target='_blank'
                  className='btn btn-primary capitalize'
                >
                  check it out
                </Link>
              </div>
            </div>
          </div>

          <div className='card bg-base-100 shadow-xl mb-8'>
            <div className='card-body'>
              {gameData.summary && (
                <div className='prose'>
                  <h3>Description</h3>
                  <p>{gameData.summary || 'No description'}</p>
                </div>
              )}

              {gameData.storyline && (
                <div className='prose'>
                  <h3>Storyline</h3>
                  <p>{gameData.storyline}</p>
                </div>
              )}
            </div>
          </div>

          <div className='flex justify-center'>
            <Refresh />
          </div>
        </>
      ) : (
        <Loading />
      )}
    </>
  );
};

export default GamePage;
