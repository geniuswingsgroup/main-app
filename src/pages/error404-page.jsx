import React from "react";
import { Link } from "react-router-dom";

const Error404 = () => {
  return (
    <div className="min-h-screen z-50 fixed w-full bg-[#1E1E1E] flex flex-col justify-center items-center px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8 text-center">
        <div className="mb-8">
          <h2 className="mt-6 text-6xl font-extrabold text-text_color">404</h2>
          <p className="mt-2 text-3xl font-[600] bg-primary text-transparent bg-clip-text">Page not found</p>
          <p className="mt-2 text-sm text-sub_text">
            Sorry, we couldn't find the page you're looking for.
          </p>
        </div>
        <div className="mt-8">
          <Link
            to="/"
            className="inline-flex items-center px-4 py-2 border border-transparent text-base font-medium rounded-md text-white bg-primary hover:bg-hover active:bg-active focus:outline-none"
          >
            <svg
              className="mr-2 -ml-1 h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M3 12h18m-9-9l9 9-9 9"
              />
            </svg>
            Go back home
          </Link>
        </div>
      </div>
      <div className="mt-16 w-full max-w-2xl">
        <div className="relative">
          <div className="absolute inset-0 flex items-center" aria-hidden="true">
            <div className="w-full border-t border-[#2b2929]"></div>
          </div>
          <div className="relative flex justify-center">
            <span className="px-2 bg-[#2b2929] text-sm text-sub_text">
              If you think this is a mistake, please contact support
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Error404;
