import React from 'react';
import './SeasonCollections.css';
import image1 from '../../images/image 23.png';
import image2 from '../../images/image 24.png';
import image3 from '../../images/image 25.png';

export const SeasonCollections = () => (
  <section className="season-collections">
    <h2>Season Collections</h2>
    <div className="collection-grid">
      <div className="collection-card">
        <img src={image1} alt="Hoodie" />
        <h3>Hoodie</h3>
        <button className="more-button">More</button>
      </div>
      
      
      <div className="collection-card">
        <img src={image2} alt="Jacket" />
        <h3>Jacket</h3>
        <button className="more-button">More</button>
      </div>
      

      <div className="collection-card">
        <img src={image3} alt="Pullover" />
        <h3>Pullover</h3>
        <button className="more-button">More</button>
      </div>
    </div>
  </section>
);
