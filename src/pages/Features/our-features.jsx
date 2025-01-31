import React, { useEffect, useState } from "react";
import Footer from "../../components/layouts/footer";
import Cookies from "js-cookie";
import axios from "axios";
import toast from "react-hot-toast";
import Loader from "../Loader";
import { Helmet } from "react-helmet-async";
import { useTranslation } from "react-i18next";

const All_features = () => {
  const [Features, setFeatures] = useState([]); // Initialize as empty array
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [total_data, setTotal_data] = useState();
  const { t, i18n } = useTranslation();

  const [pagination, setPagination] = useState({
    currentPage: 1,
    numberOfPages: 1,
  });
  const apiUrl = process.env.REACT_APP_API_URL;

  // Fetch courses from the API
  const fetchData = async (page = 1) => {
    setLoading(true); // Set loading state before fetching
    setError(null); // Reset error state before fetching
    try {
      const response = await fetch(`${apiUrl}/feature?page=${page}&limit=12`);

      // Check for successful response
      if (!response.ok) {
        throw new Error("Failed to fetch courses.");
      }

      const data = await response.json();
      setFeatures(data.data);
      setPagination(data.paginationResult);
      setTotal_data(data.results)

    } catch (err) {
      setError("Failed to load courses.");
    } finally {
      setLoading(false); // Set loading state to false after fetching
    }
  };
  useEffect(() => {
    fetchData(pagination.currentPage);
  }, [pagination.currentPage]);
  // Handle page change
  const handlePageChange = (page) => {
    if (page > 0 && page <= pagination.numberOfPages) {
      setPagination((prev) => ({ ...prev, currentPage: page }));
    }
  };
  return (
    <div className="flex flex-col bg-background_color justify-between min-h-screen">
   <Helmet>
  {/* Basic Meta Tags */}
  <title>Our Features - Genius Wings Company</title>
  <meta
    name="description"
    content="Explore the innovative features offered by Genius Wings Company, including expert web development, app development, software solutions, professional Photoshop services, business development, and much more."
  />
  <meta
    name="keywords"
    content="our features, Genius Wings features, web development, app development, software development, business development, Photoshop services, innovative features, professional solutions"
  />
  <meta name="robots" content="index, follow" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />

  {/* Open Graph Tags */}
  <meta property="og:title" content="Our Features - Genius Wings Company" />
  <meta
    property="og:description"
    content="Discover the powerful features that set Genius Wings Company apart, from web and app development to business solutions, software services, and professional Photoshop capabilities."
  />
  <meta
    property="og:image"
    content="http://genius-wings.com/images/Brand-Logo.png"
  />
  <meta property="og:url" content="http://genius-wings.com/Our-features" />
  <meta property="og:type" content="website" />
  <meta property="og:site_name" content="Genius Wings Company" />

  {/* Twitter Card Tags */}
  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:title" content="Our Features - Genius Wings Company" />
  <meta
    name="twitter:description"
    content="Learn about the diverse and innovative features of Genius Wings Company, including expert web and app development, software, Photoshop services, business development, and more."
  />
  <meta
    name="twitter:image"
    content="http://genius-wings.com/images/Brand-Logo.png"
  />
  <meta name="twitter:url" content="http://genius-wings.com/Our-features" />

  {/* Canonical Tag */}
  <link rel="canonical" href="http://genius-wings.com/Our-features" />

  {/* Structured Data */}
  <script type="application/ld+json">
    {`
      {
        "@context": "https://schema.org",
        "@type": "WebPage",
        "name": "Our Features",
        "description": "Explore the innovative and powerful features of Genius Wings Company, including web development, app development, software solutions, Photoshop services, and business development.",
        "url": "http://genius-wings.com/Our-features",
        "image": "http://genius-wings.com/images/Brand-Logo.png"
      }
    `}
  </script>
</Helmet>


    {loading ? (
      <Loader />
    ) : (
      <div>
        <div className="pt-[100px]">
          <div className="flex justify-center w-full p-4 py-16 md:py-16 ">
            <div className="2xl:max-w-[1600px] md:max-w-[1200px]">
              <div style={{
      
      fontFamily: i18n.language === 'ar' ? 'Cairo, sans-serif' : '', // Default font when language is not Arabic
    }} className="mx-auto w-full mb-[100px] text-center">
                <h2 className="font-display h-[60px] text-[30px] lg:text-5xl md:text-5xl font-[600] text-transparent bg-clip-text bg-primary">
                {t("Our_Key_Features")}                </h2>
                <div className="mx-auto mb-8 mt-4 max-w-[528px] md:mb-12 lg:mb-16">
                  <p className="md:text-lg text-sm text-text_color">
                  {t("Key_Features_Description")}                   </p>
                </div>
              </div>

              <div className="flex flex-col  min-w-[100%]">
                    <div className="grid  grid-cols-1 2xl:grid-cols-4 xl:grid-cols-3  md:grid-cols-2 max-w-[1700px] gap-4 min-w-[100%]">
                      {Features.map((data) => {
                        return (
                          <div key={data._id} className="swiper-slide">
                          <div key={data._id}>
                            <div
                              className="group flex justify-between border border-[#2c2c2c]   bg-[#242424]  flex-col rounded-xl p-6 transition-all duration-500 w-full mx-auto hover:border-primary hover:shadow-md"
                              style={{ minHeight: "400px", maxHeight: "400px" }}
                            >
                              <div className="flex-grow max-w-full">
                                <div className="flex justify-between w-full items-center mb-3 gap-2 transition-all duration-500">
                                  
                                  <span className="text-primary break-words max-w-full font-semibold">
                                    {data.Title}
                                  </span>
                                </div>
                                <p className="text-[13px] overflow-hidden sm:min-h-[70px] min-h-[60px] sm:text-[15px] text-text_color line-clamp-3 break-words duration-500 mb-4">
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
                          </div>
                        </div>
                        );
                      })}
                    </div>
                    <p className="text-center my-[50px]">
                      {Features.length <= 0
                        ? " Were sorry, but it seems there is no data available at the moment. Please check back later or contact us if you believe this is an error"
                        : null}
                    </p>
                  </div>

              {total_data > 12 && Features.length > 0 ? (
                <div className="flex justify-center mt-8">
                <button
                  onClick={() => handlePageChange(pagination.currentPage - 1)}
                  disabled={pagination.currentPage === 1}
                  className="px-4 py-2 mx-2  rounded-md disabled:opacity-50 bg-primary  text-text_color  hover:text-white"
                  >
                  Previous
                </button>
                <span className="flex  text-text_color items-center justify-center text-lg mx-2">
                Page {pagination.currentPage} of {pagination.numberOfPages}
                </span>
                <button
                  onClick={() => handlePageChange(pagination.currentPage + 1)}
                  disabled={pagination.currentPage === pagination.numberOfPages}
                  className="px-4 py-2 mx-2  rounded-md disabled:opacity-50 bg-primary  text-text_color  hover:text-white"
                  >
                  Next
                </button>
              </div>
              ) : null}
            </div>
          </div>
        </div>
      </div>
    )}
    <Footer />
  </div>
  );
};

export default All_features;
