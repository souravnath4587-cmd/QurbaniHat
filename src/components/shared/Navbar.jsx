// import { Button } from "@heroui/react";
import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <div className="container mx-auto flex justify-between gap-4 mt-6">
      <div></div>
      <ul className="flex justify-between items-center text-gray-700 gap-4">
        <li>{/* <NavLink href={"/"}>Home</NavLink> */} Home</li>
        <li>{/* <NavLink href={"/about-us"}>About</NavLink> */} All Animals</li>
        <li>
          {/* <NavLink href={"/career"} className={"text-yellow-500"}>
            Career
          </NavLink> */}
        </li>
      </ul>
      <button className="btn btn-primary">
        {" "}
        <Link href={"/login"}>Login </Link>{" "}
      </button>
    </div>
  );
};

export default Navbar;
