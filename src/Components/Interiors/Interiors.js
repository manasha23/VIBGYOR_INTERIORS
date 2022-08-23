import React from 'react';

   const Interiors=()=> {
   return (
    <section>
      <div className="relative overflow-hidden group">
    <div className="flex flex-wrap-reverse gap-8 justify-center">
      <div className="flex gap-6 flex-wrap flex-col items-start lg:justify-center">
        <div className="flex flex-wrap flex-col items-start gap-2">
          <h2 className="text-6xl text-cyan-600 font-bold mb-6">Home Interior Designs</h2>
          <p className="max-w-md text-2xl text-gray-600 mb-6">Have big dreams for your space? Check out our well crafted designs and share your inspiration, goals, and budget and we’ll help you design a space you love.</p>
        </div>
       
      </div>
      <img src="https://i.postimg.cc/QCL0vnXx/table.png" alt="Table" />
    </div>
    <div className="
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
      " />
    <div className="
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
      " />
   </div>
    <div className="container pt-32 pb-16 px-16">
    <h2 className="text-3xl font-medium   text-cyan-800 uppercase mb-16"><center> EXPLORE</center></h2>
    <div className="grid grid-cols-4 gap-8 ">
      <div className="relative rounded-sm overflow-hidden group">
        <img src="https://i.postimg.cc/DzkKKHcZ/2022-08-09-12.png" className="w-full h-full rounded-2xl" />
        <a href="/Bedroom" className="absolute inset-0 bg-black bg-opacity-30 rounded-2xl flex items-center justify-center text-xl text-white font-roboto font-medium group-hover:bg-opacity-50 transition">BEDROOM</a>
      </div>
      <div className="relative rounded-sm overflow-hidden group">
        <img src="https://i.postimg.cc/2SPCqtFp/2022-08-09-13.png" className="w-full h-full rounded-2xl" />
        <a href="/Livingroom" className="absolute inset-0 bg-black bg-opacity-30 rounded-2xl flex items-center justify-center text-xl text-white font-roboto font-medium group-hover:bg-opacity-50 transition">LIVING ROOM</a>
      </div>
      <div className="relative rounded-sm overflow-hidden group">
        <img src="https://i.postimg.cc/X7LW8Jfg/r-architecture-TRCJ-87-Yoh0-unsplash-1.jpg" className="w-full h-full rounded-2xl" />
        <a href="/Kitchen" className="absolute inset-0 bg-black bg-opacity-30 rounded-2xl flex items-center justify-center text-xl text-white font-roboto font-medium group-hover:bg-opacity-50 transition">KITCHEN</a>
      </div>
      <div className="relative rounded-sm overflow-hidden group">
        <img src="https://i.postimg.cc/k4W3tXMK/sidekix-media-g51-F6-WYzy-U-unsplash.jpg" className="w-full h-full rounded-2xl" />
        <a href="/Bathroom" className="absolute inset-0 bg-black bg-opacity-30 rounded-2xl flex items-center justify-center text-xl text-white font-roboto font-medium group-hover:bg-opacity-50 transition">BATHROOM</a>
      </div>
    </div>
  </div>
  
  
  <div className=" px-16 py-16 ">
  <div className="bg-sky-900 rounded-2xl shadow-lg shadow-black px-4 py-6 md:py-8 lg:pt-16 lg:pb-16">
      
        
          <p className="max-w-screen-md text-gray-200 font-roboto md:text-3xl text-center mx-auto mb-4">Bring your dream home to life with one-on-one design help & hand-picked products tailored to your style, space, and budget.</p>
            <h2 className="text-white text-4xl lg:text-4xl font-bold text-center mb-4 md:mb-6">Love the space you're in </h2>
            <p className="text-yellow-100 lg:text-3xl font-semibold text-center font-roboto mb-2 md:mb-3">BOOK NOW!</p>
          </div>
        </div>
      
     


      
    </section>

    

  );
};
export default Interiors;