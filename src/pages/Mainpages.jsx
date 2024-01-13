import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./Home";
import Cuisine from "./Cuisine";
import Searched from "./Searched";
import Recipe from "./Recipe";

const Mainpages = () => {
  return (

    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/cusine/:type" element={<Cuisine />} />
      <Route path="/searched/:item" element={<Searched />} />
      <Route path="/recipe/:id" element={<Recipe />} />
    </Routes>
    
  );
};

export default Mainpages;
