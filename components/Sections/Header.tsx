import hero from "../../images/hero.json";
import Link from "next/link";
import LottieAnimation from "../LottieAnimation";

const Header = () => {
  return (
    <section className='bg-pry-50 px-4 sm:px-6 lg:px-32'>
      <div className='grid max-w-screen-xl px-4 md:px-6 lg:px-0 gap-6 py-12 mx-auto lg:gap-12 xl:gap-16 lg:py-20 lg:grid-cols-12 items-center'>
        {/* Text Content */}
        <div className='lg:col-span-7 space-y-6'>
          <h1 className='font-main text-4xl text-pry-100 font-extrabold tracking-tight leading-tight md:text-5xl xl:text-6xl dark:text-white'>
            We Build{" "}
            <span className='text-sec-50 relative inline-block'>
              Fast
              <span className='absolute bottom-0 left-0 w-full h-1 bg-sec-50/30'></span>
            </span>{" "}
            &{" "}
            <span className='text-sec-50 relative inline-block'>
              Efficient
              <span className='absolute bottom-0 left-0 w-full h-1 bg-sec-50/30'></span>
            </span>{" "}
            Websites
          </h1>

          <p className='font-main text-base md:text-lg font-light text-gray-600 dark:text-gray-400 max-w-xl'>
            At Acecreate Technologies, we build websites for a wide range of
            industries to enable them reach a broader audience.
          </p>

          {/* CTA Buttons */}
          <div className='flex flex-col sm:flex-row gap-4 pt-2'>
            <Link
              href='/contact'
              className='group inline-flex font-main items-center justify-center gap-2 px-6 py-3 text-base font-semibold text-center text-pry-100 hover:text-sec-50 transition-all duration-300 ease-in-out rounded-lg bg-transparent border-2 border-pry-100 hover:border-sec-50 focus:ring-4 focus:ring-sec-50/20 shadow-sm hover:shadow-md'
            >
              Get started
              <svg
                className='w-5 h-5 transition-transform duration-300 group-hover:translate-x-1'
                fill='currentColor'
                viewBox='0 0 20 20'
                xmlns='http://www.w3.org/2000/svg'
              >
                <path
                  fillRule='evenodd'
                  d='M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z'
                  clipRule='evenodd'
                ></path>
              </svg>
            </Link>

            <Link
              href='/portfolio'
              className='inline-flex font-main items-center justify-center px-6 py-3 text-base font-semibold text-center text-pry-50 rounded-lg bg-pry-100 hover:bg-sec-50 transition-all duration-300 ease-in-out focus:ring-4 focus:ring-pry-100/30 shadow-md hover:shadow-lg transform hover:-translate-y-0.5'
            >
              Our Portfolio
            </Link>
          </div>
        </div>

        {/* Animation */}
        <div className='lg:col-span-5 flex justify-center lg:justify-end mt-8 lg:mt-0'>
          <div className='w-full max-w-lg'>
            <LottieAnimation animationData={hero} loop={true} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Header;
