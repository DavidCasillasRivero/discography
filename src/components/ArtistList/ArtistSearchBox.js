import React from 'react';

function ArtisSearchBox(props) {
  const { searchValue, cbChangeSearchValue, cbChange } = props;

  const handleChange = event => {
    cbChangeSearchValue(event.target.value);
  };

  const handleKeyUp = () => {
    debaunce(function () {
      cbChange(searchValue);
    }, 400);
  };

  return (
    <div>
      <label htmlFor="artist-search-box">Type an artist name </label>
      <input
        id="artist-search-box"
        type="text"
        className="artist-search-box"
        size={35}
        value={searchValue}
        onChange={handleChange}
        onKeyUp={handleKeyUp}
      />
    </div>
  );
}

const debaunce = (function () {
  var timer = 0;
  return function (callback, ms) {
    clearTimeout(timer);
    timer = setTimeout(callback, ms);
  };
})();

export default ArtisSearchBox;
