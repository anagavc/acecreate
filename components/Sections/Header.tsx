import Lottie from "lottie-react";
import hero from "../../images/hero.json";
import Link from "next/link";
const Header = () => {
  return (
    <section className="bg-pry-50  px-2 lg:px-32">
      <div className="grid max-w-screen-xl px-6 md:px-0 lg:px-0 gap-4  py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
        <div className="mr-auto place-self-center lg:col-span-7">
          <h1 className="max-w-2xl font-main mb-4 text-4xl text-pry-100 font-heading font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl dark:text-white">
            We Build <span className="text-sec-50">Fast</span> &{" "}
            <span className="text-sec-50">Efficient </span>
            Websites
          </h1>
          <p className="max-w-2xl font-main mb-6 text-base font-light text-gray-500 lg:mb-8 dark:text-gray-400">
            At acecreate technologies, we build websites for a wide range of
            industries to enable them reach a broader audience.
          </p>
          <div className="flex flex-col md:flex-row gap-4">
            <Link
              href="/contact"
              className="inline-flex  font-main items-center justify-center pr-5 py-3 mr-3 text-base font-medium text-center text-pry-100 hover:text-sec-50 transition-all ease-in rounded-lg bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 dark:focus:ring-primary-900"
            >
              Get started
              <svg
                className="w-5 h-5 ml-2 -mr-1"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                  clipRule="evenodd"
                ></path>
              </svg>
            </Link>
            <Link
              href="portfolio"
              className="inline-flex font-main  items-center font-heading justify-center px-8 py-2.5 text-base font-medium text-center text-pry-50  rounded bg-pry-100 hover:text-pry-50 hover:bg-sec-50 transition ease-in focus:ring-4 focus:ring-gray-100 dark:text-white dark:border-gray-700 dark:hover:bg-gray-700 dark:focus:ring-gray-800"
            >
              Our Portfolio
            </Link>
          </div>
        </div>
        <div className="lg:mt-0 lg:col-span-5 lg:flex">
          <Lottie animationData={hero} loop={true} />
        </div>
      </div>
    </section>
  );
};

export default Header;
