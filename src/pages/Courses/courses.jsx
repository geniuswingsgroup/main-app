import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Footer from "../../components/layouts/footer";
import Loader from "../Loader";
import { useDispatch, useSelector } from "react-redux";
import {
  course_filter,
  course_get,
  course_search,
  gte_value,
  keyword_value,
  lte_value,
} from "../../Redux/Actions/Course-action";
import Box from "@mui/material/Box";
import Slider from "@mui/material/Slider";
import PaginationComponent from "./page";
import { Helmet } from "react-helmet-async";
import Search_loader from "../../components/search-loading";
import { useTranslation } from "react-i18next";

function valuetext(value) {
  return `${value}°C`;
}

const minDistance = 10;
const AllCourses = () => {
  const [courses, setCourses] = useState([]);
  const [loading, setLoading] = useState(true);
  const [SearchLoading, setSearchLoading] = useState(false);

  const [error, setError] = useState(null);

  const [searchKeyword, setSearchKeyword] = useState("");
  const [gteFilter, setGteFilter] = useState(0);
  const [lteFilter, setLteFilter] = useState(0);

  const Course_data = useSelector((state) => state.course.Course_data);

  const total_courses = useSelector((state) => state.course.total_data);
  const { t, i18n } = useTranslation();

  //end filtering data
  useEffect(() => {
    setCourses(Course_data);
  }, [Course_data]);

  const dispatch = useDispatch();
  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      await dispatch(course_get());
      setLoading(false);
    };
    fetchData();
  }, [dispatch]);

  const searchSubmit = async () => {
    setSearchLoading(true);
    await dispatch(course_search(searchKeyword,gteFilter, lteFilter));
    setSearchLoading(false);
    dispatch(keyword_value(searchKeyword));

    // Set loading to false after dispatch
  };

  const filterSubmit = async () => {
    setLoading(true);
    await dispatch(course_filter(searchKeyword,gteFilter, lteFilter));
    setLoading(false);
    dispatch(gte_value(gteFilter));
    dispatch(lte_value(lteFilter));

    // Set loading to false after dispatch
  };
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  if(SearchLoading){
    return <Search_loader/>
  }
  return (
    <div>
      <Helmet>
  {/* Basic Meta Tags */}
  <title>Courses - Genius Wings</title>
  <meta
    name="description"
    content="Explore a wide range of professional courses offered by Genius Wings Company. Enhance your skills with expert-led courses in web development, business management, and more."
  />
  <meta
    name="keywords"
    content="courses, professional courses, web development courses, business management courses, learn new skills, Genius Wings"
  />
  <meta name="robots" content="index, follow" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />

  {/* Open Graph Tags */}
  <meta property="og:title" content="Courses - Genius Wings Company" />
  <meta
    property="og:description"
    content="Browse our collection of professional courses at Genius Wings Company. Learn web development, business management, and other valuable skills to boost your career."
  />
  <meta
    property="og:image"
    content="http://genius-wings.com/images/Brand-Logo.png"
  />
  <meta property="og:url" content="http://genius-wings.com/Courses" />
  <meta property="og:type" content="website" />
  <meta property="og:site_name" content="Genius Wings Company" />

  {/* Twitter Card Tags */}
  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:title" content="Courses - Genius Wings Company" />
  <meta
    name="twitter:description"
    content="Join our professional courses and enhance your skills in web development, business management, and more. Offered by Genius Wings Company."
  />
  <meta
    name="twitter:image"
    content="http://genius-wings.com/images/Brand-Logo.png"
  />
  <meta name="twitter:url" content="http://genius-wings.com/Courses" />

  {/* Canonical Tag */}
  <link rel="canonical" href="http://genius-wings.com/Courses" />

  {/* Structured Data */}
  <script type="application/ld+json">
    {`
      {
        "@context": "https://schema.org",
        "@type": "WebPage",
        "name": "Courses",
        "description": "Explore professional courses in web development, business management, and more at Genius Wings Company.",
        "url": "http://genius-wings.com/Courses",
        "image": "http://genius-wings.com/images/Brand-Logo.png"
      }
    `}
  </script>
</Helmet>

      {loading ? (
        <Loader />
      ) : (
        <div className="min-h-screen bg-background_color md:pt-5  pt-1  flex flex-col justify-between">
          <div className="pt-[70px] mx-auto w-full main-freeLancer-container">
            <div className="w-full md:h-[250px] flex  flex-col justify-center details-cover h-[180px] ">
              <div className="flex justify-center w-full  items-center">
                <div className="flex flex-col mx-[50px]  w-full items-center gap-4">
                  <h1 style={{
      
      fontFamily: i18n.language === 'ar' ? 'Cairo, sans-serif' : '', // Default font when language is not Arabic
    }} className="text-white font-[300] md:text-[22px] text-[18px] text-center">
                  {t("Explore_Courses")}                     </h1>
                  <div className="searchbar ">
                    <form onSubmit={searchSubmit} className="searchbar-wrapper">
                      <div className="searchbar-left flex gap-2 px-[13px]">
                        <button
                          type="submit"
                          className="search-icon-wrapper pt-1"
                        >
                          <span className="search-icon searchbar-icon">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 24 24"
                            >
                              <path d="M15.5 14h-.79l-.28-.27A6.471 6.471 0 0 0 16 9.5 6.5 6.5 0 1 0 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"></path>
                            </svg>
                          </span>
                        </button>
                        <div className="bg-gray-300  h-[20px]  w-[1px]"></div>
                      </div>

                      <div
                        onClick={toggleDropdown}
                        className="searchbar-center "
                      >
                        <div className="searchbar-input-spacer"></div>
                        <input
                          type="text"
                          className="searchbar-input main-freeLancer-container-text active:outline-none active:border-none active:ring-none focus:outline-none focus:border-none focus:ring-none input_add_freelancer"
                          maxLength="2048"
                          name="q"
                          autoCapitalize="off"
                          autoComplete="off"
                          title="Search"
                          role="combobox"
                          placeholder=   {t("Search")}   
                          value={searchKeyword}
                          required
                          onChange={(e) => {
                            setSearchKeyword(e.target.value);
                          }}
                          style={{
                            outline: "none",
                            border: "none",
                            boxShadow: "none",
                          }}
                        />
                      </div>
                    </form>

                    {/* Dropdown div */}
                  </div>
                </div>
              </div>
            </div>

            <div
  dir={i18n.language === "ar" ? "rtl" : "ltr"}
  style={{
    fontFamily: i18n.language === 'ar' ? 'Cairo, sans-serif' : '', // Default font when language is not Arabic
  }}
  className="flex w-full md:absolute justify-center z-10"
>
  {isDropdownOpen && (
    <div className="freelance-filter mx-[16px] border border-[#2c2c2c] bg-[#242424] w-full sm:w-[90%] max-w-[600px] max-h-[160px] overflow-hidden md:mt-[-50px] mt-[14px] rounded-xl">
      <div className="flex text-text_color flex-end">
        <div className="flex w-full flex-col mx-[20px]">
          <div className="flex min-w-full my-[20px] max-h-[100px]  justify-center gap-[30px]">
            <div className="grid w-full gap-6 mb-6 sm:grid-cols-1">
              <div>
                <p className="text-xs sm:text-sm">{t("price")}</p>
                <hr className="mb-[20px] w-[95%] mt-1" />
                <form
                  onSubmit={filterSubmit}
                  className="mt-6 flex  items-center text-xs sm:text-sm   gap-3 max-w-[90%] mx-4"
                >
                  {t("from")}
                  <input
                    value={gteFilter}
                    className="block min-w-[30px] h-[30px] p-1 w-full text-xs sm:text-sm focus:border-[#494949] focus:ring-0 text-text_color border border-[#494949] rounded-lg bg-[#333333] dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400"
                    onChange={(e) => setGteFilter(e.target.value)}
                    type="number"
                  />
                  {t("to")}
                  <input
                    value={lteFilter}
                    className="block min-w-[30px] h-[30px] p-1 w-full text-xs sm:text-sm focus:border-[#494949] focus:ring-0 text-text_color border border-[#494949] rounded-lg bg-[#333333] dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400"
                    onChange={(e) => setLteFilter(e.target.value)}
                    type="number"
                  />
                  <button className="bg-primary hover:bg-hover active:bg-active text-white px-3 py-1 ml-2 rounded-md h-[30px] text-xs sm:text-sm">
                    {t("filter")}
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )}
</div>


            <div
              onClick={() => {
                setIsDropdownOpen(false);
              }}
              className="max-w-[1570px]   md:p-4 my:px-0 pt-4 freelance-div justify-center mx-auto "
            >
          <div className="flex justify-center min-w-[100%] md:pt-[50px] px-4">
  <div className="main-freeLancer-container main-freeLancer-details-container min-w-[100%] flex justify-center gap-[40px]">
    <div className="flex flex-col min-w-[100%]">
      <div className="grid grid-cols-1 2xl:grid-cols-4 xl:grid-cols-3 md:grid-cols-2 max-w-[1700px] gap-4 min-w-[100%]">
        {courses.map((data) => {
          return (
            <div key={data._id} className="swiper-slide">
              <Link to={`/Course-detail/${data._id}`} key={data._id}>
                <div
                  className="  border-[#2c2c2c]   bg-[#242424] flex justify-between border flex-col rounded-xl p-6 transition-all duration-500 w-full mx-auto hover:border-primary hover:shadow-md"
                  style={{ minHeight: "400px", maxHeight: "400px" }}
                >
                  <div className="flex-grow max-w-full">
                    <div className="flex justify-between  w-full items-start mb-3 gap-2 transition-all duration-500">
                      <span className="text-text_color font-semibold break-words max-w-[90%]">
                        {data.name}
                      </span>
                      <span className="text-primary whitespace-nowrap font-semibold">
                        {data.price} IDQ
                      </span>
                    </div>
                    <p className="text-[13px] overflow-hidden sm:min-h-[70px] min-h-[60px] sm:text-[15px] text-sub_text line-clamp-3 break-words duration-500 mb-4">
                      {data.description}
                    </p>
                  </div>
                  <div className="flex items-center justify-center max-w-full">
                    <img
                      className="rounded-lg object-fill"
                      style={{ height: "200px", width: "100%" }}
                      src={data.image}
                      alt={`${data.name} image`}
                    />
                  </div>
                </div>
              </Link>
            </div>
          );
        })}
      </div>
      <p className="text-center text-text_color my-[50px]">
        {courses.length <= 0
          ? "We're sorry, but it seems there is no data available at the moment. Please check back later or contact us if you believe this is an error."
          : null}
      </p>
    </div>
  </div>
</div>

            </div>
          </div>

          {total_courses > 12 && courses.length > 0 ? (
            <div className="freelancer-pagination mb-[30px] mt-[-80px]  flex justify-center   ">
              <PaginationComponent />
            </div>
          ) : null}

          <Footer />
        </div>
      )}
    </div>
  );
};

export default AllCourses;
