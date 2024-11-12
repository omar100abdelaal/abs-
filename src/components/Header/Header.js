import React from 'react';
import './Header.css';
import image1 from '../../images/image 22.png';
import image2 from '../../images/uiw_user.png';
import image3 from '../../images/teenyicons_bag-outline.png';

export const Header = () => (
  <header className="header">
    <nav className="nav-links">
      <a href="/">Home</a>
      <a href="/products">Products</a>
      <a href="/categories">Categories</a>
      <a href="/sale">Sale</a>
    </nav>
    <div className="logo">
      <img src={image1} alt="Brand Logo" className="brand-logo" />
    </div>
    <div className="right-section">
      <input type="text" placeholder="Search..." className="search-bar" />
      <img src={image3} alt="Bag Icon" className="icon" />
      <img src={image2} alt="User Icon" className="icon" />
    </div>
  </header>
);
