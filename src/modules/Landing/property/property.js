import React, { useState, useEffect } from "react";

function Property() {
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

  const _stickyDown = stickyDown ? " off" : " property_stickyUp ";
  return (
    <div className={"container pb-16 " + _stickyDown}>
      <Property_Item
        sticky={_stickyDown}
        img={"property1.png"}
        title={"NFRs"}
        text={
          "Casperdash offers you an easy way to keep all your unique ERC721 and ERC1155 crypto NFTs in one place. Love your crypto NFTs? We love them too. Store them all in your Casper Wallet."
        }
      />
      <Property_Item
        sticky={_stickyDown}
        img={"property2.png"}
        title={"Staking"}
        text={"Stake CSPR, earn rewards and help Casper become more secure!"}
      />
      <Property_Item
        img={"property3.png"}
        title={"Key Management"}
        text={
          "Other essential features include an account permissions model that allows the recovery of lost keys and a permissions model to securely share state between accounts and contracts (without expensive cryptographic checks)."
        }
      />
    </div>
  );
}

function Property_Item({ text, title, img, sticky }) {
  return (
    <div className="flex property ">
      <img className="pr-10" src={img} />
      <div className="mt-16">
        <p className="text-[32px] text-[#353945] font-semibold property_items">
          {title}
        </p>
        <p className="text-[16px] text-[#353945] font-normal">{text}</p>
      </div>
    </div>
  );
}

export default Property;
