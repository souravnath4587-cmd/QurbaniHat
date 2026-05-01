import React from "react";
import Image from "next/image";
import SortType from "@/ui/SortType";
import { getAnimals } from "@/lib/animalData";
import AnimalClient from "@/ui/AnimalClient";

const AnimalPage = async () => {
  const animals = await getAnimals();

  return (
    <>
      <AnimalClient animals={animals} />
    </>
  );
};

export default AnimalPage;
