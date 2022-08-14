
import { useState } from "react";
import { Transition } from "@headlessui/react";
function Home() {
  const [isOpen, setIsOpen] = useState(false);
 
return (
    <div>
      <section className="dark:bg-gray-800  dark:text-gray-100">
      <div className="border-b-2 h-20 border-white border-opacity-10 mb-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className=" w-10 flex items-center h-16">
            <div className="flex items-center">
              <div className="hidden md:block">
                <center>
                  <div className="  ml-80 flex items-baseline space-x-12  ">
                    <a href="#Home">
                      <a className=" hover:bg-gray-900 text-white px-3 py-2 rounded-md text-sm font-medium">
                        abc
                      </a>
                    </a>
                    <a href="#About">
                      <a className="text-gray-300 hover:bg-gray-900 hover:text-white px-3 py-2 rounded-md text-sm font-medium">
                        Abc
                      </a>
                    </a>
                    <a href="/Events">
                      <a className="text-gray-300 hover:bg-gray-900 hover:text-white px-3 py-2 rounded-md text-sm font-medium">
                        abc
                      </a>
                    </a>
                    <a href="/Sponsor">
                      <a
                      className="text-gray-300 hover:bg-gray-900 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                    >
                      abc</a>
                    </a>
                    <a href="#Faq">
                      <a className="text-gray-300 hover:bg-gray-900 hover:text-white px-3 py-2 rounded-md text-sm font-medium">
                        abc
                      </a>
                    </a>{" "}
                    <a href="#Footer">
                      <a className="text-gray-300 hover:bg-gray-900 hover:text-white px-3 py-2 rounded-md text-sm font-medium">
                        abc
                      </a>
                    </a>
                  </div>
                </center>
              </div>
            </div>
            <div className="-mr-2 flex md:hidden">
              <button
                onClick={() => setIsOpen(!isOpen)}
                type="button"
                className="  inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
                aria-controls="mobile-menu"
                aria-expanded="false"
              >
                <span className="sr-only">Open main menu</span>
                {!isOpen ? (
                  <svg 
                    className="block h-6 w-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </svg>
                ) : (
                  <svg
                    className="block h-6 w-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                )}
              </button>
            </div>
          </div>
        </div>

        <Transition
          show={isOpen}
          enter="transition ease-out duration-100 transform"
          enterFrom="opacity-0 scale-95"
          enterTo="opacity-100 scale-100"
          leave="transition ease-in duration-75 transform"
          leaveFrom="opacity-100 scale-100"
          leaveTo="opacity-0 scale-95"
        >
          {(ref) => (
            <div className="md:hidden" id="mobile-menu">
              <div ref={ref} className=" px-2 pt-2 pb-3 space-y-1 sm:px-3">
                <a
                  href="/Home"
                  className=" text-white block px-3 py-2 rounded-md text-base font-medium"
                >
                  Home
                </a>
                <a
                  href="#About"
                  className=" text-white block px-3 py-2 rounded-md text-base font-medium"
                >
                  About
                </a>
                <a href="/Events">
                  <a className="text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium">
                    Events
                  </a>
                </a>
                <a href="/Sponsor">
                  <a className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium">
                    Sponsor
                  </a>
                </a>
                <a
                  href="#Faq"
                  className="text-gray-300  hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                >
                  FAQ`s
                </a>

                <a
                  href="#Footer"
                  className="text-gray-300  hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                >
                  Contact
                </a>
              </div>
            </div>
          )}
        </Transition>

        <main>
          <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
            {/* <!-- Replace with your content --> */}

            {/* <!-- /End replace --> */}
          </div>
        </main>
      </div>
        <div className="container flex flex-col justify-center px-20 -my-28 -mb-5 mx-auto sm:py-12 lg:py-24 lg:flex-row lg:justify-between">
          <div className="flex flex-col justify-center p-6 text-center rounded-sm lg:max-w-md xl:max-w-lg lg:text-left">
          
          <h1 className="text-5xl lg:text-5xl font-bold leading-none sm:text-6xl">
          VIBGYOR 
              <span className="dark:text-violet-400">   Interiors Service & Ecommerce</span> 
           
            </h1>
            <p className="mt-6 mb-8 text-lg sm:mb-12">
            Bring your home to life with one-on-one design help &amp; hand picked products tailored to your style, space and budget.
              
            </p>
            <div className="flex flex-col space-y-4 sm:items-center sm:justify-center sm:flex-row sm:space-y-0 sm:space-x-4 lg:justify-start">
              <a
                rel="noopener noreferrer"
                href="#"
                className="px-8 w-36 py-3 text-align text-lg font-semibold rounded dark:bg-violet-400 dark:text-gray-900"
              >
                Service
              </a>
              <a
                rel="noopener noreferrer"
                href="#"
                className="px-8 py-3 text-lg font-semibold border rounded dark:border-gray-100"
              >
                Shop Now!
              </a>
            </div>
          </div>
          <div className="flex items-center justify-center p-6 mt-8 lg:mt-0 h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128">
            <img
              src="assets/svg/Business_SVG.svg"
              alt=""
              className="object-contain h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128"
            />
          </div>
        </div>
        <div className="relative py-16 bg-white">  
  <div className="relative container m-auto px-6 text-gray-500 md:px-12">
    <div className="grid lg:grid-cols-3 gap-6 md:w-8/12 md:mx-auto lg:w-full">
      <div className="group bg-white rounded-xl shadow-xl px-8 py-12 space-y-6 text-center">
        <img className="mx-auto w-24" src="images/icons/code.png" alt="illustration" loading="lazy" />
        <h3 className="text-2xl font-semibold text-gray-800">Web development</h3>
        <p>Obcaecati, quam? Eligendi, nulla numquam natus laborum porro at cum, consectetur ullam tempora ipsa iste officia sed officiis! Incidunt ea animi officiis.</p>
        <a href="#" className="relative flex justify-center items-center h-10 w-10 mx-auto 
                                 before:absolute before:inset-0 before:border before:rounded-full before:transition before:duration-300 group-hover:before:scale-125">
          <span className="text-gray-700">→</span>
        </a>
      </div>
      <div className="group bg-white rounded-xl shadow-xl px-8 top-10 py-12 space-y-6 text-center">
        <img className="mx-auto w-24" src="images/icons/magic.png" alt="illustration" loading="lazy" />
        <h3 className="text-2xl font-semibold text-gray-800">Seo </h3>
        <p>Obcaecati, quam? Eligendi, nulla numquam natus laborum porro at cum, consectetur ullam tempora ipsa iste officia sed officiis! Incidunt ea animi officiis.</p>
        <a href="#" className="relative flex justify-center items-center h-10 w-10 mx-auto 
                                 before:absolute before:inset-0 before:border before:rounded-full before:transition before:duration-300 group-hover:before:scale-125">
          <span className="text-gray-700">→</span>
        </a>
      </div>
      <div className="group bg-white rounded-xl shadow-xl px-8 py-12 space-y-6 text-center">
        <img className="mx-auto w-24" src="images/icons/graphic.webp" alt="illustration" loading="lazy" />
        <h3 className="text-2xl font-semibold text-gray-800">Web Design</h3>
        <p>Obcaecati, quam? Eligendi, nulla numquam natus laborum porro at cum, consectetur ullam tempora ipsa iste officia sed officiis! Incidunt ea animi officiis.</p>
        <a href="#" className="relative flex justify-center items-center h-10 w-10 mx-auto 
                                 before:absolute before:inset-0 before:border before:rounded-full before:transition before:duration-300 group-hover:before:scale-125">
          <span className="text-gray-700">→</span>
        </a>
      </div>
    </div>
  </div>
</div>

        
      </section>
    </div>
  );
}

export default Home;
 