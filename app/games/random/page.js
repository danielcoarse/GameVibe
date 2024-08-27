import Image from 'next/image';
import Link from 'next/link';
import { fetchGenresIds, fetchGameByGenreID } from '@/app/actions';
import { getRandomNumber } from '@/lib/utils';
import { Gamepad2, BookCopy } from 'lucide-react';
import { Refresh } from '@/components/Refresh';
import Loading from '@/app/loadning';

const RandomGameData = async () => {
  const ids = await fetchGenresIds();
  const genreID = getRandomNumber(ids);
  const randomGameData = await fetchGameByGenreID(genreID);

  return (
    <>
      {randomGameData ? (
        <>
          <div className='card lg:card-side bg-base-100 shadow-xl mb-10'>
            <figure>
              {randomGameData.cover?.url ? (
                <Image
                  src={`https:${randomGameData.cover?.url.replace(
                    't_thumb',
                    't_1080p'
                  )}`}
                  alt={randomGameData.name}
                  width={264}
                  height={374}
                />
              ) : (
                <Image
                  src='/no-image.png'
                  alt='no game image'
                  width={264}
                  height={374}
                />
              )}
            </figure>
            <div className='card-body'>
              <h2 className='card-title mb-8'>{randomGameData.name}</h2>
              <div>
                <div className='flex flex-wrap items-center gap-2 mb-4'>
                  <div className='flex items-center gap-1'>
                    <BookCopy size={20} />
                    Genre:
                  </div>
                  <div className='flex flex-wrap gap-2'>
                    {randomGameData.genres &&
                      randomGameData.genres.map((el) => (
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
                    {randomGameData.platforms &&
                      randomGameData.platforms.map((el) => (
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
                  href={randomGameData.url || ''}
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
              {randomGameData.summary && (
                <div className='prose'>
                  <h3>Description</h3>
                  <p>{randomGameData.summary || 'No description'}</p>
                </div>
              )}

              {randomGameData.storyline && (
                <div className='prose'>
                  <h3>Storyline</h3>
                  <p>{randomGameData.storyline}</p>
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

export default RandomGameData;
