function CreateProduct() {
  return (
    <section className="text-white   bg-purple-100">
      <div>
        <div className=" w-40  bg-gradient-to-r from-slate-900 via-purple-900 to-slate-900 max-h-full ">
          
          <div className="pb-10   ml-40 w-96   pl-10 pt-10  bg-purple-100 ">
            <div className=" w-full  mx-96 rounded-2xl  border border-white-700 border-opacity-70   p-5  relative md:rounded-2xl border border-gray-400 border-opacity-70  bg-gradient-to-r from-slate-900 via-purple-900 to-slate-900  backdrop-blur-xl shadow-2xl m  transition duration-700 group-hover:scale-95">
             <div className="text-3xl text-center">Add Items</div> <form
                action=""
                className="p-8  mb-0 space-y-4 rounded-lg shadow-2xl"
              >
                <div>
                  <label for="email" class="text-sm font-medium">
                    Item Name
                  </label>

                  <div className="relative mt-1">
                    <input
                      class="w-full p-4 pr-12 text-sm text-black border-gray-200 rounded-lg shadow-sm"
                      placeholder="Enter Item Name"
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
                      placeholder="Enter Item Description"
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
                      placeholder="Enter Item Price"
                    />
                  </div>
                </div>{" "}
                <div className="w-full space-y-0.5">
                  <label
                    htmlFor="photo"
                    className="text-xs font-medium text-sm "
                  >
                    {" "}
                    Product Image{" "}
                  </label>
                  <input
                    id="photo"
                    type="file"
                    className="block w-full cursor-pointer appearance-none rounded-md border border-gray-200 bg-white px-3 py-2 text-sm transition focus:border-black focus:outline-none focus:ring-1 focus:ring-black disabled:cursor-not-allowed disabled:bg-gray-200 disabled:opacity-75"
                  />
                </div>
                <a
                  class="flex items-center ml-10 justify-between w-40 h-14 px-5 py-3 text-white transition-colors border border-current rounded-lg hover:bg-black group active:bg-black focus:outline-none focus:ring"
                  href="/download"
                >
                  <span class="font-medium transition-colors group-hover:text-white">
                    Add Item
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
                </a>
              </form>
            </div>{" "}
          </div>
        </div>
      </div>
    </section>
  );
}

export default CreateProduct;
