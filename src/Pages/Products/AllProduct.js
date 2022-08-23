import React, { useState, useEffect } from "react";
import { db } from "../../firebase-config";
import { listAll, ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { storage } from "../../firebase-config";
import { v4 } from "uuid";
import {
  collection,
  getDocs,
  addDoc,
  deleteDoc,
  doc,
} from "firebase/firestore";

const AllProduct = () => {

  const [products, setproducts] = useState([]);
  const userCollectionRef = collection(db, "Products");
  const deleteUser = async (id) => {
    const productDoc = doc(db, "Products", id);
    await deleteDoc(productDoc);
  };


  useEffect(() => {
    const getProducts = async () => {
      const data = await getDocs(userCollectionRef);
      setproducts(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };
    getProducts();
  }, []);

  return (
    <div className=" my-auto  bg-gradient-to-r from-slate-900 bg-gradient-to-tl from-red-600 to-blue-400 to-blue-900 py-6 sm:py-8 lg:py-12">
      <div className="max-w-screen-lg px-4 md:px-8 mx-auto">
        <div className="mb-6 sm:mb-10 lg:mb-16">
          <h2 className="text-white text-2xl lg:text-3xl font-bold text-center mb-4 md:mb-6">
            Products Stocks
          </h2>
        </div>{" "}
        {/* <div className="flex -mt-5 mb-5  flex-col items-center gap-4 ">
          <div className="w-full sm:max-w-xs bg-gray-900 rounded-lg p-4">
            <div className="space-y-1">
              <div className="flex justify-between text-gray-500 gap-4">
                <span>Newly Added</span>
                <span>12</span>
              </div>
              <div className="flex justify-between text-gray-500 gap-4">
                <span>Stock Items</span>
                <span>99</span>
              </div>
            </div>
            <div className="border-t border-black  pt-4 mt-4">
              <div className="flex justify-between items-start text-gray-800 gap-4">
                <span className="text-lg font-bold">Total</span>
                <span className="flex flex-col items-end">
                  <span className="text-lg font-bold">134</span>
                </span>
              </div>
            </div>
          </div>
        </div> */}
        {products.map((product) => {
          return (
            <div className="flex flex-col gap-4 md:gap-6 mb-6 sm:mb-8">
              {/* product - start */}
              <div className="flex flex-wrap border border-black rounded-lg overflow-hidden gap-x-4 sm:gap-y-4 lg:gap-6">
                <a
                  href="#"
                  className="group w-32 sm:w-40 h-48 sm:h-56 block bg-gray-100 overflow-hidden relative"
                >
                  {" "}
                 
                  <img
                    src={product.Image}
                    loading="lazy"
                    alt="product Image"
                    className="w-full h-full object-cover object-center group-hover:scale-110 transition duration-200"
                  />
                  {/* )})} */}
                </a>
                <div className="flex flex-col justify-between flex-1 py-4">
                  <div> <a
                      href="#"
                      className="inline-block text-black hover:text-gray-500 text-lg lg:text-xl font-bold transition duration-100 mb-1"
                    >
                      {/* name */}
                      {product.Id}.
                    </a>
                    <a
                      href="#"
                      className="inline-block text-black hover:text-gray-500 text-lg lg:text-xl font-bold transition duration-100 mb-1"
                    >
                      {/* name */}
                      {product.Name}
                    </a>

                    <p className="text-black">
                      {/* Description  */}
                      {product.Description}
                    </p>
                  </div>
                  <div>
                    <span className="block text-black md:text-lg font-bold mb-1">
                      {/* price */}
                      Rs.{product.Price}
                    </span>
                    <span className="flex items-center text-gray-700 text-sm gap-1">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-5 h-5 text-green-500"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                      In stock
                    </span>
                  </div>
                </div>
                <div className="w-full sm:w-auto flex justify-between border-t mt-1 mr-5 sm:border-none p-4 sm:pl-0 lg:p-6 lg:pl-0">
                  <div className="flex flex-col items-start gap-2">
                    <a
                      class="relative inline-block px-8 py-3 w-28 overflow-hidden border  rounded-sm border-black group focus:outline-none focus:ring"
                      href="/admin/products/edit/:productId"
                    >
                      <span class="absolute inset-y-0 left-0 w-[2px]  transition-all bg-black group-hover:w-full group-active:bg-black"></span>

                      <span class="relative text-sm font-medium  text-white transition-colors group-hover:text-white">
                        Modify
                      </span>
                    </a>
                    <button
                      onClick={() => {
                        deleteUser(product.id);
                        alert("Product deleted successfully.Please refresh the page ")
                      }}
                      class="relative inline-block px-8 py-3 w-28 overflow-hidden border rounded-sm border-purple-900 group focus:outline-none focus:ring"
                      href=""
                    >
                      <span class="absolute inset-y-0 left-0 w-[2px] transition-all bg-purple-900 group-hover:w-full group-active:bg-purple-900"></span>

                      <span class="relative text-sm font-medium text-white transition-colors group-hover:text-white">
                        Delete
                      </span>
                    </button>
                  </div>
                </div>
              </div>
              {/* product - end */}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default AllProduct;
