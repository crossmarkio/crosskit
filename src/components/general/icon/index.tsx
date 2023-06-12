import { motion } from "framer-motion";
import React, { useEffect } from "react";

interface Props {
  className: string;
}

const Logo = ({ className }: Props) => {
  const draw = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        opacity: { duration: 0.5 },
      },
    },
  };

  const animate = () => {
    const el = document.getElementById("inset");
    if (el)
      Array.from(el.children).forEach((pathElement) => {
        pathElement.classList.remove("inset");
        setTimeout(function () {
          pathElement.classList.add("inset");
        }, 10);
        pathElement.setAttribute(
          "style",
          // eslint-disable-next-line
          "stroke-dasharray:" +
            // eslint-disable-next-line @typescript-eslint/ban-ts-comment
            // @ts-ignore
            //eslint-disable-next-line
            `${pathElement.getTotalLength() / 8}` +
            ";stroke-dashoffset:" +
            // eslint-disable-next-line @typescript-eslint/ban-ts-comment
            // @ts-ignore
            //eslint-disable-next-line
            pathElement.getTotalLength()
        );
      });
  };

  useEffect(() => {
    animate();
  }, []);
  return (
    <div
      className={`tw-hover:cursor-pointer tw-flex tw-cursor-pointer tw-items-center tw-justify-center tw-overflow-visible tw-border-1 tw-border-br1 ${className}`}
      onClick={() => animate()}
    >
      <motion.svg
        viewBox="0 0 96 96"
        fill="none"
        id="inset"
        xmlns="http://www.w3.org/2000/svg"
        variants={draw}
        initial="hidden"
        animate="visible"
        className="tw-max-lg:h-36 tw-max-lg:w-36 tw-pointer-events-none tw-h-44 tw-w-44 tw-stroke-white tw-stroke-[4px]"
      >
        <motion.path
          variants={draw}
          initial="hidden"
          animate="visible"
          className="inset"
          d="M10.1542 3C19.9087 10.3532 29.5784 19.4815 47.9818 19.6998C66.3847 19.4815 76.0544 10.3532 85.8089 3L89.3813 6.58249L92.9632 10.1547C85.6108 19.9102 76.4831 29.5801 76.2648 47.9679C76.5009 66.3554 85.6378 76.0169 93 85.7649L89.4213 89.3407L85.8525 92.9267C76.0909 85.5831 66.4125 76.4642 48.0091 76.2638C29.6062 76.4999 19.9452 85.6373 10.1978 93L6.62228 89.4211L3.03684 85.8521C10.38 76.0898 19.4979 66.4108 19.6988 47.9869C19.4801 29.563 10.3527 19.9102 3 10.1547L6.58227 6.58249L10.1542 3Z"
          stroke-linecap="square"
          stroke-linejoin="round"
        />
      </motion.svg>
    </div>
  );
};

export default Logo;
