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
                    <div className="  ml-96 flex items-baseline space-x-12  ">
                      <a href="#Home">
                        <a className=" hover:bg-gray-900 text-white px-3 py-2 rounded-md text-sm font-medium">
                          Home
                        </a>
                      </a>
                      <a href="/Interiors">
                        <a className="text-gray-300 hover:bg-gray-900 hover:text-white px-3 py-2 rounded-md text-sm font-medium">
                          Interiors
                        </a>
                      </a>
                      <a href="/Decors ">
                        <a className="text-gray-300 hover:bg-gray-900 hover:text-white px-3 py-2 rounded-md text-sm font-medium">
                          Decors
                        </a>
                      </a>
                      <a href="#Faq">
                        <a className="text-gray-300 hover:bg-gray-900 hover:text-white px-3 py-2 rounded-md text-sm font-medium">
                          About
                        </a>
                      </a>{" "}
                      <a href="#Footer">
                        <a className="text-gray-300 hover:bg-gray-900 hover:text-white px-3 py-2 rounded-md text-sm font-medium">
                          Contact
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
            <div className="max-w-7xl  mx-auto py-6 sm:px-6 lg:px-8">
              {/* <!-- Replace with your content --> */}

              {/* <!-- /End replace --> */}
            </div>
          </main>
        </div>
        <div className=" container flex flex-col justify-center px-20 -my-28 -mb-5 mx-auto sm:py-12 lg:py-24 lg:flex-row lg:justify-between">
          <div className=" flex flex-col justify-center p-6 text-center rounded-sm lg:max-w-md xl:max-w-lg lg:text-left">
            <h1 className="text-5xl lg:text-5xl font-bold leading-none sm:text-6xl">
              VIBGYOR
              <span className="dark:text-violet-400">
                {" "}
                Interiors Service & Ecommerce
              </span>
            </h1>
            <p className="mt-6 mb-8 text-lg sm:mb-12">
              Bring your home to life with one-on-one design help &amp; hand
              picked products tailored to your style, space and budget.
            </p>
            <div className="  hover:border-black flex flex-col space-y-4 sm:items-center sm:justify-center sm:flex-row sm:space-y-0 sm:space-x-4 lg:justify-start">
              <a
                rel="noopener noreferrer"
                href="/Sign-up"
                className="px-8 w-36 py-3 text-align text-lg font-semibold rounded  hover:text-white dark:bg-violet-400 dark:text-gray-900 "
                type="button"
                data-modal-toggle="authentication-modal "
              >
                Sign-Up
              </a>
              <a
                rel="noopener noreferrer"
                href="/Decors"
                className="px-8 py-3 text-lg font-semibold border rounded hover:dark:text-violet-400  dark:border-gray-100"
              >
                Shop Now!
              </a>
            </div>
          </div>
          <div className=" video-wrapper " data-v-467de426>
            <a
              href="javascript:;"
              className="btn-close"
              style={{ display: "none" }}
              data-v-467de426
            >
              <img
                src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEYAAABICAMAAAB8+nPGAAAAz1BMVEUAAAAAAAD29vY8PDzp6enx8fHh4eEqKiogICBISEgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABSUlIXFxcMDAwAAAAAAADHx8exsbFkZGQAAAAAAAD6+vru7u7l5eXa2trV1dXT09OkpKSfn59aWlo3Nzc0NDQbGxv///9IgXqMAAAARHRSTlOvAPq89fjyuLa/qwMKB2Kmn4NQIBKViCipjn49NhahcWwbDJF4VUxJRUIxLSUOw7SymVrn38ebXvz38u7t7NvZxLu6tFzqudEAAAJjSURBVFjDpdhXetswEEXhC8l2bLB3FVK9F1tySe/h/tcUWYzkiAA5LGcB/wfiBZwBy03RVHU0UjVNYbllM2qo+z2cMy19pZZltjMfYtxaqCWYYMKREe87BZm1hdw6QQHGnYCs71KM3UKBjHkus+2gYBM1mwlMFG7vZDFhCyUy1nJmyVEqHsqYLsrGVyKz4ihdK0gzTgsV6kWXjOahUm3tgumjYvr/TIjKrd8Y7T0qN1bOzAfUyD4xLkeNDPUfo6NW04QZGahVTzsyNsSazz8eIHT7/fkXxJZHpg2hP404vrlFqndXcfxpByHrlXEgdh/HiZNSDjUh5h6YR4g9XCeOqFztIDY7MD4k3TUSJ61cNyGpw6BxEA6pwFCwAgiHVAAHM1AOraCLASiHVjCFBdIhFfThgXI+kwo6MEE6pAIfBiiHVjAGR24vCXOP3DziNK+3m9wzcRqTVmjHh0cqjQbpWPAp5bp5Rzp9DEgFIJ1H2LRCO0uEtEI7AUakQjtcA2tTCu1YDNLHbndzUtLOF/mDBxbIX4ZEEZ0mxIYHhu0l3/QxUUSnIXkF2+zASF+Yl69PvyHUfPr2E2KzIxNx1Kq1PTJsgFrpLGGGqBN3E6bmcXR2YrYGKmeqZ4bNUbkue2MUCxWbXPxeuyYqtVcvGLbmqBDfpCeYRbWLSTNsitLNWYqp9K9uy2dNG2Xii6zJt9tC4Ywwew53PBSsPczbCmgDFErXiB1FMAaZv6E3JsqcGNK8pcIIJoEWXs6ldJXi26SN3oMkU3dK7raUjd25oMyO7SjkbktujdwoGg6jyFUTgWDq9heGQlZj+sZFqAAAAABJRU5ErkJggg=="
                alt="close.png"
                data-v-467de426
              />
            </a>
            <img
              src="https://cdn-publish-filemanager.homestyler.com/prod/_homestyler/_nuxt/dist/img/placeholder.085e9c6.jpg"
              alt="placeholder.jpg"
              className="video-placeholder"
              style={{ display: "none" }}
              data-v-467de426
            />
            <video
              loop="loop"
              autoPlay="autoplay"
              muted="muted"
              src="https://cdn-publish-filemanager.homestyler.com/prod/_homestyler/_nuxt/dist/videos/banner.586d4df.mp4"
              className="  video relative"
              style={{}}
              data-v-467de426
            />
          </div>
          <div className="flex items-center justify-center p-6 mt-8 lg:mt-0 h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128">
            <img
              src="assets/svg/Business_SVG.svg"
              alt=""
              className="object-contain h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128"
            />
          </div>
        </div>
        <div className="cursor-pointer -mt-28 max-px-10 grid grid-cols-3 ml-10 p-12 ">
          <div className="card w-80  glass ">
            <figure>
              <img className="h-60 w-80" src="https://static.dezeen.com/uploads/2021/11/the-bureau-coworking-office-interiors-paris-franklin-azzi-socialite-family_dezeen_1704_col_hero.jpg" alt="car!" />
            </figure>
            <div className="card-body">
              <h2 className="card-title">Interior Designs</h2>
              <p>
                {" "}
                Find beautiful home interior designs. Complete home interiors solution: dedicated designers, personalized home interior designs.
              </p>
              <div  className="card-actions justify-start">
                <a href="/Interiors" className="btn  dark:bg-gray-800 hover:dark:bg-black text-white hover:dark:text-violet-400">Explore Now!</a>
              </div>
            </div>
          </div>
          <div className="card w-80  glass">
            <figure>
              <img className="h-60 w-80" src="https://antonovich-design.ae/uploads/page/2022/5/antonovich-design-thumb2022YoTqE9TctrWW.jpeg" alt="car!" />
            </figure>
            <div className="card-body">
              <h2 className="card-title">Service</h2>
              <p>
                {" "}
                The best online interior design services to decorate your house.Get the interiors of your home designed by our experts at Vibgyor Interiors.
              </p>
              <div className="card-actions justify-start">
                <a href="#service" className="btn  dark:bg-gray-800 hover:dark:bg-black hover:dark:text-violet-400 text-white ">Know More</a>
              </div>
            </div>
          </div>
          <div className="card w-80 glass">
            <figure>
              <img className="h-60 w-80" src="https://imgmedia.lbb.in/media/2019/02/5c6ec1279d684b2e0de71737_1550762279676.jpg" alt="car!" />
            </figure>
            <div className="card-body">
              <h2 className="card-title">Home Decors</h2>
              <p>
                {" "}
                Decorate your table-tops with unique and beautifully designed home decor. Buy handcrafted table decor online on the Vibgyor Interiors.
              </p>
              <div className=" card-actions  justify-start">
                <a href="/Decors" className="btn  dark:bg-gray-800 hover:dark:bg-black hover:dark:text-violet-400 text-white ">Shop now!</a>
              </div>
            </div>
          </div>
        </div>
        <section id="service" className="text-gray-600 body-font">
          <div className="container bg-yellow-300 px-5 -mt-40 py-24 mx-auto flex flex-wrap">
            {" "}
            <h1 className="text-5xl w-96 text-center ml-80 mt-20 lg:text-5xl font-bold leading-none sm:text-6xl">
              How it
              <span className="dark:text-violet-400"> Works?</span>
            </h1>
            <div className="flex relative pt-10 pb-20  sm:items-center md:w-2/3 mx-auto">
              <div className="h-full w-6 absolute inset-0 flex items-center justify-center">
                <div className="h-full w-1 bg-gray-200 pointer-events-none" />
              </div>
              <div className="flex-shrink-0 w-6 h-6 rounded-full mt-10 sm:mt-0 inline-flex items-center justify-center bg-indigo-500 text-white relative z-10 title-font font-medium text-sm">
                1
              </div>
              <div className="flex-grow md:pl-8 pl-6 flex sm:items-center items-start flex-col sm:flex-row">
                <div className="flex-shrink-0 w-24 h-24 bg-indigo-100 text-indigo-500 rounded-full inline-flex items-center justify-center">
                  <svg
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    className="w-12 h-12"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                  </svg>
                </div>
                <div className="flex-grow sm:pl-6 mt-6 sm:mt-0">
                  <h2 className="font-medium title-font text-gray-900 mb-1 text-xl">
                    Book A visit
                  </h2>
                  <p className="leading-relaxed">
                    Book a Free Consultation with an Expert Interior Designer
                    and turn them into the most durable and beautiful modular
                    interiors you will ever see.
                  </p>
                </div>
              </div>
            </div>
            <div className="flex relative pb-20 sm:items-center md:w-2/3 mx-auto">
              <div className="h-full w-6 absolute inset-0 flex items-center justify-center">
                <div className="h-full w-1 bg-gray-200 pointer-events-none" />
              </div>
              <div className="flex-shrink-0 w-6 h-6 rounded-full mt-10 sm:mt-0 inline-flex items-center justify-center bg-indigo-500 text-white relative z-10 title-font font-medium text-sm">
                2
              </div>
              <div className="flex-grow md:pl-8 pl-6 flex sm:items-center items-start flex-col sm:flex-row">
                <div className="flex-shrink-0 w-24 h-24 bg-indigo-100 text-indigo-500 rounded-full inline-flex items-center justify-center">
                  <svg
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    className="w-12 h-12"
                    viewBox="0 0 24 24"
                  >
                    <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
                  </svg>
                </div>
                <div className="flex-grow sm:pl-6 mt-6 sm:mt-0">
                  <h2 className="font-medium title-font text-gray-900 mb-1 text-xl">
                    Measurement & Estimation
                  </h2>
                  <p className="leading-relaxed">
                    Taking measurements is a key element of the job, as are
                    making decisions and calculations based on the results.
                    Because accuracy is crucial, professional interior designers
                    and decorators measure everything in inches.
                  </p>
                </div>
              </div>
            </div>
            <div className="flex relative pb-20 sm:items-center md:w-2/3 mx-auto">
              <div className="h-full w-6 absolute inset-0 flex items-center justify-center">
                <div className="h-full w-1 bg-gray-200 pointer-events-none" />
              </div>
              <div className="flex-shrink-0 w-6 h-6 rounded-full mt-10 sm:mt-0 inline-flex items-center justify-center bg-indigo-500 text-white relative z-10 title-font font-medium text-sm">
                3
              </div>
              <div className="flex-grow md:pl-8 pl-6 flex sm:items-center items-start flex-col sm:flex-row">
                <div className="flex-shrink-0 w-24 h-24 bg-indigo-100 text-indigo-500 rounded-full inline-flex items-center justify-center">
                  <svg
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    className="w-12 h-12"
                    viewBox="0 0 24 24"
                  >
                    <circle cx={12} cy={5} r={3} />
                    <path d="M12 22V8M5 12H2a10 10 0 0020 0h-3" />
                  </svg>
                </div>
                <div className="flex-grow sm:pl-6 mt-6 sm:mt-0">
                  <h2 className="font-medium title-font text-gray-900 mb-1 text-xl">
                    Project Initiation
                  </h2>
                  <p className="leading-relaxed">
                    In this scenario the project is typically in an existing
                    space already under the control of the client, or the space
                    has been negotiated for prior to the appointment of the
                    interior design firm.
                  </p>
                </div>
              </div>
            </div>
            <div className="flex relative pb-10 sm:items-center md:w-2/3 mx-auto">
              <div className="h-full w-6 absolute inset-0 flex items-center justify-center">
                <div className="h-full w-1 bg-gray-200 pointer-events-none" />
              </div>
              <div className="flex-shrink-0 w-6 h-6 rounded-full mt-10 sm:mt-0 inline-flex items-center justify-center bg-indigo-500 text-white relative z-10 title-font font-medium text-sm">
                4
              </div>
              <div className="flex-grow md:pl-8 pl-6 flex sm:items-center items-start flex-col sm:flex-row">
                <div className="flex-shrink-0 w-24 h-24 bg-indigo-100 text-indigo-500 rounded-full inline-flex items-center justify-center">
                  <svg
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    className="w-12 h-12"
                    viewBox="0 0 24 24"
                  >
                    <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2" />
                    <circle cx={12} cy={7} r={4} />
                  </svg>
                </div>
                <div className="flex-grow sm:pl-6 mt-6 sm:mt-0">
                  <h2 className="font-medium title-font text-gray-900 mb-1 text-xl">
                    Check on the Finishing
                  </h2>
                  <p className="leading-relaxed">
                    Finally, it comes down to the finishing of the design. You
                    must keep an eye on the finishing of the work done. Check on
                    the polish of the woodwork, the finish of the paint and the
                    furniture, the strength of the cabinet handles and the
                    corner finishing of each room.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="text-gray-600   body-font">
          <div className="container px-5  py-24 mx-auto flex flex-wrap">
            <div className="flex w-full mb-20   -mt-10 flex-wrap">
              <h1 className="sm:text-3xl ml-96  text-center text-4xl font-medium title-font text-white lg:w-1/3 lg:mb-0 mb-2">
                Intelligent design for every lifestyle
              </h1>
            </div>
            <div className="flex flex-wrap md:-m-2 -m-1">
              <div className="flex flex-wrap w-1/2">
                <div className="md:p-2 p-1 w-1/2">
                  <img
                    alt="gallery"
                    className="w-full object-cover h-full object-center block"
                    src="https://images.unsplash.com/photo-1565183928294-7063f23ce0f8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
                  />
                </div>
                <div className="md:p-2 p-1 w-1/2">
                  <img
                    alt="gallery"
                    className="w-full object-cover h-full object-center block"
                    src="https://images.unsplash.com/photo-1613685703305-8592a8a6bfee?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1632&q=80"
                  />
                </div>
                <div className="md:p-2 p-1 w-full">
                  <img
                    alt="gallery"
                    className="w-full h-full object-cover object-center block"
                    src="https://images.unsplash.com/photo-1632829401795-2745c905ac77?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1932&q=80v"
                  />
                </div>
              </div>
              <div className="flex flex-wrap w-1/2">
                <div className="md:p-2 p-1 w-full">
                  <img
                    alt="gallery"
                    className="w-full h-full object-cover object-center block"
                    src="https://images.unsplash.com/photo-1632210826643-9ff7e84be2f9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1632&q=80"
                  />
                </div>
                <div className="md:p-2 p-1 w-1/2">
                  <img
                    alt="gallery"
                    className="w-full object-cover h-full object-center block"
                    src="https://images.unsplash.com/photo-1629079447777-1e605162dc8d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1469&q=80"
                  />
                </div>
                <div className="md:p-2 p-1 w-1/2">
                  <img
                    alt="gallery"
                    className="w-full object-cover h-full object-center block"
                    src="https://images.unsplash.com/photo-1617099443741-a9b51eabd2b8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1632&q=80"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
    
        <div className="m-10 space-y-4 ">
          {" "}
          <h1 className="ml-80 mb-10 text-5xl lg:text-5xl font-bold leading-none sm:text-6xl">
            Know More About
            <span className="dark:text-violet-400"> US ...</span>
          </h1>
          <details className=" mx-auto rounded-2xl border  p-5 relative md:rounded-2xl border border-gray-700 border-opacity-70 bg-gray-900 bg-opacity-40 backdrop-blur-xl shadow-2xl ">
            <summary className="px-4 py-6 dark:text-white focus:outline-none focus-visible:ring-violet-400">
              What happens after booking a design?
            </summary>
            <p className="px-4 py-6 pt-0 ml-4 -mt-4 dark:text-white">
              Our well experienced designers will visit your location where they
              will measure and estimate your room and will share the design
              concept and quote. Then, we will initiate the project.
            </p>
          </details>
          <details className="mx-auto rounded-2xl border p-2 relative md:rounded-2xl border border-gray-700 border-opacity-70 bg-gray-900 bg-opacity-40 backdrop-blur-xl shadow-2xl ">
            <summary className="px-4 py-6 dark:text-white focus:outline-none focus-visible:ring-violet-400">
              Can I make changes in the given designs?
            </summary>
            <p className="px-4 py-6 pt-0 ml-4 dark:text-white -mt-4">
              Yes, After booking the design, customers are allowed to make their
              changes as per their convienence and satisfaction.
            </p>
          </details>
          <details className="mx-auto rounded-2xl border p-3 relative md:rounded-2xl border border-gray-700 border-opacity-70 bg-gray-900 bg-opacity-40 backdrop-blur-xl shadow-2xl ">
            <summary className="px-4 py-6 dark:text-white focus:outline-none focus-visible:ring-violet-400">
              Can I order and book a design at a same time?
            </summary>
            <p className="px-4 py-6 pt-0 ml-4 dark:text-white -mt-4">
              Yes, Customer are allowed to do both at a same time.
            </p>
          </details>
          <details className="mx-auto rounded-2xl dark:text-white border p-5 relative md:rounded-2xl border border-gray-700 border-opacity-70 bg-gray-900 bg-opacity-40 backdrop-blur-xl shadow-2xl ">
            <summary className="px-4 py-6 focus:outline-none focus-visible:ring-violet-400">
              What are the details needed to be given to book a visit?
            </summary>
            <p className="px-4 py-6 pt-0 ml-4 dark:text-white -mt-4 ">
              Customers need to give their name, phone number, address and email
              address.
            </p>
          </details>
          <details className="mx-auto rounded-2xl dark:text-white border p-5 relative md:rounded-2xl border border-gray-700 border-opacity-70 bg-gray-900 bg-opacity-40 backdrop-blur-xl shadow-2xl ">
            <summary className="px-4 py-6 focus:outline-none focus-visible:ring-violet-400">
              Can I return or cancel items previously purchased through Vibgyor?
            </summary>
            <p className="px-4 py-6 pt-0 ml-4 -mt-4 dark:text-white ">
              In some instances we will be able to return or cancel items for
              direct retailer store credit, but some of our direct vendor items
              will not be able to be returned or canceled.
            </p>
          </details>
        </div>
        <footer
          className="px-4 divide-y bg-[#020314] dark:text-gray-100
    "
          id="Footer"
          href="#Footer"
        >
          <div className="container flex flex-col justify-between py-10 mx-auto space-y-8 lg:flex-row lg:space-y-0">
            <div className="lg:w-1/3">
              <a
                rel="noopener noreferrer"
                href="#"
                className="flex justify-center space-x-3 lg:justify-start"
              >
                <div className="flex items-center  mt-10 justify-center rounded-full">
                  <img
                    src="https://i.postimg.cc/rsnxLFHw/Slide-4-3-15-2.png"
                    className=" -mt-10 h-28 w-28"
                    alt="Hero Section"
                  />
                </div>
                <center>
                  <span className="self-center text-2xl font-semibold">
                    VIBGYOR Interiors
                  </span>
                </center>
              </a>
            </div>
            <div className="grid px-10 grid-cols-2 text-sm gap-x-3 gap-y-8 lg:w-2/3 sm:grid-cols-4">
              <div className="space-y-3">
                <h3 className="tracking-wide uppercase dark:text-gray-50">
                  Navigation
                </h3>
                <ul className="space-y-1">
                  <li>
                    <a rel="noopener noreferrer" href="#Home">
                      Home
                    </a>
                  </li>
                  <li>
                    <a rel="noopener noreferrer" href="#">
                      About
                    </a>
                  </li>
                  <li>
                    <a rel="noopener noreferrer" href="#Events">
                      Interiors
                    </a>
                  </li>
                  <li>
                    <a rel="noopener noreferrer" href="/Sponsor">
                      Decors
                    </a>
                  </li>
                  <li>
                    <a rel="noopener noreferrer" href="#Faq">
                      FAQ`s
                    </a>
                  </li>
                </ul>
              </div>
          
              <div className="space-y-3">
                <div className="uppercase dark:text-gray-50">Social media</div>
                <div className="flex justify-start space-x-3">
                  <a
                    rel="noopener noreferrer"
                    href="https://instagram.com/sygma_2022?igshid=YmMyMTA2M2Y="
                    title="Instagram"
                    className="flex items-center pl-4 p-1"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 32 32"
                      fill="currentColor"
                      className="w-5 h-5 fill-current"
                    >
                      <path d="M16 0c-4.349 0-4.891 0.021-6.593 0.093-1.709 0.084-2.865 0.349-3.885 0.745-1.052 0.412-1.948 0.959-2.833 1.849-0.891 0.885-1.443 1.781-1.849 2.833-0.396 1.020-0.661 2.176-0.745 3.885-0.077 1.703-0.093 2.244-0.093 6.593s0.021 4.891 0.093 6.593c0.084 1.704 0.349 2.865 0.745 3.885 0.412 1.052 0.959 1.948 1.849 2.833 0.885 0.891 1.781 1.443 2.833 1.849 1.020 0.391 2.181 0.661 3.885 0.745 1.703 0.077 2.244 0.093 6.593 0.093s4.891-0.021 6.593-0.093c1.704-0.084 2.865-0.355 3.885-0.745 1.052-0.412 1.948-0.959 2.833-1.849 0.891-0.885 1.443-1.776 1.849-2.833 0.391-1.020 0.661-2.181 0.745-3.885 0.077-1.703 0.093-2.244 0.093-6.593s-0.021-4.891-0.093-6.593c-0.084-1.704-0.355-2.871-0.745-3.885-0.412-1.052-0.959-1.948-1.849-2.833-0.885-0.891-1.776-1.443-2.833-1.849-1.020-0.396-2.181-0.661-3.885-0.745-1.703-0.077-2.244-0.093-6.593-0.093zM16 2.88c4.271 0 4.781 0.021 6.469 0.093 1.557 0.073 2.405 0.333 2.968 0.553 0.751 0.291 1.276 0.635 1.844 1.197 0.557 0.557 0.901 1.088 1.192 1.839 0.22 0.563 0.48 1.411 0.553 2.968 0.072 1.688 0.093 2.199 0.093 6.469s-0.021 4.781-0.099 6.469c-0.084 1.557-0.344 2.405-0.563 2.968-0.303 0.751-0.641 1.276-1.199 1.844-0.563 0.557-1.099 0.901-1.844 1.192-0.556 0.22-1.416 0.48-2.979 0.553-1.697 0.072-2.197 0.093-6.479 0.093s-4.781-0.021-6.48-0.099c-1.557-0.084-2.416-0.344-2.979-0.563-0.76-0.303-1.281-0.641-1.839-1.199-0.563-0.563-0.921-1.099-1.197-1.844-0.224-0.556-0.48-1.416-0.563-2.979-0.057-1.677-0.084-2.197-0.084-6.459 0-4.26 0.027-4.781 0.084-6.479 0.083-1.563 0.339-2.421 0.563-2.979 0.276-0.761 0.635-1.281 1.197-1.844 0.557-0.557 1.079-0.917 1.839-1.199 0.563-0.219 1.401-0.479 2.964-0.557 1.697-0.061 2.197-0.083 6.473-0.083zM16 7.787c-4.541 0-8.213 3.677-8.213 8.213 0 4.541 3.677 8.213 8.213 8.213 4.541 0 8.213-3.677 8.213-8.213 0-4.541-3.677-8.213-8.213-8.213zM16 21.333c-2.948 0-5.333-2.385-5.333-5.333s2.385-5.333 5.333-5.333c2.948 0 5.333 2.385 5.333 5.333s-2.385 5.333-5.333 5.333zM26.464 7.459c0 1.063-0.865 1.921-1.923 1.921-1.063 0-1.921-0.859-1.921-1.921 0-1.057 0.864-1.917 1.921-1.917s1.923 0.86 1.923 1.917z"></path>
                    </svg>
                  </a>
                  <a
                    rel="noopener"
                    href="https://youtube.com/channel/UCeNtI-GE2_zqmichdQegyyg"
                    title="YouTube"
                    className="flex -pt-10 w-12 h-12 rounded-full bg-gray-800 bg-opacity-0 hover:bg-opacity-60 focus:bg-opacity-40 active:bg-opacity-50 transition"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="currentColor"
                      className="w-6"
                      viewBox="0 0 16 16"
                    >
                      <path d="M8.051 1.999h.089c.822.003 4.987.033 6.11.335a2.01 2.01 0 0 1 1.415 1.42c.101.38.172.883.22 1.402l.01.104.022.26.008.104c.065.914.073 1.77.074 1.957v.075c-.001.194-.01 1.108-.082 2.06l-.008.105-.009.104c-.05.572-.124 1.14-.235 1.558a2.007 2.007 0 0 1-1.415 1.42c-1.16.312-5.569.334-6.18.335h-.142c-.309 0-1.587-.006-2.927-.052l-.17-.006-.087-.004-.171-.007-.171-.007c-1.11-.049-2.167-.128-2.654-.26a2.007 2.007 0 0 1-1.415-1.419c-.111-.417-.185-.986-.235-1.558L.09 9.82l-.008-.104A31.4 31.4 0 0 1 0 7.68v-.123c.002-.215.01-.958.064-1.778l.007-.103.003-.052.008-.104.022-.26.01-.104c.048-.519.119-1.023.22-1.402a2.007 2.007 0 0 1 1.415-1.42c.487-.13 1.544-.21 2.654-.26l.17-.007.172-.006.086-.003.171-.007A99.788 99.788 0 0 1 7.858 2h.193zM6.4 5.209v4.818l4.157-2.408L6.4 5.209z" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </footer>
      </section>
    </div>
  );
}

export default Home;
