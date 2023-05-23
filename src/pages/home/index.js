import React from "react";
import Header from "../../components/header";
import HomeBanner from "../../components/homeBanner";
import WhatWeDo from "../../components/whatWeDo";
import MainFooter from "../../components/footer";
import DownloadBrochure from "../../components/downloadBrochure";
import DrSay from "../../components/srinivasSay";
import WhySriya from "../../components/whySriya";
const Home = () => {
  let whatData = {
    heading: "What We Do",
    content:
      "We’re a deep tech AI-ML leader with a proprietary DATA-PLT (Predictive Learning Transformer) suite of technologies and SXI.  We provide business leaders a new way to SCORE, CORRELATE and IMPROVE their companies.",
  };

  let drSay = {
    content:
      "Traditional AI-ML fails to solve complex problems with precision, i.e., 75 %, but   Sriya-SXI is > 98% .",
    para: "Srinivas Kilambi, Ph.D",
  };
  return (
    <div>
      <Header />
      <HomeBanner />
      <WhatWeDo props={whatData} />
      <WhySriya/>
      <DrSay props={drSay} />
      <DownloadBrochure />
      <MainFooter />
    </div>
  );
};

export default Home;
