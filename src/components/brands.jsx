import React from "react";
import { motion } from "framer-motion";
import first_company from "../assets/images/Aland_Service_company.png";
import second_company from "../assets/images/Easyclaim.png";
import third_company from "../assets/images/FEIN-Logo-500x490.jpg";
import fourth_company from "../assets/images/NIT.png";
import fifth_company from "../assets/images/SAP.png";
import sixth_company from "../assets/images/db.png";

const BrandCarousel = () => {
  const companies = [
    { id: 1, src: first_company, alt: "Aland Service Company", height: "250px" },
    { id: 2, src: second_company, alt: "Easyclaim", height: "230px" },
    { id: 3, src: third_company, alt: "FEIN Logo", height: "80px" },
    { id: 4, src: fourth_company, alt: "NIT", height: "140px" },
    { id: 5, src: fifth_company, alt: "SAP", height: "70px" },
    { id: 6, src: sixth_company, alt: "DB", height: "170px" },
  ];

  const totalWidth = companies.length * 200; // Adjust based on the brand item width

  const animationVariants = {
    animate: {
      x: [0, -totalWidth],
      transition: {
        x: {
          repeat: Infinity,
          repeatType: "loop",
          duration: 20,
          ease: "linear",
        },
      },
    },
  };

  return (
    <div className="flex w-full  mb-[50px] justify-center">
     <div
      style={{
        position: "relative",
        overflow: "hidden",
        width: "100%",
        height: "120px",
        background: "#",
        display: "flex",
        alignItems: "center",
      }}
      className="max-w-[2000px]"
    >
      {/* Left Gradient */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "10%",
          height: "100%",
          background: "linear-gradient(to right, #1E1E1E, rgba(100,100,100,0))",
          zIndex: 10,
        }}
      ></div>

      {/* Right Gradient */}
      <div
        style={{
          position: "absolute",
          top: 0,
          right: 0,
          width: "15%",
          height: "100%",
          background: "linear-gradient(to left, #1E1E1E, rgba(100,100,100,0))",
          zIndex: 10,
        }}
      ></div>

      {/* Animated Brands */}
      <motion.div
        style={{
          display: "flex",
          gap: "30px",
          whiteSpace: "nowrap",
        }}
        variants={animationVariants}
        animate="animate"
      >
        {/* Duplicate Companies for Smooth Loop */}
        {[...companies, ...companies].map((company, index) => (
          <div
            key={index}
            style={{
            //   width: "200px",
            //   height: "100px",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              background: "",
              borderRadius: "12px",
              overflow: "hidden",
            }}
            className=" 2xl:w-[300px] w-[200px] h-[200px]"
          >{
            company.alt=='DB'?
            <img
            className="mt-3"
            src={company.src}
            alt={company.alt}
            style={{ height: company.height, objectFit: "contain" }}
          />

          :
          <img
              src={company.src}
              alt={company.alt}
              style={{ height: company.height, objectFit: "contain" }}
            />
          }
            
          </div>
        ))}
      </motion.div>
    </div>
    </div>
  );
};

export default BrandCarousel;
