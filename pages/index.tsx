import {
  Header,
  Services,
  About,
  Steps,
  Testimonials,
  Blog,
  GetStarted,
  Portfolio,
} from "../components/Sections";
import { client } from "../lib/sanity.client";
import { BlogType, PortfolioType, ReviewType } from "../typings";
type Props = {
  reviews: ReviewType[];
  portfolio: PortfolioType[];
  blog: BlogType[];
};
const Home: React.FC<Props> = ({ reviews, portfolio, blog }) => {
  return (
    <>
      <Header />
      <Services />
      <About />
      <Steps />
      <Portfolio projects={portfolio} />
      <Testimonials reviews={reviews} />
      <Blog news={blog} />
      <GetStarted />
    </>
  );
};
export const getServerSideProps = async () => {
  const reviews = await client.fetch(`*[_type=="reviews"]`);
  const portfolio = await client.fetch(`*[_type=="portfolio"]`);
  const blog = await client.fetch(`*[_type=="blog"]`);

  return {
    props: {
      reviews,
      portfolio,
      blog,
    },
  };
};

export default Home;
