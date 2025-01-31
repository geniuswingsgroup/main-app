import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { contact_form } from "../../Redux/Actions/contact-us-action";
import { Toaster } from "react-hot-toast";
import Footer from "../../components/layouts/footer";
import ContactCard from "./contact-card";
import { Helmet } from "react-helmet-async";
import { useTranslation } from "react-i18next";

const Contact_us = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
 useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const dispatch = useDispatch();

  const resetInputs = () => {
    setName("");
    setEmail("");
    setMessage("");
  };

  const submit = (e) => {
    e.preventDefault();
    dispatch(contact_form(name, email, message, resetInputs));
  };
  const { t, i18n } = useTranslation();

  return (
    <div      style={{
      
      fontFamily: i18n.language === 'ar' ? 'Cairo, sans-serif' : '', // Default font when language is not Arabic
    }} 
     className="flex flex-col  bg-background_color pt-[120px] justify-between min-h-screen">
      <Helmet>
  {/* Basic Meta Tags */}
  <title>Contact Us - Genius Wings Company</title>
  <meta
    name="description"
    content="Get in touch with Genius Wings Company. Whether you have a question about our web development, app development, business solutions, or any of our other services, we're here to assist you. Reach out today!"
  />
  <meta
    name="keywords"
    content="contact us, Genius Wings Company, contact, customer support, web development, app development, business solutions, reach out"
  />
  <meta name="robots" content="index, follow" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />

  {/* Open Graph Tags */}
  <meta property="og:title" content="Contact Us - Genius Wings Company" />
  <meta
    property="og:description"
    content="Have a question or need support? Contact Genius Wings Company for inquiries about our web development, app development, or business solutions. Our team is here to help."
  />
  <meta
    property="og:image"
    content="http://genius-wings.com/images/Brand-Logo.png"
  />
  <meta property="og:url" content="http://genius-wings.com/Contact-us" />
  <meta property="og:type" content="website" />
  <meta property="og:site_name" content="Genius Wings Company" />

  {/* Twitter Card Tags */}
  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:title" content="Contact Us - Genius Wings Company" />
  <meta
    name="twitter:description"
    content="Reach out to Genius Wings Company for support or questions about our services. Our team is ready to assist you with web development, app development, business solutions, and more."
  />
  <meta
    name="twitter:image"
    content="http://genius-wings.com/images/Brand-Logo.png"
  />
  <meta name="twitter:url" content="http://genius-wings.com/Contact-us" />

  {/* Canonical Tag */}
  <link rel="canonical" href="http://genius-wings.com/Contact-us" />

  {/* Structured Data */}
  <script type="application/ld+json">
    {`
      {
        "@context": "https://schema.org",
        "@type": "WebPage",
        "name": "Contact Us",
        "description": "Contact Genius Wings Company for inquiries about our web and app development services, business solutions, or customer support. We're here to help.",
        "url": "http://genius-wings.com/Contact-us",
        "image": "http://genius-wings.com/images/Brand-Logo.png"
      }
    `}
  </script>
</Helmet>

    <Toaster position="top-right" reverseOrder={false} />
    <div className="container my-12 mx-auto px-4 md:px-4">
      <section className="mb-32">
        <div className="flex flex-wrap">
          <form
            className="mb-12 w-full shrink-0 grow-0 basis-auto md:px-3 lg:mb-0 lg:w-5/12 lg:px-6"
            onSubmit={submit}
          >
            <div className="mb-3 w-full">
              <label className="block font-medium mb-[2px] text-primary" htmlFor="name">
              {t("Name")} 
              </label>
              <input
                type="text"
                className="w-full  border-[#303030] bg-[#252525] text-text_color focus:border-[#303030] focus:ring-0  p-2 border  rounded-md"
                id="name"
                placeholder=              {t("Name")} 

                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>

            <div className="mb-3 w-full">
              <label className="block font-medium mb-[2px] text-primary" htmlFor="email">
              {t("Email")}
              </label>
              <input
                type="email"
                className="w-full  border-[#303030] bg-[#252525] text-text_color focus:border-[#303030] focus:ring-0  p-2 border  rounded-md"
                id="email"
                placeholder=              {t("Email")}

                value={email}
                required
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>

            <div className="mb-3 w-full">
              <label className="block font-medium mb-[2px] text-primary" htmlFor="message">
              {t("Message")}

              </label>
              <textarea
                        className="w-full  border-[#303030] bg-[#252525] text-text_color focus:border-[#303030] focus:ring-0  p-2 border  rounded-md"
                        required
                        placeholder=              {t("Message")}

                id="message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
              />
            </div>

            <button
              type="submit"
              className="mb-6 inline-block w-full rounded bg-primary px-6 py-2.5 font-medium uppercase leading-normal text-white hover:shadow-md hover:bg-hover active:text-active"
            >
                {t("send")}
            </button>
          </form>

          <div className="w-full shrink-0 grow-0 basis-auto lg:w-7/12">
            <div className="flex flex-wrap">
              <ContactCard
                title={t("Technical_Support")}
                email="info@genius-wings.com"
                phone=" +49 176 60369006 ,   +964 7774583999"
                icon={
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={2}
                    stroke="currentColor"
                    className="h-6 w-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M14.25 9.75v-4.5m0 4.5h4.5m-4.5 0l6-6m-3 18c-8.284 0-15-6.716-15-15V4.5A2.25 2.25 0 014.5 2.25h1.372c.516 0 .966.351 1.091.852l1.106 4.423c.11.44-.054.902-.417 1.173l-1.293.97a1.062 1.062 0 00-.38 1.21 12.035 12.035 0 007.143 7.143c.441.162.928-.004 1.21-.38l.97-1.293a1.125 1.125 0 011.173-.417l4.423 1.106c.5.125.852.575.852 1.091V19.5a2.25 2.25 0 01-2.25 2.25h-2.25z"
                    />
                  </svg>
                }
              />
              <ContactCard
                title={t("Sales_Questions")}
                email="Sales@genius-wings.com"
                phone=" +964 7774583999 , +964 07730279390"
                icon={
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={2}
                    stroke="currentColor"
                    className="h-6 w-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M2.25 18.75a60.07 60.07 0 0115.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 013 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 00-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 01-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 003 15h-.75M15 10.5a3 3 0 11-6 0 3 3 0 016 0zm3 0h.008v.008H18V10.5zm-12 0h.008v.008H6V10.5z"
                    />
                  </svg>
                }
              />
              <ContactCard
                title={t("Address")}
                email="Kasernen str. 12 , 21073 Hamburg/ Germany"
                icon={
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={2}
                    stroke="currentColor"
                    className="h-6 w-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M15 9h3.75M15 12h3.75M15 15h3.75M4.5 19.5h15a2.25 2.25 0 002.25-2.25V6.75A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25v10.5A2.25 2.25 0 004.5 19.5zm6-10.125a1.875 1.875 0 11-3.75 0 1.875 1.875 0 013.75 0zm1.294 6.336a6.721 6.721 0 01-3.17.789 6.721 6.721 0 01-3.168-.789 3.376 3.376 0 016.338 0z"
                    />
                  </svg>
                }
              />
            </div>
          </div>
        </div>
      </section>
    </div>
    <Footer />
  </div>
  );
};

export default Contact_us;
