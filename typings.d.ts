import { SanityImageSource } from "@sanity/image-url/lib/types/types";
import { Slug } from "sanity";
interface ParagraphProps {
  content: string;
}
interface ButtonProps {
  title: string;
  link: string;
}
interface ReviewType {
  _id: string;
  reviewer: string;
  review: string;
  designation: string;
  date: Date;
}

interface PortfolioType {
  _id: string;
  image: SanityImageSource;
  projectName: string;
  projectDescription: string;
  link: string;
  date: Date;
}
interface BlogType {
  _id: string;
  image: SanityImageSource;
  heading: string;
  story: string;
  slug: Slug;
  date: Date;
  _createdAt: string;
}

interface ServiceType {
  _id: string;
  icon: string;
  title: string;
  description: string;
  slug: string;
  date: Date;
}
interface TeamType {
  _id: string;
  image: SanityImageSource;
  teamMate: string;
  about: string;
  designation: string;
  facebookLink: string;
  twitterLink: string;
  linkedinLink: string;
  slug: Slug;
  date: Date;
}
