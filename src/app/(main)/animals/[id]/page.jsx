import { getAnimalsDetails } from "@/lib/animalData";
import React from "react";
import cow from "@/assets/quarbniCow.webp";
import Image from "next/image";
import { describe } from "better-auth";
import { FaStar } from "react-icons/fa";
import StarRating from "@/ui/StarRating";

const AnimalDetailPage = async ({ params }) => {
  const { id } = await params;
  const animalDetails = await getAnimalsDetails(id);
  const {
    image,
    name,
    price,
    age,
    breed,
    category,
    rating,
    location,
    description,
    weight,
    id: Id,
  } = animalDetails;

  console.log(animalDetails);

  return (
    <div className="flex flex-row justify-around items-center gap-4 p-8">
      <div key={Id} className="md:w-1/2 ">
        <Image src={image} alt={name} width={600} height={380}></Image>
        {/* <h4 className=" text-xl uppercase font-bold my-4 pr-8">
          Price & Rating <hr />
        </h4> */}

        <div className="flex flex-row justify-between items-center pr-8 mt-4">
          <div className="flex flex-col space-y-2">
            <h3 className="text-2xl font-bold">Price : </h3>
            <hr />
            <h4 className="text-xl font-bold">৳ {price}</h4>
          </div>
          <div className="flex flex-col space-y-2">
            <h3 className="text-2xl font-bold">Rating : </h3>
            <hr />
            <h4 className="text-xl flex flex-row gap-3 items-center font-bold">
              <span className="text-black">{rating}</span>
              <StarRating rating={rating} />
            </h4>
          </div>

          {/* <h3 className="text-3xl font-bold">৳ {price}</h3> */}
          {/* <h3 className="text-3xl font-bold flex flex-row gap-2 text-yellow-400 ">
            <span className="text-black">{rating}</span>
            <StarRating rating={rating} />
          </h3> */}
        </div>
      </div>
      <div className="space-y-2 md:w-1/2">
        <h2 className="text-4xl font-bold">{name}</h2>

        <h4 className=" text-xl uppercase font-bold my-4">
          Specification <hr />
        </h4>
        <div className="specification flex flex-row justify-start gap-10 items-start">
          <div>
            <p>
              <span className="font-bold">Age : </span>
              {age} Years
            </p>
            <p>
              <span className="font-bold">Breed : </span>
              {breed}
            </p>
            <p>
              <span className="font-bold">Location : </span>
              {location}
            </p>
          </div>
          <div>
            <p>
              <span className="font-bold">Weight : </span>
              {weight} Kg
            </p>
            <p>
              <span className="font-bold">Category : </span>
              {category}
            </p>
          </div>
        </div>
        <h4 className=" text-xl uppercase font-bold mb-4">
          Description <hr />
        </h4>
        <div>
          <p className="">{description}</p>
        </div>
        <h4 className=" text-xl uppercase font-bold ">
          Helth Care <hr />
        </h4>
        <div>
          <ul className="list-disc flex flex-row gap-6 p-4">
            <li>FMD Vaccinated</li>
            <li>Dewormed</li>
            <li>Anthrax Vaccinated</li>
            <li>LSD Vaccinated</li>
          </ul>
        </div>
        <h4 className=" text-xl uppercase font-bold mb-4">
          Feed Veriety <hr />
        </h4>
        <div>
          <p>
            <span className="font-bold">Grass - </span>
            Maize, Pakchong, Napier, German, Para
          </p>
          <p>
            <span className="font-bold">Grain - </span>
            Maize Bran, Wheat bran, Rice polish, Rice bran, Soyabean, Lentil
            Bran, Grass Pea, Mustard Oil Cake
          </p>
        </div>
        <button className="btn bg-green-600 text-white px-8 w-full mt-8">
          Order Now
        </button>
      </div>
    </div>
  );
};

export default AnimalDetailPage;
