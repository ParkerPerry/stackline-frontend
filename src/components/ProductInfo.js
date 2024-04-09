import './ProductInfo.css';
import React from 'react';
import { useSelector } from 'react-redux';


const ProductInfo = () => {
  const productDetails = useSelector((state) => state.product.productDetails);

  return (
    <div className="product-info-container">
      <img src={productDetails.image} alt={productDetails.title} className="product-image" />
      <div className="product-details">
        <h1 className="product-title">{productDetails.title}</h1>
        <h2 className="product-subtitle">{productDetails.subtitle}</h2>
        <div className="product-tags">
          {productDetails.tags && productDetails.tags.map((tag, index) => (
            <span key={index} className="product-tag">{tag}</span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductInfo;
