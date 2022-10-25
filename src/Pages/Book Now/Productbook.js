import React, { useState, useEffect } from "react";
import { db } from "../../firebase-config";
import { collection, getDocs, addDoc } from "firebase/firestore";

const BookProduct = () => {
  const [newName, setNewName] = useState("");
  const [contact, setContact] = useState("");
  const [address, setAddress] = useState('');
  const [id, setId] = useState("");
  const [category, setCategory] = useState("");
  const userCollectionRef = collection(db, "Product-Bookings");
  const submitFormFunction = (e) => {
    e.preventDefault();
  };
  const productBookings = async () => {
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
                  BOOK YOUR Products NOW!
                </h2>
              </div>
              <div className="text-white text-base -mt-80 mr-8">
                Using home accessories like candles, wall art, clocks, mirrors
                and more, tell the story you want. Check out our home decor
                range to make a statement.
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
                    Product ID
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
                    className="w-full p-4 mb-10 pr-12 text-sm mt-1 border-gray-200 rounded-lg shadow-sm"
                    placeholder="Enter the Category"
                  >
                    <option value="Furniture">Furniture</option>
                    <option value="Decors">Decors</option>
                  </select>
                </div>
                <div>
                  <label
                    for="email"
                    class="text-base mt-20  text-white font-medium"
                  >
                    Payment Mode :
                  </label>
                  <div className="flex mt-5  items-center mb-4">
                    <a 
                    href="/Payment"
                  
                      id="default-radio-1"
                      type="radio"
                      defaultValue
                      name="default-radio"
                      className="w-4 h-4 text-blue-600 bg-gray-100 hover:border-white  hover:bg-blue-500 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-white focus:ring-2 dark:bg-white dark:border-gray-600"
                    />
                    <label 
                      htmlFor="default-radio-1"
                      className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                    >
                      Online Payment
                    </label>
                  </div>
                  <div className="flex items-center">
                    <a 
                    href="/Orders"
                 
                      defaultChecked
                      id="default-radio-2"
                      type="radio"
                      defaultValue
                      name="default-radio"
                      className="w-4 h-4 text-blue-600 bg-gray-100 hover:border-white  hover:bg-blue-500 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-white focus:ring-2 dark:bg-white dark:border-gray-600"
                    />
                    <button
                     onClick={productBookings}
                      htmlFor="default-radio-2"
                      className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                    >
                      Cash On Delivery
                    </button>
                  </div>
                </div>
           
              </div>{" "}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};
export default BookProduct;
