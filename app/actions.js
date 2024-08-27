'use server';

import { getRandomNumber } from '@/lib/utils';

// Function to fetch a new Access Token
async function fetchToken() {
  const res = await fetch(
    `${process.env.TWITCH_AUTH_URL}token?client_id=${process.env.IGDB_CLIENT_ID}&client_secret=${process.env.IGDB_CLIENT_SECRET}&grant_type=client_credentials`,
    {
      method: 'POST',
    }
  );

  if (!res.ok) throw new Error('Auth is not successfull');

  const data = res.json();
  return data;
}

// Mian function to get Access Token
export async function getAccessToken() {
  const accessToken = process.env.ACCESS_TOKEN;
  const tokenExpiry = process.env.TOKEN_EXPIRY;

  if (!accessToken || Date.now() >= tokenExpiry) {
    const data = await fetchToken();
    process.env.ACCESS_TOKEN = data.access_token;
    process.env.TOKEN_EXPIRY = Date.now() + data.expires_in * 1000;

    return data.access_token;
  }

  return accessToken;
}

export async function fetchGenresIds() {
  try {
    const accessData = await getAccessToken();
    const res = await fetch(`${process.env.IGDB_URL}genres`, {
      method: 'POST',
      headers: {
        'Client-ID': process.env.IGDB_CLIENT_ID,
        Authorization: `Bearer ${accessData}`,
        Accept: 'application/json',
      },
      body: `fields name, slug; limit 500;`,
    });

    const ids = await res.json();

    const data = ids.map((el) => el.id);

    return data;
  } catch (error) {
    console.error(error);
  }
}

export async function fetchGameByGenreID(genreID) {
  try {
    const accessData = await getAccessToken();

    const gamesResponse = await fetch(`${process.env.IGDB_URL}games`, {
      method: 'POST',
      headers: {
        'Client-ID': process.env.IGDB_CLIENT_ID,
        Authorization: `Bearer ${accessData}`,
        Accept: 'application/json',
      },
      body: `fields name,url,genres.name,genres.slug,platforms.name,platforms.platform_logo.url,cover.url,cover.width,cover.height,cover.checksum,artworks.url,screenshots.url,summary,storyline; where genres = [${genreID}];`,
    });

    const games = await gamesResponse.json();
    const data = getRandomNumber(games);

    return data;
  } catch (error) {
    console.error(error);
  }
}

export async function fetchDataFromUrls(genres) {
  try {
    const fetchPromises = genres.map(async (genre) => {
      try {
        const data = await fetchGameByGenreID(genre.id);
        return data;
      } catch (error) {
        console.error('Fetch error for Genre:', genre, error);
        return null;
      }
    });

    const dataArray = await Promise.all(fetchPromises);
    const validData = dataArray.filter((data) => data !== null);

    return validData;
  } catch (error) {
    console.error('Error processing fetch results:', error);
  }
}
