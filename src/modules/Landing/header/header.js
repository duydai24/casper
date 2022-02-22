import React from "react";
import { AiOutlineTwitter } from "react-icons/ai";
import { FaFacebookF } from "react-icons/fa";
import { FiInstagram } from "react-icons/fi";
import { FaTelegramPlane } from "react-icons/fa";

function Headerr() {
  return (
    <div className="container">
      <div className="flex justify-between pt-6">
        <div className="flex content_header">
        <img className="img_header" src="Logo.png" />
        <p className="text-[#3772FF] text-[28px] ml-5 font-bold title_header">CASPER DASH</p>
        </div>
        <div className="flex header">
          <div className="flex py-3 pr-2 icon_header1">
            <Header_Icon
              icon={<AiOutlineTwitter fontSize={16} />}
            ></Header_Icon>
            <Header_Icon icon={<FaFacebookF fontSize={16} />}></Header_Icon>
            <Header_Icon icon={<FiInstagram fontSize={16} />}></Header_Icon>
            <Header_Icon icon={<FaTelegramPlane fontSize={16} />}></Header_Icon>
          </div>
          <a
            href=""
            className="text-white bg-[#FA2852] rounded-[90px] text-center px-4 py-2 text-base border-[1px] border-[#FA2852] hover:text-[#FA2852] hover:bg-white hover:border-[1px] hover:border-[#FA2852]"
          >
            Dowload Wallet
          </a>
          <div className="flex py-3 pr-2 icon_header2">
            <Header_Icon
              icon={<AiOutlineTwitter fontSize={16} />}
            ></Header_Icon>
            <Header_Icon icon={<FaFacebookF fontSize={16} />}></Header_Icon>
            <Header_Icon icon={<FiInstagram fontSize={16} />}></Header_Icon>
            <Header_Icon icon={<FaTelegramPlane fontSize={16} />}></Header_Icon>
          </div>
        </div>
      </div>
    </div>
  );
}

function Header_Icon({ icon }) {
  return (
    <a className="text-[#353945] pr-3" href="">
      {icon}
    </a>
  );
}

export default Headerr;
