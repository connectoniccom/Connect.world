import React from 'react';
import './styles/Header.css';

function Header() {
  return (
    <header className="header">
      <h1>My Website</h1>
      <nav>
        <a href="/">Home</a>
        <a href="/about">About</a>
      </nav>
    </header>
  );
}
export default Header;
