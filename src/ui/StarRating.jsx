import React from "react";
import { FaStar, FaStarHalf, FaStarHalfAlt } from "react-icons/fa";

const StarRating = ({ rating }) => {
  console.log(rating);

  return (
    <div className="flex text-yellow-500">
      {[1, 2, 3, 4, 5].map((i) => (
        <span className="" key={i}>
          {rating >= i ? (
            <FaStar />
          ) : rating >= i - 0.5 ? (
            <FaStarHalfAlt />
          ) : (
            <FaStarHalf />
          )}
        </span>
      ))}
    </div>
  );
};

export default StarRating;
