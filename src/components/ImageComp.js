import React from "react";

const ImageComp = (props) => {
  const img = require(`../assets/img/${props.name}.png`);
  return <img alt={props.alt} src={img} />;
};

export default ImageComp;
