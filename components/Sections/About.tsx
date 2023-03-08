import Lottie from "lottie-react";
import about from "../../images/about.json";
import { HeadingTwo, Paragraph } from "../Fonts";
import AOS from "aos";
import { useEffect } from "react";

const About = () => {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);
  return (
    <section className="bg-pry-50   px-8 lg:px-32 py-12">
      <div className="grid max-w-screen-xl  py-8 mx-auto lg:gap-8 xl:gap-12 lg:py-16 lg:grid-cols-12">
        <div
          className="mr-auto place-self-center lg:col-span-7 gap-12"
          data-aos="fade-up"
          data-aos-delay="50"
          data-aos-easing="ease-in-out"
          data-aos-duration="1000"
          data-aos-mirror="true"
          data-aos-once="false"
        >
          <p className="max-w-2xl font-main font-light  text-pry-100 md:text-base lg:text-base dark:text-gray-400 underline  decoration-sec-50 underline-offset-4 py-2">
            About Us
          </p>
          <HeadingTwo content="Our Story" />

          <Paragraph
            content=" 
            Acecreate was established with the sole purpose of building websites
            that look modern and visually appealing while meeting the digital
            needs of our clients."
          />
          <Paragraph
            content=" 
          At Acecreate, we have a team made up of highly skilled developers,
            digital marketers, designers and we know the best approach to take
            in getting significant results online. We also keep the focus on the
            metrics that mean the most, like revenue generated and social media
            reach. We know that achieving these goals is what moves businesses
            forward, and we believe that our clients’ success is the best
            measure of our own performance as a company."
          />
          <Paragraph
            content="We are based in Uyo,Akwa Ibom but we have built applications for
            clients across the different states of the federation and around the
            globe."
          />

          <a
            href="#"
            className="inline-flex font-main items-center gap-2 mt-4 font-heading justify-center px-8 py-2.5 text-base font-medium text-center text-pry-50  rounded bg-pry-100 hover:text-pry-50 hover:bg-sec-50 transition ease-in focus:ring-4 focus:ring-gray-100 dark:text-white dark:border-gray-700 dark:hover:bg-gray-700 dark:focus:ring-gray-800"
          >
            Read More
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
        <div className="lg:mt-0  lg:col-span-5 lg:flex ">
          <Lottie animationData={about} loop={true} />
        </div>
      </div>
    </section>
  );
};

export default About;
