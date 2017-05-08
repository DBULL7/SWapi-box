import React from 'react';

const Sidebar = ( { title, release_date, opening_crawl } ) => {
  return (
    <div>
      <nav>
        <h1>{title}</h1>
        <h2>{release_date}</h2>
        <p>{opening_crawl}</p>
      </nav>

    </div>
  )
}

export default Sidebar;
