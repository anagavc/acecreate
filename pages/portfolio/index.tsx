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
    <div className='flex flex-col'>
      <div className='bg-pry-100 py-12 flex flex-col gap-4 px-8 lg:px-32'>
        <h2 className='text-pry-50 border-b border-b-pry-50 py-2 font-main font-medium tracking-tight uppercase text-3xl '>
          Web development projects
        </h2>
        <p className='text-pry-50 font-main text-base '>
          Here are some websites that we have built for our clients across a
          wide range of industries.
        </p>
      </div>
      <section className='bg-pry-50 flex flex-col py-12 px-8 lg:px-32 gap-8'>
        <div className='grid gap-8 lg:gap-12 lg:grid-cols-2'>
          {projects.map((project, index) => (
            <div
              className='group relative flex flex-col overflow-hidden rounded-lg bg-gradient-to-br from-pry-100 to-pry-100/50 shadow-xl hover:shadow-2xl transition-all duration-500'
              key={project.projectName}
              data-aos='fade-up'
              data-aos-delay={index * 100}
              data-aos-easing='ease-in-out'
              data-aos-duration='800'
              data-aos-mirror='true'
              data-aos-once='false'
            >
              {/* Image Container with Overlay - REDUCED HEIGHT */}
              <div className='relative overflow-hidden aspect-[16/8]'>
                {/* Dark Overlay */}
                <div className='absolute inset-0 bg-pry-100/60 z-10' />

                {/* Image with Zoom Effect */}
                <Image
                  src={urlFor(project.image).url()}
                  alt={project.projectName}
                  fill
                  className='object-cover transition-transform duration-700 ease-out group-hover:scale-110'
                />

                {/* Logo/Brand Overlay (centered) */}
                <div className='absolute inset-0 z-20 flex items-center justify-center p-8'>
                  <div className='text-center'>
                    <h3 className='text-xl lg:text-2xl xl:text-3xl font-main font-light text-white uppercase tracking-tight'>
                      {project.projectName}
                    </h3>
                  </div>
                </div>
              </div>

              {/* Content Section - REDUCED PADDING */}
              <div className='relative p-5 lg:p-6 bg-pry-100 flex flex-col gap-3'>
                {/* Project Title (for accessibility, hidden visually) */}
                <h4 className='text-base lg:text-lg font-semibold font-main text-pry-50 capitalize'>
                  {project.projectName}
                </h4>

                {/* Description - LIMITED HEIGHT */}
                <p className='font-main text-pry-50/80 text-sm leading-relaxed line-clamp-2'>
                  {project.projectDescription}
                </p>

                {/* CTA Button */}
                <Link
                  href={project.link}
                  target='_blank'
                  rel='noopener noreferrer'
                  className='mt-1 inline-flex items-center justify-center gap-2 px-5 py-2 bg-sec-50 text-pry-100 font-semibold font-main text-sm rounded-full hover:bg-sec-50/90 transition-all duration-300 w-fit group-hover:gap-3'
                >
                  <span>View project</span>
                  <svg
                    className='w-4 h-4 transition-transform group-hover:translate-x-0.5'
                    fill='none'
                    viewBox='0 0 24 24'
                    stroke='currentColor'
                  >
                    <path
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      strokeWidth={2}
                      d='M17 8l4 4m0 0l-4 4m4-4H3'
                    />
                  </svg>
                </Link>
              </div>
            </div>
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
