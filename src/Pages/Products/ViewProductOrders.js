import React, { useState, useEffect } from "react";
import { db } from "../../firebase-config";
import { listAll, ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { storage } from "../../firebase-config";
import { v4 } from "uuid";
import { UserAuth } from "../../Context/AuthContext";
import { useNavigate } from "react-router-dom";
import {
  collection,
  getDocs,
  addDoc,
  deleteDoc,
  doc,
} from "firebase/firestore";
function Viewbookings() {
  let navigate = useNavigate();
  const [bookings, setBookings] = useState([]);
  const userCollectionRef = collection(db, "Product-Bookings");
  useEffect(() => {
    const getBooking = async () => {
      const data = await getDocs(userCollectionRef);
      setBookings(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };
    getBooking();
  }, []);
  const { user, logout } = UserAuth();
  const handleLogout = async () => {
    try {
      await logout();
      navigate("/Adminsignup");
      console.log("You are logged out");
    } catch (e) {
      console.log(e.message);
    }
  };
  return (
    <section>
      <div className=" bg-black h-screen grid grid-cols-2 -gap-40">
        <div className="flex flex-col text-white items-center w-56 h-full overflow-hiddenbg-gradient-to-r from-slate-900 bg-gradient-to-tl from-red-600 to-blue-400 to-blue-900  ">
          <a className="flex items-center w-full px-3 mt-3" href="#">
            <svg
              className="w-8 mt-5 h-8 fill-current"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path d=" M11 17a1 1 0 001.447.894l4-2A1 1 0 0017 15V9.236a1 1 0 00-1.447-.894l-4 2a1 1 0 00-.553.894V17zM15.211 6.276a1 1 0 000-1.788l-4.764-2.382a1 1 0 00-.894 0L4.789 4.488a1 1 0 000 1.788l4.764 2.382a1 1 0 00.894 0l4.764-2.382zM4.447 8.342A1 1 0 003 9.236V15a1 1 0 00.553.894l4 2A1 1 0 009 17v-5.764a1 1 0 00-.553-.894l-4-2z" />
            </svg>
            <span className="ml-3 mt-5 text-3xl  font-bold">Admins</span>
          </a>
          <div className="w-full px-2">
            <div className="flex flex-col items-center w-full mt-3 border-t border-gray-700">
              <a
                className="flex items-center w-full h-12 px-3 mt-2 rounded hover:bg-indigo-700"
                href="/admin/designs/create"
              >
                <span className="ml-2 text-sm font-medium">Create-Designs</span>
              </a>
              <a
                className="flex items-center w-full h-12 px-3 mt-2 rounded hover:bg-indigo-700"
                href="/admin/designs"
              >
                <span className="ml-2 text-sm font-medium">Design-Stocks</span>
              </a>

              <a
                className="flex items-center w-full h-12 px-3 mt-2 rounded hover:bg-indigo-700"
                href="/admin/designs/view/:designId"
              >
                <span className="ml-2 text-sm font-medium">
                  View-Design Orders
                </span>
              </a>
            </div>
            <div className="flex flex-col items-center w-full mt-2 border-t border-gray-700">
              <a
                className="flex items-center w-full h-12 px-3 mt-2 rounded hover:bg-indigo-700"
                href="/admin/products/create"
              >
                <span className="ml-2 text-sm font-medium">
                  Create-Products
                </span>
              </a>
              <a
                className="flex items-center w-full h-12 px-3 mt-2 rounded hover:bg-indigo-700"
                href="/admin/products"
              >
                <span className="ml-2 text-sm font-medium">Product-Stocks</span>
              </a>

              <a
                className="relative flex items-center w-full h-12 px-3 mt-2 rounded hover:bg-indigo-700"
                href="/admin/product/view/:productId"
              >
                <span className="ml-2 text-sm font-medium">
                  View-Product Orders
                </span>
                <span className="absolute top-0 left-0 w-2 h-2 mt-2 ml-2 bg-indigo-500 rounded-full" />
              </a>
            </div>{" "}
            <div className="max-w-[600px] mx-auto ml-5 mt-5">
              <button
                onClick={handleLogout}
                className="border hover:border-black px-6 py-2 my-4"
              >
                Logout
              </button>
            </div>
          </div>
        </div>

        <div
          className="overflow-x-auto overflow-y-auto scrollbar scrollbar-thumb-gray-900 scrollbar-track-gray-100  mt-5 rounded-b-xl rounded-t-xl -ml-96 mr-10 relative "
          id="scroll"
        >
          <table className="w-full  text-sm text-center text-gray-00 dark:text-white">
            <thead className="text-xs text-white uppercase bg-sky-900 dark:bg-gray-700 dark:text-gray-400">
              <tr>
                <th scope="col" className="py-3 px-6">
                  Name
                </th>
                <th scope="col" className="py-3 px-6">
                  Contact
                </th>
                <th scope="col" className="py-3 px-6">
                  Address
                </th>{" "}
                <th scope="col" className="py-3 px-6">
                  Product ID
                </th>
                <th scope="col" className="py-3 px-6">
                  Category
                </th>
              </tr>
            </thead>{" "}
            {bookings.map((booking) => {
              return (
                <tbody>
                  <tr className="bg-white border-b-xl border-b border-white dark:bg-gray-800 dark:border-gray-700">
                    <th
                      scope="row"
                      className="py-4 px-6  font-medium  text-gray-900 whitespace-nowrap dark:text-white"
                    >
                      {booking.Name}
                    </th>
                    <td className="py-4 px-6">{booking.Contact}</td>
                    <td className="py-4 px-6"> {booking.Address}</td>
                    <td className="py-4 px-6"> {booking.Id}</td>
                    <td className="py-4 px-6">{booking.Category}</td>
                  </tr>
                </tbody>
              );
            })}
          </table>
        </div>
      </div>
    </section>
  );
}
export default Viewbookings;
