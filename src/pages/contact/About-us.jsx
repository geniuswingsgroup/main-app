import React, { useEffect } from "react";
import image from "../../assets/images/about-us.jpg";
import second_image from "../../assets/images/about-us1.jpg";
import Footer from "../../components/layouts/footer";
import { Helmet } from "react-helmet-async";
import { useTranslation } from "react-i18next";

const About_us = () => {
  const { t, i18n } = useTranslation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="flex flex-col justify-between bg-[#1e1e1e] min-h-screen">
      <Helmet>
  {/* Basic Meta Tags */}
  <title>About Us - Genius Wings Company</title>
  <meta
    name="description"
    content="Learn more about Genius Wings Company, a leading software development company specializing in web development, app development, business solutions, Photoshop services, and more. Discover our vision, mission, and commitment to delivering innovative solutions."
  />
  <meta
    name="keywords"
    content="about us, Genius Wings Company, software development, web development, app development, business solutions, Photoshop services, company mission, company vision"
  />
  <meta name="robots" content="index, follow" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />

  {/* Open Graph Tags */}
  <meta property="og:title" content="About Us - Genius Wings Company" />
  <meta
    property="og:description"
    content="Discover the story behind Genius Wings Company, our mission, vision, and the innovative solutions we offer in web development, app development, software, and business services."
  />
  <meta
    property="og:image"
    content="http://genius-wings.com/images/Brand-Logo.png"
  />
  <meta property="og:url" content="http://genius-wings.com/About-us" />
  <meta property="og:type" content="website" />
  <meta property="og:site_name" content="Genius Wings Company" />

  {/* Twitter Card Tags */}
  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:title" content="About Us - Genius Wings Company" />
  <meta
    name="twitter:description"
    content="Get to know Genius Wings Company, a leader in software development, web and app development, business solutions, and Photoshop services. Learn about our mission, values, and innovative approach."
  />
  <meta
    name="twitter:image"
    content="http://genius-wings.com/images/Brand-Logo.png"
  />
  <meta name="twitter:url" content="http://genius-wings.com/About-us" />

  {/* Canonical Tag */}
  <link rel="canonical" href="http://genius-wings.com/About-us" />

  {/* Structured Data */}
  <script type="application/ld+json">
    {`
      {
        "@context": "https://schema.org",
        "@type": "WebPage",
        "name": "About Us",
        "description": "Learn about Genius Wings Company and how we provide innovative software, web development, app development, Photoshop services, and business solutions.",
        "url": "http://genius-wings.com/About-us",
        "image": "http://genius-wings.com/images/Brand-Logo.png"
      }
    `}
  </script>
</Helmet>

      <div     dir={i18n.language === "ar" ? "rtl" : "ltr"}
      style={{
      
      fontFamily: i18n.language === 'ar' ? 'Cairo, sans-serif' : '', // Default font when language is not Arabic
    }} className="pt-[100px]">
        <section className="w-full flex justify-center p-4 mx-auto py-10 ">
          {/* Title */}
          <div className="2xl:max-w-[1600px] md:max-w-[1270px]">
            <div  className="mx-auto w-full mb-[100px] text-center">
              <h2 className="font-display h-[60px]   text-[30px] lg:text-5xl md:text-5xl font-[600] text-transparent bg-clip-text bg-primary">
              {t("About_Us")}               </h2>
              <div className="mx-auto mb-8 mt-4 max-w-[528px] md:mb-12 lg:mb-16">
                <p className="md:text-lg text-sm text-text_color">
                {t("About_Us_Description")}      
                </p>
              </div>
            </div>

            <section className=" ">
              <div className="container mx-auto">
                <div className="lg:flex lg:-mx-6">
                  <div className="lg:w-2/4 lg:px-6">
                    <img
                      className="object-cover object-center w-full h-80 xl:h-[28rem] rounded-xl"
                      src={second_image}
                      alt=""
                    />
                    <div>
                      <p className="mt-6 text-sm text-transparent bg-clip-text bg-primary uppercase">
                        GeniusWings Group
                      </p>

                      <p className="block mt-2 font-medium text-sub_text ">
                     
                        {t("Company_Description")}  
                      </p>
                    </div>
                  </div>

                  <div className="mt-8 lg:w-2/4 lg:mt-0 lg:px-6">
                    <div>
                      <h3 className="text-transparent bg-clip-text bg-primary capitalize">
                      {t("Innovative_Solutions_Title")}  
                      </h3>
                      <p className="block mt-2 font-medium   text-sub_text ">
                      {t("Innovative_Solutions_Description")}  

                      </p>
                    </div>

                    <hr className="my-6 border-gray-200 " />

                    <div>
                      <h3 className="text-transparent bg-clip-text bg-primary capitalize">
                      {t("Expert_Development_Team_Title")} 
                      </h3>
                      <p className="block mt-2 font-medium text-sub_text  ">
                      {t("Expert_Development_Team_Description")} 

                      </p>
                    </div>

                    <hr className="my-6 border-gray-200 " />

                    <div>
                      <h3 className="text-transparent bg-clip-text bg-primary capitalize">
                      {t("Client_Centered_Approach_Title")} 
                      </h3>
                      <p className="block mt-2 font-medium sub_text text-sub_text">
                      {t("Client_Centered_Approach_Description")} 
                      </p>
                    </div>

                    <hr className="my-6 border-gray-200 " />

                    <div>
                      <h3 className="text-transparent bg-clip-text bg-primary capitalize">
                      {t("Commitment_to_Excellence_Title")} 
                      </h3>
                      <p className="block mt-2 font-medium text-sub_text ">
                      {t("Commitment_to_Excellence_Description")} 

                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </section>
      </div>

      <Footer />
    </div>
  );
};

export default About_us;
