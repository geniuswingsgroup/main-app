// import React from "react";
// import image from "../assets/images/about-us.jpg";
// import second_image from "../assets/images/about-us1.jpg";
// import ghaith from "../assets/images/ghaith.jpg";
// import Mohammed from "../assets/images/Mohammed hamza.jpg";
// import Alan from "../assets/images/alan.jpg";

// import { Swiper, SwiperSlide } from "swiper/react";
// import "swiper/swiper-bundle.css";
// import { Autoplay, Navigation, Pagination } from "swiper/modules";
// import { Link } from "react-router-dom";
// import Footer from "../components/layouts/footer";

// const Our_team = () => {
//   return (
//     <>
//       <div className="flex flex-col justify-between min-h-screen">
//       <div className="mx-auto 2xl:max-w-[1800px] md:max-w-[1270px] sm:px-6 lg:px-8">
//           <section className="py-24">
//             <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
//               <div className="mx-auto w-full mb-[100px] text-center">
//                 <h2 className="font-display text-[30px] lg:text-5xl md:text-5xl font-[600] text-primary">
//                   Meet Our Team
//                 </h2>
//                 <div className="mx-auto mb-8 mt-4 max-w-[528px] md:mb-12 lg:mb-16">
//                   <p className="md:text-lg text-sm text-gray-700">
//                     Bringing innovation and expertise together to achieve
//                     remarkable results
//                   </p>
//                 </div>
//               </div>

//               <div className="flex justify-center w-full">
//                 <div className="grid justify-center grid-cols-1 min-[500px]:grid-cols-2 lg:grid-cols-3 md:grid-cols-2 lg:gap-[130px] md:gap-[100px] gap-[50px] max-w-xl mx-auto md:max-w-3xl lg:max-w-full">
//                   {/* First Team Member */}
//                   <Link
//                     to={"/team-details"}
//                     className="block group md:col-span-2 lg:col-span-1"
//                   >
//                     <div className="relative mb-6">
//                       <img
//                         src={ghaith}
//                         alt="Ghaith Adnan"
//                         className="w-40 h-40 p-1 rounded-full mx-auto transition-all duration-500 object-contain border border-gray-100 border-solid border-transparent group-hover:border-primary"
//                       />
//                     </div>
//                     <h4 className="text-xl font-semibold text-gray-900 mb-2 capitalize text-center transition-all duration-500 group-hover:text-primary">
//                       Ghaith Adnan
//                     </h4>
//                     <div className="flex flex-col items-center gap-3">
//                       <span className="text-gray-500 text-center block transition-all duration-500 group-hover:text-gray-900">
//                         Ceo , Founder
//                       </span>
//                       <div className="flex gap-1 items-center text-primary">
//                         <p className="text-sm">Show Profile</p>
//                         <svg
//                           xmlns="http://www.w3.org/2000/svg"
//                           viewBox="0 0 20 20"
//                           fill="currentColor"
//                           className="w-5 h-5"
//                         >
//                           <path
//                             fillRule="evenodd"
//                             d="M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z"
//                             clipRule="evenodd"
//                           />
//                         </svg>
//                       </div>
//                     </div>
//                   </Link>

//                   {/* Second Team Member */}
//                   <Link
//                     to={"/team-details"}
//                     className="block group md:col-span-2 lg:col-span-1"
//                   >
//                     <div className="relative mb-6">
//                       <img
//                         src={Mohammed}
//                         alt="Mohammed Hamza"
//                         className="w-40 h-40 p-1 rounded-full mx-auto transition-all duration-500 object-contain border border-gray-100 border-solid border-transparent group-hover:border-primary"
//                       />
//                     </div>
//                     <h4 className="text-xl font-semibold text-gray-900 mb-2 capitalize text-center transition-all duration-500 group-hover:text-primary">
//                       Mohammed Hamza
//                     </h4>
//                     <div className="flex flex-col items-center gap-3">
//                       <span className="text-gray-500 text-center block transition-all duration-500 group-hover:text-gray-900">
//                         Fullstack Developer , Web Designer
//                       </span>
//                       <div className="flex gap-1 items-center text-primary">
//                         <p className="text-sm">Show Profile</p>
//                         <svg
//                           xmlns="http://www.w3.org/2000/svg"
//                           viewBox="0 0 20 20"
//                           fill="currentColor"
//                           className="w-5 h-5"
//                         >
//                           <path
//                             fillRule="evenodd"
//                             d="M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z"
//                             clipRule="evenodd"
//                           />
//                         </svg>
//                       </div>
//                     </div>
//                   </Link>

//                   {/* Third Team Member */}
//                   <Link
//                     to={"/team-details"}
//                     className="block group md:col-span-2 lg:col-span-1"
//                   >
//                     <div className="relative mb-6">
//                       <img
//                         src={Alan}
//                         alt="Alan"
//                         className="w-40 h-40 p-1 rounded-full mx-auto transition-all duration-500 object-contain border border-gray-100 border-solid border-transparent group-hover:border-primary"
//                       />
//                     </div>
//                     <h4 className="text-xl font-semibold text-gray-900 mb-2 capitalize text-center transition-all duration-500 group-hover:text-primary">
//                       Alan Najmadin
//                     </h4>
//                     <div className="flex flex-col items-center gap-3">
//                       <span className="text-gray-500 text-center block transition-all duration-500 group-hover:text-gray-900">
//                         Fullstack Developer
//                       </span>
//                       <div className="flex gap-1 text-primary items-center textprimary">
//                         <p className="text-sm">Show Profile</p>
//                         <svg
//                           xmlns="http://www.w3.org/2000/svg"
//                           viewBox="0 0 20 20"
//                           fill="currentColor"
//                           className="w-5 h-5"
//                         >
//                           <path
//                             fillRule="evenodd"
//                             d="M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z"
//                             clipRule="evenodd"
//                           />
//                         </svg>
//                       </div>
//                     </div>
//                   </Link>
//                 </div>
//               </div>
//             </div>
//           </section>
//         </div>
//         <Footer />
//       </div>
//     </>
//   );
// };

// export default Our_team;
