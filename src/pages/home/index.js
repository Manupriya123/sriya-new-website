import React, { useEffect } from "react";
import Header from "../../components/header";
import HomeBanner from "../../components/homeBanner";
import WhatWeDo from "../../components/whatWeDo";
import MainFooter from "../../components/footer";
import DownloadBrochure from "../../components/downloadBrochure";
<<<<<<< HEAD
import Slider from "../../components/carousel/Slider";
=======
import DrSay from "../../components/srinivasSay";
import WhySriya from "../../components/whySriya";
import OurExperts from "../../components/ourExperts";
import SriyaThought from "../../components/sriyaThought";
import ComparePlans from "../../components/comparePlans";
import { useLocation } from 'react-router-dom';
>>>>>>> 66ffede385d8986aa09863d659e7c8a79eaacd9b

const Home = () => {
  const location = useLocation();

  useEffect(() => {
    document.title = 'Sriya AI LLC- AI ANYTIME ANYWHERE'; // Set the desired title for the home page
  }, []);
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

  let expertSay = {
    content:
      "International recognized group of professionals from data scientists to awarding winning PhDs with the mission to educate, communicate and democratize AI-ML.",
  };

  let sriyaThought = {
    content:
      "Sriya-ML utilizes standard machine learning algorithms, whereas Sriya-SXI utilizes proprietary precision learning indexing algorithms offering 20-40% accuracy improvement with 100% precision",
  };
  return (
    <div>
      <Header />
      <HomeBanner />
      <WhatWeDo props={whatData} />
<<<<<<< HEAD
      <Slider />
=======
      <WhySriya />
      <DrSay props={drSay} />
      <OurExperts props={expertSay} />
      <SriyaThought props={sriyaThought} />
      <ComparePlans/>
>>>>>>> 66ffede385d8986aa09863d659e7c8a79eaacd9b
      <DownloadBrochure />
      <MainFooter />
    </div>
  );
};

export default Home;
