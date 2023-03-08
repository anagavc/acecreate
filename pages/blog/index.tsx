import { client } from "../../lib/sanity.client";
import { BlogType } from "../../typings";
import Link from "next/link";
type Props = {
  blogData: BlogType[];
};
const Blog: React.FC<Props> = ({ blogData }) => {
  return (
    <div className="flex flex-col">
      <div className="bg-pry-100 py-12 flex flex-col gap-4 px-8 lg:px-32">
        <h2 className="text-pry-50 border-b border-b-pry-50 py-2 font-main font-medium tracking-tight uppercase text-3xl ">
          Acecreate blog
        </h2>
        <p className="text-pry-50 font-main text-base ">
          News about the latest happenings at Acecreate and in the tech world.
        </p>
      </div>
      <section className="bg-pry-50 flex flex-col py-24 px-8 lg:px-32 gap-2">
        <div className="grid  mx-auto gap-8 lg:grid-cols-2 lg:py-4">
          {blogData.map((newsItem) => (
            <article className="py-8 px-6 lg:px-12 bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
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
      </section>
    </div>
  );
};

export const getServerSideProps = async () => {
  const blogData = await client.fetch(`*[_type=="blog"]`);
  return {
    props: { blogData },
  };
};

export default Blog;
