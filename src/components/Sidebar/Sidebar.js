import React from 'react';
import PropTypes from 'prop-types'

const Sidebar = ( { title, release_date, opening_crawl } ) => {
  return (
    <div>
      <nav className='opening-header'>
        <h1>{title}</h1>
        <h2>{release_date}</h2>
        <p>{opening_crawl}</p>
      </nav>

    </div>
  )
}

Sidebar.propTypes = {
  title: PropTypes.string,
  release_date: PropTypes.string,
  opening_crawl: PropTypes.string
}

export default Sidebar;
