"use client";
import { authClient } from "@/lib/auth-client";
import Link from "next/link";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { FaEye, FaEyeSlash, FaGithub, FaGoogle } from "react-icons/fa";

const LoginPage = () => {
  const [isShowPassword, setIsShowPassword] = useState(false);

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const handleLogin = async (data) => {
    console.log(data);
    const { email, password } = data;
    const { data: res, error } = await authClient.signIn.email({
      email: email,
      password: password,
      rememberMe: true,
      callbackURL: "/",
    });

    if (error) {
      alert(error.message);
    } else {
      alert("Successfully done");
    }
  };

  const handleGoogleSignIn = async () => {
    const data = await authClient.signIn.social({
      provider: "google",
    });
    console.log(data);
  };

  const handleGithubSignIn = async () => {
    const data = await authClient.signIn.social({ provider: "github" });
    console.log(data);
  };

  return (
    <div className="min-h-screen ">
      {/* Login Form */}
      <div className="flex items-center justify-center px-6 py-10">
        <div className="w-full max-w-md">
          <h2 className="text-3xl font-bold mb-2">LogIn Account</h2>
          <p className="text-gray-500 mb-6">
            You have to make sure you are login. Thank you..
          </p>

          <form className="space-y-4" onSubmit={handleSubmit(handleLogin)}>
            {/* Email */}
            <fieldset className="fieldset">
              <legend className="fieldset-legend">Email</legend>
              <input
                type="email"
                placeholder="Enter your email"
                {...register("email", {
                  required: "Email field is required",
                })}
                className="w-full border px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
              />
            </fieldset>

            {/* Password */}
            <fieldset className="fieldset relative">
              <legend className="fieldset-legend">Password</legend>
              <input
                type={isShowPassword ? "text" : "password"}
                placeholder="Enter your password"
                {...register("password", {
                  required: "Password Field is required",
                })}
                className="w-full border px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
              />
              <span
                className="absolute right-2 top-4 cursor-pointer"
                onClick={() => setIsShowPassword(!isShowPassword)}
              >
                {isShowPassword ? <FaEye /> : <FaEyeSlash />}
              </span>
              {errors.password && (
                <p className="text-red-500">{errors.password.message}</p>
              )}
            </fieldset>

            {/* Options
            <div className="flex justify-between items-center text-sm">
              <label className="flex items-center gap-2">
                <input
                  type="checkbox"
                  checked={remember}
                  onChange={(e) => setRemember(e.target.checked)}
                />
                Remember me
              </label>

              <Link href="#" className="text-green-600 hover:underline">
                Forgot password?
              </Link>
            </div> */}

            {/* Button */}
            <button
              type="submit"
              className="w-full bg-green-500 hover:bg-green-600 text-white py-2 rounded-lg font-semibold"
            >
              Login
            </button>
          </form>

          {/* Register */}
          <p className="text-sm mt-6 text-center mb-4">
            Don’t have an account?{" "}
            <Link href="/register" className="text-green-600 font-medium">
              Sign up
            </Link>
          </p>

          <div className="flex flex-row justify-center items-center gap-4">
            <button
              className="btn bg-blue-600 text-white hover:bg-green-600"
              onClick={handleGithubSignIn}
            >
              <FaGithub /> Github
            </button>
            <button
              className="btn bg-blue-600 hover:bg-green-600 text-white"
              onClick={handleGoogleSignIn}
            >
              <FaGoogle /> Google
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
