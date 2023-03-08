import { HeadingSix, Paragraph } from "../../components/Fonts";
import { client } from "../../lib/sanity.client";
import urlFor from "../../lib/urlFor";
import { BlogType } from "../../typings";
import Image from "next/image";
import Link from "next/link";
type Props = {
  blogData: BlogType[];
  article: BlogType[];
};
const Blog: React.FC<Props> = ({ article, blogData }) => {
  console.log(article);
  return (
    <div className="bg-pry-50 px-8 md:px-24 py-24 flex flex-col justify-between  w-full space-y-12">
      <div className="flex justify-between bg-pry-50 drop-shadow flex-col lg:flex-row lg:space-x-6 w-full px-10 py-12">
        <div className="w-full lg:w-4/5 flex flex-col items-start h-full space-y-6 border-r-4 px-4 border-r-sec-50">
          <h6 className={`text-2xl text-pry-100  font-main font-bold  w-full`}>
            {article[0].heading}
          </h6>

          <Image
            className="h-2/5 w-full"
            src={urlFor(article[0].image).url()}
            alt={article[0].heading}
            width={4500}
            height={2500}
          />
          <Paragraph content={article[0].story} />
        </div>
        <div className="w-full items-center mt-4 lg:mt-0 lg:w-2/5 flex flex-col lg:justify-between h-full  lg:space-x-0 space-y-6">
          <h6 className={`text-xl text-pry-100  font-main font-bold  w-full`}>
            Other related news
          </h6>
          {blogData.map((article) => (
            <div
              key={article.slug.current}
              className="flex flex-col gap-4 items-center  justify-center rounded lg:space-x-4 bg-pry-50 drop-shadow p-6"
            >
              <Image
                className="w-full h-full bg-pry-50 drop-shadow p-4 rounded flex justify-center items-center"
                src={urlFor(article.image).url()}
                alt={article.heading}
                height={4500}
                width={2500}
              />
              <div className="flex flex-col justify-between space-y-2 lg:space-y-0">
                <h6
                  className={`text-xl text-pry-100  font-main font-bold  w-full`}
                >
                  {article.heading}
                </h6>

                <Paragraph content={article.story.substring(0, 60) + "..."} />
                <Link
                  href={`${article.slug.current}`}
                  className="text-base text-pry-100 hover:text-sec-50 transition duration-300"
                >
                  Read
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
      <Link
        href="/blog"
        className="inline-flex items-center gap-2 font-medium font-main text-pry-100 hover:text-sec-50 transition ease-in dark:text-primary-500 "
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M9 15L3 9m0 0l6-6M3 9h12a6 6 0 010 12h-3"
          />
        </svg>
        Back
      </Link>
    </div>
  );
};

export const getStaticPaths = async () => {
  const query = `*[_type == "blog"] {
    slug {
      current
    }
  }
  `;

  const news = await client.fetch(query);
  const paths = news.map((item: any) => ({
    params: {
      slug: item.slug.current,
    },
  }));
  return {
    paths,
    fallback: "blocking",
  };
};

export const getStaticProps = async ({ params: { slug } }: any) => {
  const article = await client.fetch(`
  *[_type == "blog" && slug.current == '${slug}']`);

  const blogData = await client.fetch(`*[_type=="blog"]`);

  return { props: { article, blogData } };
};

export default Blog;
