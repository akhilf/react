import React, { Component } from 'react';

// Stateless functional Component

const NavBar = (props) => {
  return (
    <nav className="navbar navbar-light bg-light">
      <a className="navbar-brand" href="#">My Shopping Cart
        <span className="badge badge-pill badge-secondary">{props.totalNumbers}</span>
      </a>
    </nav>
  )
}
export default NavBar;
