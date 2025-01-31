import React from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import website from "../../src/assets/images/world-wide-web.png";
import app from "../../src/assets/images/mobile-application.png";
import system from "../../src/assets/images/feature.png";

const Course_package = () => {
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
            {t("course_packages_pricing")}{" "}
          </h2>
          <div className="mx-auto mb-8 mt-4 max-w-[528px] md:mb-12 lg:mb-16">
            <p className="md:text-lg text-sm text-sub_text">
              {t("Choose_the_Right_Course_Package")}{" "}
            </p>
          </div>
        </div>
        <div
          dir={i18n.language === "ar" ? "rtl" : "ltr"}
          className="mx-auto grid  grid-cols-1 gap-8 lg:grid-cols-3 sm:grid-cols-2 lg:gap-8"
        >
          {/* Product Type 1 */}
          <div className="rounded-3xl p-8 xl:p-10  ring-1 ring-white/10">
            <div className="flex items-center justify-between gap-x-4">
              <h2
                id="product1"
                className="text-lg font-semibold leading-8 text-white"
              >
                {t("basic_package")}
              </h2>
            </div>
            {/* <p className="mt-4 text-sm leading-6 text-gray-300">Product details for Product Type 1</p> */}
            <p className="mt-6 flex items-baseline gap-x-1">
              <span className="text-4xl font-bold tracking-tight text-white">
                $120
              </span>
            </p>
            <Link
              to="/Contact-us"
              aria-describedby="product1"
              className="mt-6 block rounded-md py-2 px-3 text-center text-sm font-semibold leading-6 bg-white/10 text-white hover:bg-white/20 focus-visible:outline-white"
            >
              {" "}
              {t("Order_now")}{" "}
            </Link>
            <ul
              role="list"
              className="mt-8 space-y-3 text-sm leading-6 text-gray-300 xl:mt-10"
            >
              <li className="flex gap-x-3">✔ {t("business_development")} </li>
              <li className="flex gap-x-3">✔ {t("canva_basic_steps")} </li>
              <li className="flex gap-x-3">
                ✔ {t("certified_attendance_certificate_awarded")}{" "}
              </li>
              <li className="flex gap-x-3">
                ✔ {t("discounts_for_groups")}{" "}
              </li>   <li className="flex gap-x-3">
                ✔ {t("case_study")}{" "}
              </li>
          
            </ul>
          </div>
          {/* Product Type 2 */}
          <div className="rounded-3xl p-8 xl:p-10 bg-white/5 ring-2 ring-primary">
            <div className="flex items-center justify-between gap-x-4">
              <h2
                id="product2"
                className="text-lg font-semibold leading-8 text-white"
              >
                {t("standard_package")}
              </h2>
              <p className="rounded-full bg-primary px-2.5 py-1 text-xs font-semibold leading-5 text-white">
                {t("most_popular")}
              </p>
            </div>
            <p className="mt-6 flex items-baseline gap-x-1">
              <span className="text-4xl font-bold tracking-tight text-white">
                $150

              </span>
            </p>
            <Link
              to="/Contact-us"
              aria-describedby="product2"
              className="mt-6 block rounded-md py-2 px-3 text-center text-sm font-semibold leading-6 bg-primary text-white shadow-sm hover:bg-hover active:bg-active"
            >
              {t("Order_now")}
            </Link>
            <ul
              role="list"
              className="mt-8 space-y-3 text-sm leading-6 text-gray-300 xl:mt-10"
            >
              <li className="flex gap-x-3">✔ {t("steps_of_creating_research_and_presentations")} </li>
              <li className="flex gap-x-3">✔ {t("ai_search_engines")}</li>
              <li className="flex gap-x-3">
                ✔ {t("certified_attendance_certificate_awarded")}{" "}
              </li>
              <li className="flex gap-x-3">
                ✔ {t("discounts_for_groups")}
              </li>
              <li className="flex gap-x-3">✔ {t("case_study")}</li>
            </ul>
          </div>
          <div className="rounded-3xl p-8 xl:p-10  ring-1 ring-white/10">
            <div className="flex items-center justify-between gap-x-4">
              <h2
                id="product1"
                className="text-lg font-semibold leading-8 text-white"
              >
                {t("advanced_package")}
              </h2>
            </div>
            {/* <p className="mt-4 text-sm leading-6 text-gray-300">Product details for Product Type 1</p> */}
            <p className="mt-6 flex items-baseline gap-x-1">
              <span className="text-4xl font-bold tracking-tight text-white">
                $300
              </span>
            </p>
            <Link
              href="/Contact-us"
              aria-describedby="product1"
              className="mt-6 block rounded-md py-2 px-3 text-center text-sm font-semibold leading-6 bg-white/10 text-white hover:bg-white/20 focus-visible:outline-white"
            >
              {t("Order_now")}
            </Link>
            <ul
              role="list"
              className="mt-8 space-y-3 text-sm leading-6 text-gray-300 xl:mt-10"
            >
              <li className="flex gap-x-3">✔ {t("innovation_concept_method_and_tools")}</li>
              <li className="flex gap-x-3">✔ {t("business_model_canvas")} </li>
              <li className="flex gap-x-3">
                ✔ {t("financial_system")}{" "}
              </li>

              <li className="flex gap-x-3">
                ✔ {t("certified_attendance_certificate_awarded")}{" "}
              </li>
              <li className="flex gap-x-3">✔{t("discounts_for_groups")} </li>
              <li className="flex gap-x-3">✔ {t("case_study")} </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Course_package;
