"use client";
import { authClient } from "@/lib/auth-client";
import React from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";

const Order = () => {
  const { data: session } = authClient.useSession();
  const user = session?.user;

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
    reset,
  } = useForm();

  const handleFormSubmit = (data) => {
    console.log(data);

    if (data) {
      toast.success("successfully done");
    }
    reset();
  };
  return (
    <div>
      <button
        className="btn bg-green-600 text-white px-8 w-full mt-8"
        onClick={() => document.getElementById("my_modal_5").showModal()}
      >
        Order Now
      </button>
      <dialog id="my_modal_5" className="modal modal-bottom sm:modal-middle">
        <div className="modal-box">
          <h3 className="font-bold text-lg capitalize">Complete this form.</h3>

          <form className="space-y-4" onSubmit={handleSubmit(handleFormSubmit)}>
            {/* Name */}
            <fieldset className="fieldset">
              <legend className="fieldset-legend">Name</legend>
              <input
                type="text"
                placeholder="Enter your Name"
                value={user?.name}
                className="w-full border px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                {...register("name", {
                  required: "Name field is required",
                })}
              />
            </fieldset>
            <fieldset className="fieldset">
              <legend className="fieldset-legend">Phone Number</legend>
              <input
                type="number"
                placeholder="Enter your phone number."
                {...register("phone", {
                  required: "Phone number is required",
                })}
                className="w-full border px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
              />
            </fieldset>
            <fieldset className="fieldset">
              <legend className="fieldset-legend">Email</legend>
              <input
                type="email"
                placeholder="Enter your Email"
                value={user?.email}
                {...register("email", {
                  required: "Email field is required",
                })}
                className="w-full border px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
              />
            </fieldset>
            <fieldset className="fieldset">
              <legend className="fieldset-legend">Address</legend>
              <input
                type="text"
                placeholder="Enter your Address"
                {...register("address", {
                  required: "Address field is required",
                })}
                className="w-full border px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
              />
            </fieldset>
            <div className="modal-action">
              <button
                type="submit"
                className="w-full  bg-green-500 hover:bg-green-600 text-white py-2 rounded-lg font-semibold"
              >
                Submit
              </button>
            </div>
          </form>

          {/* <div className="modal-action">
            <form method="dialog">
              <button
                type="submit"
                className="btn bg-blue-600 text-white w-full"
              >
                Submit
              </button>
            </form>
          </div> */}
        </div>
      </dialog>
    </div>
  );
};

export default Order;
