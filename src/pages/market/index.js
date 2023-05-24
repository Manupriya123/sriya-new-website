import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import CommonBanner from "../../components/commonBanner";
import MarketTypes from "../../components/marketType";

const Market = () => {
  const location = useLocation();
  let data = [
    {
      img: "	https://ml1ygrea7hcj.i.optimole.com/w:50/h:auto/q:mauto/f:avif/https://sriya.ai/wp-content/uploads/2023/05/agriculture.jpg",
      title: "Agriculture",
    },
    {
      img: "	https://ml1ygrea7hcj.i.optimole.com/w:50/h:auto/q:mauto/f:avif/https://sriya.ai/wp-content/uploads/2023/05/agriculture.jpg",
      title: "Air Transport",
    },
    {
      img: "	https://ml1ygrea7hcj.i.optimole.com/w:50/h:auto/q:mauto/f:avif/https://sriya.ai/wp-content/uploads/2023/05/agriculture.jpg",
      title: "Aviation",
    },
    {
      img: "	https://ml1ygrea7hcj.i.optimole.com/w:50/h:auto/q:mauto/f:avif/https://sriya.ai/wp-content/uploads/2023/05/agriculture.jpg",
      title: "Agriculture",
    },
  ];

  useEffect(() => {
    document.title = "Case Studies - Sriya AI LLC";
  }, []);

  let banner = {
    heading: "Use-Cases",
    subHeading: "Empowering Industries",
  };

  return (
    <div>
      <CommonBanner props={banner} />
      <MarketTypes props={data} />
    </div>
  );
};

export default Market;
