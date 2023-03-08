import { HeadingTwo, Paragraph } from "../Fonts";
import AOS from "aos";
import { useEffect } from "react";
const GetStarted = () => {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);
  return (
    <section className="bg-pry-50 flex flex-col py-6  px-8 lg:px-32">
      <div
        className="flex flex-col justify-start py-8 gap-6 "
        data-aos="fade-up"
        data-aos-delay="50"
        data-aos-easing="ease-in-out"
        data-aos-duration="1000"
        data-aos-mirror="true"
        data-aos-once="false"
      >
        <div className="flex flex-col gap-2">
          <p className="max-w-2xl font-main font-light  text-pry-100 md:text-base lg:text-base dark:text-gray-400 underline  decoration-sec-50 underline-offset-4 py-2">
            Get Started
          </p>
          <HeadingTwo content="Ready to get a high converting website?" />
          <Paragraph content="Send us a message to discuss the process involved in  getting a website for your organization or personal use that will boost your digital presence." />
        </div>

        <a
          href="contact"
          className="inline-flex w-full lg:w-2/6 font-main items-center gap-2  font-heading justify-center px-4 py-2.5 text-base font-medium text-center text-pry-50  rounded bg-pry-100 hover:text-pry-50 hover:bg-sec-50 transition ease-in focus:ring-4 focus:ring-gray-100 dark:text-white dark:border-gray-700 dark:hover:bg-gray-700 dark:focus:ring-gray-800"
        >
          Contact Us
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
        </a>
      </div>
    </section>
  );
};

export default GetStarted;
