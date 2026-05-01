"use client";
import Image from "next/image";
import SortType from "./SortType";
import { useState } from "react";
import SortPrice from "./SortPrice";

const AnimalClient = ({ animals }) => {
  const [filter, setFilter] = useState("All");
  const [sortPrice, setSortPrice] = useState("Ascending");

  let filteredAnimals =
    filter === "All" ? animals : animals.filter((a) => a.type === filter);

  if (sortPrice === "Low") {
    filteredAnimals = [...filteredAnimals].sort((a, b) => a.price - b.price);
  } else if (sortPrice === "High") {
    filteredAnimals = [...filteredAnimals].sort((a, b) => b.price - a.price);
  } else if (sortPrice === "Descending") {
    filteredAnimals = filteredAnimals.sort((a, b) =>
      b.name.localeCompare(a.name),
    );
  } else {
    filteredAnimals = filteredAnimals.sort((a, b) =>
      a.name.localeCompare(b.name),
    );
  }
  console.log(filteredAnimals);
  return (
    <div className="flex flex-col md:flex-row gap-4  p-4">
      {/* Left Section  */}
      <div className="md:w-1/4 w-full bg-white shadow rounded-xl p-4 h-fit">
        <h2 className="text-xl font-bold mb-4">Filter Animals</h2>
        <div className="flex flex-col gap-2">
          <SortType filter={filter} setFilter={setFilter} />
          <SortPrice sortPrice={sortPrice} setSortPrice={setSortPrice} />
        </div>
      </div>

      {/* Right Section  */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:w-3/4">
        {filteredAnimals.map((animal) => (
          <div
            key={animal.id}
            className="bg-white shadow rounded-xl overflow-hidden"
          >
            <Image
              src={animal.image}
              alt={animal.name}
              width={400}
              height={300}
              className="h-40 w-full object-cover"
            />

            <div className="p-4">
              <h3 className="font-semibold text-lg">{animal.name}</h3>
              <p className="text-sm text-gray-500">Type: {animal.type}</p>
              <p className="text-sm text-gray-500">
                Weight: {animal.weight} kg
              </p>
              <p className="font-bold mt-2">৳ {animal.price}</p>

              <button className="mt-3 w-full bg-green-600 text-white py-2 rounded-lg hover:bg-blue-700">
                Details
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AnimalClient;
