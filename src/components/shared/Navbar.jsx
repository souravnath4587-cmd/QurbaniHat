"use client";
import { authClient } from "@/lib/auth-client";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import NavLink from "./NavLink";
import { IoMdMenu } from "react-icons/io";
import { RiMenu2Line } from "react-icons/ri";

const Navbar = () => {
  const { data: session, isPending } = authClient.useSession();
  const user = session?.user;
  const [lineToggle, setLineToggle] = useState(true);

  const handleToggle = () => {
    setLineToggle(!lineToggle);
    console.log("toggle is clicked", lineToggle);
  };

  return (
    <div className="container mx-auto flex justify-between items-center gap-4 p-4">
      <div className="logo">
        <h3 className="text-3xl font-bold text-[#013416]">
          Qurbani<span className="text-[#3b821d]">Hat</span>
        </h3>
      </div>

      {lineToggle === false ? (
        <div>
          <ul className="hidden md:flex flex-row justify-between items-center text-[#706f6f] gap-4 ">
            <li>
              <NavLink href={"/"}>Home</NavLink>
            </li>
            <li>
              <NavLink href={"/animals"}>Animals</NavLink>
            </li>
            <li>
              <NavLink href={"/about"}>About Us</NavLink>
            </li>
            <li>
              <NavLink href={"/contact"}>Contact Us</NavLink>
            </li>
          </ul>
        </div>
      ) : (
        <div className="relative">
          <ul className="absolute md:flex flex-col z-10 text-[#706f6f] gap-4 w-full bg-amber-600 ">
            <li>
              <NavLink href={"/"}>Home</NavLink>
            </li>
            <li>
              <NavLink href={"/animals"}>Animals</NavLink>
            </li>
            <li>
              <NavLink href={"/about"}>About Us</NavLink>
            </li>
            <li>
              <NavLink href={"/contact"}>Contact Us</NavLink>
            </li>
          </ul>
        </div>
      )}
      <div className="md:hidden">
        {lineToggle === false ? (
          <IoMdMenu onClick={handleToggle} size={30} />
        ) : (
          <RiMenu2Line onClick={handleToggle} size={30} />
        )}
      </div>
      {isPending ? (
        <p>
          Loading data for login person..
          <span className="loading loading-dots loading-xl"></span>
        </p>
      ) : user ? (
        <div className="hidden md:flex flex-row justify-center items-center gap-4">
          <h2 className="text-xl font-bold text-[#706f6f]">
            Hello , {user.name}
          </h2>
          <Image
            src={user?.image}
            width={60}
            height={60}
            alt="User Image"
          ></Image>
          <button className="btn btn-primary">
            {" "}
            <Link
              href={"/login"}
              onClick={async () => await authClient.signOut()}
            >
              Logout{" "}
            </Link>{" "}
          </button>
        </div>
      ) : (
        <div className="flex flex-row">
          <button className="btn bg-green-500 hover:bg-blue-600 text-white ">
            {" "}
            <Link href={"/login"}>Login </Link>{" "}
          </button>
          <button className="btn bg-green-500 hover:bg-blue-600 text-white ">
            {" "}
            <Link href={"/register"}>Register </Link>{" "}
          </button>
        </div>
      )}
    </div>
  );
};

export default Navbar;
