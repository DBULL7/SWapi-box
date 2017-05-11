import React from 'react';
import PropTypes from 'prop-types'
import './Favorites.css'

const Favorites = ({showHideFavorites, favorites}) => {
  return (
    <div onClick={() => showHideFavorites()} className='view-favorites'>

      <p>View Favorites : <span className="number-box">{favorites}</span></p>
    </div>
  )
}

Favorites.propTypes = {
  favorites: PropTypes.number
}

export default Favorites;
