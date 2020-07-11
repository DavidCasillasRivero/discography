import './ArtistListTitle.css';
import React from 'react';

function ArtistListTitle(props) {
  const { label, isLoading } = props;
  return (
    <div className="artist-list-title">
      <h2>
        {label}
        {isLoading === true && <span className="loading"> Loading...</span>}
      </h2>
    </div>
  );
}

export default ArtistListTitle;
