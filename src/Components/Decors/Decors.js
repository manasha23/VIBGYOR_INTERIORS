import React from "react";

function Decors() {
  return (
    <section>
      <div className="relative overflow-hidden group">
        <div className="flex flex-wrap-reverse gap-72 justify-center">
          <div className="flex gap-6 flex-wrap flex-col items-start lg:justify-center">
            <div className="flex flex-wrap flex-col items-start gap-2">
              <h2 className="text-6xl text-cyan-600 font-bold mb-6">
                Home Decor
              </h2>
              <p className="max-w-md text-2xl text-white mb-6">
                We provide a personal shopping list with hand-picked selects
                from hundreds of brands. Our team will manage your entire order,
                so all you have to do is “add to cart.”
              </p>
            </div>
          </div>
          <img
            src="https://i.postimg.cc/3xjYr32d/larisa-birta-YP4-NILq7q-Fo-unsplash-removebg-preview.png"
            alt="Table"
          />
        </div>
        <div
          className="
    absolute
    -bottom-6
    -right-32
    -z-10
    aspect-square
    md:border-8
    border-amber-400
    rounded-full
    md:w-64
    lg:w-96
    xl:max-w-lg
      "
        />
        <div
          className="
    bg-sky-900
    h-24
    xl:h-48
    -mx-8 
    mt-12
    xl:mt-0
    xl:absolute
    w-screen
    -bottom-8
    -z-10
      "
        />
      </div>
      <div className="container pt-32 pb-16 px-48 ">
        <h2 className="text-3xl font-medium   text-cyan-300 uppercase mb-16">
          <center>EXPLORE</center>
        </h2>
        <div className="grid grid-cols-2 h-96  gap-32  ">
          <div className="relative rounded-sm overflow-hidden group">
            <img
              src="https://i.postimg.cc/X7mJGNWt/2022-08-09-28.png"
              className="w-full h-full rounded-2xl"
            />
            <a
              href="/Furniture"
              className="absolute inset-0 bg-black bg-opacity-30 rounded-2xl flex items-center justify-center text-xl text-white font-roboto font-medium group-hover:bg-opacity-50 transition"
            >
              FURNITURE
            </a>
          </div>

          <div className="relative rounded-sm overflow-hidden group">
            <img
              src="https://i.postimg.cc/FRz5Vcgp/2022-08-09-59.png"
              className="w-full h-full rounded-2xl"
            />
            <a
              href="/Decor"
              className="absolute inset-0 bg-black bg-opacity-30 rounded-2xl flex items-center justify-center text-xl text-white font-roboto font-medium group-hover:bg-opacity-50 transition"
            >
              DECOR
            </a>
          </div>
        </div>
      </div>

      <div className=" px-16 py-16 ">
        <div className="bg-sky-900 rounded-2xl shadow-lg shadow-black px-4 py-6 md:py-8 lg:pt-16 lg:pb-16">
          <p className="max-w-screen-md text-gray-200 font-roboto md:text-3xl text-center mx-auto mb-4">
            Bring your dream home to life with one-on-one design help &
            hand-picked products tailored to your style, space, and budget.
          </p>
          <h2 className="text-white text-4xl lg:text-4xl font-bold text-center mb-4 md:mb-6">
            Love the space you're in{" "}
          </h2>
          <p className="text-yellow-100 lg:text-3xl font-semibold text-center font-roboto mb-2 md:mb-3">
            SHOP NOW!
          </p>
        </div>
      </div>
    </section>
  );
}
export default Decors;
