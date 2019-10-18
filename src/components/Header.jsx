import React from 'react';
import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <div id="header">
      <div id="header-link-div">
        <Link id="header-link" className="header-txt" to="/">Home</Link>
      </div>
      <h1 id="header-text" className="header-text">HEADER</h1>
    </div>
  )
}