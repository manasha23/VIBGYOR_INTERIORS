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
function Bedroom() {
  const [design, setDesigns] = useState([]);
  const userCollectionRef = collection(db, "Designs");

  useEffect(() => {
    const getDesigns = async () => {
      const q = query(userCollectionRef, where("Category", "==", "Bedroom"));
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
                  Bedroom Interior Designs
                </p>
                <div className="text-gray-400 text-xl  font-bold mb-8 md:mb-12">
                  At Vibgyor, we’ve got a wide range of affordable and stylish
                  bedroom designs that you’ll love. Our carefully-curated master
                  bedroom designs come in a variety of styles, colour schemes
                  and decor ideas - all of which can be customised to your
                  taste.
                </div>
              </div>
            </div>
            <div className="xl:w-6/12 h-48 lg:h-auto  overflow-hidden">
            <video
              loop="loop"
              autoPlay="autoplay"
              muted="muted"
              src="https://cdn-publish-filemanager.homestyler.com/prod/_homestyler/_nuxt/dist/videos/01.50c3d02.mp4"
              className="  video relative"
              style={{}}
              data-v-467de426
            />
            </div>
          </div>
          <div className="grid grid-cols-3 gap-10">
          {design.map((design) => {
    
            return (
              <div className="py-6 -mt-20 mb-20 ">
                <div className="max-w-screen-2xl m-2 ">
                  

                  <div>
                    <a
                      href="#"
                      class="group h-46  block bg-gray-100 rounded-t-lg overflow-hidden relative"
                    >
                      <img
                        src={design.Image}
                        loading="lazy"
                        alt="Photo by Austin Wade"
                        class="w-full h-full object-cover object-center group-hover:scale-110 transition duration-200"
                      />
                    </a>

                    <div class=" flex justify-between items-start bg-gray-100 rounded-b-lg gap-2 p-4">
                      <div class="flex flex-col">
                        {" "}
                        <span class="text-sky-800 font-bold text-lg ">
                          {/* name */}
                          {design.Id}.
                        </span>
                        <span class="text-sky-800 font-bold text-lg ">
                          {/* name */}
                          {design.Name}
                        </span>
                        
                        <span class="text-gray-600 text-sm lg:text-base">
                          {/* Description  */}
                          {design.Description}
                        </span><div class="text-sky-900 font-bold text-lg ">
                          {" "}
                          {/* price */}
                          Rs.{design.Price}
                        </div>
                      </div>

                      <div class="flex flex-col items-end">
                        <a href="/Booking" class="bg-transparent hover:bg-sky-900 text-sky-900 font-semibold hover:text-white py-2 px-4 border border-sky-800 hover:border-transparent rounded">
                          BOOK
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}{" "}
        </div>
        </div>
      </div>
    </section>
  );
}
export default Bedroom;
