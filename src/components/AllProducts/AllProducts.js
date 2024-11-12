import React from 'react';
import './AllProducts.css';
import { useEffect, useState } from "react";
import { db, auth } from "../../config/firebase";
import {
  getDocs,
  collection,
  doc,
} from "firebase/firestore";
import { ArrowRight } from "lucide-react";

export const AllProducts = ({}) => {
  const [ProductList, setProductList] = useState([]);

  const ProductsCollectionRef = collection(db, "products");

  const getProductList = async () => {
    try {
      const data = await getDocs(ProductsCollectionRef);
      const filteredData = data.docs.map((doc) => ({
        ...doc.data(),
        id: doc.id,
      }));
      setProductList(filteredData);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    getProductList();
  }, []);

  return (
    <section className="all-products">
      <h2>All Products</h2>
      <div className="product-grid">
        {ProductList.map((product) => (
          <div key={product.id} className="product-card">
            <img src={product.PictureName} alt={product.name} />
            <h4>{product.Name}</h4>
            <p>Rp. {product.Price}</p>
          </div>
        ))}
      </div>
      <div className="see-more-container">
        <button className="see-more-button">
          SEE MORE
          <ArrowRight className="see-more-arrow" />
        </button>
      </div>
    </section>
  );
};