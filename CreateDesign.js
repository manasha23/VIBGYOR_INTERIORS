import React, { useState, useEffect } from "react";
import { db } from "../../firebase-config";
import { collection, getDocs, addDoc } from "firebase/firestore";
import { storage } from "../../firebase-config";
import { listAll, ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { v4 } from "uuid";
const CreateDesigns = () => {
  const [newName, setNewName] = useState("");
  const [newDescription, setDescription] = useState("");
  const [newPrice, setPrice] = useState(0);
  // const [imageUpload, setImageUpload] = useState("");
  // const [imageListRef] = ref(storage, "images/");
  const [designs, setDesigns] = useState([]);
  const userCollectionRef = collection(db, "Designs");
  const submitFormFunction = (e) => {
    e.preventDefault();
  };
  // const uploadImage = () => {
  //   if (imageUpload == null) return;
  //   const imageRef = ref(storage, `images/${imageUpload.name + v4()}`);
  //   uploadBytes(imageRef, imageUpload).then(() => {
  //     alert("image Uploaded Sucessfully");
  //   });
  // };

  const CreateDesign = async () => {
    await addDoc(userCollectionRef, {
      Name: newName,
      Description: newDescription,
      Price: Number(newPrice),
      // Image: imageUpload,
    });
  };
  return (
    <div className="container  items-center mt-10 pb-32 px-16">
      <div className=" w-96 ml-96 mt-10  rounded-2xl  border border-white-700 border-opacity-70   p-5  relative md:rounded-2xl border border-gray-400 border-opacity-70  bg-gradient-to-r from-slate-900 bg-gradient-to-tl from-red-600 to-blue-400 to-blue-900  backdrop-blur-xl shadow-2xl m  transition duration-700 group-hover:scale-95">
        <div className="text-3xl text-center">Add Designs</div>{" "}
        <form
          onSubmit={submitFormFunction}
          action=""
          className="p-8  mb-0 space-y-4 rounded-lg shadow-2xl"
        >
          <div>
            <label for="email" class="text-sm font-medium">
              Design Name
            </label>

            <div className="relative mt-1">
              <input
                class="w-full p-4 pr-12 text-sm text-black border-gray-200 rounded-lg shadow-sm"
                placeholder="Enter Design Name"
                onChange={(event) => {
                  setNewName(event.target.value);
                }}
              />
            </div>
          </div>
          <div>
            <label for="password" class="text-sm font-medium">
              Description
            </label>

            <div class="relative mt-1">
              <input
                className="w-full p-4 pr-12 text-sm  text-black border-gray-200 rounded-lg shadow-sm"
                placeholder="Enter Design Description"
                onChange={(event) => {
                  setDescription(event.target.value);
                }}
              />
            </div>
          </div>
          <div>
            <label for="number" className="text-sm font-medium">
              Pricing
            </label>

            <div class="relative mt-1">
              <input
                className="w-full p-4 pr-12 text-sm  text-black border-gray-200 rounded-lg shadow-sm"
                placeholder="Enter  Price"
                onChange={(event) => {
                  setPrice(event.target.value);
                }}
              />
            </div>
          </div>{" "}
          <div className="w-full space-y-0.5">
            <label htmlFor="photo" className="text-xs font-medium text-sm ">
              {" "}
              Product Image{" "}
            </label>
            <input
              id="file"
              type="file"
              className="block w-full text-black cursor-pointer appearance-none rounded-md border border-gray-200 bg-white px-3 py-2 text-sm transition focus:border-black focus:outline-none focus:ring-1 focus:ring-black disabled:cursor-not-allowed disabled:bg-gray-200 disabled:opacity-75"
            />
          </div>
          <button
            onClick={CreateDesign}
            class="flex items-center ml-10 justify-between w-48 h-14 px-5 py-3 text-white transition-colors border border-current rounded-lg hover:bg-black group active:bg-black focus:outline-none focus:ring"
            href=""
          >
            <span class="font-medium transition-colors group-hover:text-white">
              Add design
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
    </div>
  );
};

export default CreateDesigns;
