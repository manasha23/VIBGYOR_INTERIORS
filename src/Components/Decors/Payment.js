import React from "react";

function Paymentdetails() {
  return (
    <section>
      <div class="min-h-screen min-w-screen flex items-center justify-center dark:bg-gray-800">
        <div class="flex flex-col  px-8 w-2/5 shadow-xl">
          <div class=" py-8 px-14 bg-white rounded-tl-2xl rounded-tr-2xl text-center space-y-8">
            <p className="text-gray-800 pt-2 text-2xl font-medium">
              Payment Deatils
            </p>
          </div>

          <div class="flex flex-col py-6 px-8 space-y-5 rounded-b-2xl text-black bg-white">
            <label className="relative w-full flex flex-col">
              <span className="font-bold mb-3">Bank Name</span>
              <input
                className="rounded-md peer pl-12 pr-2 py-2 border-2 border-gray-200 placeholder-gray-300"
                type="text"
                name="name"
                placeholder="Enter Your Bank Name"
              />
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="absolute bottom-0 left-0 -mb-0.5 transform translate-x-1/2 -translate-y-1/2 text-black peer-placeholder-shown:text-gray-300 h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z"
                />
              </svg>
            </label>
            <label className="relative flex-1 flex flex-col">
              <span className="font-bold mb-3">UPI ID</span>
              <input
                className="rounded-md peer pl-12 pr-2 py-2 border-2 border-gray-200 placeholder-gray-300"
                type="text"
                name="expire_date"
                placeholder="Enter Your UPI ID"
              />
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="absolute bottom-0 left-0 -mb-0.5 transform translate-x-1/2 -translate-y-1/2 text-black peer-placeholder-shown:text-gray-300 h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                />
              </svg>
            </label>
           

            <a
              href="/Orders"
              className="w-32 mx-32 mt-8 px-6 py-2 text-center text-white rounded hover:bg-black border hover:border-black hover:text-white dark:bg-violet-900"
            >
              Check out
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
export default Paymentdetails;
