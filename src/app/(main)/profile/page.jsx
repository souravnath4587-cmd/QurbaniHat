"use client";
import { authClient } from "@/lib/auth-client";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { RxCross2 } from "react-icons/rx";
import { TiTick } from "react-icons/ti";
import { toast } from "react-toastify";

const ProfilePage = () => {
  const { register, handleSubmit, reset } = useForm();
  const [isOpen, setIsOpen] = useState(false);

  const { data: session } = authClient.useSession();
  const user = session?.user;
  console.log(user);
  const onSubmit = async (data) => {
    console.log(data);
    const { name, photo } = data;
    const { data: res, error } = await authClient.updateUser({
      image: photo,
      name: name,
      callbackURL: "/",
    });
    if (error) {
      toast.error(error.message);
    } else {
      toast.success("Successfully Updated.");
    }

    setIsOpen(false); // 🔥 modal close
    reset();
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
        </div>

        {/* Info */}
        <div className="px-6 pb-6 space-y-2 text-sm">
          <div className="flex justify-between">
            <span className="font-medium">Email Varification</span>
            <span>
              {user?.emailVerified === true ? (
                <TiTick size={25} />
              ) : (
                <RxCross2 size={25} />
              )}
            </span>
          </div>
          <div className="flex justify-between">
            <span className="font-medium">Email : </span>
            <span>{user?.email}</span>
          </div>
          <div className="flex justify-between">
            <span className="font-medium">Your Id : </span>
            <span>{user?.id}</span>
          </div>
        </div>

        {/* Buttons */}
        <div className="flex gap-2 p-4">
          <button
            className="btn btn-primary btn-sm flex-1 "
            onClick={() => setIsOpen(true)}
          >
            Edit Profile
          </button>
          {/* Modal */}
          {isOpen && (
            <dialog className="modal modal-open">
              <div className="modal-box">
                <h3 className="font-bold text-lg mb-4">Update Profile</h3>

                <form onSubmit={handleSubmit(onSubmit)} className="space-y-3">
                  <input
                    type="email"
                    placeholder="Email"
                    value={user?.email}
                    {...register("email")}
                    className="input input-bordered w-full"
                  />

                  <input
                    type="text"
                    placeholder="Enter Your Name"
                    defaultValue={user?.name}
                    {...register("name")}
                    className="input input-bordered w-full"
                  />

                  <input
                    type="text"
                    placeholder="Photo URL"
                    defaultValue={user?.image}
                    {...register("photo")}
                    className="input input-bordered w-full"
                  />

                  <div className="modal-action">
                    {/* Close Button */}
                    <button
                      type="button"
                      className="btn"
                      onClick={() => setIsOpen(false)}
                    >
                      Cancel
                    </button>

                    {/* Submit Button */}
                    <button type="submit" className="btn btn-primary">
                      Save Changes
                    </button>
                  </div>
                </form>
              </div>
            </dialog>
          )}
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
