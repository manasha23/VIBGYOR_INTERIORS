function CreateProduct() {
  return (
    <section className="text-white bg-purple-100">
      <div className="h-screen max-h-full  md:max-h-screen">
        <div className="h-screen w-40  bg-purple-900 max-h-full md:max-h-screen">
          <div className="h-screen ml-32 w-96 pl-10 pt-10  bg-purple-100 max-h-full md:max-h-screen">
            <h2 className="   m-auto  text-center font-bold text-base md:text-4xl text-black mt-5 mb-5">
              {" "}
              Adding products
            </h2>
            <div className="  rounded-2xl md:w-full border border-white-700 border-opacity-70   p-5  relative md:rounded-2xl border border-gray-700 border-opacity-70 bg-gray-900 bg-opacity-20 backdrop-blur-xl shadow-2xl m  transition duration-700 group-hover:scale-95">
              <form
                action=""
                class="p-8 mt-6 mb-0 space-y-4 rounded-lg shadow-2xl"
              >
               

                <div>
                  <label for="email" class="text-sm font-medium">
                    Item Name
                  </label>

                  <div class="relative mt-1">
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
                      class="w-full p-4 pr-12 text-sm  text-black border-gray-200 rounded-lg shadow-sm"
                      placeholder="Enter Item Description"
                    />
                  </div>
                </div>
                <div>
                  <label for="password" class="text-sm font-medium">
                    Pricing
                  </label>

                  <div class="relative mt-1">
                    <input
                      class="w-full p-4 pr-12 text-sm  text-black border-gray-200 rounded-lg shadow-sm"
                      placeholder="Enter Item Price"
                    />
                  </div>
                </div> <div>
                  <label  class="text-sm font-medium">
                   Image
                  </label>

                  <div class="relative mt-1">
                    <input
                      class="w-full p-4 pr-12 text-sm  text-black border-gray-200 rounded-lg shadow-sm"
                      placeholder="Enter Item Image"
                    />
                  </div>
                </div>
                <button
                  type="URL"
                  class="block w-full px-5 py-3 text-sm  font-medium text-white bg-indigo-600 rounded-lg"
                >
                  Add Item
                </button>
               
              </form>
            </div>{" "}
          </div>
        </div>
      </div>
    </section>
  );
}

export default CreateProduct;
