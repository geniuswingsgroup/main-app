import React, { useEffect, useState } from "react";
import web from "../assets/images/Web development photo.webp"; // imported image
import Mobile from "../assets/images/c++.webp"; // imported image
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

const Our_features = ({ data }) => {
  const [itemsToShow, setItemsToShow] = useState(6);

  useEffect(() => {
    const handleResize = () => {
      const is2xl = window.matchMedia("(min-width: 1536px)").matches;
      setItemsToShow(is2xl ? 8 : 6);
    };

    // Set the initial value
    handleResize();

    // Add event listener
    window.addEventListener("resize", handleResize);

    // Clean up event listener
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  const { t, i18n } = useTranslation();

  return (
    <>
      <div style={{
      
      fontFamily: i18n.language === 'ar' ? 'Cairo, sans-serif' : '', // Default font when language is not Arabic
    }}  className="flex justify-center w-full p-4 pt-[110px]  bg-[#1e1e1e]">
        <div className="2xl:max-w-[1600px] md:max-w-[1250px]">
          {/* Section */}
          <section className="relative">
            <div className="w-full mx-auto">
              <div className="w-full justify-start items-center gap-12 grid lg:grid-cols-2 grid-cols-1">
                <div className="w-full justify-center items-start gap-6 grid sm:grid-cols-2 grid-cols-1 lg:order-first order-last">
                  {/* Display imported images */}
                  <div className="pt-24 hidden sm:flex lg:justify-center sm:justify-end justify-start items-start gap-2.5 ">
                    <img
                      className="sm:ml-0 ml-auto  h-[350px] w-[100%] md:w-[400px] lg:w-[500px] rounded-xl object-cover"
                      src={web} // Using the imported web image
                      alt="Web Development"
                    />
                  </div>
                  <img
                    className="sm:ml-0 ml-auto hidden sm:flex h-[350px] w-[100%] md:w-[400px] lg:w-[500px] rounded-xl object-cover"
                    src={Mobile} // Using the imported system image
                    alt="System Image"
                  />
                </div>
                <div     dir={i18n.language === "ar" ? "rtl" : "ltr"}  className="w-full flex-col justify-center lg:items-start items-center gap-10 inline-flex">
                  <div className="w-full flex-col justify-center items-start gap-8 flex">
                    <div className="w-full flex-col justify-start lg:items-start items-center gap-3 flex">
                    <h2 className="font-display bg-clip-text text-[30px] lg:text-4xl  font-[600] text-primary">
                    {t("Key_Features")}   
                      </h2>
                      <p className="text-text_color text-base font-normal sm:text-center leading-relaxed lg:text-start ">
                      {t("Description")}   
                      </p>
                    </div>
                    <div className="w-full lg:justify-start justify-center items-center sm:gap-10 gap-5 inline-flex">
                      <div className="flex-col justify-start items-start inline-flex">
                        <h3 className="text-text_color text-4xl font-bold font-manrope leading-normal">5+</h3>
                        <h6 className="text-sub_text text-base font-normal leading-relaxed">  {t("features_Experience")}   </h6>
                      </div>
                      <div className="flex-col justify-start items-start inline-flex">
                        <h4 className="text-text_color text-4xl font-bold font-manrope leading-normal">10+</h4>
                        <h6 className="text-sub_text text-base font-normal leading-relaxed"> {t("Successful_Projects")} </h6>
                      </div>
                      <div className="flex-col justify-start items-start inline-flex">
                        <h4 className="text-text_color text-4xl font-bold font-manrope leading-normal">9+</h4>
                        <h6 className="text-sub_text text-base font-normal leading-relaxed"> {t("Happy_Clients")} </h6>
                      </div>
                    </div>
                  </div>
                  <Link to={"/Our-features"} className="sm:w-fit w-full px-3.5 py-2 bg-primary hover:bg-hover active:bg-active transition-all duration-700 ease-in-out rounded-lg shadow-[0px_1px_2px_0px_rgba(16,_24,_40,_0.05)] justify-center items-center flex">
                    <span className="px-1.5 text-white text-sm font-medium leading-6">{t("Read_More")}</span>
                  </Link>
                </div>
              </div>
            </div>
          </section>

      
        </div>
      </div>
    </>
  );
};

export default Our_features;
