import { useState, useEffect } from "react";
import React, { Components } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./Pages/Home";
import AllDesign from "./Pages/Designs/AllDesign";
import CreateDesign from "./Pages/Designs/CreateDesign";

import ViewDesign from "./Pages/Designs/ViewDesignOrders";
import AllProduct from "./Pages/Products/AllProduct";
import CreateProduct from "./Pages/Products/CreateProduct";

import ViewProduct from "./Pages/Products/ViewProductOrders";
import Signup from "./Components/Sign-up";
import Login from "./Components/Login";
import AdminSignup from "./Components/AdminLog";
import Interiors from "./Components/Interiors/Interiors";
import Bedroom from "./Components/Interiors/Bedroom";
import LivingRoom from "./Components/Interiors/LivingRoom";
import Kitchen from "./Components/Interiors/Kitchen";
import Bathroom from "./Components/Interiors/Bathroom";
import Decors from "./Components/Decors/Decors";
import Furniture from "./Components/Decors/Furniture";
import Decor from "./Components/Decors/DecorItems";
import Checkout from "./Components/Decors/Checkout";
import Cart from "./Components/Decors/Cart";
import Paymentdetails from "./Components/Decors/Payment";
import Order from "./Components/Decors/PlacedOrder";
import Booking from "./Pages/Book Now/Booking";
import { AuthContextProvider } from "./Context/AuthContext";
import Account from "./Components/Account";
import BookProduct from "./Pages/Book Now/Productbook";

function App() {
  return (
    <Router>
      <AuthContextProvider>
        <Routes>
        <Route path="/ProductBook" exact element={<BookProduct />} />
          <Route path="/Account" exact element={<Account />} />
          <Route path="/" exact element={<Home />} />
          <Route path="/sign-up" exact element={<Signup />} />
          <Route path="/login" exact element={<Login />} />
          <Route path="/Adminsignup" exact element={<AdminSignup />} />
          <Route path="/Interiors" exact element={<Interiors />} />
          <Route path="/Bedroom" exact element={<Bedroom />} />
          <Route path="/Kitchen" exact element={<Kitchen />} />
          <Route path="/LivingRoom" exact element={<LivingRoom />} />
          <Route path="/Bathroom" exact element={<Bathroom />} />
          <Route path="/Decors" exact element={<Decors />} />
          <Route path="/Furniture" exact element={<Furniture />} />
          <Route path="/Decor" exact element={<Decor />} />
          <Route path="/Checkout" exact element={<Checkout />} />
          <Route path="/Payment" exact element={<Paymentdetails />} />
          <Route path="/Orders" exact element={<Order />} />
          <Route path="/admin/designs" exact element={<AllDesign />} />

          <Route
            path="/admin/designs/create"
            exact
            element={<CreateDesign />}
          />
          <Route path="/Cart" exact element={<Cart />} />
          <Route path="/Booking" exact element={<Booking />} />

          <Route
            path="/admin/designs/view/:designId"
            exact
            element={<ViewDesign />}
          />
          <Route path="/admin/products" exact element={<AllProduct />} />
          <Route
            path="/admin/products/create"
            exact
            element={<CreateProduct />}
          />

          <Route
            path="/admin/product/view/:productId"
            exact
            element={<ViewProduct />}
          />
        </Routes>
      </AuthContextProvider>
    </Router>
  );
}

export default App;
