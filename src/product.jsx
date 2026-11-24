
import React from "react";

function ProductCard(props) {
  return (
    <div className="card">
      <img src={props.image} alt={props.name} />

      <h2>{props.name}</h2>

      <p>{props.description}</p>

      <h3>Price: ₹{props.price}</h3>

      <button>Add to Cart</button>
    </div>
  );
}

export default ProductCard;
