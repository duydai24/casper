import React from "react";

function ProgressBar() {
  return (
    <div className="py-10 px-7 mt-32 mb-16 progressBar flex justify-around">
      <div className="">
        <p className="text-#353945 text-[16px] pb-3 font-normal">Casper</p>
        <img className="" src="casper.png" />
      </div>
      <ProgressBar_Item
        title={"Prive"}
        text={"$68 USD"}
        className_p={"text-[#E1372D] text-base mt-[18px] ml-3"}
        number={"-7.8%"}
      />
      <ProgressBar_Item
        title={"Marketcap"}
        text={"$512.89 B"}
        className_p={"text-[#66FF00] text-base mt-[18px] ml-3"}
        number={"+7.8%"}
      />
      <ProgressBar_Item
        title={"24h Volume"}
        text={"12.89 B"}
        className_p={"text-[#E1372D] text-base mt-[18px] ml-3"}
        number={"-13.8%"}
      />
      <ProgressBar_Item
        title={"Total Supply"}
        text={"10,522,076,53"}
        className_p={"text-[#E1372D] text-base mt-[18px] ml-3"}
      />
      <ProgressBar_Item
        title={"Crculating supply"}
        text={"2,777,948,726"}
        className_p={"text-[#66FF00] text-base mt-[18px] ml-3"}
      />
    </div>
  );
}

function ProgressBar_Item({ text, title, className_p, number }) {
  return (
    <div className="">
      <p className="text-#353945 text-[16px] pb-3 font-normal">{title}</p>
      <div className="flex">
        <p className="text-[#353945] text-[32px] font-semibold text_ProgressBar_Item">
          {text}
        </p>
        <p className={className_p}>{number}</p>
      </div>
    </div>
  );
}

export default ProgressBar;
