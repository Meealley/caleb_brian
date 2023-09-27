import React from "react";
import { motion } from "framer-motion";

const Skill = ({ name, x, y }) => {
  return (
    <motion.div
      className="capitalize flex items-center justify-center rounded-full font-semibold bg-dark dark:bg-light dark:text-dark text-light py-3 px-6 absolute shadow-dark  cursor-pointer
    lg:py-2 lg:px-4 md:text-sm md:py-1.5 md:px-3 xs:bg-transparent xs:dark:bg-transparent xs:text-dark xs:dark:text-light xs:font-bold lg:p-6 md:p-4 xs:text-xs xs:p-2
    lg:bg-circularLightLg lg:dark:bg-circularDarkLg 
    md:bg-circularLightMd md:dark:bg-circularDarkMd 
    sm:bg-circularLightSm sm:dark:bg-circularDarkSm 
    
    "
      whileHover={{ scale: 1.05 }}
      initial= {{x: 0, y: 0}}
      whileInView={{ x: x, y: y }}
      transition={{ duration : 1.5}}
    >
      {name}
    </motion.div>
  );
};

const Skills = () => {
  return (
    <>
      <h2 className="font-bold text-center text-6xl md:text-4xl w-full mt-32 md:mt-24">Skills</h2>
      <div className="h-screen w-full flex items-center justify-center relative rounded-full bg-circularLight dark:bg-circularDark lg:h-[80vh] sm:h-[60vh] xs:h-[50vh]">
        <motion.div
          className="capitalize flex items-center justify-center rounded-full dark:bg-light dark:text-dark  font-semibold bg-dark text-light p-4 shadow-dark  cursor-pointer
          lg:p-6 md:p-4 xs:text-xs xs:p-2 leading-8
        "
          whileHover={{ scale: 1.05 }}
        >
          digital marketing
        </motion.div>

        <Skill name="Social media marketing" x="-29vw" y="4vw" />
        <Skill name="Web design" x="-5vw" y="-8.6vw" />
        <Skill name="Marketing consultant" x="-13vw" y="10vw" />
        <Skill name="Discord Moderation" x="19vw" y="7vw" />
        <Skill name="Klaviyo" x="-13vw" y="16vw" />
        <Skill name="Virtual Assitance" x="8vw" y="-12vw" />
        <Skill name="E-commerce store management" x="25vw" y="-6vw" />
        <Skill name="Content Marketer" x="22vw" y="-17vw" />
        <Skill name="Data Analyst" x="-23vw" y="-13vw" />
        <Skill name="Wordpress" x="-3vw" y="-19vw" />
      </div>
    </>
  );
};

export default Skills;
