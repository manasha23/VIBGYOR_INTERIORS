import React, { useState, useEffect } from "react";
import { db } from "../../firebase-config";
import { listAll, ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { query, where } from "firebase/firestore";

import {
  collection,
  getDocs,
  addDoc,
  deleteDoc,
  doc,
} from "firebase/firestore";

function Kitchen() {
  const [design, setDesigns] = useState([]);
  const userCollectionRef = collection(db, "Designs");

  useEffect(() => {
    const getDesigns = async () => {
      const q = query(userCollectionRef, where("Category", "==", "Kitchen"));
      const data = await getDocs(q);

      setDesigns(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };
    getDesigns();
  }, []);

  return (
    <section>
      <div className="bg-sky-900">
        <div className=" pt-16 pb-32 px-16">
          <div className="flex flex-col lg:flex-row justify-between gap-2">
            <div className="xl:w-5/12 flex flex-col justify-between">
              <div />
              <div className="sm:text-center lg:text-left lg:py-12 xl:py-24">
                <p className="text-white text-5xl font-semibold mb-4 md:mb-6">
                  Kitchen Interior Designs
                </p>
                <div className="text-gray-400 text-xl  font-bold mb-8 md:mb-12">
                  At Vibgyor, we take pride in our extensive experience with
                  modular kitchen designs - the perfect blend of functionality
                  and style. Our curated designs range from simple kitchen
                  designs to modern modular kitchens that can be customised to
                  fit your existing space.
                </div>
              </div>
            </div>
            <div className="xl:w-6/12 h-48 lg:h-auto  overflow-hidden">
              <img
                src="https://i.postimg.cc/0yLQn5wb/image-processing20200429-32563-nl0ekg-2-removebg-preview.png"
                loading="lazy"
                alt="Photo by Fakurian Design"
                className="w-full h-full object-cover object-center"
              />
            </div>
          </div>
        </div> {design.map((design) => {
    
    return (
        <div className="py-6 ">
          <div className="max-w-screen-2xl px-32 ">
            <div className="flex justify-between items-end gap-4 mb-6"></div>
            <div class="grid grid-cols-2 gap-16">
              <div>
                <a
                  href="#"
                  class="group h-96 block bg-gray-100 rounded-t-lg overflow-hidden relative"
                >
                  <img
                    src={design.Image}
                    loading="lazy"
                    alt="Photo by Austin Wade"
                    class="w-full h-full object-cover object-center group-hover:scale-110 transition duration-200"
                  />
                </a>

                <div class="flex justify-between items-start bg-gray-100 rounded-b-lg gap-2 p-4">
                  <div class="flex flex-col">
                  <span class="text-sky-800 font-bold text-lg ">
                    {design.Id}
                    </span>
                    <span class="text-sky-800 font-bold text-lg ">
                    {design.Name}
                    </span>
                    <div class="text-sky-900 font-bold text-lg ">     Rs.{design.Price}</div>
                    <span class="text-gray-600 text-sm lg:text-base">
                    {design.Description}
                    </span>
                  </div>

                  <div class="flex flex-col items-end">
                    <a
                      href=" /Booking"
                      class="bg-transparent hover:bg-sky-900 text-sky-900 font-semibold hover:text-white py-2 px-4 border border-sky-800 hover:border-transparent rounded"
                    >
                      BOOK
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>  );
          })}{" "}
      </div>
    </section>
  );
}
export default Kitchen;
