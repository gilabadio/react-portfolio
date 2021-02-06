import React from 'react';

function Footer() {
  return (
    <footer>
      <ul className="nav justify-content-center">
        <li className="nav-item">
          <a className="nav-link" href="https://github.com/gilabadio">
            <img src="https://img.icons8.com/fluent/48/000000/github.png"/></a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="https://www.linkedin.com/in/guilherme-abadio-04a7931b3/">
          <img src="https://img.icons8.com/material-two-tone/52/000000/linkedin--v1.png"/>           </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="https://meta.stackoverflow.com/users/13991678/guilherme-abadio"><img src="https://img.icons8.com/color/52/000000/stackoverflow.png"/>
          </a>
          
        </li>
      </ul>
    </footer>
  );
}

export default Footer;