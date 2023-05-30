import React from "react";
import {AiOutlineStar} from "react-icons/ai";


const Rating = () => {
  return (
    <div className="product_rating d-flex ">
      <div className="rating_star ">
        <AiOutlineStar />
        <AiOutlineStar />
        <AiOutlineStar />
        <AiOutlineStar />
        <AiOutlineStar />
      </div>
      <p>(121)</p>
    </div>
  );
};

export default Rating;
