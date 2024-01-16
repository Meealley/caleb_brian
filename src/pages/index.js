import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import Layout from "@/components/Layout";
import ProfilePics from "../../public/images/calebHome.png";
import AnimatedText from "@/components/AnimatedText";
import Link from "next/link";
import HireMe from "@/components/HireMe";
import lightbulb from "../../public/images/svgs/miscellaneous_icons_1.svg";
import TransitionEffect from "@/components/TransitionEffect";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Head>
        <title>Caleb Brian</title>
        <meta name="description" content="Caleb Portfolio" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <TransitionEffect />
      <main className="flex items-center text-dark min-h-screen w-full dark:text-light">
        <Layout className="pt-0 md:pt-4 sm:pt-8">
          <div className="flex items-center justify-between w-full lg:flex-col">
            <div className="w-1/2 md:w-full">
              <Image
                src={ProfilePics}
                alt="Caleb"
                className="w-full h-auto lg:hidden md:inline-block md:w-full"
                priority
                sizes="(max-width: 768px) 100vw, (max-width : 1200px) 50vw, 50vw"
              />
            </div>
            <div className="w-1/2 flex flex-col items-center self-center lg:w-full lg:text-center">
              <AnimatedText
                text="Together, let's create a remarkable Discord community!"
                className="!text-6xl !text-left xl:!text-4xl lg:!text-center lg:!text-3xl sm:text-2xl"
              />
              <p className="my-4 text-base md:text-sm sm:text-xs font-medium">
                As a committed Discord community manager, I take delight in
                creating lively online communities that are interesting and
                vibrant. I have the knowledge and expertise required to
                establish and uphold a welcoming, enjoyable atmosphere for all
                members.
              </p>
              <div className="flex items-center self-start mt-2 lg:self-center">
                <Link
                  href={"https://discord.com/users/963276447080923146"}
                  target="_blank"
                  className="flex tracking-wider items-center bg-dark dark:bg-light dark:text-dark dark:hover:bg-dark dark:hover:text-light dark:hover:border-light text-light p-2.5 px-6 rounded-lg text-lg md:text-sm sm:text-xs font-semibold hover:bg-light hover:text-dark border border-solid border-transparent hover:border-dark"
                  download={true}
                >
                  Discord
                </Link>
                <Link
                  href="mailto:briancaleb001@gmail.com"
                  target="_blank"
                  className="ml-4 text-lg  md:text-sm sm:text-xs font-medium capitalize text-dark underline dark:text-light"
                >
                  Contact
                </Link>
              </div>
            </div>
          </div>
        </Layout>

        <HireMe />
        <div className="absolute right-8 bottom-8 inline-block w-24 md:hidden">
          <Image src={lightbulb} alt="lightbulb" className="w-full h-auto" />
        </div>
      </main>
    </>
  );
}


//4:53