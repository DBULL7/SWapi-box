import React from 'react';
import PropTypes from 'prop-types'
import './Sidebar.css'

const Sidebar = ( { title, release_date, opening_crawl } ) => {
  return (
    <div>
      <nav className='opening-header'>
        <h1>{title}</h1>
        <p>{opening_crawl}</p>
        <h2>{release_date}</h2>
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
