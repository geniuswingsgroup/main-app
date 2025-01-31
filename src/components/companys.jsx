import React from "react";
import first_comapny from "../assets/images/Aland_Service_company.png";
import second_comapny from "../assets/images/Easyclaim.png";
import third_comapny from "../assets/images/FEIN-Logo-500x490.jpg";
import fourth_comapny from "../assets/images/NIT.png";
import fifth_comapny from "../assets/images/SAP.png";
import sixth_comapny from "../assets/images/db.png";
import { useTranslation } from "react-i18next";

const Companys = () => {
    const { t, i18n } = useTranslation();
  
  return (
    <section style={{
      
      fontFamily: i18n.language === 'ar' ? 'Cairo, sans-serif' : '', // Default font when language is not Arabic
    }}  className="py-[80px] p-4 mb-[50px] bg-[#1e1e1e]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto w-full mb-[100px] text-center">
          <h2 className="font-display h-[60px] text-[30px] lg:text-5xl md:text-5xl font-[600] text-transparent bg-clip-text bg-primary">
          {t("Our_Partners")}           </h2>
          <div className="mx-auto mb-8 mt-4 max-w-[528px] md:mb-12 lg:mb-16">
            <p className="md:text-lg text-sm text-sub_text">
            {t("Our_Partners_Description")}               </p>
          </div>
        </div>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 xl:grid-cols-3">
          <div className="flex justify-center items-center border border-solid border-[#313131] hover:border-primary duration-[0.7s] shadow-sm h-24 rounded-2xl">
            <img src={first_comapny} className="h-[200px]" alt="" />
          </div>
          <div className="flex justify-center items-center border border-solid border-[#313131] hover:border-primary duration-[0.7s] shadow-sm h-24 rounded-2xl">
            <img src={second_comapny} className="h-[150px]" alt="" />
          </div>
          <div className="flex justify-center items-center border border-solid border-[#313131] hover:border-primary duration-[0.7s] shadow-sm h-24 rounded-2xl">
            <img src={third_comapny} className="h-[60px] rounded-[8px]" alt="" />
          </div>
          <div className="flex justify-center items-center border border-solid border-[#313131] hover:border-primary duration-[0.7s] shadow-sm h-24 rounded-2xl">
            <img src={fourth_comapny} className="h-[110px] rounded-[8px]" alt="" />
          </div>
          <div className="flex justify-center items-center border border-solid border-[#313131] hover:border-primary duration-[0.7s] shadow-sm h-24 rounded-2xl">
            <img src={fifth_comapny} className="h-[50px] rounded-[8px]" alt="" />
          </div>
          <div className="flex justify-center items-center border border-solid border-[#313131] hover:border-primary duration-[0.7s] shadow-sm h-24 rounded-2xl">
            <img src={sixth_comapny} className="h-[120px] rounded-[8px]" alt="" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Companys;
