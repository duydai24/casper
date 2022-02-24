import React from "react";
import Slider from "react-slick";

function Slides() {
  const settings = {
    dots: false,
    infinite: false,
    autoplay:false,
    autoplaySpeed: 1000,
    slidesToShow: 4,
    slidesToScroll: 1,
    arrows: false,
  };
  return (
    <div className="py-24 mt-44 slider">
      <p className="text-[#353945] text-5xl font-semibold text-center">
        Ctypto News
      </p>
      <div className="py-24">
        <Slider {...settings}>
          <div>
            <Slides_Item
              img={"slide1.png"}
              text={
                "Silvio Micali Shares Acceptance Speech for ISSNAF's Lifetime Achievement Award"
              }
            />
          </div>
          <div>
            <Slides_Item
              img={"slide2.png"}
              text={"DuckSTARTER Platform to Integrate CasperDash"}
            />
          </div>
          <div>
            <Slides_Item
              img={"slide3.png"}
              text={
                "Citi Veteran Launches $1.5B Crypto Fund With Casper as Strategic Partner"
              }
            />
          </div>
          <div>
            <Slides_Item
              img={"slide4.png"}
              text={
                "Silvio Micali Shares Acceptance Speech for ISSNAF's Lifetime Achievement Award"
              }
            />
          </div>
          <div>
            <Slides_Item
              img={"slide5.png"}
              text={
                "Citi Veteran Launches $1.5B Crypto Fund With Casper as Strategic Partner"
              }
            />
          </div>
          <div>
            <Slides_Item
              img={"slide2.png"}
              text={"DuckSTARTER Platform to Integrate CasperDash"}
            />
          </div>
          <div>
            <Slides_Item
              img={"slide3.png"}
              text={
                "Silvio Micali Shares Acceptance Speech for ISSNAF's Lifetime Achievement Award"
              }
            />
          </div>
          <div>
            <Slides_Item
              img={"slide4.png"}
              text={
                "Silvio Micali Shares Acceptance Speech for ISSNAF's Lifetime Achievement Award"
              }
            />
          </div>
          <div>
            <Slides_Item
              img={"slide5.png"}
              text={
                "Silvio Micali Shares Acceptance Speech for ISSNAF's Lifetime Achievement Award"
              }
            />
          </div>
        </Slider>
      </div>
    </div>
  );
}

function Slides_Item({ img, text }) {
  return (
    <div className="flex flex-col items-center">
      <img className="w-full h-full" src={img} />
      <p className="py-5 text-[#353945] tetx-[20px] font-medium text-center">
        {text}
      </p>
    </div>
  );
}

export default Slides;
