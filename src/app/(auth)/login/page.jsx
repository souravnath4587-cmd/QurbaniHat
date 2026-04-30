"use client";
import { authClient } from "@/lib/auth-client";
import Link from "next/link";
import { useForm } from "react-hook-form";

const LoginPage = () => {
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
            <fieldset className="fieldset">
              <legend className="fieldset-legend">Password</legend>
              <input
                type="password"
                placeholder="Enter your password"
                {...register("password", {
                  required: "Password Field is required",
                })}
                className="w-full border px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
              />
            </fieldset>

            {/* Options */}
            <div className="flex justify-between items-center text-sm">
              <label className="flex items-center gap-2">
                <input type="checkbox" />
                Remember me
              </label>

              <Link href="#" className="text-green-600 hover:underline">
                Forgot password?
              </Link>
            </div>

            {/* Button */}
            <button
              type="submit"
              className="w-full bg-green-500 hover:bg-green-600 text-white py-2 rounded-lg font-semibold"
            >
              Login
            </button>
          </form>

          {/* Register */}
          <p className="text-sm mt-6 text-center">
            Don’t have an account?{" "}
            <Link href="/register" className="text-green-600 font-medium">
              Sign up
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;

// "use client";
// import { authClient } from "@/lib/auth-client";
// import Link from "next/link";
// import React, { useState } from "react";
// import { useForm } from "react-hook-form";
// import { FaEye, FaEyeSlash } from "react-icons/fa";

// const LoginPage = () => {
//   const {
//     register,
//     handleSubmit,
//     watch,
//     formState: { errors },
//   } = useForm();

//   const [isShowPassword, setIsShowPassword] = useState(false);

//   const handleLoginFunc = async (data) => {
//     console.log(data, "data");

//     const { data: res, error } = await authClient.signIn.email({
//       email: data.email, // required
//       password: data.password, // required
//       rememberMe: true,
//       callbackURL: "/",
//     });

//     console.log(res, error);

//     if (error) {
//       alert(error.message);
//     }

//     if (res) {
//       alert("Signin successful");
//     }
//   };

//   return (
//     <div className="container mx-auto min-h-[80vh] flex justify-center items-center bg-slate-100">
//       <div className="p-4 rounded-xl bg-white">
//         <h2 className="font-bold text-3xl text-center mb-6">
//           Login your account
//         </h2>

//         <form className="space-y-4" onSubmit={handleSubmit(handleLoginFunc)}>
//           <fieldset className="fieldset">
//             <legend className="fieldset-legend">Email</legend>
//             <input
//               type="email"
//               className="input"
//               placeholder="Type here email"
//               {...register("email", {
//                 required: "Email field is required",
//               })}
//             />
//             {errors.email && (
//               <p className="text-red-500">{errors.email.message}</p>
//             )}
//           </fieldset>
//           <fieldset className="fieldset relative">
//             <legend className="fieldset-legend">Password</legend>
//             <input
//               type={isShowPassword ? "text" : "password"}
//               className="input"
//               placeholder="Type here password"
//               {...register("password", {
//                 required: "Password field is required",
//               })}
//             />
//             <span
//               className="absolute right-2 top-4 cursor-pointer"
//               onClick={() => setIsShowPassword(!isShowPassword)}
//             >
//               {isShowPassword ? <FaEye /> : <FaEyeSlash />}
//             </span>
//             {errors.password && (
//               <p className="text-red-500">{errors.password.message}</p>
//             )}
//           </fieldset>

//           <button className="btn w-full bg-slate-800 text-white">Login</button>
//         </form>

//         <p className="mt-4">
//           Don't have an account?{" "}
//           <Link href={"/register"} className="text-blue-500">
//             Register
//           </Link>
//         </p>
//       </div>
//     </div>
//   );
// };

// export default LoginPage;
