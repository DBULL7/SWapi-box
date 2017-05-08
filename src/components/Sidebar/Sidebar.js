import React from 'react';

const Sidebar = ( { opening } ) => {
  console.log(opening);
  return (
    <div>
      <nav>
        <h1>{opening.title}</h1>
        <h2>{opening.date}</h2>
        <p>{opening.crawl}</p>
      </nav>

    </div>
  )
}

export default Sidebar;
