import React from 'react';

function Navigation({ currentPage, setCurrentPage }) {
  const tabs = ['About', 'Portfolio', 'Contact', 'Resume'];
  return (
    <nav>
      <ul className="nav">
        {tabs.map(tab => (
          <li
            key={tab}
            onClick={() => setCurrentPage(tab)}
            className={
              currentPage === tab ? 'nav-link active nav-item' : 'nav-link nav-item'
            }
          >
            {tab}
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default Navigation;