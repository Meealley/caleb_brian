import React from "react";
import Link from "next/link";
import Layout from "./Layout";

const Footer = () => {
  return (
    <footer className="w-full border-t-2 border-solid border-dark dark:text-light dark:border-light font-medium text-lg">
      <Layout className="py-4 md:py-2 sm:py-1 flex items-center justify-between">
        <small className="text-[14px] sm:text-[10px]"> {new Date().getFullYear()} &copy; All rights reserved</small>
        <Link href="/"  className="text-[14px] sm:text-[14px]" > <small>Caleb's Portfolio</small> </Link>
      </Layout>
    </footer>
  );
};

export default Footer;
