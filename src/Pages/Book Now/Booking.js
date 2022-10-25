import React, { useState, useEffect } from "react";
import { db } from "../../firebase-config";
import { collection, getDocs, addDoc } from "firebase/firestore";

const Booking = () => {
  const [newName, setNewName] = useState("");
  const [contact, setContact] = useState("");
  const [address, setAddress] = useState("");
  const [id, setId] = useState("");
  const [category, setCategory] = useState("");
  const userCollectionRef = collection(db, "Design-Bookings");
  const submitFormFunction = (e) => {
    e.preventDefault();
  };
  const Bookings = async () => {
    alert(" Successfully Booked! Please wait for the comstomer service to contact you!");

    await addDoc(userCollectionRef, {
      Name: newName,
      Contact: contact,
      Category: category,
      Address: address,
      Id: id,
    });
  };

  return (
    <section>
      <div>
        <div className="  ">
          <div className="w-4/6 z-9  mt-8 mb-8 grid overflow-hidden gap-8 grid-cols-1 md:grid-cols-2 md:px-8  xl:px-16 py-16 mx-auto bg-gradient-to-r from-slate-900 bg-gradient-to-tl from-red-600 to-blue-400 to-blue-900   text-gray-900 rounded-lg shadow-lg">
            <div className="flex flex-col justify-between">
              <div>
                <h2 className="text-4xl lg:text-4xl mt-16 font-bold text-white leading-tight">
                  BOOK YOUR DESIGNS NOW!
                </h2>
              </div>
              <div className="text-white text-base -mt-80 mr-8">
                Bring your dream home to life with one-on-one design help &
                hand-picked products tailored to your style, space, and budget.
              </div>

              <div className="mt-8 text-center"></div>
            </div>{" "}
            <form
              onSubmit={submitFormFunction}
              className="p-8  mb-0 space-y-4 rounded-lg shadow-2xl"
            >
              <div className>
                <div className="mt-4">
                  <div className="w-full">
                    <label
                      htmlFor="Name"
                      className="block mb-3 text-sm font-semibold text-white"
                    >
                      Name
                    </label>
                    <input
                      name=" Name"
                      type="text"
                      placeholder="Enter your name"
                      onChange={(event) => {
                        setNewName(event.target.value);
                      }}
                      className="w-full px-4 py-3 text-sm border border-white rounded lg:text-sm focus:outline-none focus:ring-1 focus:ring-blue-600"
                    />
                  </div>
                </div>
                <div className="mt-4">
                  <div className="w-full">
                    <label
                      htmlFor="Contact"
                      className="block mb-3 text-sm font-semibold text-white"
                    >
                      Contact
                    </label>
                    <input
                      name="Contact"
                      type="phone Number"
                      onChange={(event) => {
                        setContact(event.target.value);
                      }}
                      placeholder="Enter your number"
                      className="w-full px-4 py-3 text-sm border border-white rounded lg:text-sm focus:outline-none focus:ring-1 focus:ring-blue-600"
                    />
                  </div>
                </div>
                <div className="mt-8">
                  <span className=" text-sm text-white font-bold">Address</span>
                  <textarea
                    placeholder="Enter your address"
                    onChange={(event) => {
                      setAddress(event.target.value);
                    }}
                    className="w-full mb-5 h-32 bg-white text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
                    defaultValue={""}
                  />
                </div>{" "}
                <div className="w-full">
                  <label
                    htmlFor="Name"
                    className="block mb-3 text-sm font-semibold text-white"
                  >
                    Design ID
                  </label>
                  <input
                    name=" Name"
                    type="number"
                    onChange={(event) => {
                      setId(event.target.value);
                    }}
                    placeholder="Enter Design Id"
                    className="w-full px-4 py-3 text-sm border border-white rounded lg:text-sm focus:outline-none focus:ring-1 focus:ring-blue-600"
                  />
                </div>
                <div class="relative mt-5">
                  <label for="email" class="text-sm  text-white font-medium">
                    Category
                  </label>
                  <select
                    value={category}
                    onChange={(event) => setCategory(event.target.value)}
                    className="w-full p-4 pr-12 text-sm mt-1 border-gray-200 rounded-lg shadow-sm"
                    placeholder="Enter the Category"
                  >
                    <option value="Livingroom">Living Room</option>
                    <option value="Bathroom">Bathroom</option>
                    <option value="Bedroom">Bedroom</option>
                    <option value="Kitchen">Kitchen</option>
                  </select>
                </div>
                <button
                  onClick={Bookings}
                  class="flex items-center ml-20 mt-5 justify-between w-48 h-14 px-5 py-3 text-white transition-colors border border-current rounded-lg hover:bg-black group active:bg-black focus:outline-none focus:ring"
                  href=""
                >
                  <span class="font-medium transition-colors group-hover:text-white">
                    Book Now
                  </span>

                  <span class="flex-shrink-0 p-2 ml-4  text-black bg-white border border-black rounded-full group-active:border-black">
                    <svg
                      class="w-3 h-3"
                      text-white
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M17 8l4 4m0 0l-4 4m4-4H3"
                      />
                    </svg>
                  </span>
                </button>{" "}
              </div>{" "}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Booking;
