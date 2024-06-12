export default async function handler(req, res) {
  try {
    const result = await fetch(
      `${process.env.IGDB_URL}token?client_id=${process.env.IGDB_CLIENT_ID}&client_secret=${process.env.IGDB_CLIENT_SECRET}&grant_type=client_credentials`,
      {
        method: 'POST',
      }
    );
    const data = result.json();
    res.status(200).json({ data });
  } catch (err) {
    res.status(500).json({ error: 'failed to load data' });
  }
}
