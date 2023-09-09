import React from 'react';
import { Link } from 'react-router-dom';
import avatar from './avatar.svg';

export default function Navigation() {
  return (
    <nav className="navbar">
      <div className="logo">
        BOOK STORE
      </div>
      <ul className="nav-links">
        <li><Link to="/">BOOKS</Link></li>
        <li><Link to="/category">CATEGORIES</Link></li>
      </ul>
      <div className="avatar">
        <img src={avatar} alt="Avatar" />
      </div>
    </nav>
  );
}
