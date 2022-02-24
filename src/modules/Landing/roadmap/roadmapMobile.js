import React from "react";
import { GoPrimitiveDot } from "react-icons/go";

function Roadmap_Mobile() {
  return (
    <div className="mx-3 py-24 relative top-0 left-0 hidden Roadmap_Mobile">
        <div className="bg-blue-600 w-[1px] h-[550px] absolute top-[120px] left-[200px] z-10"></div>
        <Roadmap_Mobile_icons className={"text-[#FA2852] absolute top-[110px] left-[187px] z-20"} icon={<GoPrimitiveDot fontSize={26}/>}/>
        <Roadmap_Mobile_icons className={"text-[#FA2852] absolute top-[250px] left-[187px] z-20"} icon={<GoPrimitiveDot fontSize={26}/>}/>
        <Roadmap_Mobile_icons className={"text-[#FBD2D3] absolute top-[390px] left-[187px] z-20"} icon={<GoPrimitiveDot fontSize={26}/>}/>
        <Roadmap_Mobile_icons className={"text-[#FBD2D3] absolute top-[530px] left-[187px] z-20"} icon={<GoPrimitiveDot fontSize={26}/>}/>
        <Roadmap_Mobile_icons className={"text-[#FBD2D3] absolute top-[655px] left-[190px] z-20"} icon={<GoPrimitiveDot fontSize={20}/>}/>
        <Roadmap_Mobile_icons className={"text-[#FBD2D3] absolute top-[670px] left-[190px] z-20"} icon={<GoPrimitiveDot fontSize={20}/>}/>
      <div className="grid grid-cols-2 gap-5">
        <div className="">
          <Roadmap_Mobile_Item
            className={"flex flex-col items-end m-auto max-w-[200px]"}
            title={"Q4-2021"}
            lable={"Website & Extension"}
            text={"Release Website & Web Extension for CasoerDash"}
          />
        </div>
        <div></div>
        <div></div>
        <div className="">
          <Roadmap_Mobile_Item
            className={"flex flex-col items-start m-auto max-w-[200px]"}
            title={"Q1-2022"}
            lable={"Mobile Wallet"}
            text={"Release Website & Web Extension for CasoerDash"}
          />
        </div>

        <div className="">
          <Roadmap_Mobile_Item
            className={"flex flex-col items-end m-auto max-w-[200px]"}
            title={"Q2-2022"}
            lable={"Decentralized Finance"}
            text={"Release Website & Web Extension for CasoerDash"}
          />
        </div>
        <div></div>
        <div></div>
        <div className="">
          <Roadmap_Mobile_Item
            className={"flex flex-col items-start m-auto max-w-[200px]"}
            title={"End-of-2022"}
            lable={"Perfecting the ecosystem"}
            text={"Large Scale Ecosystem Build-Out Continued Strategic Partnerships"}
          />
        </div>
      </div>
    </div>
  );
}

function Roadmap_Mobile_Item({
  text,
  title,
  lable,
  className
}) {
  return (
    <div className={className}>
      <p className="text-[#353945] text-[24px] font-semibold py-2">{title}</p>
      <p className="text-[#353945] text-[16px] font-semibold pb-2">{lable}</p>
      <p className="text-[#353945] text-[12px] font-normal">
        {text}
      </p>
    </div>
  );
}


function Roadmap_Mobile_icons({icon, className}) {
    return (
            <a href="" className={className}>
        {icon}
      </a>
    );
  }

export default Roadmap_Mobile;
