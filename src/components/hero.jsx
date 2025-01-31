import React from "react";
import { Link } from "react-router-dom";
import ReadMoreIcon from "@mui/icons-material/ReadMore";
import AddIcCallOutlinedIcon from "@mui/icons-material/AddIcCallOutlined";
import image from "../assets/images/laptop.png"
import BrandCarousel from "./brands";
import { useTranslation } from "react-i18next";

export default () => {
  const { t, i18n } = useTranslation();

  return (
    <div  
    dir={i18n.language === "ar" ? "rtl" : "ltr"}
    
    
    className="flex flex-col pt-[80px] min-h-screen bg-[#1E1E1E]">
      {/* Hero Section */}
      <svg
    className="absolute inset-0 -z-1 h-full w-full stroke-white/10 [mask-image:radial-gradient(100%_100%_at_top_right,white,transparent)]"
    aria-hidden="true">
    <defs>
      <pattern id="983e3e4c-de6d-4c3f-8d64-b9761d1534cc" width="200" height="200" x="100%" y="-1"
        patternUnits="userSpaceOnUse">
        <path d="M.5 200V.5H200" fill="none"></path>
      </pattern>
    </defs>
  
    <rect width="100%" height="100%" strokeWidth="0" fill="url(#983e3e4c-de6d-4c3f-8d64-b9761d1534cc)"></rect>
  </svg>
      <div className="flex flex-1 items-center justify-center">
        <div style={{
      
      fontFamily: i18n.language === 'ar' ? 'Cairo, sans-serif' : '', // Default font when language is not Arabic
    }} className="relative mx-auto">
          <div className="absolute inset-0 blur-xl h-[580px]"></div>
          <div className="mx-auto relative ">
  <div className="absolute inset-0 blur-xl h-[580px]"></div>
  <div className="relative">
    <section>
      <div className=" mx-auto px-4 py-28 2xl:gap-[350px] text-text_color overflow-hidden md:px-8 md:flex">
        <div className="flex-none space-y-5 2xl:max-w-5xl 2xl:mt-[30px] max-w-3xl">
          <Link dir="ltr"
            to={"/Our-features"}
            className="inline-flex gap-x-6 items-center rounded-full p-1 pr-6 border border-[#313131] text-sm font-medium duration-150 "
          >
            <span className="inline-block rounded-full px-3 py-1 bg-primary text-text_color">
              GeniusWings
            </span>
            <p className="flex items-center">
{t("top_header")}              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                className="w-5 h-5"
              >
                <path
                  fillRule="evenodd"
                  d="M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z"
                  clipRule="evenodd"
                />
              </svg>
            </p>
          </Link>
          <h1 className="mx-auto max-w-8xl font-display text-[30px]  lg:text-5xl md:text-5xl  font-[600] tracking-tight text-text_color">
            <span className="inline-block ">
            {t("header")}                <span className="text-transparent min-h-[60px] bg-clip-text 2xl:block bg-primary">    {t("the_Future")}</span>{" "}
              <span className="relative text-primary ml-3"></span>
            </span>
          </h1>

          <p className=" mt-9 max-w-2xl text-sm tracking-tight sm:text-lg text-sub_text sm:mt-6 lg:text-lg">
          {t("sub_header")}   
          </p>

          <div className="mt-12 flex flex-col justify- gap-y-5 sm:mt-10 sm:flex-row sm:gap-y-0 sm:gap-x-6">
            <Link
              to={"/Contact-us"}
              className="group inline-flex items-center justify-center rounded-full py-2 px-4 text-sm font-semibold focus:outline-none focus-visible:outline-2 focus-visible:outline-offset-2 bg-primary hover:bg-hover active:bg-active text-white h focus-visible:outline-slate-900 animate-fade-in-left"
            >
              <span className="mx-3 flex gap-2 items-center font-semibold text-[14px]">
                <AddIcCallOutlinedIcon />
                {t("contact_us")}  
              </span>
            </Link>
            <div className="relative flex flex-1 flex-col items-stretch sm:flex-none">
              <Link to={"/About-us"}>
                <button
                  className="group inline-flex w-full ring-1 items-center justify-center rounded-full py-2 px-4 text-sm focus:outline-none ring-[#313131]  hover:text-slate-900 hover:ring-[#414040]  focus-visible:outline-primary  animate-fade-in-right"
                  type="button"
                >
                  <span className="mx-3 flex gap-2 items-center font-semibold text-[14px] text-text_color">
                    <ReadMoreIcon />
                    {t("About_Us")}  
                    </span>
                </button>
              </Link>
            </div>
          </div>
        </div>
        <div className="flex-1 mt-[-50px]  hidden lg:block">
          <img
            src={image}
            className="max-w-xl 2xl:min-w-[550px]"
            alt="Progressive App Illustration"
          />
        </div>
      </div>
    </section>
  </div>
</div> 
        </div>
           {/* Background SVG */}
      <div className="absolute top-0 right-0 z-10">
     
      </div>
      </div>
      {/* Brand Carousel */}
      <div dir="ltr" className="flex justify-end">
        <BrandCarousel />
      </div>
    </div>
  );
};

