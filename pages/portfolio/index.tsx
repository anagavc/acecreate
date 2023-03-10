import Image from "next/image";
import Link from "next/link";
import { client } from "../../lib/sanity.client";
import { PortfolioType } from "../../typings";
import urlFor from "../../lib/urlFor";
type Props = {
  projects: PortfolioType[];
};
const Portfolio: React.FC<Props> = ({ projects }) => {
  return (
    <div className="flex flex-col">
      <div className="bg-pry-100 py-12 flex flex-col gap-4 px-8 lg:px-32">
        <h2 className="text-pry-50 border-b border-b-pry-50 py-2 font-main font-medium tracking-tight uppercase text-3xl ">
          Web development projects
        </h2>
        <p className="text-pry-50 font-main text-base ">
          Here are some websites that we have built for our clients across a
          wide range of industries.
        </p>
      </div>
      <section className="bg-pry-50 flex flex-col py-12 px-8 lg:px-32 gap-8">
        <div className="grid  mx-auto gap-12 lg:gap-24 lg:grid-cols-2 lg:py-4">
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
      </section>
    </div>
  );
};
export const getStaticProps = async () => {
  const projects = await client.fetch(
    `*[_type=="portfolio"]|order(_createdAt desc)[0..4]`
  );
  return {
    props: { projects },
  };
};

export default Portfolio;
