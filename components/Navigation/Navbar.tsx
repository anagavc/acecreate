import React, { useState } from "react";
import Link from "next/link";
import logo from "../../images/logo.png";
import { useRouter } from "next/router";
import Image from "next/image";

const Navbar = () => {
  const pryButton = `
  hover:text-pry-50 hover:bg-sec text-pry-100 md:mr-0 text-base bg-pry-200 py-3
 rounded-full flex  justify-center  w-full md:space-x-12 items-center  px-8 font-heading md:my-0 my-7   transition duration-500
  `;
  const [open, setOpen] = useState(false);
  const router = useRouter();

  const handleClick = () => {
    setOpen(!open);
  };
  const handleClose = () => {
    setOpen(!open);
  };
  const navItems = [
    {
      name: "About Us",
      path: "/about",
    },
    {
      name: "Services",
      path: "/services",
    },

    {
      name: "Portfolio",
      path: "/portfolio",
    },

    {
      name: "Contact",
      path: "/contact",
    },
    {
      name: "Blog",
      path: "/blog",
    },
  ];

  return (
    <nav className="bg-pry-50 px-4 lg:px-28  py-2.5 rounded dark:bg-gray-900 drop-shadow-sm sticky">
      <div className="container max-w-screen-xl flex flex-wrap items-center justify-between mx-auto">
        <Link href="/" className="flex items-center">
          <Image src={logo} height={20} width={200} alt="Logo" />
        </Link>
        <div className="flex md:order-2">
          <button
            type="button"
            className="text-pry-50 hidden lg:flex leading bg-pry-100 font-main hover:bg-sec-50  text-base rounded focus:ring-4 focus:outline-none focus:ring-blue-300 font-semibold transition-all  ease-in   px-12 py-2.5 text-center mr-3 md:mr-0 dark:bg-blue-600 dark:hover:bg-pry-100 dark:focus:ring-blue-800"
          >
            Contact Us
          </button>
          <button
            data-collapse-toggle="navbar-cta"
            type="button"
            className="inline-flex items-center p-2 text-sm text-pry-100 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            aria-controls="navbar-cta"
            aria-expanded="false"
            onClick={handleClick}
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className="w-6 h-6"
              aria-hidden="true"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                clipRule="evenodd"
              ></path>
            </svg>
          </button>
        </div>
        <div
          className={`items-center  justify-center lg:justify-between ${
            open ? " " : "hidden"
          }  w-full md:flex md:w-auto md:order-1 ease-in duration-300 transition-all `}
          id="navbar-cta"
        >
          <ul className="flex flex-col p-4 mt-4 border border-gray-100 rounded-lg bg-pry-50 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 md:bg-pry-50 dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
            {navItems.map((item) => (
              <li key={item.name}>
                <Link
                  href={item.path}
                  className="block border font-main border-b-sec-50 lg:border-b-0 lg:border-0 py-2 pl-3 pr-4 text-pry-100 font-heading hover:text-sec-50 transition-all ease-linear  rounded md:bg-transparent md:text-pry-100 md:p-0 dark:text-white"
                  aria-current="page"
                  onClick={handleClick}
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
