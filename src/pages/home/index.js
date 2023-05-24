import React from "react";
import Header from "../../components/header";
import HomeBanner from "../../components/homeBanner";
import WhatWeDo from "../../components/whatWeDo";

import MainFooter from "../../components/footer";
import DownloadBrochure from "../../components/downloadBrochure";

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

      <DownloadBrochure />
      <MainFooter />
    </div>
  );
};

export default Home;
