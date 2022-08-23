import { useState } from "react";

const Signup = () => {
  return (
    <div className="dark:bg-gray-800 h-screen py-6 sm:py-8 lg:py-12">
      <div className="max-w-screen-2xl  px-4 md:px-8 mx-auto">
        <h2 className="text-white  text-2xl lg:text-3xl font-bold text-center mb-4 md:mb-8">
          Sign-in Now!
        </h2>
        <form className="max-w-lg  bg-gradient-to-r from-orange-400 via-rose-400 to-purple-900 border rounded-lg mx-auto">
          <div className="flex flex-col gap-4 p-4 md:p-8">
            <div>
              <label
                htmlFor="email"
                className="inline-block mt-5 text-gray-800 text-sm sm:text-base mb-2"
              >
                Username
              </label>
              <input
                name="uname"
                className="w-full bg-gray-50 text-gray-800 border focus:ring ring-indigo-300 rounded outline-none transition duration-100 px-3 py-2"
              />
            </div>
            <div>
              <label
                htmlFor="password"
                className="inline-block text-gray-800 text-sm sm:text-base mb-2"
              >
                Password
              </label>
              <input
                name="password"
                className="w-full bg-gray-50 text-gray-800 border focus:ring ring-indigo-300 rounded outline-none transition duration-100 px-3 py-2"
              />
            </div>
            <a
              rel="noopener noreferrer"
              href="/Decors"
              className="px-8 py-3 ml-36 text-center text-white w-40 text-lg font-semibold border rounded hover:dark:text-black  dark:border-gray-100"
            >
              Sign-up
            </a>{" "}
          </div>
        </form>
      </div>
    </div>
  );
};
export default Signup;
