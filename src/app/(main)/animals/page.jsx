// "use client";
import React from "react";
import { getAnimals } from "@/lib/animalData";

const AnimalPage = async () => {
  const animals = await getAnimals();
  console.log(animals);

  return <div>This is animal page...</div>;
};

export default AnimalPage;
