import React from "react";
import Image from "next/image";
import SortType from "@/ui/SortType";
import { getAnimals } from "@/lib/animalData";
import AnimalClient from "@/ui/AnimalClient";

const AnimalPage = async () => {
  const animals = await getAnimals();
  // console.log(animals);
  // const filteredAnimals =
  //   filter === "all" ? animal : animals.filter((a) => a.type === filter);

  return (
    <AnimalClient animals={animals} />
    // <div className="flex flex-col md:flex-row gap-4 p-4">
    //   {/* Left filter  */}
    //   <div className="md:w-1/4 w-full bg-white shadow rounded-xl p-4 h-fit">
    //     <h2 className="text-xl font-bold mb-4">Filter Animals</h2>

    //     <div className="flex flex-col gap-2">
    //       <SortType animals={animals} />
    //       {/* <div className="dropdown dropdown-bottom dropdown-center ">
    //         <div tabIndex={0} role="button" className="btn m-1 w-46">
    //           Sory By ⬇️
    //         </div>
    //         <ul
    //           tabIndex="-1"
    //           className="dropdown-content menu bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm"
    //         >
    //           <li>
    //             <a>Price: Low to High</a>
    //           </li>
    //           <li>
    //             <a>Price: High to Low</a>
    //           </li>
    //           <li>
    //             <a>Name: A to Z</a>
    //           </li>
    //         </ul>
    //       </div> */}
    //     </div>

    //     {/* <div className="flex flex-col gap-2">
    //        {['All', 'Cow', 'Goat', 'Sheep'].map((type) => (
    //          <button
    //            key={type}
    //            onClick={() => setFilter(type)}
    //          className={`px-4 py-2 rounded-lg border transition ${
    //              filter === type
    //                ? 'bg-green-600 text-white'
    //                : 'bg-gray-100 hover:bg-gray-200'
    //            }`}
    //          >
    //            {type}
    //          </button>
    //        ))}
    //      </div> */}
    //   </div>
    //   {/* Right Section  */}
    //   <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
    //     <Animal animals={animals} />
    //   </div>
    // </div>
  );
};

export default AnimalPage;

// import { useState } from "react";

// const animalsData = [
//   {
//     id: 1,
//     name: "Deshi Shahi Cow",
//     type: "Cow",
//     price: 120000,
//     weight: 280,
//     image: "https://via.placeholder.com/300",
//   },
//   {
//     id: 2,
//     name: "Black Goat",
//     type: "Goat",
//     price: 25000,
//     weight: 35,
//     image: "https://via.placeholder.com/300",
//   },
//   {
//     id: 3,
//     name: "White Sheep",
//     type: "Sheep",
//     price: 30000,
//     weight: 40,
//     image: "https://via.placeholder.com/300",
//   },
// ];

// export default function AnimalsSection() {
//   const [filter, setFilter] = useState("All");

//   const filteredAnimals =
//     filter === "All"
//       ? animalsData
//       : animalsData.filter((a) => a.type === filter);

//   return (
//     <div className="flex flex-col md:flex-row gap-6 p-4">
//       {/* Left Filter */}
//       <div className="md:w-1/4 w-full bg-white shadow rounded-xl p-4 h-fit">
//         <h2 className="text-xl font-bold mb-4">Filter Animals</h2>

//         <div className="flex flex-col gap-2">
//           {['All', 'Cow', 'Goat', 'Sheep'].map((type) => (
//             <button
//               key={type}
//               onClick={() => setFilter(type)}
//               className={`px-4 py-2 rounded-lg border transition ${
//                 filter === type
//                   ? 'bg-green-600 text-white'
//                   : 'bg-gray-100 hover:bg-gray-200'
//               }`}
//             >
//               {type}
//             </button>
//           ))}
//         </div>
//       </div>

//       {/* Right Gallery */}
//       <div className="md:w-3/4 w-full">
//         <h2 className="text-xl font-bold mb-4">Available Animals</h2>

//   <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
//     {filteredAnimals.map((animal) => (
//       <div
//         key={animal.id}
//         className="bg-white shadow rounded-xl overflow-hidden"
//       >
//         <img
//           src={animal.image}
//           alt={animal.name}
//           className="h-40 w-full object-cover"
//         />

//         <div className="p-4">
//           <h3 className="font-semibold text-lg">{animal.name}</h3>
//           <p className="text-sm text-gray-500">Type: {animal.type}</p>
//           <p className="text-sm text-gray-500">Weight: {animal.weight} kg</p>
//           <p className="font-bold mt-2">৳ {animal.price}</p>

//           <button className="mt-3 w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700">
//             Details
//           </button>
//         </div>
//       </div>
//     ))}
//   </div>
// </div>
//     </div>
//   );
// }
