import React from "react";
import { CircularText } from "./Icon";
import Link from "next/link";

const HireMe = () => {
  return (
    <div className="fixed left-4 bottom-4 flex items-center justify-center overflow-hidden md:right-8 md:left-auto md:top-0 md:bottom-auto md:absolute">
      <div className="w-48 h-auto flex items-center justify-center relative md:w-20">
        <CircularText
          className={"fill-dark animate-spin-slow dark:fill-light"}
        />

        <Link
          href="mailto:abc@gmail.com"
          className="flex items-center justify-center absolute left-[34%] top-[34%] -translate-x-2 -translate-y-2 bg-dark text-light shadow-md border border-solid border-dark w-20 h-20 rounded-full font-semibold hover:bg-light hover:text-dark 
          dark:text-dark dark:bg-light dark:hover:text-light dark:hover:border-light md:w-10 md:text-[9px] md:h-10
          "
        >
          Hire me
        </Link>
      </div>
    </div>
  );
};

export default HireMe;
