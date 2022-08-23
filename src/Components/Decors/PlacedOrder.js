import React from "react";

function Order() {
  return (
    <section>
      <div class="min-h-screen min-w-screen flex items-center justify-center dark:bg-gray-800">
        <div class="flex flex-col  px-8 w-2/5 shadow-xl">
          <div class=" py-8 px-14 bg-white rounded-2xl rounded-tr-2xl text-center space-y-8">
            <p className="text-gray-800  text-2xl font-medium">
              Order has been placed successfully !
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
export default Order;
