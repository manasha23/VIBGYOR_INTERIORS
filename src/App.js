import { useState, useEffect } from "react";
import React, { Components } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./Pages/Home";
import AllDesign from "./Pages/Designs/AllDesign";
import CreateDesign from "./Pages/Designs/CreateDesign";
import EditDesign from "./Pages/Designs/EditDesign";
import ViewDesign from "./Pages/Designs/ViewDesign";
import AllProduct from "./Pages/Products/AllProduct";
import CreateProduct from "./Pages/Products/CreateProduct";
import EditProduct from "./Pages/Products/EditProduct";
import ViewProduct from "./Pages/Products/ViewProduct";
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/Admin/designs" exact element={<AllDesign />} />
        <Route path="/admin/designs/Create" exact element={<CreateDesign />} />
        <Route
          path="/admin/designs/edit/:designId"
          exact
          element={<EditDesign />}
        />
        <Route
          path="/admin/designs/view/:designId"
          exact
          element={<ViewDesign />}
        />
        <Route path="/admin/products" exact element={<AllProduct />} />
        <Route
          path="/admin/products/Create"
          exact
          element={<CreateProduct />}
        />
        <Route
          path="/admin/products/edit/:productId "
          exact
          element={<EditProduct />}
        />
        <Route
          path="/admin/product/view/:productId"
          exact
          element={<ViewProduct />}
        />
      </Routes>
    </Router>
  );
}

export default App;
