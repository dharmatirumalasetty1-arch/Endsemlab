
import React from "react";
import ProductCard from "./ProductCard";
import "./App.css";

function App() {
  return (
    <div className="container">
      <h1>Our Products</h1>

      <div className="products">
        <ProductCard
          name="Laptop"
          price="55000"
          description="High performance laptop"
          image="https://placehold.co/200x150?text=Laptop"
        />

        <ProductCard
          name="Smartphone"
          price="25000"
          description="Latest smartphone"
          image="https://placehold.co/200x150?text=Phone"
        />

        <ProductCard
          name="Headphones"
          price="2000"
          description="Wireless headphones"
          image="https://placehold.co/200x150?text=Headphones"
        />
      </div>
    </div>
  );
}

export default App;
