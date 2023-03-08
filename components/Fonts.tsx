import { FC } from "react";
import { ParagraphProps } from "../typings";
export const Paragraph: FC<ParagraphProps> = (props): JSX.Element => (
  <p className="font-light mb-2 text-justify text-pry-100 md:text-lg lg:text-lg dark:text-gray-400">
    {props.content}
  </p>
);
export const ParagraphTwo: FC<ParagraphProps> = (props): JSX.Element => (
  <p className="font-light mb-2 text-justify text-pry-50 md:text-lg lg:text-lg dark:text-gray-400">
    {props.content}
  </p>
);
export const HeadingTwo: FC<ParagraphProps> = (props): JSX.Element => (
  <h2 className="max-w-screen-xl  font-main font-bold  text-lg text-pry-100  tracking-tight leading-none md:text-2xl xl:text-2xl dark:text-white">
    {props.content}
  </h2>
);
export const HeadingFour: FC<ParagraphProps> = (props): JSX.Element => (
  <h4 className="max-w-2xl text-lg text-pry-100   font-medium tracking-tight leading-none md:text-lg xl:text-lg dark:text-white">
    {props.content}
  </h4>
);
export const HeadingSix: FC<ParagraphProps> = ({ content }): JSX.Element => (
  <h6 className={`text-xl text-pry-50  font-main font-bold  w-full`}>
    {content}
  </h6>
);
export const FooterParagraph: FC<ParagraphProps> = ({
  content,
}): JSX.Element => <p className="text-pry-50 font-main text-base">{content}</p>;
