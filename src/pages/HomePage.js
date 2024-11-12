import React from 'react';
import { Header } from '../components/Header/Header';
import { HeroSection } from '../components/HeroSection/HeroSection';
import { SeasonCollections } from '../components/SeasonCollections/SeasonCollections';
import { AllProducts } from '../components/AllProducts/AllProducts';
import { CommunitySection } from '../components/CommunitySection/CommunitySection';
import { Footer } from '../components/Footer/Footer';
//import './HomePage.css';

const products = [
  { id: 1, name: 'T-Shirt', price: 20, image: 'path/to/image1.jpg' },
  { id: 2, name: 'Jacket', price: 50, image: 'path/to/image2.jpg' },
  // Add more products as needed
];

export const HomePage = () => {
  return (
  <div className="homepage">
    <Header />
    <HeroSection />
    <SeasonCollections />
    <AllProducts products={products} />
    <CommunitySection />
    <Footer />
  </div>
  );
};


