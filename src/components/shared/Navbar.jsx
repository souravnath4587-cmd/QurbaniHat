"use client";
import { authClient } from "@/lib/auth-client";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import NavLink from "./NavLink";

const Navbar = () => {
  const { data: session, isPending } = authClient.useSession();
  const user = session?.user;

  return (
    <div className="container mx-auto flex justify-between gap-4 mt-6">
      <div></div>
      <ul className="flex justify-between items-center text-gray-700 gap-4">
        <li>
          <NavLink href={"/"}>Home</NavLink>
        </li>
        <li>
          <NavLink href={"/allAnimals"}>All Animals</NavLink>
        </li>
      </ul>
      {isPending ? (
        <p>
          Loading data for login person..
          <span className="loading loading-dots loading-xl"></span>
        </p>
      ) : user ? (
        <div className="flex flex-row justify-center items-center gap-4">
          <h2>Hello , {user.name}</h2>
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
        <button className="btn bg-green-500 hover:bg-green-600 text-white ">
          {" "}
          <Link href={"/login"}>Login </Link>{" "}
        </button>
      )}
    </div>
  );
};

export default Navbar;
