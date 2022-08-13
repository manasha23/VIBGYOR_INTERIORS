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
   
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/AllDesign" exact element={<AllDesign />} />
        <Route path="/CreateDesign" exact element={<CreateDesign />} />
        <Route path="/EditDesign" exact element={<EditDesign />} />
        <Route path="/ ViewDesign" exact element={< ViewDesign />} />
        <Route path="/AllProduct" exact element={<AllProduct/>} />
        <Route path="/CreateProduct" exact element={<CreateProduct />} />
        <Route path="/EditProduct " exact element={<EditProduct />} />
        <Route path="/ViewProduct" exact element={<ViewProduct />} />
      </Routes>
  
  );
}

export default App;
