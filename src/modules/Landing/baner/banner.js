import React, { useState, useEffect } from "react";

function Banner({sticky}) {
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

  const _stickyDown = stickyDown ? " off" : " banner_stickyUp ";
  return (
    <div className={"container py-24 relative top-0 left-0 banner " + _stickyDown}>
      <img
        className="absolute top-0 -right-56 img_banner"
        src="baner.png"
        width={724.21}
        height={724.21}
      />
      <div className="max-w-[745px] relative top-40 left-0 content_banner">
        <p className="uppercase text-[#3772FF] text-[54px] font-bold title_banner">
          The First Non-Custodial Wallet Build In Casper Blockchain
        </p>
        <p className="text-[#353945] text-[16px] max-w-[590px] py-6 text_banner">
          Store, send, and receive tokens on Casper with Cashper Dash. Beside
          that, wallet is available to store all digital assets as NFT and track
          all Staking.
        </p>
        <div className="flex py-10 btn_banner">
          <a
            href=""
            className="text-white bg-[#FA2852] rounded-[90px] text-center px-4 py-2 text-base border-[1px] border-[#FA2852] hover:text-[#FA2852] hover:bg-white hover:border-[1px] hover:border-[#FA2852] mr-5 btn_banner--1"
          >
            Dowload Wallet
          </a>
          <a
            href=""
            className="text-[#FA2852] bg-white rounded-[90px] text-center px-4 py-2 text-base border-[1px] border-[#FA2852] hover:bg-[#FA2852] hover:text-white"
          >
            Launch Web Wallet
          </a>
        </div>
      </div>
    </div>
  );
}
export default Banner;
