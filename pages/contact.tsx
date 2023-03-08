import Image from "next/image";
import Link from "next/link";
import Lottie from "lottie-react";
import contact from "../images/contact.json";
import { client } from "../lib/sanity.client";
import urlFor from "../lib/urlFor";
import { HeadingTwo } from "../components/Fonts";
import { PortfolioType } from "../typings";
import LocationCityIcon from "@mui/icons-material/LocationCity";
import QuestionAnswerIcon from "@mui/icons-material/QuestionAnswer";
import EmailIcon from "@mui/icons-material/Email";
import LanguageIcon from "@mui/icons-material/Language";
import axios from "axios";
import { useForm, SubmitHandler } from "react-hook-form";
import { toast } from "react-hot-toast";
import { useState } from "react";
type Props = {
  portfolio: PortfolioType[];
};
type FormValues = {
  emailAddress: string;
  message: string;
  subject: string;
};
const Contact: React.FC<Props> = ({ portfolio }) => {
  const [isFetching, setFetching] = useState<Boolean>(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FormValues>();
  const onSubmit: SubmitHandler<FormValues> = async (data) => {
    setFetching(true);
    try {
      const res = await axios.post("/api/contact/info", { data });
      setFetching(false);
      reset();
      toast.success(`Your request has been sent,we will get back to you soon.`);
    } catch (error) {
      console.log(error);
      setFetching(false);
    }
  };
  const contactDetails = [
    {
      icon: <EmailIcon />,
      name: "Mail us",
      info: "contact@acecreate.tech",
    },
    {
      icon: <QuestionAnswerIcon />,
      name: "Let us talk",
      info: "+234-704-9470843",
    },
    {
      icon: <LanguageIcon />,
      name: "Our website",
      info: "acecreate.tech",
    },
    {
      icon: <LocationCityIcon />,
      name: "our office address",
      info: "No.10 Ikpa Road, Uyo",
    },
  ];

  return (
    <div className="flex flex-col">
      <div className="bg-pry-100 py-12 flex flex-col gap-4 px-8 lg:px-32">
        <h2 className="text-pry-50 border-b border-b-pry-50 py-2 font-main font-medium tracking-tight uppercase text-3xl ">
          Contact Us
        </h2>
        <p className="text-pry-50 font-main text-base ">
          Do you need a website to scale up your business digitally ? reach out
          to us.
        </p>
      </div>
      <section className="lg:px-32 px-8 bg-pry-50 ">
        <div className=" flex lg:flex-row  flex-col justify-between w-full   py-12 space-y-8">
          <form
            action="#"
            className=" w-full lg:w-2/5 space-y-4 flex flex-col lg:pt-6"
            onSubmit={handleSubmit(onSubmit)}
          >
            <h6 className="text-lg  text-pry-100 font-main capitalize  w-full">
              Send us a message
            </h6>
            <div>
              <label
                htmlFor="emailAddress"
                className="block mb-2 text-sm font-main font-medium text-pry-100 dark:text-gray-300"
              >
                Your email
              </label>
              <input
                type="email"
                id="emailAddress"
                className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-pry-100  focus:border-pry-100 transition ease-in block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-pry-100  dark:focus:border-pry-100  dark:shadow-sm-light"
                placeholder="name@mail.com"
                {...register("emailAddress", {
                  required: "Email address is required",
                  minLength: {
                    value: 4,
                    message: "Email address must be more than 4 characters",
                  },
                })}
              />
              <p className="text-pry-100 font-normal text-sm font-main">
                {errors["emailAddress"]?.message}
              </p>
            </div>
            <div>
              <label
                htmlFor="subject"
                className="block mb-2 text-sm font-main font-medium text-pry-100 dark:text-gray-300"
              >
                Subject
              </label>
              <input
                type="text"
                id="subject"
                className="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-pry-100  focus:border-pry-100 transition ease-in dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-pry-100  dark:focus:border-pry-100  dark:shadow-sm-light"
                placeholder="Let us know how we can help you"
                {...register("subject", {
                  required: "Please enter a subject you want to discuss about",
                  minLength: {
                    value: 4,
                    message: "Subject must be more than 4 characters",
                  },
                })}
              />
              <p className="text-pry-100 font-normal text-sm font-main">
                {errors["subject"]?.message}
              </p>
            </div>
            <div className="sm:col-span-2">
              <label
                htmlFor="message"
                className="block mb-2 text-sm font-main font-medium text-pry-100 dark:text-gray-300"
              >
                Your message
              </label>
              <textarea
                id="message"
                rows={6}
                className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-pry-100  focus:border-pry-100 transition ease-in dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-pry-100  dark:focus:border-pry-100 "
                placeholder="Leave a comment..."
                {...register("message", {
                  required: "Please enter a message for us",
                  minLength: {
                    value: 4,
                    message: "Message must be more than 4 characters",
                  },
                })}
              ></textarea>
              <p className="text-pry-100 font-normal text-sm font-main">
                {errors["message"]?.message}
              </p>
            </div>
            <button
              className={`inline-flex w-full  font-main items-center gap-2  font-heading justify-center px-4 py-2.5 text-base font-medium text-center text-pry-50  rounded bg-pry-100 hover:text-pry-50 hover:bg-sec-50 transition ease-in focus:ring-4 focus:ring-gray-100 dark:text-white dark:border-gray-700 dark:hover:bg-gray-700 dark:focus:ring-gray-800 ${
                isFetching && "disabled"
              }`}
            >
              Send message
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
          <div className="w-full lg:w-3/5 px-4 lg:px-8 flex flex-col space-y-6 ">
            <h6 className="text-lg text-center text-pry-100 tracking-tight font-main capitalize  border-b border-b-pry-100 w-full">
              Our contact information
            </h6>
            <div className="flex flex-wrap flex-col lg:flex-row w-full justify-between  gap-4">
              {contactDetails.map((detail, index) => {
                return (
                  <div
                    className="flex flex-col w-60 space-y-0 justify-between "
                    key={index}
                  >
                    <div className=" w-8 h-8 text-pry-100 flex justify-center items-center px-4 py-4">
                      {detail.icon}
                    </div>
                    <h5 className="font-main  font-medium capitalize text-lg text-pry-100">
                      {detail.name}
                    </h5>
                    <p className="font-main text-base text-pry-100">
                      {detail.info}
                    </p>
                  </div>
                );
              })}
            </div>
            <div className="w-full lg:w-3/6 self-end justify-self-end">
              <Lottie
                animationData={contact}
                loop={true}
                height={800}
                width={800}
              />
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-2 py-8 mb-12 border-t border-t-pry-100">
          <p className="max-w-2xl font-main font-light  text-pry-100 md:text-base lg:text-base dark:text-gray-400 underline  decoration-sec-50 underline-offset-4 py-2">
            Portfolio
          </p>
          <HeadingTwo content="Here are some websites that we have built for our clients" />
          <div className="grid  mx-auto gap-8 lg:grid-cols-2 lg:py-4 ">
            {portfolio.map((project) => (
              <Link
                href={project.link}
                className="flex flex-col gap-4 group cursor-pointer justify-between rounded shadow p-6 lg:p-0 lg:shadow-none "
                key={project.projectName}
                target="_blank"
                rel="noopener noreferrer"
                data-aos="fade-up"
                data-aos-delay="50"
                data-aos-easing="ease-in-out"
                data-aos-duration="1000"
                data-aos-mirror="true"
                data-aos-once="false"
              >
                <div className="group-hover:scale-105 gap-12  transition ease-in">
                  <Link
                    className=" transition ease-in "
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Image
                      src={urlFor(project.image).url()}
                      alt={project.projectName}
                      width={2250}
                      height={1200}
                    />
                  </Link>
                  <Link
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-lg capitalize font-semibold   hover:text-sec-100 transition ease-in font-main  text-pry-100"
                  >
                    {project.projectName}
                  </Link>

                  <p className="font-main  transition ease-in text-justify text-base text-pry-100">
                    {project.projectDescription}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};
export const getServerSideProps = async () => {
  const portfolio = await client.fetch(
    `*[_type=="portfolio"]|order(_createdAt desc)[0..1]`
  );

  return {
    props: {
      portfolio,
    },
  };
};

export default Contact;
