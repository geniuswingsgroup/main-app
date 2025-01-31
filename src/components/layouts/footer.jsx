import React from "react";
import { Link } from "react-router-dom";
import brand from "../../assets/images/Global-1-.png";
import LocalPhoneOutlinedIcon from "@mui/icons-material/LocalPhoneOutlined";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import FmdGoodOutlinedIcon from "@mui/icons-material/FmdGoodOutlined";
import { useTranslation } from "react-i18next";

const Footer = () => {
  const handleWhatsAppClick = () => {
    window.open(`https://wa.me/+96407730279390`);
  };

  const { t, i18n } = useTranslation();

  return (
    <div
      dir="ltr"
      style={{
        fontFamily: i18n.language === "ar" ? "Cairo, sans-serif" : "", // Default font for non-Arabic languages
      }}
      className="bg-[#242424]"
    >
      <footer className="mx-auto 2xl:max-w-[1800px] md:max-w-[1270px] sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-6 gap-4 lg:gap-8 py-14 max-w-xs mx-auto sm:max-w-2xl md:max-w-3xl lg:max-w-full">
            <div className="col-span-full mb-10 md:mt-[-10px] lg:col-span-2 lg:mb-0">
              <Link   style={{
        fontFamily:  "Cairo, sans-serif", // Default font for non-Arabic languages
      }}
                to={"/"}
                className="flex lg:justify-start justify-center items-center gap-2 text-[#b29336]"
              >
                <img
                  src={brand}
                  className="md:h-[57px] sm:mt-[-16px] mt-[-13px] h-[40px]"
                  alt="Message Shield"
                />
                <h2 className="md:text-[25px] text-[17px] mt-2 font-[500] text-text_color leading-[3.25rem]">
                  Genius
                  <span className="text-transparent bg-clip-text bg-primary">
                    Wings
                  </span>
                </h2>
              </Link>
              <div className="flex flex-col gap-9 mt-[50px]">
                <li className="flex items-center text-text_color justify-center gap-2 lg:justify-start">
                  <EmailOutlinedIcon style={{ color: "#E4C24A" }} />
                  info@genius-wings.com
                </li>
                <li className="flex items-center text-text_color justify-center gap-2 lg:justify-start">
                  <LocalPhoneOutlinedIcon style={{ color: "#E4C24A" }} />
                  +49 176 60369006 <br /> +964 07730279390
                </li>
                <li className="flex items-center text-text_color justify-center gap-2 lg:justify-start">
                  <FmdGoodOutlinedIcon style={{ color: "#E4C24A" }} />
                  Kasernen str. 12 , 21073 Hamburg / Germany
                </li>
              </div>
            </div>
            <div className="lg:mx-auto text-center sm:text-left">
              <h4 className="text-lg text-text_color font-medium mb-7">
                {t("Company")}
              </h4>
              <ul className="text-md transition-all duration-500">
                <li className="mb-6">
                  <Link to={"/"} className="text-sub_text hover:text-primary">
                    {t("Home")}
                  </Link>
                </li>
                <li className="mb-6">
                  <Link
                    to={"/Courses"}
                    className="text-sub_text hover:text-primary"
                  >
                    {t("Courses")}
                  </Link>
                </li>
                <li className="mb-6">
                  <Link
                    to={"/Our-Projects"}
                    className="text-sub_text hover:text-primary"
                  >
                    {t("Our_Projects")}
                  </Link>
                </li>
                <li className="mb-6">
                  <Link to={"/Our-features"} className="text-sub_text hover:text-primary">
                    {t("Our_Features")}
                  </Link>
                </li>
              </ul>
            </div>
            <div className="lg:mx-auto text-center sm:text-left">
              <h4 className="text-lg text-text_color font-medium mb-7">
                {t("Support")}
              </h4>
              <ul className="text-md transition-all duration-500">
                <li className="mb-6">
                  <Link
                    to={"/About-us"}
                    className="text-sub_text hover:text-primary"
                  >
                    {t("About_Us")}
                  </Link>
                </li>
                <li className="mb-6">
                  <Link
                    to={"/Contact-us"}
                    className="text-sub_text hover:text-primary"
                  >
                    {t("contact_us")}
                  </Link>
                </li>
              </ul>
            </div>
            <div className="lg:mx-auto text-center sm:text-left">
              <h4 className="text-lg text-text_color font-medium mb-7">
                {t("Social_Media")}
              </h4>
              <ul className="text-md transition-all duration-500">
                <li className="mb-6">
                  <a
                    target="blank"
                    href="https://www.instagram.com/gwg2025?igsh=eHV3NTgycjZ1NWV2"
                    className="text-sub_text hover:text-primary"
                  >
                    Instagram
                  </a>
                </li>
                <li className="mb-6">
                  <Link
                    target="blank"
                    onClick={handleWhatsAppClick}
                    className="text-sub_text hover:text-primary"
                  >
                    WhatsApp
                  </Link>
                </li>
                <li className="mb-6">
                  <a
                    target="blank"
                    href="https://www.linkedin.com/company/geniuswingsgroup/posts/?feedView=all"
                    className="text-sub_text hover:text-primary"
                  >
                    Linkedin
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
      <div className="py-7 border-t flex bg-primary justify-center border-[#3b3b3b]">
        <div className="flex items-center justify-center flex-col lg:justify-between lg:flex-row">
          <span className="text-sm text-white">
            {t("Copyright")} 
          </span>
        </div>
      </div>
    </div>
  );
};

export default Footer;
