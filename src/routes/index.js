import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../pages/home";
import Market from "../pages/market";

const Routeing = () => {
  return (
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/markets/" element={<Market/>} />
    </Routes>
  );
};

export default Routeing;
