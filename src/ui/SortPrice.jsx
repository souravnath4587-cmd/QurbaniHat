"use client";
import React from "react";

const SortPrice = ({ sortPrice, setSortPrice }) => {
  return (
    <div className="dropdown dropdown-bottom dropdown-center ">
      <div
        tabIndex={0}
        role="button"
        className="btn m-1 w-full flex justify-start"
      >
        Sort By Price{" "}
        <span className="text-green-600 capitalize">({sortPrice})</span>⬇️
      </div>
      <ul
        tabIndex="-1"
        className="dropdown-content menu bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm"
      >
        <li onClick={() => setSortPrice("Ascending")}>
          <a>Name: A to Z</a>
        </li>
        <li onClick={() => setSortPrice("Descending")}>
          <a>Name: Z to A</a>
        </li>
        <li onClick={() => setSortPrice("Low")}>
          <a>Price: Low to High</a>
        </li>
        <li onClick={() => setSortPrice("High")}>
          <a>Price: High to Low</a>
        </li>
      </ul>
    </div>
  );
};

export default SortPrice;
