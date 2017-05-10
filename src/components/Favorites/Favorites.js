import React from 'react';
import PropTypes from 'prop-types'

const Favorites = ({showHideFavorites, favorites}) => {
  return (
    <button onClick={() => showHideFavorites()} className='view-favorites'>

      <p>View Favorites : {favorites}</p>
    </button>
  )
}

Favorites.propTypes = {
  favorites: PropTypes.number
}

export default Favorites;
