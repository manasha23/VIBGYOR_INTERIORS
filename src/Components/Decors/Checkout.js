import React, { useState, useEffect } from "react";
import { db } from "../../firebase-config";
import { collection, getDocs, addDoc } from "firebase/firestore";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
function Checkout() {
  let navigate = useNavigate();
  const [newName, setNewName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [city, setCity] = useState("");
  const [address, setAddress] = useState("");
  const [postcode, setPostcode] = useState("");
  const [notes, setNotes] = useState([]);

  const userCollectionRef = collection(db, "Orders-UserDeatils");
  const submitFormFunction = (e) => {
    e.preventDefault();
  };

  const Details = async () => {
    alert("Product added successfully ");
    navigate("/Payment", { replace: true });
    await addDoc(userCollectionRef, {
      Name: newName,
      LastName: lastName,
      Email: email,
      Address:address,
      City: city,
      Postcode: postcode,
      Notes: notes,
    });
  };

  return (
    <section>
      <div className="dark:bg-gray-800 container p-12 mx-auto">
        <div className="flex flex-col w-full px-0 mx-auto md:flex-row">
          <div className="flex flex-col md:w-full">
            <h1 className="text-5xl mb-10 dark:text-violet-400 lg:text-5xl font-bold leading-none sm:text-6xl">
              Shipping Cart
            </h1>
            <form
            onSubmit={submitFormFunction}
              className="justify-center w-full mx-auto"
              method="post"
              action
            >
              <div className>
                <div className="space-x-0 lg:flex lg:space-x-4">
                  <div className="w-full lg:w-1/2">
                    <label
                      htmlFor="firstName"
                      className="block mb-3 text-sm font-semibold text-white"
                    >
                      First Name
                    </label>
                    <input
                     onChange={(event) => {
                      setNewName(event.target.value);
                    }}
                      name="firstName"
                      type="text"
                      placeholder="First Name"
                      className="w-full px-4 py-3 text-sm border border-white rounded lg:text-sm focus:outline-none focus:ring-1 focus:ring-blue-600"
                    />
                  </div>
                  <div className="w-full lg:w-1/2 ">
                    <label
                      htmlFor="firstName"
                      className="block mb-3 text-sm font-semibold text-white"
                    >
                      Last Name
                    </label>
                    <input
                     onChange={(event) => {
                      setLastName(event.target.value);
                    }}
                      name="Last Name"
                      type="text"
                      placeholder="Last Name"
                      className="w-full px-4 py-3 text-sm border border-white rounded lg:text-sm focus:outline-none focus:ring-1 focus:ring-blue-600"
                    />
                  </div>
                </div>
                <div className="mt-4">
                  <div className="w-full">
                    <label
                      htmlFor="Email"
                      className="block mb-3 text-sm font-semibold text-white"
                    >
                      Email
                    </label>
                    <input
                     onChange={(event) => {
                      setEmail(event.target.value);
                    }}
                      name="Last Name"
                      type="text"
                      placeholder="Email"
                      className="w-full px-4 py-3 text-sm border border-white rounded lg:text-sm focus:outline-none focus:ring-1 focus:ring-blue-600"
                    />
                  </div>
                </div>
                <div className="mt-4">
                  <div className="w-full">
                    <label
                      htmlFor="Address"
                      className="block mb-3 text-sm font-semibold text-white"
                    >
                      Address
                    </label>
                    <textarea 
                     onChange={(event) => {
                      setAddress(event.target.value);
                    }}
                      className="w-full px-4 py-3 text-xs border border-white rounded lg:text-sm focus:outline-none focus:ring-1 focus:ring-blue-600"
                      name="Address"
                      cols={20}
                      rows={4}
                      placeholder="Address"
                      defaultValue={""}
                    />
                  </div>
                </div>
                <div className="space-x-0 lg:flex lg:space-x-4">
                  <div className="w-full lg:w-1/2">
                    <label
                      htmlFor="city"
                      className="block mb-3 text-sm font-semibold text-white"
                    >
                      City
                    </label>
                    <input 
                     onChange={(event) => {
                      setCity(event.target.value);
                    }}
                      name="city"
                      type="text"
                      placeholder="City"
                      className="w-full px-4 py-3 text-sm border border-white rounded lg:text-sm focus:outline-none focus:ring-1 focus:ring-blue-600"
                    />
                  </div>
                  <div className="w-full lg:w-1/2 ">
                    <label
                      htmlFor="postcode"
                      className="block mb-3 text-sm font-semibold text-white"
                    >
                      Postcode
                    </label>
                    <input
                     onChange={(event) => {
                      setPostcode(event.target.value);
                    }}
                      name="postcode"
                      type="text"
                      placeholder="Post Code"
                      className="w-full px-4 py-3 text-sm border border-white rounded lg:text-sm focus:outline-none focus:ring-1 focus:ring-blue-600"
                    />
                  </div>
                </div>
                <div className="flex items-center mt-4">
                  <label className="flex items-center text-sm group text-heading">
                    <input
                      type="checkbox"
                      className="w-5 h-5 border border-white rounded focus:outline-none focus:ring-1"
                    />
                    <span className="ml-2">
                      Save this information for next time
                    </span>
                  </label>
                </div>
                <div className="relative pt-3 xl:pt-6">
                  <label 
                    htmlFor="note"
                    className="block mb-3 text-sm font-semibold text-white"
                  >
                    {" "}
                    Notes (Optional)
                  </label>
                  <textarea
                   onChange={(event) => {
                    setNotes(event.target.value);
                  }}
                    name="note"
                    className="flex items-center w-full px-4 py-3 text-sm border border-white rounded focus:outline-none focus:ring-1 focus:ring-blue-600"
                    rows={4}
                    placeholder="Notes for delivery"
                    defaultValue={""}
                  />
                </div>
         
                <div className="mt-4 w-1/5 ">
                  <button   onClick={Details}
                    href="/Payment"
                    className="w-full px-6 py-2 text-white rounded border-black hover:bg-black border hover:border-black hover:text-white dark:bg-violet-900"
                  >
                    Procced
                  </button>
                </div>
              </div>
            </form>
          </div>
          <div className="flex flex-col w-full ml-0 lg:ml-12 lg:w-2/5">
            <div className="pt-12 md:pt-0 2xl:ps-4">
              <h2 className="text-xl text-white">Order Summary</h2>
              <div className="mt-8">
                <div className="flex flex-col space-y-4">
                  <div className="flex space-x-4">
                    <div>
                      <img
                        src="https://source.unsplash.com/user/erondu/1600x900"
                        alt="image"
                        className="w-60"
                      />
                    </div>
                    <div>
                      <h2 className="text-xl text-white">Title</h2>

                      <span className="text-white">Price</span>
                      <div className="text-white"> $20</div>
                    </div>
                    <div>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-6 h-6"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M6 18L18 6M6 6l12 12"
                        />
                      </svg>
                    </div>
                  </div>
                  <div className="flex space-x-4">
                    <div>
                      <img
                        src="https://source.unsplash.com/collection/190727/1600x900"
                        alt="image"
                        className="w-60"
                      />
                    </div>
                    <div>
                      <h2 className="text-xl text-white">Title</h2>

                      <span className="text-white">Price:</span>
                      <div className="text-white"> $20</div>
                    </div>
                    <div>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-6 h-6"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M6 18L18 6M6 6l12 12"
                        />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex p-4 mt-4">
                <h2 className="text-xl text-white">ITEMS 2</h2>
              </div>
              <div className="flex items-center text-white w-full py-4 text-sm font-semibold border-b border-white lg:py-5 lg:px-3 text-heading last:border-b-0 last:text-base last:pb-0">
                Subtotal<span className="ml-2">$40.00</span>
              </div>
              <div className="flex items-center text-white w-full py-4 text-sm font-semibold border-b border-white lg:py-5 lg:px-3 text-heading last:border-b-0 last:text-base last:pb-0">
                Shipping Tax<span className="ml-2">$10</span>
              </div>
              <div className="flex items-center text-white w-full py-4 text-sm font-semibold border-b border-white lg:py-5 lg:px-3 text-heading last:border-b-0 last:text-base last:pb-0">
                Total<span className="ml-2">$50.00</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
export default Checkout;
