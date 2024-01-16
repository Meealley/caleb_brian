import React, { useRef } from "react";
import { useScroll, motion } from "framer-motion";
import LiCircleIcon from "./LiCircleIcon";

const Details = ({ position, company, companyLink, time, work }) => {
  const ref = useRef(null);
  return (
    <li
      ref={ref}
      className="my-4 first:mt-0 last:mb-0 w-[60%] md:w-[80%] mx-auto flex flex-col items-center justify-between"
    >
      <LiCircleIcon reference={ref} />
      <motion.div
        initial={{ y: 50 }}
        whileInView={{ y: 0 }}
        transition={{ duration: 0.5, type: "spring" }}
      >
        <h3 className="capitalize">
          {position}&nbsp;{" "}
          <a href={companyLink} target="_blank" className="text-blue-700">
            @{company}
          </a>
        </h3>
        <span className="text-sm text-dark/75 xs:text-xs">
          {time} 
        </span>
        <p>{work}</p>
      </motion.div>
    </li>
  );
};

const Experience = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "center start"],
  });

  return (
    <>
      <div className="mt-32 mb-64">
        <h2 className="font-bold text-5xl md:text-4xl md:mb-12 w-full text-center mb-32 capitalize">
          experience
        </h2>
        <div
          ref={ref}
          className="w-[75%] mx-auto relative lg:w-[90%] md:w-full"
        >
          <motion.div
            style={{ scaleY: scrollYProgress }}
            className="absolute left-9 top-0 w-[4px] h-full bg-dark  dark:bg-light origin-top md:w-[2px] md:left-[30px] xs:left-[20px]"
          />
          <ul className="w-full flex flex-col items-start justify-between ml-4 xs:ml-2">
            <Details
              position="Community Manager"
              companyLink="www.google.com"
              company="Crypto Baby Lions NFT"
              time="2020-2021"
              work="Successfully started from scratch and managed a number of Discord groups, fostering growth and a strong sense of belonging.
"
            />
            <Details
              position="Community Manager"
              companyLink="www.google.com"
              company="Edit Hub"
              time="2019-2020"
              work="Successfully started from scratch and managed a number of Discord groups, fostering growth and a strong sense of belonging.
"
            />
            <Details
              position="Community Manager"
              companyLink="www.google.com"
              company="SLOTIE NFT"
              time="2021-2022"
              work="Successfully started from scratch and managed a number of Discord groups, fostering growth and a strong sense of belonging.
"
            />
            <Details
              position="Community Manager"
              companyLink="www.google.com"
              company="Angry Frogs Famiglia NFT"
              time="2020"
              work="Successfully started from scratch and managed a number of Discord groups, fostering growth and a strong sense of belonging.
"
            />
            <Details
              position="Community Manager"
              companyLink="www.google.com"
              company="Drippy Zombies"
              time="2022-present"
              work="Successfully started from scratch and managed a number of Discord groups, fostering growth and a strong sense of belonging.
"
            />
            <Details
              position="Community Manager"
              companyLink="www.google.com"
              company="Demetro Sealcoating Services"
              time="2022-present"
              work="Successfully started from scratch and managed a number of Discord groups, fostering growth and a strong sense of belonging.
"
            />
          </ul>
        </div>
      </div>
    </>
  );
};

export default Experience;
