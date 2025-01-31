import React from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import website from "../../src/assets/images/world-wide-web.png";
import app from "../../src/assets/images/mobile-application.png";
import system from "../../src/assets/images/feature.png";

const PricingSection = () => {
  const { t, i18n } = useTranslation();

  return (
    <div
      style={{
        fontFamily: i18n.language === "ar" ? "Cairo, sans-serif" : "", // Default font when language is not Arabic
      }}
      className="mx-auto p-4 2xl:max-w-[1600px] md:max-w-[1270px]"
    >
      <div className="relative z-10 mx-auto max-w-7xl   my-12">
        <div className="mx-auto w-full mb-[100px] text-center">
          <h2 className="font-display h-[60px] text-[30px] lg:text-5xl md:text-5xl font-[600] text-transparent bg-clip-text bg-primary">
            {t("Pricing_Plans")}{" "}
          </h2>
          <div className="mx-auto mb-8 mt-4 max-w-[528px] md:mb-12 lg:mb-16">
            <p className="md:text-lg text-sm text-sub_text">
              {t("Transparent_and_affordable_rates")}{" "}
            </p>
          </div>
        </div>
        <div className="mx-auto grid  grid-cols-1 gap-8 lg:grid-cols-3 sm:grid-cols-2 lg:gap-8">
          {/* website Plan */}
          <div className="flex hover:border-primary duration-[0.7s] flex-col rounded-3xl bg-[#242323] border border-[#313131] shadow-xl ring-1 ring-black/10">
            <div className="p-8 sm:p-10">
              <h3
                className=" font-[400] text-[25px] leading-8 tracking-tight text-primary"
                id="tier-hobby"
              >
                {t("Website")}
              </h3>
              <div className="mt-6 flex items-baseline text-5xl font-bold tracking-tight text-text_color">
                <img src={website} alt="" className="h-[80px]" />
              </div>
              {/* <p className="mt-6 text-base leading-7 text-sub_text">All basic features included.</p> */}
            </div>
            <div className="flex flex-1 flex-col p-2">
              <div className="flex flex-1 flex-col justify-between rounded-2xl  bg-[#2c2b2b] p-6 sm:p-8">
                <ul role="list" className="space-y-6">
                  <li className="flex gap-4 items-center">
                    <div className="flex-shrink-0">
                      <p className="text-primary text-[30px]">S</p>
                    </div>
                    <p className="ml-3 text-sm leading-6 text-text_color">
                      300,000 IQD <br />
                      800,000 IQD
                    </p>
                  </li>
                  <li className="flex gap-4 items-center">
                    <div className="flex-shrink-0">
                      <p className="text-primary text-[30px]">M</p>
                    </div>
                    <p className="ml-3 text-sm leading-6 text-text_color">
                      1,000,000 IQD <br />
                      1,750,000 IQD
                    </p>
                  </li>
                  <li className="flex gap-4 items-center">
                    <div className="flex-shrink-0">
                      <p className="text-primary text-[30px]">L</p>
                    </div>
                    <p className="ml-3 text-sm leading-6 text-text_color">
                      2,000,000 IQD / Ab
                    </p>
                  </li>
                </ul>
                <div className="mt-8">
                  <Link
                    to="/Contact-us"
                    className=" flex justify-center  rounded-lg bg-primary px-4 py-3 text-center text-sm font-semibold leading-5 text-white shadow-md hover:bg-hover active:bg-active"
                    aria-describedby="tier-team"
                  >
                    {t("contact_us")}{" "}
                  </Link>
                </div>
              </div>
            </div>
          </div>
          {/* Application Plan */}
          <div className="flex hover:border-primary duration-[0.7s] flex-col rounded-3xl bg-[#242323] border border-[#313131] shadow-xl ring-1 ring-black/10">
            <div className="p-8 sm:p-10">
              <h3
                className=" font-[400] text-[25px] leading-8 tracking-tight text-primary"
                id="tier-hobby"
              >
                {t("Application")}
              </h3>
              <div className="mt-6 flex items-baseline text-5xl font-bold tracking-tight text-text_color">
                <img src={app} alt="" className="h-[80px]" />
              </div>
              {/* <p className="mt-6 text-base leading-7 text-sub_text">All basic features included.</p> */}
            </div>
            <div className="flex flex-1 flex-col p-2">
              <div className="flex flex-1 flex-col justify-between rounded-2xl  bg-[#2c2b2b] p-6 sm:p-8">
                <ul role="list" className="space-y-6">
                  <li className="flex gap-4 items-center">
                    <div className="flex-shrink-0">
                      <p className="text-primary text-[30px]">S</p>
                    </div>
                    <p className="ml-3 text-sm leading-6 text-text_color">
                      1,600,000
                      <br />
                      2,500,000 IQD
                    </p>
                  </li>
                  <li className="flex gap-4 items-center">
                    <div className="flex-shrink-0">
                      <p className="text-primary text-[30px]">M</p>
                    </div>
                    <p className="ml-3 text-sm leading-6 text-text_color">
                      3,000,000 IQD <br />
                      4,500,000 IQD
                    </p>
                  </li>
                  <li className="flex gap-4 items-center">
                    <div className="flex-shrink-0">
                      <p className="text-primary text-[30px]">L</p>
                    </div>
                    <p className="ml-3 text-sm leading-6 text-text_color">
                      5,000,000 IQD / Ab
                    </p>
                  </li>
                </ul>
                <div className="mt-8">
                  <Link
                    to="/Contact-us"
                    className=" flex justify-center  rounded-lg bg-primary px-4 py-3 text-center text-sm font-semibold leading-5 text-white shadow-md hover:bg-hover active:bg-active"
                    aria-describedby="tier-team"
                  >
                    {t("contact_us")}{" "}
                  </Link>
                </div>
              </div>
            </div>
          </div>
          {/* system Plan */}
          <div className="flex hover:border-primary duration-[0.7s] flex-col rounded-3xl bg-[#242323] border border-[#313131] shadow-xl ring-1 ring-black/10">
            <div className="p-8 sm:p-10">
              <h3
                className=" font-[400] text-[25px] leading-8 tracking-tight text-primary"
                id="tier-hobby"
              >
                {t("management_system")}
              </h3>
              <div className="mt-6 flex items-baseline text-5xl font-bold tracking-tight text-text_color">
                <img src={system} alt="" className="h-[80px]" />
              </div>
              {/* <p className="mt-6 text-base leading-7 text-sub_text">All basic features included.</p> */}
            </div>
            <div className="flex flex-1 flex-col p-2">
              <div className="flex flex-1 flex-col justify-between rounded-2xl  bg-[#2c2b2b] p-6 sm:p-8">
                <ul role="list" className="space-y-6">
                  <li className="flex gap-4 items-center">
                    <div className="flex-shrink-0">
                      <p className="text-primary text-[30px]">S</p>
                    </div>
                    <p className="ml-3 text-sm leading-6 text-text_color">
                      500,000 IQD <br /> 800,000IQD
                    </p>
                  </li>
                  <li className="flex gap-4 items-center">
                    <div className="flex-shrink-0">
                      <p className="text-primary text-[30px]">M</p>
                    </div>
                    <p className="ml-3 text-sm leading-6 text-text_color">
                      1,000,000 IQD <br />
                      2,000,000 IQD
                    </p>
                  </li>
                  <li className="flex gap-4 items-center">
                    <div className="flex-shrink-0">
                      <p className="text-primary text-[30px]">L</p>
                    </div>
                    <p className="ml-3 text-sm leading-6 text-text_color">
                      2,500,000 IQD / Ab
                    </p>
                  </li>
                </ul>
                <div className="mt-8">
                  <Link
                    to="/Contact-us"
                    className=" flex justify-center  rounded-lg bg-primary px-4 py-3 text-center text-sm font-semibold leading-5 text-white shadow-md hover:bg-hover active:bg-active"
                    aria-describedby="tier-team"
                  >
                    {t("contact_us")}{" "}
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PricingSection;
