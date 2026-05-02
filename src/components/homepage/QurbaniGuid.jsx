import { getBreeds, getTips } from "@/lib/guid";
import React from "react";

const QurbaniGuid = () => {
  const tips = getTips;
  const breeds = getBreeds;
  return (
    <div className="max-w-6xl mx-auto p-6 space-y-10">
      {/* Qurbani Tips */}
      <div>
        <h2 className="text-2xl font-bold mb-4">Qurbani Tips</h2>

        <div className="grid md:grid-cols-2 gap-4">
          {tips.map((tip, i) => (
            <div key={i} className="bg-white p-4 rounded-xl shadow">
              {tip}
            </div>
          ))}
        </div>
      </div>

      {/* Top Breeds */}
      <div>
        <h2 className="text-2xl font-bold mb-4">Top Breeds</h2>

        <div className="grid md:grid-cols-3 gap-4">
          {breeds.map((breed, i) => (
            <div key={i} className="bg-white p-4 rounded-xl shadow">
              <h3 className="font-semibold">{breed.name}</h3>
              <p className="text-sm text-gray-600">{breed.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default QurbaniGuid;
