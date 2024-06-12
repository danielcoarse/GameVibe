'use server';

// Function to fetch a new Access Token
async function fetchToken() {
  const res = await fetch(
    `${process.env.IGDB_URL}token?client_id=${process.env.IGDB_CLIENT_ID}&client_secret=${process.env.IGDB_CLIENT_SECRET}&grant_type=client_credentials`,
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

// Function to fetch genre ID by genre name
export async function fetchGenreID(genreName, access_token) {
  const genreResponse = await fetch('https://api.igdb.com/v4/genres', {
    method: 'POST',
    headers: {
      'Client-ID': process.env.IGDB_CLIENT_ID,
      Authorization: `Bearer ${access_token}`,
      Accept: 'application/json',
    },
    body: `fields id,name; where name = "${genreName}";`,
  });
  const genres = await genreResponse.json();

  if (genres.length > 0) {
    return genres[0].id;
  } else {
    throw new Error('Genre not found');
  }
}

// Function to fetch games by genre ID
export async function fetchGamesByGenre(genreID, access_token) {
  const gamesResponse = await fetch('https://api.igdb.com/v4/games', {
    method: 'POST',
    headers: {
      'Client-ID': process.env.IGDB_CLIENT_ID,
      Authorization: `Bearer ${access_token}`,
      Accept: 'application/json',
    },
    body: `fields name,url,genres.name,genres.slug,platforms.name,platforms.platform_logo.url,cover.url,cover.width,cover.height,cover.checksum,artworks.url,screenshots.url,summary,storyline; where genres = [${genreID}];`,
  });

  const games = await gamesResponse.json();
  return games;
}

// Main function to get games by genre name
export async function getGamesByGenreName(genreName) {
  try {
    const accessData = await getAccessToken();
    const genreID = await fetchGenreID(genreName, accessData);
    const games = await fetchGamesByGenre(genreID, accessData);
    return games;
  } catch (error) {
    console.error(error);
  }
}

// Function to fetch genres ids
export async function fetchGenresIds() {
  try {
    const accessData = await getAccessToken();
    const res = await fetch('https://api.igdb.com/v4/genres', {
      method: 'POST',
      headers: {
        'Client-ID': process.env.IGDB_CLIENT_ID,
        Authorization: `Bearer ${accessData}`,
        Accept: 'application/json',
      },
      body: `fields name, slug; limit 500;`,
    });

    const ids = await res.json();
    return ids;
  } catch (error) {
    console.error(error);
  }
}
