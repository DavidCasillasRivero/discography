import './ArtistList.css';
import React, { useEffect, useState } from 'react';
import ArtistListTitle from './ArtistListTitle';
import ArtistSearchBox from './ArtistSearchBox';
import Artist from './Artist';

function ArtistList(props) {
  const { MusicBrainzApi, searchValue, cbChangeSearchValue } = props;

  const [artistList, setArtistList] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const handleSearch = searchValue => {
    setIsLoading(true);
    const musicBrainzApi = new MusicBrainzApi();
    const encoded = encodeURI(searchValue);
    const path = `artist/?query=artist:%22${encoded}%22`;
    musicBrainzApi
      .query(path)
      .then(response => response.json())
      .then(data => {
        setArtistList(data.artists || []);
        setIsLoading(false);
      });
  };

  // This triggers searching after pressing back button in the album list
  useEffect(() => {
    if (searchValue) {
      handleSearch(searchValue);
    }
    // We only want this to run on component load
    // eslint-disable-next-line
  }, []);

  return (
    <div className="artist-list">
      <ArtistListTitle label="Artists" isLoading={isLoading} />
      <ArtistSearchBox
        searchValue={searchValue}
        cbChangeSearchValue={cbChangeSearchValue}
        cbChange={handleSearch}
      />
      <ul>
        {artistList.map(artist => (
          <Artist key={artist.id} artist={artist} />
        ))}
      </ul>
    </div>
  );
}

export default ArtistList;
