  
import React from 'react';
import Nav from '../Nav';

function Header({currentPage, setCurrentPage}) {
  return (
    <header className="navbar navbar-expand-sm text-light">
      <h1 className="display-4">Gil B. Abadio   <br></br> </h1>
      <Nav currentPage={currentPage} setCurrentPage={setCurrentPage}></Nav>
    </header>
  );
}

export default Header;