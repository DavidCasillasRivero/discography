class MusicBrainzApi {
  query(path) {
    const request = new Request(
      `https://musicbrainz.org/ws/2/${path}&limit=100&fmt=json`,
      {
        method: 'GET',
        headers: {
          'User-Agent': 'Discography/0.0.0 (davidquintu@gmail.com)',
        },
      }
    );
    return fetch(request);
  }
}

export default MusicBrainzApi;
