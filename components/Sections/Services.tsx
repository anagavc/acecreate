import { ServiceType } from "../../typings";
import { HeadingFour, HeadingTwo, Paragraph } from "../Fonts";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
const Services = () => {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);
  const services = [
    {
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill="currentColor"
          className="w-5 h-5"
        >
          <path
            fillRule="evenodd"
            d="M6.28 5.22a.75.75 0 010 1.06L2.56 10l3.72 3.72a.75.75 0 01-1.06 1.06L.97 10.53a.75.75 0 010-1.06l4.25-4.25a.75.75 0 011.06 0zm7.44 0a.75.75 0 011.06 0l4.25 4.25a.75.75 0 010 1.06l-4.25 4.25a.75.75 0 01-1.06-1.06L17.44 10l-3.72-3.72a.75.75 0 010-1.06zM11.377 2.011a.75.75 0 01.612.867l-2.5 14.5a.75.75 0 01-1.478-.255l2.5-14.5a.75.75 0 01.866-.612z"
            clipRule="evenodd"
          />
        </svg>
      ),
      title: "Website Design & Development",
      description:
        " We build unique looking websites that are guaranteed to ensure a high rate of conversions.",
    },
    {
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill="currentColor"
          className="w-5 h-5"
        >
          <path
            fillRule="evenodd"
            d="M4.25 2A2.25 2.25 0 002 4.25v2.5A2.25 2.25 0 004.25 9h2.5A2.25 2.25 0 009 6.75v-2.5A2.25 2.25 0 006.75 2h-2.5zm0 9A2.25 2.25 0 002 13.25v2.5A2.25 2.25 0 004.25 18h2.5A2.25 2.25 0 009 15.75v-2.5A2.25 2.25 0 006.75 11h-2.5zm9-9A2.25 2.25 0 0011 4.25v2.5A2.25 2.25 0 0013.25 9h2.5A2.25 2.25 0 0018 6.75v-2.5A2.25 2.25 0 0015.75 2h-2.5zm0 9A2.25 2.25 0 0011 13.25v2.5A2.25 2.25 0 0013.25 18h2.5A2.25 2.25 0 0018 15.75v-2.5A2.25 2.25 0 0015.75 11h-2.5z"
            clipRule="evenodd"
          />
        </svg>
      ),
      title: "Mobile App Development",
      description:
        "We build cross platform mobile applications that are lighweight in size and highly secured.",
    },
    {
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill="currentColor"
          className="w-5 h-5"
        >
          <path
            fillRule="evenodd"
            d="M12.577 4.878a.75.75 0 01.919-.53l4.78 1.281a.75.75 0 01.531.919l-1.281 4.78a.75.75 0 01-1.449-.387l.81-3.022a19.407 19.407 0 00-5.594 5.203.75.75 0 01-1.139.093L7 10.06l-4.72 4.72a.75.75 0 01-1.06-1.061l5.25-5.25a.75.75 0 011.06 0l3.074 3.073a20.923 20.923 0 015.545-4.931l-3.042-.815a.75.75 0 01-.53-.919z"
            clipRule="evenodd"
          />
        </svg>
      ),
      title: "Digital Marketing",
      description:
        "We promote your brand across all social media platforms and also setup funnels that yield guaranteed leads and sales.",
    },
  ];
  return (
    <section className="bg-white flex flex-col px-8 lg:px-32 py-12 items-center">
      <h3 className="font-light font-main mb-2 text-gray-500 md:text-lg lg:text-xl border-b border-b-sec-50 py-2">
        What we do
      </h3>
      <HeadingTwo content="Our Services" />

      <div className="grid max-w-screen-xl  py-8 mx-auto gap-8 lg:py-12 lg:grid-cols-3">
        {services.map((service) => (
          <div
            className="flex flex-col gap-4 drop-shadow-md w-full bg-white  p-6 md:p-8 rounded"
            key={service.title}
            data-aos="fade-up"
            data-aos-delay="50"
            data-aos-easing="ease-in-out"
            data-aos-duration="1000"
            data-aos-mirror="true"
            data-aos-once="false"
          >
            <div className="flex justify-center text-pry-100 items-center w-10 h-10 rounded bg-pry-50 lg:h-12 lg:w-12 dark:bg-primary-900">
              {service.icon}
            </div>
            <HeadingFour content={service.title} />

            <Paragraph content={service.description} />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;
