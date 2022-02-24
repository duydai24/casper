import React, { useState, useEffect } from "react";
import { IoLocationOutline } from "react-icons/io5";
import { GoPrimitiveDot } from "react-icons/go";

function Roadmap() {
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

  const _stickyDown = stickyDown ? " off" : " roadmap_stickyUp ";
  return (
    <div className="py-24 Roadmap">
      <p className="text-[#353945] text-[48px] font-semibold text-center">
        Roadmap
      </p>
      <div className={"flex roadmap_item " +_stickyDown}>
        <Roadmap_Item
          className={"text-[#FA2852]"}
          className_icon2={"text-[#FA2852]"}
          icon={<IoLocationOutline fontSize={60} />}
          icon_2={<GoPrimitiveDot fontSize={40} />}
          title={"Q4-2021"}
          lable={"Website & Extension"}
          text={"Release Website & Web Extension for CasoerDash"}
        />
        <Roadmap_Item
          className={"text-[#FA2852]"}
          className_icon2={"text-[#FA2852]"}
          icon={<IoLocationOutline fontSize={60} />}
          icon_2={<GoPrimitiveDot fontSize={40} />}
          title={"Q1-2022"}
          lable={"Mobile Wallet"}
          text={"Launch Android & iOS Wallet"}
        />
        <Roadmap_Item
          className={"text-white"}
          className_icon2={"text-[#FBD2D3]"}
          icon={<IoLocationOutline fontSize={60} />}
          icon_2={<GoPrimitiveDot fontSize={40} />}
          title={"Q2-2022"}
          lable={"Decentralized Finance"}
          text={"Implement Swapping & Liquidity Pools"}
        />
        <Roadmap_Item
          className={"text-white"}
          className_icon2={"text-[#FBD2D3]"}
          icon={<IoLocationOutline fontSize={60} />}
          icon_2={<GoPrimitiveDot fontSize={40} />}
          title={"End-of-2022"}
          lable={"Perfecting the ecosystem"}
          text={
            "Large Scale Ecosystem Build-Out Continued Strategic Partnerships"
          }
        />
      </div>
    </div>
  );
}
function Roadmap_Item({
  icon,
  text,
  title,
  lable,
  icon_2,
  className,
  className_icon2,
}) {
  return (
    <div className="flex flex-col items-center m-auto max-w-[360px]">
      <a href="" className={className}>
        {icon}
      </a>
      <a href="" className={className_icon2}>
        {icon_2}
      </a>
      <p className="text-[#353945] text-[32px] font-semibold py-2">{title}</p>
      <p className="text-[#353945] text-[24px] font-semibold pb-2">{lable}</p>
      <p className="text-[#353945] text-[16px] font-normal text-center">{text}</p>
    </div>
  );
}

export default Roadmap;
