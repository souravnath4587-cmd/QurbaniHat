import Link from "next/link";
import React from "react";
import { featuredAnimals } from "@/lib/feature";
import Image from "next/image";

const Feature = () => {
  return (
    <section className="bg-white py-16">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Title */}
        <h2 className="text-3xl md:text-4xl font-bold text-center text-green-800">
          🌟 Featured Animals
        </h2>
        <p className="text-center text-gray-600 mt-2">
          Best quality, popular and trusted Qurbani animals
        </p>

        {/* Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-10">
          {featuredAnimals.map((animal) => (
            <div
              key={animal.id}
              className="rounded-xl shadow-sm hover:shadow-xl transition duration-300 overflow-hidden bg-green-50"
            >
              {/* Image */}
              <div className="relative w-full h-48">
                <Image
                  src={animal.image}
                  alt={animal.name}
                  fill
                  className="object-cover"
                />
              </div>

              {/* Content */}
              <div className="p-4">
                {/* Name */}
                <h3 className="font-semibold text-lg text-green-900">
                  {animal.name}
                </h3>

                {/* Price */}
                <p className="text-green-700 font-bold mt-1">
                  ৳ {animal.price.toLocaleString()}
                </p>

                {/* Details */}
                <p className="text-sm text-gray-600 mt-1">
                  {animal.type} • {animal.weight} KG • ⭐ {animal.rating}
                </p>

                {/* Location */}
                <p className="text-xs text-gray-500 mt-1">
                  📍 {animal.location}
                </p>

                {/* Badge */}
                <div className="mt-2">
                  {animal.stock ? (
                    <span className="text-xs bg-green-200 text-green-800 px-2 py-1 rounded-full">
                      Available
                    </span>
                  ) : (
                    <span className="text-xs bg-red-200 text-red-700 px-2 py-1 rounded-full">
                      Sold Out
                    </span>
                  )}
                </div>

                {/* Button */}
                <button className="mt-4 w-full bg-green-700 text-white py-2 rounded-lg hover:bg-green-800 transition">
                  View Details
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Feature;
