import './AlbumList.css';
import React, { useEffect, useState } from 'react';
import Album from './Album';
import AlbumListTitle from './AlbumListTitle';

function AlbumList(props) {
  const { id, MusicBrainzApi } = props;
  const { artistName } = props.location.state;

  const [albumList, setAlbumList] = useState([]);

  useEffect(() => {
    const musicBrainzApi = new MusicBrainzApi();
    const encoded = encodeURI(id);
    const path = `release?artist=${encoded}&inc=recordings`;
    musicBrainzApi
      .query(path)
      .then(response => response.json())
      .then(data => {
        const processed = processReleases(data.releases);
        setAlbumList(processed || []);
      });
  }, [id, MusicBrainzApi]);

  return (
    <React.Fragment>
      <AlbumListTitle label={artistName} />
      <div className="album-list">
        {albumList.map(album => (
          <Album key={album.id} album={album}></Album>
        ))}
      </div>
    </React.Fragment>
  );
}

function processReleases(releases) {
  const recordings = [];
  const releasesProcessed = [];

  // Sort releases ascending
  releases.sort((a, b) => {
    if (!b.date) {
      return -1;
    }
    if (!a.date) {
      return 1;
    }
    return a.date <= b.date ? -1 : 1;
  });

  for (let release of releases) {
    if (release.status !== 'Official') {
      continue;
    }
    // releases can be repeated (several editions of the same record) keep just the first one
    if (releasesProcessed.includes(release.title) === true) {
      continue;
    }

    // Mark the release as processed
    releasesProcessed.push(release.title);
    release.media.forEach(media => {
      const album = {
        id: release.id,
        title: release.title,
        year: parseDate(release.date),
        tracks: [],
      };
      media.tracks.forEach(track => {
        album.tracks.push({
          id: track.id,
          title: track.title,
          duration: parseInt(track.length / 1000),
          number: track.position,
        });
      });
      recordings.push(album);
    });
  }

  return recordings;
}

function parseDate(date) {
  if (!date) {
    return '';
  }
  const parts = date.split('-');
  if (parts.length > 0) {
    return parts[0];
  } else {
    return '';
  }
}

export default AlbumList;
