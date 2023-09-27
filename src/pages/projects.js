import React from "react";
import Head from "next/head";
import Layout from "@/components/Layout";
import Link from "next/link";
import Image from "next/image";
import AnimatedText from "@/components/AnimatedText";
import { DiscordIcon } from "@/components/Icon";
import project1 from "../../public/images/projects/slotie-guard.jpeg";
import project2 from "../../public/images/projects/drippie-zombie.jpeg";
import project3 from "../../public/images/projects/beatblock.jpeg";
import project4 from "../../public/images/projects/babylion.jpeg";
import { motion } from "framer-motion";
import TransitionEffect from "@/components/TransitionEffect";

const FramerImage = motion(Image);

const FeaturedProject = ({ type, title, summary, img, link, discordLink }) => {
  return (
    <article className="w-full flex items-center justify-between rounded-3xl border border-solid border-dark bg-light shadow-2xl lg:flex-col lg:p-8">
      <Link
        href={link}
        target="_blank"
        className="w-[20%] lg:w-full md:w-full p-2 cursor-pointer overflow-hidden rounded-lg"
      >
        <Image
          src={img}
          title={title}
          className="w-[30%] h-auto rounded-lg"
          priority
          sizes="(max-width: 768px) 100vw, (max-width : 1200px) 50vw, 50vw"
        />
      </Link>
      <div className="w-1/2 lg:w-full lg:pl-0 flex flex-col items-start justify-between pl-6">
        <span className="text-primary text-normal">{type}</span>
        <Link href={link} target="_blank">
          <h2 className="w-full text-3xl my-2 font-semibold text-left">
            {title}
          </h2>
        </Link>
        <p>{summary}</p>
        <div className="flex items-center my-2">
          <Link href={discordLink} target="_blank">
            <DiscordIcon />
          </Link>
          <Link
            href={discordLink}
            target="_blank"
            className="ml-4 p-2 rounded-lg bg-primary text-light px-6 "
          >
            Check it Out
          </Link>
        </div>
      </div>
    </article>
  );
};

const Project = ({ title, type, img, link, discordLink }) => {
  return (
    <article className="w-full flex items-center justify-center rounded-2xl border border-solid border-dark bg-light p-6 relative xs:p-4">
      <Link
        href={link}
        target="_blank"
        className="w-full p-2 cursor-pointer overflow-hidden rounded-lg"
      >
        <FramerImage
          src={img}
          title={title}
          className="w-[30%] lg:w-full md:w-full  h-auto rounded-lg"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.3 }}
        />
      </Link>
      <div className="w-full flex flex-col items-start justify-between pl-6">
        <span className="text-primary text-normal">{type}</span>
        <Link href={link} target="_blank">
          <h2 className="w-full text-3xl my-2 font-semibold text-left md:text-2xl xs:text-xl">
            {title}
          </h2>
        </Link>
        {/* <p>{summary}</p> */}
        <div className="flex items-center my-2 ">
          <Link href={discordLink} className="object-cover md:hidden" target="_blank">
            <DiscordIcon />
          </Link>
          <Link
            href={discordLink}
            target="_blank"
            className="ml-4 p-2 rounded-lg bg-primary text-light px-6 "
          >
            Check
          </Link>
        </div>
      </div>
    </article>
  );
};
const projects = () => {
  return (
    <>
      <Head>
        <title>Caleb | Projects page</title>
        <meta name="description" content="Caleb | Projects page" />
      </Head>
      <TransitionEffect />
      <main className="w-full flex-col items-center justify-center">
        <Layout className="pt-12">
          <AnimatedText
            text="A glimpse of my achievements and expertise"
            className="mb-12 xl:!text-4xl lg:!text-center lg:!text-3xl sm:text-2xl"
          />
          <div className="grid grid-cols-12 gap-24 xl:gap-14 lg:gap-x-8 md:gap-y-24 sm:gap-x-0">
            <div className="col-span-12">
              <FeaturedProject
                img={project1}
                type={"Community Manager"}
                title="Slotie Guard"
                link="https://google.com"
                discordLink="https://google.com"
                summary="A slotie nft guard to keep watch of all the activities"
              />
            </div>
            <div className="col-span-6 sm:col-span-12">
              <Project
                img={project1}
                type={"Community Manager"}
                title="Slotie Guard"
                link="https://google.com"
                discordLink="https://google.com"
              />
            </div>
            <div className="col-span-6 sm:col-span-12 ">
              <Project
                img={project2}
                type={"Community Manager"}
                title="Drippie Zombie 🧟‍♂️"
                link="https://google.com"
                discordLink="https://google.com"
              />
            </div>
            <div className="col-span-6 sm:col-span-12">
              <Project
                img={project3}
                type={"Community Manager"}
                title="BeatLock"
                link="https://google.com"
                discordLink="https://google.com"
              />
            </div>
            <div className="col-span-6 sm:col-span-12">
              <Project
                img={project4}
                type={"Community Manager"}
                title="Baby Lion"
                link="https://google.com"
                discordLink="https://google.com"
              />
            </div>
          </div>
        </Layout>
      </main>
    </>
  );
};

export default projects;
