import { FC } from "react";
import { ButtonProps } from "../typings";
export const MoreButton: FC<ButtonProps> = ({ title, link }): JSX.Element => (
  <a
    href={link}
    className="flex t-main items-center w-full md:w-2/6 gap-2 my-6 md:my-0 font-heading justify-center px-4 py-2.5 text-base font-medium text-center text-pry-100  rounded hover:bg-pry-100 hover:text-pry-50 border border-pry-100 transition ease-in focus:ring-4 focus:ring-gray-100 dark:text-white dark:border-gray-700 dark:hover:bg-gray-700 dark:focus:ring-gray-800"
  >
    {title}
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
);
