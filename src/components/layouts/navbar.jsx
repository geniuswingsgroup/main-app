import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import brand from "../../assets//images/Global-1-.png";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import Button from "@mui/material/Button";
import { useDispatch, useSelector } from "react-redux";
import TemporaryDrawer from "./sidebar";
import { cheak_auth } from "../../Redux/Actions/contact-us-action";
import i18next from "i18next";
import I18nextBrowserLanguageDetector from "i18next-browser-languagedetector";
import { initReactI18next, useTranslation } from "react-i18next";
import home from "../../locale/home-pages.json";
import Lang_swith from "../../locale/lang-switch";

i18next
  .use(I18nextBrowserLanguageDetector)
  .use(initReactI18next)
  .init({
    resources: {
      en: {
        translation: {
          //hero seaction
          top_header: home.en.top_header,
          header: home.en.header,
          the_Future: home.en.the_Future,
          sub_header: home.en.sub_header,

          contact_us: home.en.contact_us,
          About_Us: home.en.About_Us,
          //navbar
          Home: home.en.Home,
          Courses: home.en.Courses,
          Our_Features: home.en.Our_Features,
          Our_Projects: home.en.Our_Projects,
          Language: home.en.Language,

          //about us
          Delivering_innovative_solutions:
            home.en.Delivering_innovative_solutions,
          Focused_on_delivering_solutions:
            home.en.Focused_on_delivering_solutions,
          Experience: home.en.Experience,
          Influencing_digital_landscapes:
            home.en.Influencing_digital_landscapes,
          Projects: home.en.Projects,
          Delivering_excellence: home.en.Delivering_excellence,
          Advancing_technology: home.en.Advancing_technology,
          percent_happy_clients: home.en.percent_happy_clients,
          Client_satisfaction: home.en.Client_satisfaction,
          Read_More: home.en.Read_More,
          Language: home.en.Language,
          Achievements: home.en.Achievements,
          //about us pages
          About_Us_Description: home.en.About_Us_Description,
          Company_Name: home.en.Company_Name,
          Company_Description: home.en.Company_Description,
          Innovative_Solutions_Title: home.en.Innovative_Solutions_Title,
          Innovative_Solutions_Description:
            home.en.Innovative_Solutions_Description,
          Expert_Development_Team_Title: home.en.Expert_Development_Team_Title,
          Expert_Development_Team_Description:
            home.en.Expert_Development_Team_Description,
          Client_Centered_Approach_Title:
            home.en.Client_Centered_Approach_Title,

          Client_Centered_Approach_Description:
            home.en.Client_Centered_Approach_Description,
          Commitment_to_Excellence_Title:
            home.en.Commitment_to_Excellence_Title,
          Commitment_to_Excellence_Description:
            home.en.Commitment_to_Excellence_Description,

          //Meet Our Team
          Meet_Our_Team: home.en.Meet_Our_Team,
          show_profile: home.en.show_profile,
          Bringing_innovation_and_expertise:
            home.en.Bringing_innovation_and_expertise,

          //features
          Key_Features: home.en.Key_Features,
          Description: home.en.Description,
          features_Experience: home.en.features_Experience,
          Successful_Projects: home.en.Successful_Projects,
          Happy_Clients: home.en.Happy_Clients,

          //projects
          Our_Work: home.en.Our_Work,
          Portfolio: home.en.Portfolio,

          Our_Work_Description: home.en.Our_Work_Description,
          Developed_By: home.en.Developed_By,

          //courses
          Courses_Description: home.en.Courses_Description,

          //Our_Partners
          Our_Partners: home.en.Our_Partners,
          Our_Partners_Description: home.en.Our_Partners_Description,
          Show_More: home.en.Show_More,

          //footer
          Company: home.en.Company,
          Support: home.en.Support,
          Social_Media: home.en.Social_Media,
          Copyright: home.en.Copyright,

          //team details
          Phone_Number: home.en.Phone_Number,
          Years: home.en.Years,
          Email: home.en.Email,

          Job_Title: home.en.Job_Title,
          team_details_Description: home.en.team_details_Description,
          //courses
          Explore_Courses: home.en.Explore_Courses,
          Search: home.en.Search,
          from: home.en.from,
          to: home.en.to,
          price: home.en.price,
          filter: home.en.filter,
          //course detail
          Available: home.en.Available,
          Not_Available: home.en.Not_Available,
          Lecturer: home.en.Lecturer,
          Start_Date: home.en.Start_Date,
          Register: home.en.Register,
          Register_for_Course: home.en.Register_for_Course,
          Name: home.en.Name,
          Phone: home.en.Phone,

          //projects
          Projects_Description: home.en.Projects_Description,
          //features
          Our_Key_Features: home.en.Our_Key_Features,
          Key_Features_Description: home.en.Key_Features_Description,
          //contact us
          Message: home.en.Message,
          Technical_Support: home.en.Technical_Support,
          Sales_Questions: home.en.Sales_Questions,
          Address: home.en.Address,
          send: home.en.send,

          //pricing
          Package_of_Projects: home.en.Package_of_Projects,
          Your_Choice_Your_Success: home.en.Your_Choice_Your_Success,
          Packages_of_Courses: home.en.Packages_of_Courses,
          Choose_the_Right_Course_Package:
            home.en.Choose_the_Right_Course_Package,

          //package &pricing
          Pricing_Plans: home.en.Pricing_Plans,
          Transparent_and_affordable_rates:
            home.en.Transparent_and_affordable_rates,
          management_system: home.en.management_system,
          Application: home.en.Application,
          Website: home.en.Website,
          Packages: home.en.Packages,
          Tailored_plans_to_fit_your_needs:
            home.en.Tailored_plans_to_fit_your_needs,
          Small_size_website: home.en.Small_size_website,
          Security: home.en.Security,
          one_free_maintenance_per_year: home.en.one_free_maintenance_per_year,
          Multi_user_and_email_support: home.en.Multi_user_and_email_support,
          Modern_design: home.en.Modern_design,
          Medium_size_website: home.en.Medium_size_website,
          two_free_maintenance_per_year: home.en.two_free_maintenance_per_year,
          Small_size_App: home.en.Small_size_App,
          Medium_size_App: home.en.Medium_size_App,
          Order_now: home.en.Order_now,
          Medium_size_website_benefits: home.en.Medium_size_website_benefits,
          Security_benefits: home.en.Security_benefits,
          three_free_maintenance_per_year:
            home.en.three_free_maintenance_per_year,
          Multi_user_and_email_support_benefits:
            home.en.Multi_user_and_email_support_benefits,
          Medium_size_App_benefits: home.en.Medium_size_App_benefits,
          Modern_design_benefits: home.en.Modern_design_benefits,

          basic_package: home.en.basic_package,
          standard_package: home.en.standard_package,
          advanced_package: home.en.advanced_package,
          most_popular: home.en.most_popular,

          //course package
          business_development: home.en.business_development,
          canva_basic_steps: home.en.canva_basic_steps,
          certified_attendance_certificate_awarded:
            home.en.certified_attendance_certificate_awarded,
          discounts_for_groups: home.en.discounts_for_groups,
          case_study: home.en.case_study,
          steps_of_creating_research_and_presentations:
            home.en.steps_of_creating_research_and_presentations,
          ai_search_engines: home.en.ai_search_engines,
          business_model_canvas: home.en.business_model_canvas,
          financial_system: home.en.financial_system,
          course_packages_pricing: home.en.course_packages_pricing,

          innovation_concept_method_and_tools:
            home.en.innovation_concept_method_and_tools,
        },
      },
      ar: {
        translation: {
          top_header: home.ar.top_header,
          header: home.ar.header,
          the_Future: home.ar.the_Future,
          sub_header: home.ar.sub_header,
          contact_us: home.ar.contact_us,
          About_Us: home.ar.About_Us,

          //navbar
          Home: home.ar.Home,
          Courses: home.ar.Courses,
          Our_Features: home.ar.Our_Features,
          Our_Projects: home.ar.Our_Projects,
          Language: home.ar.Language,

          //about us
          Delivering_innovative_solutions:
            home.ar.Delivering_innovative_solutions,
          Focused_on_delivering_solutions:
            home.ar.Focused_on_delivering_solutions,
          Experience: home.ar.Experience,
          Influencing_digital_landscapes:
            home.ar.Influencing_digital_landscapes,
          Projects: home.ar.Projects,
          Delivering_excellence: home.ar.Delivering_excellence,
          Advancing_technology: home.ar.Advancing_technology,
          percent_happy_clients: home.ar.percent_happy_clients,
          Client_satisfaction: home.ar.Client_satisfaction,
          Read_More: home.ar.Read_More,
          Language: home.ar.Language,
          Achievements: home.ar.Achievements,
          //about us pages
          About_Us_Description: home.ar.About_Us_Description,
          Company_Name: home.ar.Company_Name,
          Company_Description: home.ar.Company_Description,
          Innovative_Solutions_Title: home.ar.Innovative_Solutions_Title,
          Innovative_Solutions_Description:
            home.ar.Innovative_Solutions_Description,
          Expert_Development_Team_Title: home.ar.Expert_Development_Team_Title,
          Expert_Development_Team_Description:
            home.ar.Expert_Development_Team_Description,
          Client_Centered_Approach_Title:
            home.ar.Client_Centered_Approach_Title,
          Client_Centered_Approach_Description:
            home.ar.Client_Centered_Approach_Description,
          Commitment_to_Excellence_Title:
            home.ar.Commitment_to_Excellence_Title,
          Commitment_to_Excellence_Description:
            home.ar.Commitment_to_Excellence_Description,

          //Meet Our Team
          Meet_Our_Team: home.ar.Meet_Our_Team,
          show_profile: home.ar.show_profile,

          Bringing_innovation_and_expertise:
            home.ar.Bringing_innovation_and_expertise,
          //features
          Key_Features: home.ar.Key_Features,
          Description: home.ar.Description,
          features_Experience: home.ar.features_Experience,
          Successful_Projects: home.ar.Successful_Projects,
          Happy_Clients: home.ar.Happy_Clients,

          //projects
          Our_Work: home.ar.Our_Work,
          Portfolio: home.ar.Portfolio,
          Our_Work_Description: home.ar.Our_Work_Description,
          Developed_By: home.ar.Developed_By,

          //courses
          Courses_Description: home.ar.Courses_Description,

          //Our_Partners
          Our_Partners: home.ar.Our_Partners,
          Our_Partners_Description: home.ar.Our_Partners_Description,
          Show_More: home.ar.Show_More,

          //footer
          Company: home.ar.Company,
          Support: home.ar.Support,
          Social_Media: home.ar.Social_Media,
          Copyright: home.ar.Copyright,

          //team details
          Phone_Number: home.ar.Phone_Number,
          Email: home.ar.Email,
          Job_Title: home.ar.Job_Title,
          team_details_Description: home.ar.team_details_Description,
          Years: home.ar.Years,

          //courses
          Explore_Courses: home.ar.Explore_Courses,
          Search: home.ar.Search,
          from: home.ar.from,
          to: home.ar.to,
          price: home.ar.price,
          filter: home.ar.filter,
          //course detail
          Available: home.ar.Available,
          Not_Available: home.ar.Not_Available,
          Lecturer: home.ar.Lecturer,
          Start_Date: home.ar.Start_Date,
          Register: home.ar.Register,
          Register_for_Course: home.ar.Register_for_Course,
          Name: home.ar.Name,
          Phone: home.ar.Phone,
          //projects
          Projects_Description: home.ar.Projects_Description,
          //features
          Our_Key_Features: home.ar.Our_Key_Features,
          Key_Features_Description: home.ar.Key_Features_Description,
          //contact us
          Message: home.ar.Message,
          Technical_Support: home.ar.Technical_Support,
          Sales_Questions: home.ar.Sales_Questions,
          Address: home.ar.Address,
          send: home.ar.send,
          //pricing
          Package_of_Projects: home.ar.Package_of_Projects,
          Your_Choice_Your_Success: home.ar.Your_Choice_Your_Success,
          Packages_of_Courses: home.ar.Packages_of_Courses,
          Choose_the_Right_Course_Package:
            home.ar.Choose_the_Right_Course_Package,
          Pricing_Plans: home.ar.Pricing_Plans,
          Transparent_and_affordable_rates:
            home.ar.Transparent_and_affordable_rates,
          management_system: home.ar.management_system,
          Application: home.ar.Application,
          Website: home.ar.Website,
          Packages: home.ar.Packages,
          Tailored_plans_to_fit_your_needs:
            home.ar.Tailored_plans_to_fit_your_needs,
          Small_size_website: home.ar.Small_size_website,
          Security: home.ar.Security,
          one_free_maintenance_per_year: home.ar.one_free_maintenance_per_year,
          Multi_user_and_email_support: home.ar.Multi_user_and_email_support,
          Modern_design: home.ar.Modern_design,
          Medium_size_website: home.ar.Medium_size_website,
          two_free_maintenance_per_year: home.ar.two_free_maintenance_per_year,
          Small_size_App: home.ar.Small_size_App,
          Medium_size_App: home.ar.Medium_size_App,
          Order_now: home.ar.Order_now,
          Medium_size_website_benefits: home.ar.Medium_size_website_benefits,
          Security_benefits: home.ar.Security_benefits,
          three_free_maintenance_per_year:
            home.ar.three_free_maintenance_per_year,
          Multi_user_and_email_support_benefits:
            home.ar.Multi_user_and_email_support_benefits,
          Medium_size_App_benefits: home.ar.Medium_size_App_benefits,
          Modern_design_benefits: home.ar.Modern_design_benefits,

          basic_package: home.ar.basic_package,
          standard_package: home.ar.standard_package,
          advanced_package: home.ar.advanced_package,
          most_popular: home.ar.most_popular,
          //course package
          business_development: home.ar.business_development,
          canva_basic_steps: home.ar.canva_basic_steps,
          certified_attendance_certificate_awarded:
            home.ar.certified_attendance_certificate_awarded,
          discounts_for_groups: home.ar.discounts_for_groups,
          case_study: home.ar.case_study,
          steps_of_creating_research_and_presentations:
            home.ar.steps_of_creating_research_and_presentations,
          ai_search_engines: home.ar.ai_search_engines,
          business_model_canvas: home.ar.business_model_canvas,
          financial_system: home.ar.financial_system,
          course_packages_pricing: home.ar.course_packages_pricing,
          innovation_concept_method_and_tools:
            home.ar.innovation_concept_method_and_tools,
        },
      },
      de: {
        translation: {
          top_header: home.de.top_header,
          header: home.de.header,
          the_Future: home.de.the_Future,
          sub_header: home.de.sub_header,
          contact_us: home.de.contact_us,
          About_Us: home.de.About_Us,
          //navbar
          Home: home.de.Home,
          Courses: home.de.Courses,
          Our_Features: home.de.Our_Features,
          Our_Projects: home.de.Our_Projects,
          Language: home.de.Language,
          //about us
          Delivering_innovative_solutions:
            home.de.Delivering_innovative_solutions,
            Projects: home.de.Projects,

          Focused_on_delivering_solutions:
            home.de.Focused_on_delivering_solutions,
          Experience: home.de.Experience,
          Influencing_digital_landscapes:
            home.de.Influencing_digital_landscapes,

            Delivering_excellence: home.de.Delivering_excellence,
          Achievements: home.de.Achievements,

          Advancing_technology: home.de.Advancing_technology,
          percent_happy_clients: home.de.percent_happy_clients,
          Client_satisfaction: home.de.Client_satisfaction,
          Read_More: home.de.Read_More,
          Language: home.de.Language,

          //about us pages
          About_Us_Description: home.de.About_Us_Description,
          Company_Name: home.de.Company_Name,
          Company_Description: home.de.Company_Description,
          Innovative_Solutions_Title: home.de.Innovative_Solutions_Title,
          Innovative_Solutions_Description:
            home.de.Innovative_Solutions_Description,
          Expert_Development_Team_Title: home.de.Expert_Development_Team_Title,
          Expert_Development_Team_Description:
            home.de.Expert_Development_Team_Description,
          Client_Centered_Approach_Description:
            home.de.Client_Centered_Approach_Description,
          Commitment_to_Excellence_Title:
            home.de.Commitment_to_Excellence_Title,
          Commitment_to_Excellence_Description:
            home.de.Commitment_to_Excellence_Description,
          Client_Centered_Approach_Title:
            home.de.Client_Centered_Approach_Title,

          //Meet Our Team
          Meet_Our_Team: home.de.Meet_Our_Team,
          show_profile: home.de.show_profile,
          Bringing_innovation_and_expertise:
            home.de.Bringing_innovation_and_expertise,
          //features
          Key_Features: home.de.Key_Features,
          Description: home.de.Description,
          features_Experience: home.de.features_Experience,
          Successful_Projects: home.de.Successful_Projects,
          Happy_Clients: home.de.Happy_Clients,

          //projects
          Our_Work: home.de.Our_Work,
          Portfolio: home.de.Portfolio,
          Our_Work_Description: home.de.Our_Work_Description,
          Developed_By: home.de.Developed_By,

          //courses
          Courses_Description: home.de.Courses_Description,
          from: home.de.from,
          to: home.de.to,
          price: home.de.price,
          filter: home.de.filter,
          //Our_Partners
          Our_Partners: home.de.Our_Partners,
          Our_Partners_Description: home.de.Our_Partners_Description,
          Show_More: home.de.Show_More,
          //footer
          Company: home.de.Company,
          Support: home.de.Support,
          Social_Media: home.de.Social_Media,
          Copyright: home.de.Copyright,

          //team details
          Phone_Number: home.de.Phone_Number,
          Email: home.de.Email,
          Years: home.de.Years,

          Job_Title: home.de.Job_Title,
          team_details_Description: home.de.team_details_Description,
          //courses
          Explore_Courses: home.de.Explore_Courses,
          Search: home.de.Search,

          //course detail
          Available: home.de.Available,
          Not_Available: home.de.Not_Available,
          Lecturer: home.de.Lecturer,
          Start_Date: home.de.Start_Date,
          Register: home.de.Register,
          Register_for_Course: home.de.Register_for_Course,
          Name: home.de.Name,
          Phone: home.de.Phone,
          //projects
          Projects_Description: home.de.Projects_Description,

          //features
          Our_Key_Features: home.de.Our_Key_Features,
          Key_Features_Description: home.de.Key_Features_Description,
          //contact us
          Message: home.de.Message,
          Technical_Support: home.de.Technical_Support,
          Sales_Questions: home.de.Sales_Questions,
          Address: home.de.Address,
          send: home.de.send,

          //pricing
          Package_of_Projects: home.de.Package_of_Projects,
          Your_Choice_Your_Success: home.de.Your_Choice_Your_Success,
          Packages_of_Courses: home.de.Packages_of_Courses,
          Choose_the_Right_Course_Package:
            home.de.Choose_the_Right_Course_Package,
          Pricing_Plans: home.de.Pricing_Plans,
          Transparent_and_affordable_rates:
            home.de.Transparent_and_affordable_rates,
          management_system: home.de.management_system,
          Application: home.de.Application,
          Website: home.de.Website,
          Packages: home.de.Packages,
          Tailored_plans_to_fit_your_needs:
            home.de.Tailored_plans_to_fit_your_needs,
          Small_size_website: home.de.Small_size_website,
          Security: home.de.Security,
          one_free_maintenance_per_year: home.de.one_free_maintenance_per_year,
          Multi_user_and_email_support: home.de.Multi_user_and_email_support,
          Modern_design: home.de.Modern_design,
          Medium_size_website: home.de.Medium_size_website,
          two_free_maintenance_per_year: home.de.two_free_maintenance_per_year,
          Small_size_App: home.de.Small_size_App,
          Medium_size_App: home.de.Medium_size_App,
          Order_now: home.de.Order_now,
          Medium_size_website_benefits: home.de.Medium_size_website_benefits,
          Security_benefits: home.de.Security_benefits,
          three_free_maintenance_per_year:
            home.de.three_free_maintenance_per_year,
          Multi_user_and_email_support_benefits:
            home.de.Multi_user_and_email_support_benefits,
          Medium_size_App_benefits: home.de.Medium_size_App_benefits,
          Modern_design_benefits: home.de.Modern_design_benefits,
          basic_package: home.de.basic_package,
          standard_package: home.de.standard_package,
          advanced_package: home.de.advanced_package,
          most_popular: home.de.most_popular,
          //course package
          business_development: home.de.business_development,
          canva_basic_steps: home.de.canva_basic_steps,
          certified_attendance_certificate_awarded:
            home.de.certified_attendance_certificate_awarded,
          discounts_for_groups: home.de.discounts_for_groups,
          case_study: home.de.case_study,
          steps_of_creating_research_and_presentations:
            home.de.steps_of_creating_research_and_presentations,
          ai_search_engines: home.de.ai_search_engines,
          business_model_canvas: home.de.business_model_canvas,
          financial_system: home.de.financial_system,
          course_packages_pricing: home.de.course_packages_pricing,
          innovation_concept_method_and_tools:
            home.de.innovation_concept_method_and_tools,
        },
      },
    },

    lng: "en",
    fallbackLng: "en",
    detection: {
      order: [
        "cookie",
        "localStorage",
        "sessionStorage",
        "navigator",
        "htmlTag",
        "path",
        "subdomain",
      ],
      caches: ["cookie", "localStorage"],
    },
    interpolation: {
      escapeValue: false,
    },
  });
const Navbar = () => {
  const [state, setState] = useState(false);
  const dispatch = useDispatch();
  // Get the auth status and HTTP status code from Redux store
  const isAuthenticated = useSelector((state) => state.contact.auth_status);
  const { t, i18n } = useTranslation();

  // Dispatch the check auth action on mount
  useEffect(() => {
    dispatch(cheak_auth());
  }, [dispatch]);
  // Replace javascript:void(0) paths with your paths
  const navigation = [
    { title: t("Home"), path: "/" },
    { title: t("About_Us"), path: "/About-us" },
    { title: t("Courses"), path: "/Courses" },
    { title: t("Our_Features"), path: "/Our-Features" },
    { title: t("Our_Projects"), path: "/Our-Projects" },
  ];

  useEffect(() => {
    document.onclick = (e) => {
      const target = e.target;
      if (!target.closest(".menu-btn")) setState(false);
    };
  }, []);

  const Brand = () => (
    <div className="flex items-center justify-between py-2 Navbar-responsive:block">
      {/* <p  dir="rtl" className="mb-[-22px] text-[10px]">group</p> */}

      <Link   style={{
        fontFamily:  "Cairo, sans-serif", // Default font for non-Arabic languages
      }}
                to={"/"}
                className="flex lg:justify-start justify-center items-center gap-2 text-[#b29336]"
              >
                <img
                  src={brand}
                  className="md:h-[57px]  mt-[-13px] h-[40px]"
                  alt="Message Shield"
                />
                <h2 className="md:text-[25px] text-[17px] font-[500] text-text_color leading-[3.25rem]">
                  Genius
                  <span className="text-transparent bg-clip-text bg-primary">
                    Wings
                  </span>
                </h2>
              </Link>
      
      {
        isAuthenticated==200?
        <div className="Navbar-responsive:hidden flex">
        <TemporaryDrawer/>

        </div>        : 
        
        
        <div className="Navbar-responsive:hidden">
        <div>
          {["top"].map((anchor, idx) => (
            <div key={idx}>
              {" "}
              {/* Add a key here */}
              <Button
                onClick={toggleDrawer(anchor, true)}
                className="menu-btn text-gray-400 hover:text-gray-300"
              >
                {state ? (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    viewBox="0 0 20 20"
                    fill=""
                  >
                    <path
                      fillRule="evenodd"
                      d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                ) : (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="#E4C24A"
                    className="w-6 h-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                    />
                  </svg>
                )}
              </Button>
           
            </div>
          ))}
        </div>
      </div>
      }


     
    </div>
  );

  const [offcanvastate, setOffcanvastateState] = React.useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });

  

  const toggleDrawer = (anchor, open) => (event) => {
    if (event.type === "keydown" && (event.key === "Tab" || event.key === "Shift")) {
      return;
    }
    setOffcanvastateState((prev) => ({ ...prev, [anchor]: open }));
  };
  
  const list = (anchor) => (
    <Box
    sx={{ width: "auto", backgroundColor: "#1E1E1E", padding: "16px" }}
    role="presentation"
    onClick={toggleDrawer(anchor, false)}
    onKeyDown={toggleDrawer(anchor, false)}
          style={{
            fontFamily: i18n.language === "ar" ? "Cairo, sans-serif" : "", // Default font when language is not Arabic
          }}
          className=" min-w-[300px] bg-[#1E1E1E] p-[26px]  "
        
        >
       <Link to={"/"} className="flex lg:justify-start justify-center items-center gap-2 text-[#b29336]">
    
          <Link
            to={"/"}
            className="flex lg:justify-start justify-center items-center gap-2 text-[#b29336]"
          >
           
        
          </Link>
          </Link>
          <ul className="flex-1 justify-end w-full mt-[-30px] items-center space-y-6 ">
            {navigation.map((item, idx) => (
              <li
                key={item.path}
                className="text-black mt-[60px] hover:text-primary"
              >
                {" "}
                {/* Add key={item.path} */}
                <Link
                  to={item.path}
                  className="flex border-b text-text_color pb-[20px] border-[#302f2f] justify-center hover:text-ptimary transition-all duration-700"
                >
                  {item.title}
                </Link>
              </li>
            ))}
            <li>
              <li className="pt-[30px]">
                <Link
                  to={"/Contact-us"}
                  className="flex items-center justify-center gap-x-1 py-2 px-3 mx-4 mb-[20px] text-white font-medium   bg-primary hover:bg-hover active:bg-active duration-150 rounded-full "
                >
    
                  {t("contact_us")}{" "}
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
                </Link>
              </li>
            </li>
          </ul>
        </Box>
  );

  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Check if the user has scrolled down 50 pixels
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  
  useEffect(() => {
    const handleScroll = () => {
      // Check if the user has scrolled down 50 pixels
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
    style={{
      
      fontFamily: i18n.language === 'ar' ? 'Cairo, sans-serif' : '', // Default font when language is not Arabic
    }}
      className={
        isScrolled
          ? "fixed w-full z-50 shadow- backdrop-blur-lg md:py-[8px]"
          : "fixed w-full z-50 shadow-sm md:py-[8px] "
      }
    >
      <nav
        className={`md:text-sm ${
          isScrolled
            ? "z-20 top-0  mt-[6px] inset-x-0 md:relative bg-blur bg-opacity-80 backdrop-blur-lg"
            : "md:bg-transparent"
        }`}
      >
        
        <div className="Navbar-responsive:hidden flex justify-end absolute right-[90px] pt-[26px]">
          <Lang_swith />
        </div>
  
        <div className="gap-x-14 max-w-[1900px] mx-auto items-center px-4 Navbar-responsive:flex justify-between w-full Navbar-responsive:px-8">
          <Brand />
  
          {isAuthenticated == 200 ? (
            <div className="Navbar-responsive:flex hidden">
              <TemporaryDrawer />
            </div>
          ) : (
            <div
              className={`flex-1 w-full items-center mt-8 md:mt-0 Navbar-responsive:flex ${
                state ? "block" : "hidden"
              }`}
            >
              <ul className="flex-1 justify-end w-full items-center space-y-6 Navbar-responsive:flex Navbar-responsive:space-x-6 Navbar-responsive:space-y-0">
                {navigation.map((item, idx) => (
                  <li key={idx} className="text-text_color text-[16px]">
                    <Link
                      to={item.path}
                      className="block whitespace-nowrap hover:text-primary transition-all duration-700"
                    >
                      {item.title === "Unsere Projekte" ? " " : item.title}
                    </Link>
                  </li>
                ))}
                <Lang_swith />
                <li>
                  <Link
                    to={"/Contact-us"}
                    className="flex text-[15px] whitespace-nowrap items-center justify-center gap-x-1 py-2 px-4 text-white font-medium bg-primary hover:bg-hover active:bg-active duration-150 rounded-full md:inline-flex"
                  >
                    {t("contact_us")}
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
                  </Link>
                </li>
              </ul>
            </div>
          )}
        </div>
      </nav> 
      <Drawer
      anchor="top"
      open={offcanvastate.top}
      onClose={toggleDrawer("top", false)}
  
    >
      {list("top")}
    </Drawer>
    </div>
  );
  
};

export default Navbar;
