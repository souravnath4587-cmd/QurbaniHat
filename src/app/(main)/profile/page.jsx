"use client";
import { authClient } from "@/lib/auth-client";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const ProfilePage = () => {
  const { data: session } = authClient.useSession();
  const user = session?.user;
  console.log(user);

  return (
    <div className="min-h-screen flex items-center justify-center bg-base-200 p-4">
      <div className="card w-full max-w-md bg-base-100 shadow-md">
        {/* Avatar + Name */}
        <div className="flex flex-col items-center p-6">
          <div className="avatar">
            <div className="w-20 rounded-full">
              <Image
                src={user?.image}
                width={400}
                height={200}
                alt="profile picture"
              ></Image>
            </div>
          </div>

          <h2 className="text-xl font-semibold mt-3">{user?.name}</h2>
          <p className="text-sm text-gray-500">{user?.email}</p>
        </div>

        {/* Info */}
        <div className="px-6 pb-6 space-y-2 text-sm">
          <div className="flex justify-between">
            <span className="font-medium">Email Varification</span>
            <span>{user?.emailVerified && "True"}</span>
          </div>
          <div className="flex justify-between">
            <span className="font-medium">Your Id : </span>
            <span>{user?.id}</span>
          </div>
          <div className="flex justify-between">
            <span className="font-medium">Location</span>
            <span>{user?.location || "You can set "}</span>
          </div>
        </div>

        {/* Buttons */}
        <div className="flex gap-2 p-4">
          <button className="btn btn-primary btn-sm flex-1">
            Edit Profile
          </button>
          <button className="btn btn-outline btn-error btn-sm flex-1">
            <Link
              href={"/login"}
              onClick={async () => await authClient.signOut()}
            >
              Logout{" "}
            </Link>{" "}
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
