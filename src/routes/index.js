import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../pages/home";

const Routeing = () => {
  return (
    <Routes>
      <Route path="/" element={<Home/>} />
    </Routes>
  );
};

export default Routeing;
