import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

const Courses = ({ data }) => {
  const [itemsToShow, setItemsToShow] = useState(8);

  useEffect(() => {
    const handleResize = () => {
      const is2xl = window.matchMedia("(min-width: 1536px)").matches;
      const is1280to1024 = window.matchMedia("(min-width: 1024px) and (max-width: 1280px)").matches;
      const isUnder568 = window.matchMedia("(max-width: 640px)").matches;
      
      setItemsToShow(is2xl ? 5 : is1280to1024 ? 3 : isUnder568 ? 2 : 4);
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
      <div className="flex justify-center w-full p-4 pt-[70px] md:px-10  bg-[#1E1E1E]">
        <div className="mx-auto 2xl:max-w-[1600px] md:max-w-[1270px]">
          <div style={{
      
      fontFamily: i18n.language === 'ar' ? 'Cairo, sans-serif' : '', // Default font when language is not Arabic
    }} className="mx-auto w-full mb-[100px] text-center">
            <h2 className="font-display h-[60px] text-[30px] lg:text-5xl md:text-5xl font-[600] text-transparent bg-clip-text bg-primary">
            {t("Courses")}  
            </h2>
            <div className="mx-auto mb-8 mt-4 max-w-[528px] md:mb-12 lg:mb-16">
              <p className="md:text-lg text-sm text-sub_text">
              {t("Courses_Description")}  

              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-5 xl:grid-cols-4 gap-8">
            {/* Product 1 */}

            {data.slice(0, itemsToShow).map((course) => (
              <Link
                key={course._id}
                to={`Course-detail/${course._id}`}
                className="relative bg-cover group w-full rounded-3xl border border-[#313131] hover:border-primary duration-[0.7s]  bg-center overflow-hidden mx-auto sm:mr-0 xl:mx-auto cursor-pointer"
              >
                <img
                  className="rounded-2xl w-full object-fill"
                  src={course.image}
                  alt="Jacket image"
                />
                <div className="absolute z-10 bottom-3 left-0 mx-3 p-3 bg-[#2e2d2d] w-[calc(100%-24px)] border border-[#4b4a4a] rounded-xl shadow-sm shadow-transparent transition-all duration-500  group-hover:bg-bg-[#313131]">
                  <div className="flex gap-2 items-start justify-between ">
                    <h6 className="font-semibold max-w-[80%] break-words text-base leading-7 line-clamp-2 text-text_color">
                      {course.name}
                    </h6>
                    <h6 className=" text-base whitespace-nowrap leading-7 text-transparent bg-clip-text bg-primary text-right">
                      {course.price} IQD
                    </h6>
                  </div>
            <div className="">

            {course.Available ? (
                    <p className="text-xs leading-5 text-green-500 ">
                      Available
                    </p>
                  ) : (
                    <p className="text-xs leading-5 text-red-500 ">
                      Not Available
                    </p>
                  )}
            </div>
                </div>
              </Link>
            ))}
          </div>

          <Link
            to={"/courses"}
            dir="rtl"
            className="mt-[20px] text-sub_text flex gap-1 items-center hover:text-primary"
          >
            <svg
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
            <p style={{
      
      fontFamily: i18n.language === 'ar' ? 'Cairo, sans-serif' : '', // Default font when language is not Arabic
    }} >{t("Show_More")}  
            </p>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Courses;
