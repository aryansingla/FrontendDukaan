import React from 'react'
import "./freeProducts.css";
import product1 from "../../assets/images/product1.png"
import product2 from "../../assets/images/product2.png"
import product3 from "../../assets/images/product3.png"
import product4 from "../../assets/images/product4.png"
const FreeProducts = () => {
  return (
    <div className="freeProducts">
      <div className="freeProductsHeading">
      Try our other free products
      </div>
      <div className="freeProductsList">
        <div className="freeProduct">
          <img src={product1} alt="" className="freeProductImg" />
          <p className="freeProductTitle">Privacy Policy Generator</p>
          <p className="freeProductDecription">Stock your store with 100s of products and start selling to customers in minutes, without the hassle of inventory or packaging.</p>
        </div>
        <div className="freeProduct">
          <img src={product2} alt="" className="freeProductImg" />
          <p className="freeProductTitle">Terms & Conditions Generator</p>
          <p className="freeProductDecription">Stock your store with 100s of products and start selling to customers in minutes, without the hassle of inventory or packaging.</p>
        </div>
        <div className="freeProduct">
          <img src={product3} alt="" className="freeProductImg" />
          <p className="freeProductTitle">Domain Name Generator</p>
          <p className="freeProductDecription">Stock your store with 100s of products and start selling to customers in minutes, without the hassle of inventory or packaging.</p>
        </div>
        <div className="freeProduct">
          <img src={product4} alt="" className="freeProductImg" />
          <p className="freeProductTitle">Invoice Generator</p>
          <p className="freeProductDecription">Stock your store with 100s of products and start selling to customers in minutes, without the hassle of inventory or packaging.</p>
        </div>
      </div>
    </div>
  )
}

export default FreeProducts