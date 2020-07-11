import React, { useState } from 'react';
import './App.css';
import ArtistList from './components/ArtistList/ArtistList';
import AlbumList from './components/AlbumList/AlbumList';
import MusicBrainzApi from './services/MusicBrainzApi/MusicBrainzApi';
import { Router } from '@reach/router';

function App() {
  const [searchValue, setSearchValue] = useState('');
  return (
    <div className="app">
      <h1>Discography</h1>
      <p>Search for an artist and display its discography.</p>
      <p>
        This app is powered by the{' '}
        <a href="https://musicbrainz.org/">MusicBrainz</a> API,{' '}
        <a href="https://reactjs.org">React</a> and many other open source
        projects.
      </p>

      <Router>
        <ArtistList
          path="/discography/"
          MusicBrainzApi={MusicBrainzApi}
          searchValue={searchValue}
          cbChangeSearchValue={setSearchValue}
        />

        <AlbumList
          path="/discography/artist/:id"
          MusicBrainzApi={MusicBrainzApi}
        ></AlbumList>
      </Router>
    </div>
  );
}

export default App;
