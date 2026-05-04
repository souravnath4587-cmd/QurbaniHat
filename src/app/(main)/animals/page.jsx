import React from "react";

import animalsData from "@/assets/animals.json";
import AnimalClient from "@/ui/AnimalClient";

const AnimalPage = async () => {
  const { animals } = animalsData;

  return (
    <>
      {" "}
      <AnimalClient animals={animals} />{" "}
    </>
  );
};

export default AnimalPage;
