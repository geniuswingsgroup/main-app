import React, { useEffect, useState } from "react";
import aa from "../../assets/images/about-us.jpg";
import { Link } from "react-router-dom";
import Footer from "../../components/layouts/footer";
import Loader from "../Loader";
import { Helmet } from "react-helmet-async";
import { useTranslation } from "react-i18next";

const Allprojects = () => {
  const [Projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [total_data, setTotal_data] = useState();

  const [error, setError] = useState(null);
  const apiUrl = process.env.REACT_APP_API_URL;
  const { t, i18n } = useTranslation();

  const [pagination, setPagination] = useState({
    currentPage: 1,
    numberOfPages: 1,
  });
  // Fetch Projects from the API
  const fetchProjects = async (page = 1) => {
    setLoading(true); // Set loading state before fetching
    setError(null); // Reset error state before fetching
    try {
      const response = await fetch(`${apiUrl}/project?page=${page}&limit=12`);

      // Check for successful response
      if (!response.ok) {
        throw new Error("Failed to fetch projects.");
      }

      const data = await response.json();
      setProjects(data.data);
      setPagination(data.paginationResult);
      setTotal_data(data.results)
    } catch (err) {
      setError("Failed to load courses.");
    } finally {
      setLoading(false); // Set loading state to false after fetching
    }
  };
  useEffect(() => {
    fetchProjects(pagination.currentPage);
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
  <title>Our Projects - Genius Wings Company</title>
  <meta
    name="description"
    content="Discover the innovative projects by Genius Wings Company. From web development to business management solutions, explore our successful projects and see how we bring ideas to life."
  />
  <meta
    name="keywords"
    content="our projects, Genius Wings projects, web development projects, business management solutions, innovative projects, successful projects"
  />
  <meta name="robots" content="index, follow" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />

  {/* Open Graph Tags */}
  <meta property="og:title" content="Our Projects - Genius Wings Company" />
  <meta
    property="og:description"
    content="Explore the successful and innovative projects carried out by Genius Wings Company. Learn about our web development, business solutions, and more."
  />
  <meta
    property="og:image"
    content="http://genius-wings.com/images/Brand-Logo.png"
  />
  <meta property="og:url" content="http://genius-wings.com/Our-Projects" />
  <meta property="og:type" content="website" />
  <meta property="og:site_name" content="Genius Wings Company" />

  {/* Twitter Card Tags */}
  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:title" content="Our Projects - Genius Wings Company" />
  <meta
    name="twitter:description"
    content="Explore the portfolio of Genius Wings Company and learn about our innovative projects in web development and business management solutions."
  />
  <meta
    name="twitter:image"
    content="http://genius-wings.com/images/Brand-Logo.png"
  />
  <meta name="twitter:url" content="http://genius-wings.com/Our-Projects" />

  {/* Canonical Tag */}
  <link rel="canonical" href="http://genius-wings.com/Our-Projects" />

  {/* Structured Data */}
  <script type="application/ld+json">
    {`
      {
        "@context": "https://schema.org",
        "@type": "WebPage",
        "name": "Our Projects",
        "description": "Explore the innovative and successful projects delivered by Genius Wings Company, including web development, business management, and more.",
        "url": "http://genius-wings.com/Our-Projects",
        "image": "http://genius-wings.com/images/Brand-Logo.png"
      }
    `}
  </script>
</Helmet>

      {loading ? (
        <Loader />
      ) : (
        <div className="pt-[70px]">
        <div className=" justify-center w-full p-4 py-16 md:px-10 md:py-16 to-blue-100">
          <div className="mx-auto 2xl:max-w-[1800px] md:max-w-[1270px] sm:px-6 lg:px-8">
            <div  style={{
      
      fontFamily: i18n.language === 'ar' ? 'Cairo, sans-serif' : '', // Default font when language is not Arabic
    }}  className="mx-auto w-full mb-[100px] text-center">
              <h2 className="font-display h-[60px] text-[30px] lg:text-5xl md:text-5xl font-[600] text-primary">
              {t("Our_Projects")} 
              </h2>
              <div className="mx-auto mb-8 mt-4 max-w-[528px] md:mb-12 lg:mb-16">
                <p className="md:text-lg text-sm text-text_color">
                {t("Projects_Description")} 
                </p>
              </div>
            </div>
      
            <div className="grid grid-cols-1  duration-[0.7s] sm:grid-cols-2 2xl:grid-cols-4 lg:grid-cols-3 gap-6 mt-7 mb-8">
              {Projects.map((project) => {
                return (
                  <a key={project._id}
                    href={project.url ? project.url : null}
                    className="swiper-slide group  border border-[#2c2c2c]   bg-[#242424] rounded-2xl w-full p-4 hover:border-primary duration-[0.7s]"
                  >
                    <div className="flex flex-col gap-5">
                      <img
                            className=" w-full rounded-[10px] object-fill max-h-[200px]"
                            src={project.image}
                        alt="Ghaith Adnan"
                      />
                      <div className="grid">
                        <h5 className=" max-w-full break-words text-lg text-primary font-[500]">{project.name}</h5>
      
                        <div className="flex flex-col  gap-1">
                          <p className="font-medium text-sub_text text-sm"  style={{
      
      fontFamily: i18n.language === 'ar' ? 'Cairo, sans-serif' : '', // Default font when language is not Arabic
    }} >   {t("Developed_By")}  </p>
                          <div className="flex flex-wrap gap-2 text-transparent bg-clip-text bg-primary">
                          {project.TeamWork.map((users, index) => {
  return (
    <div key={`${users.user?._id || index}`}>
      <p className="break-words text-sm leading-3 max-w-full w-full text-sub_text">
        {users?.user?.name || "Unknown"}
        {index < project.TeamWork.length - 1 && <span className="text-sub_text">, </span>}
      </p>
    </div>
  );
})}

                          </div>
                        </div>
                      </div>
                    </div>
                  </a>
                );
              })}
            </div>
            {
           total_data>12&&Projects.length>0?
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
             className="px-4 py-2 mx-2  rounded-md disabled:opacity-50 bg-primary text-text_color hover:text-white"
           >
             Next
           </button>
         </div>
              :null
            }
    
          
          </div>
        </div>
      </div>
      
      )}

      <Footer />
    </div>
  );
};

export default Allprojects;
