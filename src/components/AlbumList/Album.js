import React from 'react';
import AlbumTitle from './AlbumTitle';
import SongList from './SongList';

function Album(props) {
  const { album } = props;

  return (
    <div className="album">
      <AlbumTitle label={album.title} year={album.year}></AlbumTitle>
      <SongList songList={album.tracks}></SongList>
    </div>
  );
}

export default Album;
