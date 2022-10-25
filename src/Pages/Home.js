import { useState } from "react";
import { Transition } from "@headlessui/react";
import { useNavigate } from "react-router-dom";
import { UserAuth } from "../Context/AuthContext";

function Home() {
  const [isOpen, setIsOpen] = useState(false);
  const { user, logout } = UserAuth();
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await logout();
      navigate("/");
     alert("You are logged out");
    } catch (e) {
      console.log(e.message);
    }
  };
  return (
    <div>
      <section className="dark:bg-gray-800  dark:text-gray-100">
        <div className="border-b-2 h-28 border-white border-opacity-10 mb-10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className=" w-10 flex items-center h-16">
              <div className="flex items-center">
                <div className="hidden md:block">
                  <a class="flex mt-60 ">
                    <img
                      src="https://i.postimg.cc/L5Zk296J/2-removebg-preview.png"
                      class="mr-3 mb-64 w-52 h-52   "
                      alt="Flowbite Logo"
                    />
                  </a>

                  <div className=" ml-96 mb-60 -mt-96 flex items-baseline space-x-12 ">
                    {" "}
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
                    <a href="#faq">
                      <a className="text-gray-300 hover:bg-gray-900 hover:text-white px-3 py-2 rounded-md text-sm font-medium">
                        FAQ's
                      </a>
                    </a>{" "}
                    <a href="#Footer">
                      <a className="text-gray-300 hover:bg-gray-900 hover:text-white px-3 py-2 rounded-md text-sm font-medium">
                        Contact
                      </a>
                    </a>{" "}
                  <p className="w-28"> {user && user.email}</p>
                    <button
                      onClick={handleLogout}
                      className="border  px-6 py-2 my-4  "
                    >
                      Logout
                    </button>
                  </div>  
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
              <img
                className="h-60 w-80"
                src="https://static.dezeen.com/uploads/2021/11/the-bureau-coworking-office-interiors-paris-franklin-azzi-socialite-family_dezeen_1704_col_hero.jpg"
                alt="car!"
              />
            </figure>
            <div className="card-body">
              <h2 className="card-title">Interior Designs</h2>
              <p>
                {" "}
                Find beautiful home interior designs. Complete home interiors
                solution: dedicated designers, personalized home interior
                designs.
              </p>
              <div className="card-actions justify-start">
                <a
                  href="/Interiors"
                  className="btn  dark:bg-gray-800 hover:dark:bg-black text-white hover:dark:text-violet-400"
                >
                  Explore Now!
                </a>
              </div>
            </div>
          </div>
          <div className="card w-80  glass">
            <figure>
              <img
                className="h-60 w-80"
                src="https://antonovich-design.ae/uploads/page/2022/5/antonovich-design-thumb2022YoTqE9TctrWW.jpeg"
                alt="car!"
              />
            </figure>
            <div className="card-body">
              <h2 className="card-title">Service</h2>
              <p>
                {" "}
                The best online interior design services to decorate your
                house.Get the interiors of your home designed by our experts at
                Vibgyor Interiors.
              </p>
              <div className="card-actions justify-start">
                <a
                  href="#service"
                  className="btn  dark:bg-gray-800 hover:dark:bg-black hover:dark:text-violet-400 text-white "
                >
                  Know More
                </a>
              </div>
            </div>
          </div>
          <div className="card w-80 glass">
            <figure>
              <img
                className="h-60 w-80"
                src="https://imgmedia.lbb.in/media/2019/02/5c6ec1279d684b2e0de71737_1550762279676.jpg"
                alt="car!"
              />
            </figure>
            <div className="card-body">
              <h2 className="card-title">Home Decors</h2>
              <p>
                {" "}
                Decorate your table-tops with unique and beautifully designed
                home decor. Buy handcrafted table decor online on the Vibgyor
                Interiors.
              </p>
              <div className=" card-actions  justify-start">
                <a
                  href="/Decors"
                  className="btn  dark:bg-gray-800 hover:dark:bg-black hover:dark:text-violet-400 text-white "
                >
                  Shop now!
                </a>
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

        <div id="faq" className="m-10 space-y-4 ">
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
        <footer className="p-4 h-72  bg-white rounded-lg shadow md:px-6 md:py-8 dark:bg-gray-900">
          <div className="sm:flex mr-20 -mb-20 sm:items-center -mt-12 sm:justify-between">
            <a className="flex items-center mb-4 sm:mb-0">
              <img
                src="https://i.postimg.cc/L5Zk296J/2-removebg-preview.png"
                className="mr-3 h-52"
                w-52
                alt="Flowbite Logo"
              />
              <span className="self-center text-2xl  font-semibold whitespace-nowrap dark:text-white">
                VIBGJYOR Interiors
              </span>
            </a>
            <ul id="Footer"className="flex flex-wrap  items-center mb-6 text-sm text-gray-500 sm:mb-0 dark:text-gray-400">
              <li>
                <a href="/" className="mr-4 hover:underline md:mr-6 ">
                  Home
                </a>
              </li>
              <li>
                <a href="/Interiors" className="mr-4 hover:underline md:mr-6">
                  Interiors
                </a>
              </li>
              <li>
                <a href="/Decors" className="mr-4 hover:underline md:mr-6 ">
                  Decors
                </a>
              </li>
              <li>
                <a href="#faq" className="hover:underline">
                  FAQ
                </a>
              </li>
            </ul>
          </div>
          <hr className="my-6  border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
          <span className="block text-sm text-gray-500 sm:text-center dark:text-gray-400">
            © 2022 <a className="hover:underline">VIBGYOR Interior™</a>. All
            Rights Reserved.
          </span>
        </footer>
      </section>
    </div>
  );
}

export default Home;
