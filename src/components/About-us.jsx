import React from "react";
import { Link } from "react-router-dom";
import image from "../assets/images/about-us.jpg";
import second_image from "../assets/images/Premium Vector _ Yellow cyber circuit future technology concept background.jpg";
import { useTranslation } from "react-i18next";

const About_us = () => {
  const { t, i18n } = useTranslation();

  return (
    <section  style={{
      
      fontFamily: i18n.language === 'ar' ? 'Cairo, sans-serif' : '', // Default font when language is not Arabic
    }}
    dir={i18n.language === "ar" ? "rtl" : "ltr"}
 className="w-full flex justify-center mt-[-50px] p-4 mx-auto  bg-[#1e1e1e]">
      {/* Title */}
      <div className="2xl:max-w-[1600px] md:max-w-[1270px]">
        {/* <div className="mx-auto w-full mb-[100px] text-center">
          <h2 className="font-display text-[30px] lg:text-5xl md:text-5xl font-[600] text-[#b29336]">
            About Us
          </h2>
          <div className="mx-auto mb-8 mt-4 max-w-[528px] md:mb-12 lg:mb-16">
            <p className="md:text-lg text-sm text-gray-700">
              Learn about our journey, our mission, and the values that drive us
              to deliver innovative solutions
            </p>
          </div>
        </div> */}
        <section  className="py-24 relative xl:mr-0 lg:mr-5 mr-0">
          
          <div className="w-full mx-auto">
            <div className="w-full justify-center items-center xl:gap-12 gap-10 grid lg:grid-cols-2 grid-cols-1">
              <div className="w-full flex-col justify-center lg:items-start items-center gap-10 inline-flex">
                <div className="w-full flex-col justify-center items-start gap-8 flex">
                  <div className="flex-col justify-start lg:items-start items- gap-4 flex">
                    <h6 className="text-text_color  mb-[-20px] text-base font-normal leading-relaxed">{t("About_Us")}</h6>
                    <div className="w-full flex-col justify-start lg:items-start items-center gap-3 flex">
                      <h2 className="md:text-4xl text-2xl font-[500] text-transparent bg-clip-text bg-primary md:leading-[3.25rem] mb-8">
                        {t("Delivering_innovative_solutions")}
                      </h2>
                      <p className="text-sub_text text-base font-normal leading-relaxed lg:text-start">
                      {t("Focused_on_delivering_solutions")}
                      </p>
                    </div>
                  </div>
                  <div className="w-full flex-col justify-center items-start gap-6 flex">
                    <div className="w-full justify-start items-center gap-8 grid md:grid-cols-2 grid-cols-1">
                      <div className="w-full  p-3.5 rounded-xl border border-[#333232FF]  transition-all duration-700 ease-in-out flex-col justify-start items-start gap-2.5 inline-flex">
                        <h4 className="text-text_color text-xl font-[500] font-manrope leading-9">    {t("Experience")}</h4>
                        <p className="text-sub_text text-sm font-normal leading-relaxed">{t("Influencing_digital_landscapes")}</p>
                      </div>
                      <div className="w-full  p-3.5 rounded-xl border border-[#333232FF]  transition-all duration-700 ease-in-out flex-col justify-start items-start gap-2.5 inline-flex">
                        <h4 className="text-text_color text-xl font-[500] font-manrope leading-9"> {t("Projects")}</h4>
                        <p className="text-sub_text text-sm font-normal leading-relaxed">{t("Delivering_excellence")}</p>
                      </div>
                    </div>
                    <div className="w-full  justify-start items-center gap-8 grid md:grid-cols-2 grid-cols-1">
                      <div className="w-full p-3.5 rounded-xl border border-[#333232FF]  transition-all duration-700 ease-in-out flex-col justify-start items-start gap-2.5 inline-flex">
                        <h4 className="text-text_color text-xl font-[500] font-manrope leading-9"> {t("Achievements")}</h4>
                        <p className="text-sub_text text-sm font-normal leading-relaxed">{t("Advancing_technology")}</p>
                      </div>
                      <div className="w-full  p-3.5 rounded-xl border border-[#333232FF]  transition-all duration-700 ease-in-out flex-col justify-start items-start gap-2.5 inline-flex">
                        <h4 className="text-text_color text-xl font-[500] font-manrope leading-9"> {t("percent_happy_clients")}</h4>
                        <p className="text-sub_text text-sm font-normal leading-relaxed">{t("Client_satisfaction")}</p>
                      </div>
                    </div>
                  </div>
                </div>
                <Link dir="ltr"
                  to={'/About-Us'}
                  className="sm:w-fit w-full group px-3.5 py-2  hover:bg-hover active:bg-active bg-primary rounded-lg shadow-[0px_1px_2px_0px_rgba(16,_24,_40,_0.05)] transition-all duration-700 ease-in-out justify-center items-center flex"
                >
                  <span className="px-1.5 text-text_color text-sm font-medium leading-6 group-hover:-translate-x-0.5 transition-all duration-700 ease-in-out">
                  {t("Read_More")}                  </span>
                  <svg
                    className="group-hover:translate-x-0.5 transition-all duration-700 ease-in-out"
                    xmlns="http://www.w3.org/2000/svg"
                    width="18"
                    height="18"
                    viewBox="0 0 18 18"
                    fill="none"
                  >
                    <path
                      d="M6.75265 4.49658L11.2528 8.99677L6.75 13.4996"
                      stroke="#ffff"
                      strokeWidth="1.6"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </Link>
              </div>
              <div className="w-full lg:justify-start justify-center items-start flex">
                <div className="w-full lg:h-[646px] h-full md:bg-[#242323] rounded-3xl lg:border border-[#333232FF] relative">
                  <img
                    className="lg:mt-5 lg:ml-5 w-full h-full rounded-3xl object-cover"
                    src={second_image}
                    alt="about Us image"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </section>
  );
};

export default About_us;
