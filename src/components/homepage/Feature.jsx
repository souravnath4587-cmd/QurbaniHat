import Link from "next/link";
import React from "react";

const Feature = () => {
  return (
    <div>
      This is feacture section....
      <button className="btn btn-primary">
        <Link href={"/allAnimals"}>Know More</Link>
      </button>
    </div>
  );
};

export default Feature;
