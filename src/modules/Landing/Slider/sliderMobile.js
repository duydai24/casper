import React from "react";
import Slider from "react-slick";

function Slides_Mobile() {
  return (
    <div className="py-24 slider_mobile hidden">
      <div className="flex flex-col items-center">
        <Slides_Item
          img={"slide1.png"}
          text={
            "Silvio Micali Shares Acceptance Speech for ISSNAF's Lifetime Achievement Award"
          }
        />
        <Slides_Item
          img={"slide2.png"}
          text={"DuckSTARTER Platform to Integrate CasperDash"}
        />
        <Slides_Item
          img={"slide3.png"}
          text={
            "Citi Veteran Launches $1.5B Crypto Fund With Casper as Strategic Partner"
          }
        />
        <Slides_Item
          img={"slide4.png"}
          text={
            "Silvio Micali Shares Acceptance Speech for ISSNAF's Lifetime Achievement Award"
          }
        />
        <Slides_Item
          img={"slide5.png"}
          text={
            "Citi Veteran Launches $1.5B Crypto Fund With Casper as Strategic Partner"
          }
        />
        <Slides_Item
          img={"slide2.png"}
          text={"DuckSTARTER Platform to Integrate CasperDash"}
        />
        <Slides_Item
          img={"slide3.png"}
          text={
            "Silvio Micali Shares Acceptance Speech for ISSNAF's Lifetime Achievement Award"
          }
        />
        <a className="text-[#FA2852] text-[20px] font-semibold m-auto" href="">
          View More
        </a>
      </div>
    </div>
  );
}

function Slides_Item({ img, text }) {
  return (
    <div className="flex flex-col items-center py-3 max-w-[350px] m-auto">
      <img className="w-full h-full" src={img} />
      <p className="py-5 text-[#353945] tetx-[20px] font-medium text-center">
        {text}
      </p>
    </div>
  );
}

export default Slides_Mobile;
