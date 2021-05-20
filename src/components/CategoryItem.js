import React from "react";
import { VscArrowRight } from "react-icons/vsc";
import ImageComp from "./ImageComp";

const CategoryItem = (props) => {
  return (
    <div className="catItem">
      <ImageComp name={props.name} />
      <div className="arrow">
        {props.name.toUpperCase()}
        <VscArrowRight style={{ cursor: "pointer" }} />
      </div>
    </div>
  );
};

export default CategoryItem;
