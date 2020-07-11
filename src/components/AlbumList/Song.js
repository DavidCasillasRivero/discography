import React from 'react';

function Song(props) {
  const { song } = props;

  return (
    <div className="song">
      <span className="">{song.number}</span>
      <span> {song.title}</span>
    </div>
  );
}

export default Song;
