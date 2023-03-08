import {
  FacebookOutlined,
  Instagram,
  Twitter,
  Email,
} from "@mui/icons-material";
import { useState } from "react";
import Link from "next/link";
import { FooterParagraph, HeadingSix, Paragraph } from "../Fonts";
import { SubmitHandler, useForm } from "react-hook-form";
import axios from "axios";
import { toast } from "react-hot-toast";

type FormValues = {
  subscriberEmail: string;
};
const Footer = () => {
  const footerLinks = [
    {
      title: "Pages",
      links: [
        {
          name: "Home",
          path: "/",
        },
        {
          name: "Services",
          path: "/services",
        },
        {
          name: "About",
          path: "/about",
        },

        {
          name: "Contact",
          path: "/contact",
        },
        {
          name: "Blog",
          path: "/blog",
        },
      ],
    },
  ];
  const workingHours = [
    "Monday-Friday : 6.00am - 9:00pm",
    "Weekends : 7.00am - 7:00pm",
    "Holidays : 7.00am - 7:00pm",
  ];
  const [isFetching, setisFetching] = useState<Boolean>(false);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormValues>();
  const onSubmit: SubmitHandler<FormValues> = async (data) => {
    setisFetching(true);
    try {
      const res = await axios.post("/api/contact/enquiry", data);
      setisFetching(false);
      reset();
      toast.success(`Thank you for subscribing`);
    } catch (error) {
      console.log(error);
      setisFetching(false);
    }
  };
  return (
    <div className="w-full flex flex-col justify-between space-y-12  px-8 md:px-24 bg-pry-100">
      <div className=" py-6  flex flex-col space-y-8 justify-between w-full ">
        <div className="flex justify-between py-2 border-b border-b-pry-50">
          <div className="flex justify-center gap-2 items-center text-pry-50 h-full">
            <Link href="/">
              <span className="text-xl md:text-2xl font-bold cursor-pointer text-pry-50 font-heading justify-center hover:text-sec-50 transition duration-300  flex items-center">
                Acecreate<span className="text-sec-50">.</span>
              </span>
            </Link>
          </div>
          <div className="flex flex-col md:flex-row justify-between items-center md:space-x-12">
            <h5 className="hidden md:block font-main uppercase  font-medium text-base text-pry-50">
              follow us on
            </h5>
            <div className="flex justify-between  items-center space-x-4 md:space-x-6 ">
              <Link
                href="https://www.facebook.com/"
                target="_blank"
                className="text-pry-50 hover:text-sec-50 transition duration-300"
              >
                <FacebookOutlined />
              </Link>
              <Link
                href="https://www.instagram.com/"
                target="_blank"
                className="text-pry-50 hover:text-sec-50 transition duration-300"
              >
                <Instagram />
              </Link>
              <Link
                href="https://www.twitter.com/"
                target="_blank"
                className="text-pry-50 hover:text-sec-50 transition duration-300"
              >
                <Twitter />
              </Link>
            </div>
          </div>
        </div>
        <div className="flex flex-col lg:flex-row justify-between">
          <div className="flex flex-col lg:flex-row  justify-center space-y-6 lg:space-y-0 lg:justify-between w-full">
            {footerLinks.map((link, index) => (
              <div
                className="flex flex-col justify-between space-y-6 lg:space-y-4"
                key={index}
              >
                <h6
                  className={`text-xl text-pry-50  font-main font-bold  w-full`}
                >
                  {link.title}
                </h6>

                {link.links.map((link, index) => (
                  <Link
                    href={link.path}
                    key={"footer" + link.name}
                    className="text-pry-50 hover:text-sec-50 transition font-main text-base duration-300"
                  >
                    {link.name}
                  </Link>
                ))}
              </div>
            ))}
            <div className="flex flex-col  space-y-6 lg:space-y-4">
              <HeadingSix content="Working hours" />
              {workingHours.map((hour, i) => (
                <p className="text-pry-50 font-main text-base" key={i}>
                  {hour}
                </p>
              ))}

              <Link
                href="/contact"
                className="text-pry-50 hover:text-sec-50 transition font-main text-base duration-300"
              >
                Book an appointment
              </Link>
              <Link
                href="tel:+234-9470-843"
                className="text-pry-50 hover:text-sec-50 transition font-main text-base duration-300"
              >
                Call Us
              </Link>
            </div>
            <form
              onSubmit={handleSubmit(onSubmit)}
              className="flex flex-col justify-between w-full lg:w-3/5 mt-6 lg:mt-0 space-y-8 lg:space-y-0 "
            >
              <HeadingSix
                content="
                Subscribe to our newsletter
               "
              />
              <FooterParagraph
                content="  Signup to get the latest discount and information on our
                products &amp; services"
              />

              <div className="flex flex-col">
                <label
                  className="relative text-pry-50 focus-within:text-sec block"
                  key="subscriberEmail"
                >
                  <span className="pointer-events-none w-8 h-8 absolute top-1/2 transform -translate-y-1/2 left-3">
                    <Email />
                  </span>

                  <input
                    type="text"
                    id="subscriberEmail"
                    className="py-3 px-4 w-full font-main left-12 block pl-14  placeholder-pry-50 bg-pry-100 border-b border-b-pry-50 text-pry-50 placeholder:text-pry-50  appearance-none transition duration-300 focus:outline-none focus:border-pry-50 focus:ring-pry-50 focus:ring-1 "
                    placeholder="Your email address"
                    {...register("subscriberEmail", {
                      required: "Your email address is required, thank you",
                      minLength: {
                        value: 4,
                        message: "Email must be more than 4 characters",
                      },
                    })}
                  />
                </label>
                <p className="text-pry-50 font-normal text-sm font-body">
                  {errors["subscriberEmail"]?.message}
                </p>
              </div>
              <button
                className={`inline-flex w-full lg:w-2/6 font-main items-center gap-2  font-heading justify-center px-4 py-2.5 text-base font-medium text-center text-pry-100  rounded bg-pry-50 hover:text-pry-50 hover:bg-sec-50 transition ease-in focus:ring-4 focus:ring-gray-100 dark:text-white dark:border-gray-700 dark:hover:bg-gray-700 dark:focus:ring-gray-800 ${
                  isFetching && "disabled"
                }`}
              >
                Subscribe
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  className="w-5 h-5"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zM6.75 9.25a.75.75 0 000 1.5h4.59l-2.1 1.95a.75.75 0 001.02 1.1l3.5-3.25a.75.75 0 000-1.1l-3.5-3.25a.75.75 0 10-1.02 1.1l2.1 1.95H6.75z"
                    clipRule="evenodd"
                  />
                </svg>
              </button>
            </form>
          </div>
        </div>
      </div>
      <div className="border-t border-t-pry-50 flex justify-center items-center py-4">
        <FooterParagraph content=" Copyright &copy; Acecreate Technologies - 2023" />
      </div>
    </div>
  );
};

export default Footer;
