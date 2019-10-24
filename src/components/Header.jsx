import React from 'react';
import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <div id="header">
      <div id="header-link-div">
        <Link id="header-link" className="header-txt" to="/">Home</Link>
      </div>
      <h1 id="header-text" className="header-text">Back to Nature</h1>
      <div id="header-state-div">
        <Link id="header-state" className="header-txt" to="/chgstate">Change State</Link>
      </div>
    </div>
  )
}