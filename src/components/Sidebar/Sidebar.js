import React from 'react';

const Sidebar = ({openingCrawl}) => {
  let test = openingCrawl || 'ok'
  return (
    <div>
      <nav>{test}</nav>
    </div>
  )
}

export default Sidebar;
