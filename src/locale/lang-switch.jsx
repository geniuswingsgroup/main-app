import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import iraq from '../assets/images/iraq_flag.jpeg'
import germany from '../assets/images/Germany.jpeg'
import amirecan from '../assets/images/amirecan.jpeg'

const Lang_swith = () => {
  const languages = [
    { code: "en", name: "English" , image:amirecan },
    { code: "ar", name: "العربية",image:iraq },
    { code: "de", name: "German" , image:germany  },
  ];

  const { t, i18n } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const storedLanguage = localStorage.getItem("language");
    if (storedLanguage) {
      i18n.changeLanguage(storedLanguage);
    }
  }, [i18n]);

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
    localStorage.setItem("language", lng);
  };

  const toggleDropdown = () => setIsOpen(!isOpen);

  const languageLabel = () => {
    switch (i18n.language) {
      case "de":
        return "DE";
      case "ar":
        return "AR";
      default:
        return "EN";
    }
  };

  return (
    <div className="relative inline-block text-left">
      <div>
        <div
          onClick={toggleDropdown}
          className=
          {
            i18n.language==="de"?

            "Navbar-responsive:flex hidden text-white items-center gap-2 ml-[-22px] text-[16px] cursor-pointer "

            :
            "Navbar-responsive:flex hidden text-white items-center gap-2 text-[16px] cursor-pointer "

          }
          
          
          
          id="options-menu"
          aria-haspopup="true"
          aria-expanded={isOpen ? "true" : "false"}
        >
          <span>{t("Language")}</span>
          <svg
            className={`w-3 h-3 text-white ${isOpen ? 'rotate-180' : ''}`}
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 14 8"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M13 7 7.674 1.3a.91.91 0 0 0-1.348 0L1 7"
            />
          </svg>
        </div>
        {/* show in small device */}
        <div
          onClick={toggleDropdown}
          className="Navbar-responsive:hidden   mt-[-2px] flex text-white items-center gap-2 text-[16px] cursor-pointer mr-[-15px]"
          id="options-menu"
          aria-haspopup="true"
          aria-expanded={isOpen ? "true" : "false"}
        >
          <span className="text-sm">          {i18n.language==="de"?'DE':i18n.language==="ar"?'AR':'EN'    }
          </span>
          <svg
            className={`w-3 h-3 text-white ${isOpen ? 'rotate-180' : ''}`}
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 14 8"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M13 7 7.674 1.3a.91.91 0 0 0-1.348 0L1 7"
            />
          </svg>
        </div>
      </div>

      {isOpen && (
        <div
          className="origin-top-right text-white border border-[#414040] cursor-pointer absolute right-0 mt-4 w-40 rounded shadow-md bg-[#2b2a2a] ring-1 ring-black ring-opacity-5 focus:outline-none"
          role="menu"
          aria-orientation="vertical"
          aria-labelledby="options-menu"
        >
          {languages.map((lang) => (
            <div key={lang.code}>
              <div 
                className={`p-2 flex  items-center gap-1 ${lang.code === i18n.language ? "bg-primary text-white" : ""}`}
                onClick={() => {
                  changeLanguage(lang.code);
                  setIsOpen(false);
                }}
              >
                              <img src={lang.image} alt="" className="h-[17px] rounded"  />

                                <span className="ml-2">{lang.name}</span>

              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Lang_swith;
