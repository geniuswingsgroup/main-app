import React from "react";
import image from "../assets/images/about-us.jpg";
import second_image from "../assets/images/about-us1.jpg";
import aa from "../assets/images/about-us.jpg";
import Mohammed from "../assets/images/Mohammed hamza.jpg";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

const Projects = ({ data }) => {
  const { t, i18n } = useTranslation();

  return (
    <>
      <section className="pt-[120px] p-4 bg-[#1e1e1e]">
        <div className="mx-auto  2xl:max-w-[1600px] md:max-w-[1270px]  ">
          <div className="flex justify-center items-center gap-y-8 lg:gap-y-0 flex-wrap md:flex-wrap lg:flex-nowrap lg:flex-row lg:justify-between lg:gap-x-8 max-w-sm sm:max-w-2xl lg:max-w-full mx-auto">
            <div
              style={{
                fontFamily: i18n.language === "ar" ? "Cairo, sans-serif" : "", // Default font when language is not Arabic
              }}
              className="w-full lg:block hidden lg:w-2/5"
            >
              <div>
                <span className="text-sm text-transparent bg-clip-text bg-primary font-[500]  block">
                  Genius Wings
                </span>
                <h2 className="text-4xl font-[500] text-text_color leading-[3.25rem] lg:mb-3 mb-8">
                  {t("Our_Work")}{" "}
                  <span className="text-transparent bg-clip-text bg-primary">
                    {t("Portfolio")}{" "}
                  </span>
                </h2>
              </div>
              <p className="text-sub_text mb-7 lg:flex hidden text-base font-normal leading-relaxed lg:text-start ">
                {t("Our_Work_Description")}
              </p>
              <div className="flex items-center justify-center lg:justify-start ">
                <button
                  id="slider-button-left"
                  className="swip-button-prev group flex justify-center items-center border mr-3 border-solid   border-primary hover:bg-primary active:bg-active min-w-12 h-12 transition-all duration-500 rounded-lg"
                  data-carousel-next
                >
                  <svg
                    className="h-6 w-6 text-primary group-hover:text-white"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M20.9999 12L4.99992 12M9.99992 6L4.70703 11.2929C4.3737 11.6262 4.20703 11.7929 4.20703 12C4.20703 12.2071 4.3737 12.3738 4.70703 12.7071L9.99992 18"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </button>
                <button
                  id="slider-button-right"
                  className="swip-button-prev group flex justify-center items-center border mr-3 border-solid   border-primary hover:bg-primary active:bg-active min-w-12 h-12 transition-all duration-500 rounded-lg"
                  data-carousel-next
                >
                  <svg
                    className="h-6 w-6 text-primary group-hover:text-white"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M3 12L19 12M14 18L19.2929 12.7071C19.6262 12.3738 19.7929 12.2071 19.7929 12C19.7929 11.7929 19.6262 11.6262 19.2929 11.2929L14 6"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </button>
              </div>
            </div>
{/* show just in phone */}
            <div className="lg:hidden "   style={{
                fontFamily: i18n.language === "ar" ? "Cairo, sans-serif" : "", // Default font when language is not Arabic
              }}>
               
             
                <h2 className="font-display h-[60px] text-[30px] lg:text-5xl md:text-5xl font-[600] text-transparent bg-clip-text bg-primary">
              {t("Our_Work")} {" "} {t("Portfolio")} 
            </h2>

              </div>

            <div className="w-full lg:w-3/5">
              <Swiper
                spaceBetween={30}
                slidesPerView={1}
                navigation={{
                  nextEl: "#slider-button-right",
                  prevEl: "#slider-button-left",
                }}
                // pagination={{
                //   clickable: true,
                // }}
                autoplay={{
                  delay: 2500,
                  disableOnInteraction: false,
                }}
                breakpoints={{
                  768: {
                    slidesPerView: 2,
                    spaceBetween: 25,
                  },
                  1024: {
                    slidesPerView: 2,
                    spaceBetween: 25,
                  },
                }}
                modules={[Autoplay, Navigation, Pagination]} // Add modules here
              >
                {data.map((project) => {
                  return (
                    <SwiperSlide key={`${project._id}-${project.name}`}>
                      <a
                        href={project.url ? project.url : null}
                        className="swiper-slide group bg-[#242323] border border-solid border-[#383838] rounded-2xl w-full p-4 hover:border-primary"
                      >
                        <div className="flex flex-col gap-5 w-full">
                          <img
                            className="w-full rounded-[10px] object-fill max-h-[300px]"
                            src={project.image}
                            alt="Project"
                          />
                          <div className="grid w-full">
                            <h5 className="text-primary text-lg font-[600]">
                              {project.name}
                            </h5>
                            <div className="flex flex-col gap-1">
                              <p
                                style={{
                                  fontFamily:
                                    i18n.language === "ar"
                                      ? "Cairo, sans-serif"
                                      : "", // Default font when language is not Arabic
                                }}
                                className="font-medium text-text_color text-sm"
                              >
                                {t("Developed_By")}{" "}
                              </p>
                              <div className="flex flex-wrap gap-2">
                                {project.TeamWork.map((users, index) => {
                                  return (
                                    <div key={`${users.user?._id || index}`}>
                                      <p className="break-words text-sm leading-3 max-w-full w-full text-sub_text">
                                        {users?.user?.name || "Unknown"}
                                        {index <
                                          project.TeamWork.length - 1 && (
                                          <span className="text-sub_text">
                                            ,{" "}
                                          </span>
                                        )}
                                      </p>
                                    </div>
                                  );
                                })}
                              </div>
                            </div>
                          </div>
                        </div>
                      </a>
                    </SwiperSlide>
                  );
                })}
              </Swiper>
            </div>
          </div>
          <Link
            style={{
              fontFamily: i18n.language === "ar" ? "Cairo, sans-serif" : "", // Default font when language is not Arabic
            }}
            to={"/Our-Projects"}
            dir="rtl"
            className="mt-[17px] flex gap-1 text-sub_text items-center hover:text-primary "
          >
            {" "}
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
            <p> {t("Show_More")} </p>
          </Link>
        </div>
      </section>
    </>
  );
};

export default Projects;
