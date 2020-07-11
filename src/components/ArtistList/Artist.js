import './Artist.css';
import React from 'react';
import { Link } from '@reach/router';

function Artist(props) {
  const { artist } = props;

  return (
    <li className="artist">
      <Link
        to={'/discography/artist/' + artist.id}
        state={{
          artistName: artist.name,
        }}
      >
        <span className="artis-name">{artist.name}</span>
      </Link>
      {artist.disambiguation && (
        <span className="artist-disambiguation">
          {' '}
          ({artist.disambiguation})
        </span>
      )}
    </li>
  );
}

export default Artist;
