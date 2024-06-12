import Image from 'next/image';
import Link from 'next/link';
import { getGamesByGenreName, fetchGenresIds } from '@/app/actions';
import { randomIntFromInterval } from '@/lib/utils';
import { Gamepad2, BookCopy } from 'lucide-react';
import { Refresh } from '@/components/Refresh';
import Loading from '@/app/loadning';

const RandomGame = async () => {
  const genres = await fetchGenresIds();
  const genreNumber = randomIntFromInterval(0, genres.length - 1);
  const games = await getGamesByGenreName(genres[genreNumber].name);
  const gameNumber = randomIntFromInterval(0, games.length - 1);
  const randomGame = games[gameNumber];

  return (
    <>
      {randomGame ? (
        <>
          <div className='card lg:card-side bg-base-100 shadow-xl mb-10'>
            <figure>
              {randomGame.cover?.url ? (
                <Image
                  src={`https:${randomGame.cover?.url.replace(
                    't_thumb',
                    't_cover_big'
                  )}`}
                  alt={randomGame.name}
                  width={264}
                  height={374}
                  priority
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
            </figure>
            <div className='card-body'>
              <h2 className='card-title mb-8'>{randomGame.name}</h2>
              <div>
                <div className='flex flex-wrap items-center gap-2 mb-4'>
                  <div className='flex items-center gap-1'>
                    <BookCopy size={20} />
                    Genre:
                  </div>
                  <div className='flex flex-wrap gap-2'>
                    {randomGame.genres &&
                      randomGame.genres.map((el) => (
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
                    {randomGame.platforms &&
                      randomGame.platforms.map((el) => (
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
                  href={randomGame.url}
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
              {randomGame.summary && (
                <div className='prose'>
                  <h3>Description</h3>
                  <p>{randomGame.summary || 'No description'}</p>
                </div>
              )}

              {randomGame.storyline && (
                <div className='prose'>
                  <h3>Storyline</h3>
                  <p>{randomGame.storyline}</p>
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

export default RandomGame;
