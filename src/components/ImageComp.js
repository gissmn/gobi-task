import React from "react";

const ImageComp = (props) => {
  const img = require(`../assets/img/${props.name}.png`);
  return <img className="img" alt={props.name} src={img.default} />;
};

export default ImageComp;
