import { HeadingTwo } from "../Fonts";
import { MoreButton } from "../Buttons";
import Link from "next/link";
import Image from "next/image";
import urlFor from "../../lib/urlFor";
import { PortfolioType } from "../../typings";
import AOS from "aos";
import { useEffect } from "react";
type Props = {
  projects: PortfolioType[];
};
const Portfolio: React.FC<Props> = ({ projects }) => {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);
  return (
    <section className="bg-pry-50 flex flex-col py-12">
      <div className="grid w-full  py-8 lg:gap-8  px-8 lg:px-32 lg:grid-row-3">
        <div className="flex flex-col gap-2 my-6 md:my-0">
          <p className="max-w-2xl font-main font-light  text-pry-100 md:text-base lg:text-base dark:text-gray-400 underline  decoration-sec-50 underline-offset-4 py-2">
            Our Portfolio
          </p>
          <HeadingTwo content="Some web design projects that we have completed." />
        </div>
        <div className="grid  mx-auto gap-12 lg:grid-cols-2 lg:py-4">
          {projects.map((project) => (
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
        <MoreButton title="More projects" link="/portfolio" />
      </div>
    </section>
  );
};

export default Portfolio;
