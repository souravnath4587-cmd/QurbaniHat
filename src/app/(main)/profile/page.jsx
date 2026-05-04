"use client";
import { authClient } from "@/lib/auth-client";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";

const ProfilePage = () => {
  const { data: session } = authClient.useSession();
  const user = session?.user;
  console.log(user);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    location: "",
    photo: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    console.log(name, value);

    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // submit
  const handleSubmit = async (e) => {
    e.preventDefault();

    console.log(formData);
  };

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
          {/* Open the modal using document.getElementById('ID').showModal() method */}
          <button
            className="btn btn-primary btn-sm flex-1"
            onClick={() => document.getElementById("my_modal_5").showModal()}
          >
            Edit Profile
          </button>
          <dialog
            id="my_modal_5"
            className="modal modal-bottom sm:modal-middle"
          >
            <div className="modal-box">
              <form onSubmit={handleSubmit} className="space-y-3">
                {/* Name */}
                <div>
                  <label className="label">Name</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="input input-bordered w-full"
                    placeholder="Enter name"
                  />
                </div>

                {/* Email */}
                <div>
                  <label className="label">Email</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="input input-bordered w-full"
                    placeholder="Enter email"
                  />
                </div>

                {/* Location */}
                <div>
                  <label className="label">Location</label>
                  <input
                    type="text"
                    name="location"
                    value={formData.location}
                    onChange={handleChange}
                    className="input input-bordered w-full"
                    placeholder="Enter location"
                  />
                </div>

                {/* Password */}
                <div>
                  <label className="label">Photo Link</label>
                  <input
                    type="text"
                    name="photo"
                    value={formData.photo}
                    onChange={handleChange}
                    className="input input-bordered w-full"
                    placeholder="Enter new photo link"
                  />
                </div>
                {/* <div className="modal-action"> */}
                <form method="dialog">
                  {/* if there is a button in form, it will close the modal */}
                  <button type="submit" className="btn btn-primary">
                    Update Information
                  </button>
                </form>
                {/* </div> */}
              </form>
            </div>
          </dialog>
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
