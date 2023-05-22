import React from "react";
import Header from "../../components/header";
import HomeBanner from "../../components/homeBanner";
import WhatWeDo from "../../components/whatWeDo";

const Home = () => {
  let whatData = {
    heading: "What We Do",
    content:
      "We’re a deep tech AI-ML leader with a proprietary DATA-PLT (Predictive Learning Transformer) suite of technologies and SXI.  We provide business leaders a new way to SCORE, CORRELATE and IMPROVE their companies.",
  };
  return (
    <div>
      <Header />
      <HomeBanner />
      <WhatWeDo props={whatData} />
    </div>
  );
};

export default Home;
