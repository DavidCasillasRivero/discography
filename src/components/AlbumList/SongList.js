import React from 'react';
import Song from './Song';

function SongList(props) {
  const { songList } = props;

  return (
    <div className="song-list">
      {songList.map(song => (
        <Song key={song.id} song={song}></Song>
      ))}
    </div>
  );
}

export default SongList;
