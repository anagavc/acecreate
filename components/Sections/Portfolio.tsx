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
    <section className='bg-pry-50 py-16 lg:py-24'>
      <div className='px-8 lg:px-32 max-w-screen-2xl mx-auto'>
        {/* Header Section */}
        <div className='flex flex-col gap-3 mb-12 lg:mb-16'>
          <p className='font-main font-medium text-sec-50 text-sm lg:text-base uppercase tracking-wider'>
            Our Portfolio
          </p>
          <HeadingTwo content='Some web design projects that we have completed.' />
        </div>

        {/* Projects Grid */}
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

        {/* More Button */}
        <div className='mt-12 lg:mt-16 flex justify-center'>
          <MoreButton title='More projects' link='/portfolio' />
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
