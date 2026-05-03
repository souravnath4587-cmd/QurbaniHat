"use client";
import { authClient } from "@/lib/auth-client";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import NavLink from "./NavLink";
import { IoPersonCircle } from "react-icons/io5";

const Navbar = () => {
  const { data: session, isPending } = authClient.useSession();
  const user = session?.user;

  const links = (
    <>
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
    </>
  );

  return (
    <div className="max-lg:collapse bg-base-200  shadow-sm w-full rounded-md">
      <input id="navbar-1-toggle" className="peer hidden" type="checkbox" />
      <label
        htmlFor="navbar-1-toggle"
        className="fixed inset-0 hidden max-lg:peer-checked:block"
      ></label>
      <div className="collapse-title navbar">
        <div className="navbar-start">
          <label htmlFor="navbar-1-toggle" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <div className="logo">
            <h3 className="text-3xl font-bold text-[#013416]">
              <Link href={"/"}>
                Qurbani<span className="text-[#3b821d]">Hat</span>
              </Link>
            </h3>
          </div>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{links}</ul>
        </div>
        <div className="navbar-end">
          {isPending ? (
            <p>Loading...</p>
          ) : user ? (
            <div className=" flex flex-row justify-center items-center gap-4">
              <h2 className="hidden md:inline-block text-xl font-bold text-[#706f6f]">
                Hello , {user.name}
              </h2>
              <div className="w-[40px] rounded-2xl overflow-hidden">
                <Image
                  src={user?.image}
                  width={60}
                  height={60}
                  alt="User Image"
                ></Image>
              </div>

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
            <div className="flex flex-row items-center gap-2">
              <IoPersonCircle size={40} />
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
      </div>

      <div className="collapse-content lg:hidden z-1">
        <ul className="menu">{links}</ul>
      </div>
    </div>
  );
};

export default Navbar;
