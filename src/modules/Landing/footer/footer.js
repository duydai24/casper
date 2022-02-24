import react from "react";
import { AiOutlineTwitter } from "react-icons/ai";
import { FaFacebookF } from "react-icons/fa";
import { FiInstagram } from "react-icons/fi";
import { FaTelegramPlane } from "react-icons/fa";

function Footer() {
  return (
    <div className="footer">
      <div className="flex flex-col items-center py-40 footer_content">
        <p className="text-[#353945] text-[54px] font-semibold title_footer">
          Want To Contact Us?
        </p>
        <p className="text-[#353945] text-[20px]">Get In Touch</p>
        <div className="flex icon_footer">
          <Footer_Icon icon={<AiOutlineTwitter fontSize={40} />} />
          <Footer_Icon icon={<FaFacebookF fontSize={40} />} />
          <Footer_Icon icon={<FiInstagram fontSize={40} />} />
          <Footer_Icon icon={<FaTelegramPlane fontSize={40} />} />
        </div>
      </div>
    </div>
  );
}

function Footer_Icon({ icon }) {
  return (
    <a className="text-[#353945] bg-white rounded-full p-4 mx-5 mt-10 icon_footer_item" href="">
      {icon}
    </a>
  );
}

export default Footer;
