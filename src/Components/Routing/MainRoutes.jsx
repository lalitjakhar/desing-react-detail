import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../Home/Home";
import Details from "../Details/Details";

const MainRoutes = () => {
  return <Routes>
    <Route path='/' element={<Home />}/>
    <Route path='/:pid' element={<Details />}/>
  </Routes>;
};

export default MainRoutes;
