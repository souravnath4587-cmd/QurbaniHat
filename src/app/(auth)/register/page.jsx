"use client";
import { authClient } from "@/lib/auth-client";
import Link from "next/link";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { toast } from "react-toastify";

const RegisterPage = () => {
  const [isShowPassword, setIsShowPassword] = useState(false);
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const handleRegister = async (data) => {
    console.log(data);
    const { name, photo, email, password } = data;
    console.log(name, photo);
    const { data: res, error } = await authClient.signUp.email({
      name: name, // required
      email: email, // required
      password: password, // required
      image: photo,
      callbackURL: "/",
    });
    if (error) {
      toast.error(error.message);
    } else {
      toast.success("Successfully Register");
    }
  };

  return (
    <div className="min-h-screen ">
      {/* Register Form */}
      <div className="flex items-center justify-center px-6 py-10">
        <div className="w-full max-w-md">
          <h2 className="text-3xl font-bold mb-2">Register Account</h2>
          <p className="text-gray-500 mb-6">
            You have to make sure you are login. Thank you..
          </p>

          <form className="space-y-4 " onSubmit={handleSubmit(handleRegister)}>
            {/* Name */}
            <fieldset className="fieldset">
              <legend className="fieldset-legend">Name</legend>
              <input
                type="text"
                placeholder="Enter your Name"
                className="w-full border px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                {...register("name", {
                  required: "Name field is required",
                })}
              />
            </fieldset>
            <fieldset className="fieldset">
              <legend className="fieldset-legend">Photo</legend>
              <input
                type="text"
                placeholder="Enter your photo url"
                {...register("photo", {
                  required: "Photo URL field is required",
                })}
                className="w-full border px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
              />
            </fieldset>
            <fieldset className="fieldset">
              <legend className="fieldset-legend">Email</legend>
              <input
                type="email"
                placeholder="Enter your Email"
                {...register("email", {
                  required: "Email field is required",
                })}
                className="w-full border px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
              />
            </fieldset>
            <fieldset className="fieldset relative">
              <legend className="fieldset-legend">Password</legend>
              <input
                type={isShowPassword ? "text" : "password"}
                placeholder="Enter your password"
                {...register("password", {
                  required: "Password field is required",
                })}
                className="w-full border px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
              />{" "}
              <span
                className="absolute right-2 top-4 cursor-pointer"
                onClick={() => setIsShowPassword(!isShowPassword)}
              >
                {isShowPassword ? <FaEye /> : <FaEyeSlash />}
              </span>
            </fieldset>

            {/* Button */}
            <button
              type="submit"
              className="w-full bg-green-500 hover:bg-green-600 text-white py-2 rounded-lg font-semibold"
            >
              Register
            </button>
          </form>

          {/* Register */}
          <p className="text-sm mt-6 text-center">
            I already sign up.{" "}
            <Link href="/login" className="text-green-600 font-medium">
              LogIn
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default RegisterPage;
