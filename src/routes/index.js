import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../pages/home";
import Market from "../pages/market";
import TypeOfMarket from "../pages/typeOfMarket";

const Routeing = () => {
  return (
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/markets/" element={<Market/>} />
      <Route path="/markets/:typeOfMarket/" element={<TypeOfMarket/>}/>
    </Routes>
  );
};

export default Routeing;
