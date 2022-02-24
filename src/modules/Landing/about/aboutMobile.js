import React from "react";

function About_Mobile() {
  return (
    <div className="pt-24 About_mobile relative right-0 top-0 hidden">
      <img className="absolute right-0 top-0 z-0" src="img-about.png" />
      {/* <div className="h-[450px]"></div> */}
      <div className="container ">
        <div className="flex justify-between z-10 about_items">
          <About_Item
            title={"Our Culture"}
            text={
              " CasperDash is being created by a young, focused, eager team with a strong IT background and full of energy. We believe that great ideas can come from anywhere, regardless of seniority and experience. Embrace creativity and collaborative problem solving, we aim to create outcomes"
            }
          />
          {/* <div className="mx-10"> */}
          <About_Item
            title={"Our Goal"}
            text={
              " CasperDash is being created by a young, focused, eager team with a strong IT background and full of energy. We believe that great ideas can come from anywhere, regardless of seniority and experience. Embrace creativity and collaborative problem solving, we aim to create outcomes"
            }
          />
          {/* </div> */}
          <About_Item
            title={"Our Vision"}
            text={
              " CasperDash is being created by a young, focused, eager team with a strong IT background and full of energy. We believe that great ideas can come from anywhere, regardless of seniority and experience. Embrace creativity and collaborative problem solving, we aim to create outcomes"
            }
          />
        </div>
      </div>
    </div>
  );
}

function About_Item({ text, title }) {
  return (
    <div className="bg-white flex flex-col max-w-[350px] px-10 pb-20 pt-10 border-[1px] border-[#3772FF] rounded-[32px] mb-5">
      <p className="text-[24px] text-[#0021A5] font-bold">{title}</p>
      <p className="text-base text-[#353945] font-normal pt-5 leading-8">
        {text}
      </p>
    </div>
  );
}

export default About_Mobile;
