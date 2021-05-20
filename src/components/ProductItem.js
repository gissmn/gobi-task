import React from "react";
import ImageComp from "./ImageComp";

const ProductItem = (props) => {
  return (
    <div className="productItem">
      <ImageComp name={props.name} />
      <p>Zweiseitger Wendemantel Mit Schmetterlingsxzds</p>
      <p>+6 colors</p>
      <p>
        <span className="price">$ 299.00</span>
        <span className="discount">$ 79.00</span>
      </p>
    </div>
  );
};

export default ProductItem;
