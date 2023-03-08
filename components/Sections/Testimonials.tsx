import { HeadingTwo } from "../Fonts";

import { Swiper, SwiperSlide } from "swiper/react";
import { FC } from "react";

import "swiper/css";
import "swiper/css/bundle";
import "swiper/css/pagination";
import SwiperCore, { Pagination, Autoplay, EffectFade } from "swiper";
import { ReviewType } from "../../typings";
SwiperCore.use([Pagination, Autoplay, EffectFade]);
type Props = {
  reviews: ReviewType[];
};
const Testimonials: React.FC<Props> = ({ reviews }) => {
  return (
    <section className="bg-pry-50 flex flex-col py-12 px-8 lg:px-32">
      <div className="grid max-w-screen-xl  py-8 mx-auto gap-8  lg:grid-row-3">
        <div className="flex flex-col gap-2">
          <p className="max-w-2xl font-main font-light  text-pry-100 md:text-base lg:text-base dark:text-gray-400 underline  decoration-sec-50 underline-offset-4 py-2">
            Testimonials
          </p>
          <HeadingTwo content="Here are some of our success stories" />
        </div>
        <div className="grid max-w-screen-xl  mx-auto lg:gap-4 xl:gap-4 lg:py-4">
          <Swiper
            loop
            pagination={{
              clickable: true,
            }}
            spaceBetween={45}
            slidesPerView={2}
            autoplay={{
              delay: 5000,
              disableOnInteraction: false,
            }}
            breakpoints={{
              320: {
                slidesPerView: 1,
              },
              991: {
                slidesPerView: 2,
              },
            }}
            className="flex  w-full"
          >
            {reviews.map((review, index) => {
              return (
                <SwiperSlide key={review._id}>
                  <div
                    className="flex flex-col justify-between h-full w-full bg-pry-100  md:px-10 px-6 py-6 lg:py-14 gap-2 lg:space-y-4 md:space-y-4"
                    key={review._id}
                  >
                    <div
                      className={`border-b border-b-pry-50 text-pry-50 pb-4  w-full flex gap-2`}
                    >
                      <span>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                          fill="currentColor"
                          className="w-6 h-6"
                        >
                          <path
                            fillRule="evenodd"
                            d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </span>
                      <span>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                          fill="currentColor"
                          className="w-6 h-6"
                        >
                          <path
                            fillRule="evenodd"
                            d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </span>
                      <span>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                          fill="currentColor"
                          className="w-6 h-6"
                        >
                          <path
                            fillRule="evenodd"
                            d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </span>
                      <span>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                          fill="currentColor"
                          className="w-6 h-6"
                        >
                          <path
                            fillRule="evenodd"
                            d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </span>
                      <span>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                          fill="currentColor"
                          className="w-6 h-6"
                        >
                          <path
                            fillRule="evenodd"
                            d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </span>
                    </div>

                    <p className="font-main font-light text-pry-50 text-base text-justify">
                      {review.review}
                    </p>

                    <p className="font-main  text-pry-50 text-lg font-medium">
                      {review.reviewer}
                    </p>
                    <p className="tracking-widest font-light font-main uppercase text-pry-50 text-base ">
                      {review.designation}
                    </p>
                  </div>
                </SwiperSlide>
              );
            })}
          </Swiper>
        </div>
        <a
          href="#"
          className="flex t-main items-center w-full lg:w-2/6 gap-2 mt-4 font-heading justify-center px-8 py-2.5 text-base font-medium text-center text-pry-100  rounded hover:bg-pry-100 hover:text-pry-50 border border-pry-100 transition ease-in focus:ring-4 focus:ring-gray-100 dark:text-white dark:border-gray-700 dark:hover:bg-gray-700 dark:focus:ring-gray-800"
        >
          Our Portfolio
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
        </a>
      </div>
    </section>
  );
};

export default Testimonials;
