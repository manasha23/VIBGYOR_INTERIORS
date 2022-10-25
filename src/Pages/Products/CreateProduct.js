import React, { useState, useEffect } from "react";
import { UserAuth } from "../../Context/AuthContext";
import { db } from "../../firebase-config";
import { collection, getDocs, addDoc } from "firebase/firestore";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const CreateProducts = () => {
  let navigate = useNavigate();
  const [newName, setNewName] = useState("");
  const [newDescription, setDescription] = useState("");
  const [newPrice, setPrice] = useState("");
  const [imageUpload, setImageUpload] = useState("");
  const [id, setId] = useState("");
  const [products, setproducts] = useState([]);
  const [category, setCategory] = useState("");
  const userCollectionRef = collection(db, "Products");
  const submitFormFunction = (e) => {
    e.preventDefault();
  };

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
  
  const createProduct = async () => {
    alert("Product added successfully ");
    navigate("/admin/products", { replace: true });
    await addDoc(userCollectionRef, {
      Name: newName,
      Description: newDescription,
      Category: category,
      Price: Number(newPrice),
      Image: imageUpload,
      Id: id,
    });
  };

  return (
    <section className="text-white grid grid-cols-2  h-screen dark:bg-gray-800   ">
      <div className="flex flex-col items-center w-56 h-full overflow-hidden bg-gradient-to-r from-slate-900 bg-gradient-to-tl from-red-600 to-blue-400 to-blue-900  ">
        <a className="flex items-center w-full px-3 mt-3" href="#">
          <span className="ml-3 text-3xl font-bold">Admins</span>
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
              <span className="ml-2 text-sm font-medium">Create-Products</span>
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
            <div className="max-w-[600px] mx-auto ml-5 -mt-5">
              <button onClick={handleLogout} className="border px-6 py-2 my-4">
                Logout
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="  w-auto -ml-40 mr-56 rounded-2xl m-5 mb-10 border border-white-700 border-opacity-70    relative md:rounded-2xl border border-gray-400 border-opacity-70  bg-gradient-to-r from-slate-900 bg-gradient-to-tl from-red-600 to-blue-400 to-blue-900 mt-20 backdrop-blur-xl shadow-2xl m  transition duration-700 group-hover:scale-95">
        <div className="text-3xl mt-4 text-center">Add Products</div>{" "}
        <form
          onSubmit={submitFormFunction}
          className="p-8  mb-0 space-y-4 rounded-lg shadow-2xl"
        >
          <div className="grid grid-cols-2 space-x-4">
            <div>
              <label for="Name" class="text-sm  font-medium">
                Item Name
              </label>

              <div className="relative mt-1">
                <input
                  className="w-full p-4 pr-12 text-sm text-black border-gray-200 rounded-lg shadow-sm"
                  placeholder="Enter Item Name"
                  type="text"
                  onChange={(event) => {
                    setNewName(event.target.value);
                  }}
                />
              </div>
            </div>{" "}
            <div>
              <label for="password" class="text-sm font-medium">
                Product ID
              </label>

              <div class="relative mt-1">
                <input
                  type="number"
                  className="w-full mr-5 p-4 pr-12 text-sm  text-black border-gray-200 rounded-lg shadow-sm"
                  placeholder="Enter Product ID"
                  onChange={(event) => {
                    setId(event.target.value);
                  }}
                />
              </div>
            </div>{" "}
          </div>
          <div className="grid grid-cols-2 space-x-4">
            <div>
              <label for="password" class="text-sm font-medium">
                Description
              </label>

              <div class="relative mt-1">
                <input
                  onChange={(event) => {
                    setDescription(event.target.value);
                  }}
                  className="w-full p-4 pr-12 text-sm  text-black border-gray-200 rounded-lg shadow-sm"
                  placeholder="Enter Item Description"
                  type="text"
                />
              </div>
            </div>{" "}
            <div>
              <label for="password" className="text-sm font-medium">
                Category
              </label>

              <div class="relative mt-1">
                <select
                  value={category}
                  onChange={(event) => setCategory(event.target.value)}
                  className="w-full p-4 pr-12 text-sm  text-black border-gray-200 rounded-lg shadow-sm"
                  placeholder="Enter the Category"
                >
                  <option value="Furniture">Furniture</option>
                  <option value="Decors">Decors</option>
                </select>
              </div>
            </div>{" "}
          </div>
          <div className="grid grid-cols-2 space-x-4">
            <div>
              <label for="number" className="text-sm font-medium">
                Pricing
              </label>

              <div class="relative mt-1">
                <input
                  onChange={(event) => {
                    setPrice(event.target.value);
                  }}
                  className="w-full p-4 pr-12 text-sm  text-black border-gray-200 rounded-lg shadow-sm"
                  placeholder="Enter Item Price"
                  type="number"
                />
              </div>
            </div>{" "}
            <div className="w-60 mt-1 space-y-0.5">
              <label htmlFor="photo" className="text-sm  font-medium text-sm ">
                {" "}
                Product Image{" "}
              </label>
              <input
                placeholder="Add Image URL"
                type="url"
                onChange={(event) => {
                  setImageUpload(event.target.value);
                }}
                className="block w-full h-12  text-black cursor-pointer appearance-none rounded-md border border-gray-200 bg-white px-3 py-2 text-sm transition focus:border-black focus:outline-none focus:ring-1 focus:ring-black disabled:cursor-not-allowed disabled:bg-gray-200 disabled:opacity-75"
              ></input>
            </div>{" "}
          </div>
          <button
            onClick={createProduct}
            class="flex items-center ml-40 justify-center w-48 h-14 px-5 py-3 text-white transition-colors border border-current rounded-lg hover:bg-black group active:bg-black focus:outline-none focus:ring"
            href=""
          >
            <span class="font-medium transition-colors group-hover:text-white">
           Add Products
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
          </button>
        </form>
      </div>{" "}
      <ToastContainer />
    </section>
  );
};

export default CreateProducts;
