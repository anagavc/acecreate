import { HeadingTwo, Paragraph } from "../components/Fonts";
import Link from "next/link";
import FacebookOutlinedIcon from "@mui/icons-material/FacebookOutlined";
import TwitterIcon from "@mui/icons-material/Twitter";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import Lottie from "lottie-react";
import about from "../images/about.json";
import Image from "next/image";
import urlFor from "../lib/urlFor";
import { client } from "../lib/sanity.client";
import { TeamType } from "../typings";
type Props = {
  teamMates: TeamType[];
};
const About: React.FC<Props> = ({ teamMates }) => {
  return (
    <div className="flex flex-col">
      <div className="bg-pry-100 py-12 flex flex-col gap-4 px-8 lg:px-32">
        <h2 className="text-pry-50 border-b border-b-pry-50 py-2 font-main font-medium tracking-tight uppercase text-3xl ">
          About Us
        </h2>
        <p className="text-pry-50 font-main text-base ">
          Here is our story at Acecreate.
        </p>
      </div>
      <section className="bg-pry-50 flex flex-col  px-8 lg:px-32 gap-2">
        <div className="grid max-w-screen-xl  py-8 mx-auto lg:gap-8 xl:gap-12 lg:py-16 lg:grid-cols-12">
          <div className="mr-auto place-self-center lg:col-span-6 gap-12">
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
          </div>
          <div className="lg:mt-0 lg:col-span-6 lg:flex ">
            <Lottie animationData={about} loop={true} />
          </div>
        </div>
        <div className="flex flex-col gap-2 py-8 mb-12 border-t border-t-pry-100">
          <p className="max-w-2xl font-main font-light  text-pry-100 md:text-base lg:text-base dark:text-gray-400 underline  decoration-sec-50 underline-offset-4 py-2">
            The Team
          </p>
          <HeadingTwo content="Meet the wonderful people at Acecreate." />

          <div className="grid max-w-screen-xl lg:grid-cols-3 lg:gap-10 xl:gap-10 lg:py-4">
            {teamMates.map((team) => (
              <>
                <div
                  className="bg-pry-100 flex flex-col lg:w-96 w-full p-6 lg:px-10 lg:py-12 gap-4 justify-center items-center "
                  key={team.teamMate}
                >
                  <div className="w-28 h-28 flex flex-col items-center justify-center rounded-full pb-2 bg-pry-50">
                    <Image
                      src={urlFor(team.image).url()}
                      className="p-3 w-5/6 rounded-full bg-pry-100 "
                      alt="review"
                      width={1336}
                      height={1280}
                    />
                  </div>
                  <div
                    className={`border-b border-b-pry-50  w-full flex justify-center`}
                  >
                    <h6 className="text-xl text-pry-50 font-main text-center  font-bold border-b border-b-pry-50 w-full">
                      {team.teamMate}
                    </h6>
                  </div>
                  <p className="tracking-widest font-light font-main uppercase text-pry-50 text-sm text-center">
                    {team.designation}
                  </p>

                  <p className="font-main font-light text-pry-50 text-base text-justify">
                    {team.about}
                  </p>
                  <div className="flex justify-between space-x-2 ">
                    <Link
                      href={team.facebookLink}
                      target="_blank"
                      className="text-pry-50 hover:text-sec-50 transition duration-300"
                    >
                      <FacebookOutlinedIcon />
                    </Link>
                    <Link
                      href={team.twitterLink}
                      target="_blank"
                      className="text-pry-50 hover:text-sec-50 transition duration-300"
                    >
                      <TwitterIcon />
                    </Link>
                    <Link
                      href={team.linkedinLink}
                      target="_blank"
                      className="text-pry-50 hover:text-sec-50 transition duration-300"
                    >
                      <LinkedInIcon />
                    </Link>
                  </div>
                </div>
              </>
            ))}
          </div>
        </div>
        <div className="flex flex-col justify-start py-8 lg:gap-6 border-t border-t-pry-100">
          <div className="flex flex-col gap-2">
            <p className="max-w-2xl font-main font-light  text-pry-100 md:text-base lg:text-base dark:text-gray-400 underline  decoration-sec-50 underline-offset-4 py-2">
              Get Started
            </p>
            <HeadingTwo content="Ready to get a high converting website?" />
            <Paragraph content="Send us a message to discuss the process involved in  getting a website for your organization or personal use that will boost your digital presence." />
          </div>

          <Link
            href="contact"
            className="inline-flex w-full lg:w-1/6 font-main items-center gap-2  font-heading justify-center px-4 py-2.5 text-base font-medium text-center text-pry-50  rounded bg-pry-100 hover:text-pry-50 hover:bg-sec-50 transition ease-in focus:ring-4 focus:ring-gray-100 dark:text-white dark:border-gray-700 dark:hover:bg-gray-700 dark:focus:ring-gray-800"
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
          </Link>
        </div>
      </section>
    </div>
  );
};

export const getServerSideProps = async () => {
  const teamMates = await client.fetch(`*[_type=="team"]`);
  return {
    props: { teamMates },
  };
};

export default About;
