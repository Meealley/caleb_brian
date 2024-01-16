import Link from "next/link";
import React, { useState } from "react";
import Logo from "./Logo";
import { motion } from "framer-motion";
import { useRouter } from "next/router";
import { TwitterIcon, Discord2, SunIcon, MoonIcon } from "./Icon";
import useThemeSwitcher from "./hooks/useThemeSwitcher";

const CustomLink = ({ href, title, className = "" }) => {
  const router = useRouter();
  //   console.log(router);
  return (
    <Link href={href} className={`${className} tracking-wide relative group`}>
      {title}
      <span
        className={`h-[1px] inline-block bg-dark dark:bg-light absolute left-0 -bottom-0.5 group-hover:w-full transition-[width] ease duration-300  ${
          router.asPath === href ? "w-full" : "w-0"
        }`}
      >
        &nbsp;
      </span>
    </Link>
  );
}; //MobileLink
const MobileLink = ({ href, title, className = "", toggle }) => {
  const router = useRouter();
  //   console.log(router);
  const clickHandler = () => {
    toggle();
    router.push(href);
  };

  return (
    <button
      href={href}
      className={`${className} relative tracking-widest group text-light dark:text-dark my-4`}
      onClick={clickHandler}
    >
      {title}
      <span
        className={`h-[1px] inline-block bg-light dark:bg-light absolute left-0 -bottom-0.5 group-hover:w-full transition-[width] ease duration-300  ${
          router.asPath === href ? "w-full" : "w-0"
        } dark:bg-dark`}
      >
        &nbsp;
      </span>
    </button>
  );
};

const NavBar = () => {
  const [mode, setMode] = useThemeSwitcher();
  const [isOpen, setIsOpen] = useState(false);

  const modeChangeHandler = () => {
    setMode(mode === "light" ? "dark" : "light");
  };
  const HamburgerHandler = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="w-full px-32 lg:px-14 md:px-10 sm:px-7 py-8 font-medium flex items-center justify-between dark:text-light relative z-10">
      {/* //Hamburger menu  */}
      <button
        className="flex-col justify-center items-center hidden lg:flex z-50"
        onClick={HamburgerHandler}
      >
        <span
          className={`bg-dark block h-0.5 dark:bg-light transition-all duration-300 ease-out w-6 rounded-sm -translate-y-0.5 ${
            isOpen ? "rotate-45 translate-y-1" : "-translate-y-0.5"
          }`}
        ></span>
        <span
          className={`bg-dark block h-0.5 dark:bg-light transition-all duration-300 ease-out w-6 rounded-sm my-0.5 ${
            isOpen ? "opacity-0" : "opacity-100"
          }`}
        ></span>
        <span
          className={`bg-dark block h-0.5 dark:bg-light transition-all duration-300 ease-out w-6 rounded-sm translate-y-0.5 ${
            isOpen ? "-rotate-45 -translate-y-1" : "translate-y-0.5"
          }`}
        ></span>
      </button>

      <div className="w-full flex justify-between items-center lg:hidden">
        <nav>
          <CustomLink href={"/"} title="Home" className="mr-4" />
          <CustomLink href={"/about"} title="About" className="mx-4" />
          <CustomLink href={"/projects"} title="Projects" className="ml-4" />
          <CustomLink href={"/Gallery"} title="Gallery" className="ml-4" />
        </nav>

        <nav className="flex items-center justify-center flex-wrap">
          <motion.a
            href={"https://twitter.com/CalebNFTGod"}
            target="_blank"
            whileHover={{ y: -2 }}
            className="w-6 mr-3"
          >
            <TwitterIcon />
          </motion.a>
          <motion.a
            href={"https://discord.com/users/963276447080923146"}
            target="_blank"
            whileHover={{ y: -2 }}
            className="w-6 ml-3"
          >
            <Discord2 />
          </motion.a>

          <button
            onClick={modeChangeHandler}
            className={`ml-4 flex items-center rounded-full p-1 ${
              mode === "light" ? "bg-dark text-light" : "bg-light text-dark"
            }`}
          >
            {mode === "dark" ? (
              <SunIcon className={"fill-dark"} />
            ) : (
              <MoonIcon className={"fill-dark"} />
            )}
          </button>
        </nav>
      </div>

      {/* condition for the menu  */}
      {/* Moblie responsive  */}
      {isOpen ? (
        <motion.div
          initial={{ scale: 0, opacity: 0, x: "-50%", y: "-50%" }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.3 }}
          className="min-w-[90vw] h-screen flex flex-col justify-between items-center fixed bg-dark/75 dark:bg-light/75 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-30  
      backdrop-blur-md py-32
      "
        >
          <nav className="flex items-center flex-col justify-center">
            <MobileLink
              href={"/"}
              title="Home"
              className=""
              toggle={HamburgerHandler}
            />
            <MobileLink
              href={"/about"}
              title="About"
              className=""
              toggle={HamburgerHandler}
            />
            <MobileLink
              href={"/projects"}
              title="Projects"
              className=""
              toggle={HamburgerHandler}
            />
            <MobileLink
              href={"/Gallery"}
              title="Gallery"
              className=""
              toggle={HamburgerHandler}
            />
          </nav>

          <nav className="flex items-center justify-center flex-wrap">
            <motion.a
              href={"https://twitter.com/CalebNFTGod"}
              target="_blank"
              whileHover={{ y: -2 }}
              className="w-6 mr-3"
            >
              <TwitterIcon />
            </motion.a>
            <motion.a
              href={"https://discord.com/users/963276447080923146"}
              target="_blank"
              whileHover={{ y: -2 }}
              className="w-6 ml-3"
            >
              <Discord2 />
            </motion.a>

            <button
              onClick={modeChangeHandler}
              className={`ml-4 flex items-center rounded-full p-1 ${
                mode === "light" ? "bg-dark text-light" : "bg-light text-dark"
              }`}
            >
              {mode === "dark" ? (
                <SunIcon className={"fill-dark"} />
              ) : (
                <MoonIcon className={"fill-dark"} />
              )}
            </button>
          </nav>
        </motion.div>
      ) : null}

      <div className="absolute left-[50%] top-2 translate-x-[-50%]">
        <Logo />
      </div>
    </header>
  );
};

export default NavBar;
