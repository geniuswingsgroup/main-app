import React, { useEffect, useState } from "react";
import Footer from "../../components/layouts/footer";
import { useParams } from "react-router-dom";
import axios from "axios";
import Error404 from "../error404-page";
import Loader from "../Loader";
import { Helmet } from "react-helmet-async";
import { useTranslation } from "react-i18next";

const TeamDetails = () => {
  const { id } = useParams();
  const [details, setDetails] = useState(null);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const apiUrl = process.env.REACT_APP_API_URL;
  const { t, i18n } = useTranslation();

  useEffect(() => {
    if (id) {
      // Fetch course details if courseId is available in the URL
      axios
        .get(`${apiUrl}/ourteam/${id}`)
        .then((response) => {
          if (response.data.data) {
            setDetails(response.data.data); // Set course details from API
          } else {
            setError("Course not found.");
          }
        })
        .catch(() => {
          setError("Failed to fetch course details.");
        })
        .finally(() => {
          setIsLoading(false); // Set loading state to false when data fetching is complete
        });
    }
  }, [id]);

  const handlePhoneClick = () => {
    window.open(`tel:+964${ details.user.phon_number}`);
  };

  const handleEmailClick = () => {
    window.open(`mailto:${details.user.email}`);
  };

  if (error) {
    return <Error404 />;
  }

  if (isLoading) {
    return <Loader />; // Show loader only when loading is true
  }

  if (!details) {
    return <Error404 />; // Show error if details are not found
  }

  return (
    <div   style={{
      
      fontFamily: i18n.language === 'ar' ? 'Cairo, sans-serif' : '', // Default font when language is not Arabic
    }} className="flex flex-col min-h-screen justify-between md:pt-7 pt-11 bg-[#1e1e1e]">
      <Helmet>
  {/* Basic Meta Tags */}
  <title>{`${details ? details.name : 'Team Member'} - Genius Wings Company`}</title>
  <meta
    name="description"
    content={`${details ? `${details.name}, ${details.job_title} at Genius Wings Company. Learn more about their experience, skills, and role at our company.` : 'Team member details at Genius Wings Company'}`}
  />
  <meta
    name="keywords"
    content={`${details ? `${details.name}, ${details.job_title}, team member, Genius Wings Company, professional details, experience, role` : 'team member, Genius Wings Company, about team'}`}
  />
  <meta name="robots" content="index, follow" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />

  {/* Open Graph Tags */}
  <meta property="og:title" content={`${details ? details.name : 'Team Member'} - Genius Wings Company`} />
  <meta
    property="og:description"
    content={`${details ? `${details.name} is a ${details.job_title} at Genius Wings Company, with expertise in ${details.experience} years of experience.` : 'Meet our talented team members at Genius Wings Company.'}`}
  />
  <meta
    property="og:image"
    content={details ? details.image : 'http://genius-wings.com/images/Brand-Logo.png'}
  />
  <meta property="og:url" content={`http://genius-wings.com/team-details/${id}`} />
  <meta property="og:type" content="website" />
  <meta property="og:site_name" content="Genius Wings Company" />

  {/* Twitter Card Tags */}
  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:title" content={`${details ? details.name : 'Team Member'} - Genius Wings Company`} />
  <meta
    name="twitter:description"
    content={`${details ? `${details.name} is a ${details.job_title} with ${details.experience} years of experience in the field.` : 'Meet our talented team members at Genius Wings Company.'}`}
  />
  <meta
    name="twitter:image"
    content={details ? details.image : 'http://genius-wings.com/images/Brand-Logo.png'}
  />
  <meta name="twitter:url" content={`http://genius-wings.com/team-details/${id}`} />

  {/* Canonical Tag */}
  <link rel="canonical" href={`http://genius-wings.com/team-details/${id}`} />

  {/* Structured Data */}
  <script type="application/ld+json">
    {`
      {
        "@context": "https://schema.org",
        "@type": "Person",
        "name": "${details ? details.name : 'Team Member'}",
        "jobTitle": "${details ? details.job_title : 'Team Member'}",
        "worksFor": {
          "@type": "Organization",
          "name": "Genius Wings Company"
        },
        "url": "http://genius-wings.com/team-details/${id}",
        "image": "${details ? details.image : 'http://genius-wings.com/images/Brand-Logo.png'}",
        "description": "${details ? details.description : 'Learn more about our team at Genius Wings Company.'}",
        "telephone": "+964${details ? details.user.phon_number : ''}",
        "email": "${details ? details.user.email : ''}"
      }
    `}
  </script>
</Helmet>

      <div>
        <section className="main-freeLancer-container relative pt-10 md:pt-40 mt-8 md:mt-[60px]">
          <div className="details-cover w-full absolute top-0 left-0 z-0 h-40 md:h-60 b"></div>

          <div className="w-full max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
            <div className="flex items-center sm:justify-start relative z-10 mb-5">
              <img
                src={details.image}
                alt="user-avatar-image"
                className=" border border-[#413f3f] w-32 h-32 sm:w-40 sm:h-40 md:w-[200px] md:mt-0 mt-[60px] md:h-[200px] rounded-full"
              />
            </div>
           <div className="flex flex-col sm:flex-row sm:gap-5 item justify-between mb-5">
              <div className="sm:text-left">
                <h3 className="font-bold text-2xl sm:text-3xl md:text-4xl text-text_color mb-1">
                  {details.name}
                </h3>
                <p className="text-sub_text font-[500]">{details.job_title}</p>
              </div>
            </div>

            <div className="flex flex-col lg:flex-row gap-5 justify-between py-2 md:py-4">
              <div className="flex items-center gap-4">
                <button
                  onClick={handlePhoneClick}
                  className="py-2 px-4 sm:py-3 sm:px-5 rounded-full bg-primary text-white font-semibold text-sm sm:text-base shadow-sm shadow-transparent transition-all duration-500 hover:shadow-[#302f2f] hover:bg-hover active:bg-active"
                >
                  {t("Phone_Number")} 
                </button>
                <button
                  onClick={handleEmailClick}
                  className="py-2 px-4 sm:py-3 sm:px-5 rounded-full bg-[#292828] text-primary border border-[#464545] font-semibold text-sm sm:text-base shadow-sm shadow-transparent transition-all duration-500 hover:bg-[#302f2f]"
                >
                                    {t("Email")} 

                </button>
              </div>
            </div>

            <div className="mt-[50px] rounded-lg ">
              <div className="w-full my-auto py-6 flex flex-col justify-center gap-2">
                <div className="w-full flex lg:flex-row flex-col xs:flex-col gap-2 justify-center">
                  <div className="w-[90%]">
                    <dl className="text-gray-900">
                      <div className="flex flex-col pb-3">
                        <dt className="mb-1 text-text_color md:text-lg font-[600]">
                        {t("Job_Title")} 

                        </dt>
                        <dd className="text-md text-sub_text font-[500]">
                          {details.job_title}
                        </dd>
                      </div>
                
                    </dl>
                  </div>

                  <div className="w-full">
                    <dl className="">
                      <div className="flex flex-col pb-3">
                        <dt className="mb-1 text-text_color font-[600] md:text-lg">
                        {t("Experience")} 

                        </dt>
                        <dd className="text-md text-sub_text font-[500]">
                          {details.experience}  {t("Years")} 
                        </dd>
                      </div>
              
                    </dl>
                  </div>
                </div>
              </div>

              <div className="flex flex-col mt-[-10px] mb-[30px]">
                <dt className="mb-1 text-text_color font-[600] md:text-lg">
                {t("team_details_Description")} 
                </dt>
                <dd className="text-md break-words text-sub_text font-[500]">{details.description}</dd>
              </div>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </div>
  );
};

export default TeamDetails;
