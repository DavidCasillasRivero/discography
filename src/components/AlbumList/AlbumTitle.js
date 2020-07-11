import './AlbumTitle.css';
import React from 'react';

function AlbumTitle(props) {
  const { year, label } = props;
  return (
    <div className="album-title">
      <span className="album-title-label">{label}</span>
      <span className="album-title-year"> ({year})</span>
    </div>
  );
}

export default AlbumTitle;
