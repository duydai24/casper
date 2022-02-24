import React, { useState, useEffect } from "react";

function Intro() {
  const [stickyDown, setStickyDown] = useState(false);
  const [pageoffset, setPageoffset] = useState(0);

  useEffect(() => {
    let prevScrolls = window.pageYOffset;
    window.onscroll = () => {
      let currentScrolls = window.pageYOffset;
      if (prevScrolls > currentScrolls) {
        setStickyDown(false);
      } else {
        setStickyDown(true);
      }
      prevScrolls = currentScrolls;
      if (prevScrolls < 1) {
        setStickyDown(false);
      }
      setPageoffset(prevScrolls);
    };
  }, [pageoffset]);

  const _stickyDown1 = stickyDown ? " off" : " introLeft_stickyUp ";
  const _stickyDown2 = stickyDown ? " off" : " introRight_stickyUp ";
  return (
    <div className="intro">
      <div className="container flex justify-between py-14 intro_item">
        <img
          className="border-4 border-[#1F1D2B] rounded-[48px] pt-10 max-h-[600px] max-w-xs hidden intro_img1"
          src="intro_iphone.png"
          width={300}
          height={850}
        />

        <div className={"pt-20 "+_stickyDown1}>
          <p className="text-[48px] font-semibold text-[#1F1D2B] intro_title">
            Casper Ecosystem
          </p>
          <Intro_Item
            title={"Easy To Connect To Casper Blockchain"}
            text={
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas sagittis in turpiset mollis. Nam varius orci felis, eleifend maximus mauris porta nec."
            }
          />
          <Intro_Item
            title={"Available on Mobile, Destop & Browser Extension"}
            text={
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas sagittis in turpis et mollis. Nam varius orci felis, eleifend maximus mauris porta nec."
            }
          />
        </div>
        <img
          className={"border-4 border-[#1F1D2B] rounded-[48px] pt-10 max-h-[600px] max-w-xs intro_img2 "+ _stickyDown2}
          src="intro_iphone.png"
          width={300}
          height={850}
        />
      </div>
    </div>
  );
}

function Intro_Item({ text, title }) {
  return (
    <div className="py-12">
      <p className="text-[24px] font-medium text-[#1F1D2B] pb-3">{title}</p>
      <p className="text-[20px] font-normal text-[#777E90] max-w-[550px]">
        {text}
      </p>
    </div>
  );
}

export default Intro;
