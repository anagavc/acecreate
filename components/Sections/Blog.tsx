import { BlogType } from "../../typings";
import { MoreButton } from "../Buttons";
import { HeadingTwo } from "../Fonts";
import Link from "next/link";
import AOS from "aos";
import { useEffect } from "react";
type Props = {
  news: BlogType[];
};
const Blog: React.FC<Props> = ({ news }) => {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);
  return (
    <section className="bg-white flex flex-col py-12 px-8 lg:px-32">
      <div className="grid max-w-screen-xl  py-8 mx-auto gap-8  lg:grid-row-3">
        <div className="flex flex-col gap-2">
          <p className="max-w-2xl font-main font-light  text-pry-100 md:text-base lg:text-base dark:text-gray-400 underline  decoration-sec-50 underline-offset-4 py-2">
            Our Blog
          </p>
          <HeadingTwo content="News from Acecreate" />
        </div>
        <div className="grid  mx-auto gap-8 lg:grid-cols-2 lg:py-4">
          {news.map((newsItem) => (
            <article
              className="py-8 px-6 lg:px-12 bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700"
              data-aos="fade-up"
              data-aos-delay="50"
              data-aos-easing="ease-in-out"
              data-aos-duration="1000"
              data-aos-mirror="true"
              data-aos-once="false"
            >
              <div className="flex justify-between items-center mb-5 text-pry-100">
                <span className="bg-pry-50 text-pry-100 font-main text-xs font-medium inline-flex items-center px-2.5 py-0.5 rounded dark:bg-primary-200 dark:text-primary-800">
                  Tutorial
                </span>
                <span className="text-sm font-main text-pry-100">
                  {new Date(newsItem._createdAt).toLocaleDateString("en-US", {
                    day: "numeric",
                    month: "long",
                    year: "numeric",
                  })}
                </span>
              </div>
              <h2 className="mb-2 text-2xl font-bold font-main tracking-tight text-pry-100 dark:text-white">
                <a href="#">{newsItem.heading}</a>
              </h2>
              <p className="mb-5 font-main text-justify font-light text-pry-100 dark:text-gray-400">
                {newsItem.story.substring(0, 200) + "..."}
              </p>
              <div className="flex justify-between items-center">
                <Link
                  href={`blog/${newsItem.slug.current}`}
                  className="inline-flex items-center font-medium text-pry-100 hover:text-sec-50 transition ease-in dark:text-primary-500 "
                >
                  Read more
                  <svg
                    className="ml-2 w-4 h-4"
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
                </Link>
              </div>
            </article>
          ))}
        </div>
        <MoreButton title="More blog posts" link="/blog" />
      </div>
    </section>
  );
};

export default Blog;
