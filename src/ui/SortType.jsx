"use client";
import React from "react";

const SortType = ({ filter, setFilter }) => {
  return (
    <div className="dropdown dropdown-bottom dropdown-center">
      <div
        tabIndex={0}
        role="button"
        className="btn m-1 w-full flex justify-start"
      >
        Product Categories <span className="text-green-600">({filter})</span> ⬇️
      </div>
      <ul
        tabIndex="-1"
        className="dropdown-content menu bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm"
      >
        <li onClick={() => setFilter("All")}>
          <a>All</a>
        </li>
        <li onClick={() => setFilter("Cow")}>
          <a>Cow</a>
        </li>
        <li onClick={() => setFilter("Goat")}>
          <a>Goat</a>
        </li>
      </ul>
    </div>
  );
};

export default SortType;
