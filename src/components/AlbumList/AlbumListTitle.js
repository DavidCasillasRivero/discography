import './AlbumListTitle.css';
import React from 'react';
import { Link } from '@reach/router';

function AlbumListTitle(props) {
  const { label } = props;
  return (
    <div className="album-list-title">
      <h2>
        {label}{' '}
        <span className="back-button">
          <Link to="/discography/">Back</Link>
        </span>
      </h2>
    </div>
  );
}

export default AlbumListTitle;
