import AnimatedText from "@/components/AnimatedText";
import Layout from "@/components/Layout";
import Head from "next/head";
import React, { useEffect, useRef } from "react";
import calebAbout from "../../public/images/profile/caleb-about1.jpg";
import Image from "next/image";
import { motion, useInView, useMotionValue, useSpring } from "framer-motion";
import Skills from "@/components/Skills";
import Experience from "@/components/Experience";
import TransitionEffect from "@/components/TransitionEffect";

const AnimatedNumbers = ({ value }) => {
  const ref = useRef(null);

  const motionValue = useMotionValue(0);
  const springValue = useSpring(motionValue, { duration: 3000 });
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (isInView) {
      motionValue.set(value);
    }
  }, [isInView, value, motionValue]);

  useEffect(() => {
    springValue.on("change", (latest) => {
      //   console.log(latest);
      if (ref.current && latest.toFixed(0) <= value) {
        ref.current.textContent = latest.toFixed(0);
      }
    });
  }, [springValue, value]);

  return <span ref={ref}></span>;
};

const about = () => {
  return (
    <>
      <Head>
        <title>Caleb | About page</title>
        <meta name="description" content="Caleb | About page" />
      </Head>
      <TransitionEffect />
      <main className="w-full flex-col items-center justify-center dark:text-light">
        <Layout className="pt-12">
          <AnimatedText
            text="Inspiration drives action"
            className="mb-12 xl:!text-4xl lg:!text-center lg:!text-3xl sm:text-2xl "
          />
          <div className="grid md:flex md:flex-col w-full grid-cols-8 gap-16 sm:gap-8">
            <div className="col-span-3 flex flex-col items-start justify-start md:order-2">
              <h2 className="mb-4 text-lg font-bold uppercase text-dark/75 dark:text-light/75">
                About Me
              </h2>
              <p className="md:text-[16px] sm:text-[15px]">
                {/* I am a young man with lofty goals. I am the type of person who
                gets along well with clients and my superiors. I have a friendly
                and professional demeanour, and I work hard and creatively. I
                pay close attention to my audiences needs as I speak, and I
                strive to satisfy my clients. I`m looking for a position as a
                marketing consultant where I can put my professional and
                technical skills that I have acquired through previous work
                experiences in the field to use. I am a motivated, flexible, and
                responsible data analyst with expertise in website design and
                SEO. I operate methodically, put the needs of the customer
                first, and have a strong desire to network and see things
                through to completion. */}
                I am a Digital Marketer by Profession with almost 6 years of
                experience in the field. I do mainly Discord community
                management, Web design, Social media marketing and management,
                SEO, Klaviyo and virtual assistance. I have been allowed to
                apply for many NFTs servers for the role of a discord, I got
                some which are SLOTIE NFT, CRYPTO BABY LIONS NFT, EDIT HUB,
                ANGRY FROGS FAMIGLIA NFT-, I currently work with ALCHEMIST NFT,
                as the lead DeFi mod and team membe. Recently, I was engaged by
                Genzio media(A full house body for web3 projects ranging from
                marketing, discord management, social media handling and
                management, sourcing for partnerships and more). I was on the
                discord team for a period of 6 months and worked with up to 7
                different web3 projects with some majoring in lending,
                metaverse, DeFi, Blockchain and so on.
              </p>
              <p className="md:text-[16px] sm:text-[15px]">
                {/* A committed community manager having 4 years experience in
                management. Promotes exceptional skills in customer service,
                policy and procedure oversight, and facility security measures.
                Improves properties and streamlines operations for efficiency. */}
                I would love to get engaged insome other NFT servers, if i get
                the chance. As a virtual assistant I have worked with some
                individuals and service companies like DEMETRO SEALCOATING
                SERVICES. My active personality towards clients has given me the
                opportunity to rach more people and prove my work and increase
                the rate of interest for people to work with me. So, responding,
                and talking with a lot of people on random topics be it
                marketing, crypto space, NFTs and the likes. I would really like
                to get more opportunities to showcase my skills.
              </p>
            </div>

            <div className="col-span-3 relative h-max rounded-2xl border-2 border-solid border-dark p-8 bg-light md:order-1">
              <Image
                src={calebAbout}
                alt="caleb=about"
                className="w-full h-auto rounded-xl shadow-lg"
                priority
                sizes="(max-width: 768px) 100vw, (max-width : 1200px) 50vw, 33vw"
              />
            </div>

            {/* mubers up  */}
            <div className="col-span-2 flex flex-col justify-between items-end md:items-center md:flex-row md:order-3">
              <div className="flex flex-col items-end md:items-center justify-center">
                <span className="inline-block text-6xl md:text-3xl font-bold">
                  <AnimatedNumbers value={30} />+
                </span>
                <h2 className="capitalize md:text-center">satisfied clients</h2>
              </div>
              <div className="flex flex-col items-end md:items-center justify-center">
                <span className="inline-block text-6xl md:text-3xl font-bold">
                  <AnimatedNumbers value={30} />+
                </span>
                <h2 className="capitalize md:text-center">
                  projects completed
                </h2>
              </div>
              <div className="flex flex-col items-end md:items-center justify-center">
                <span className="inline-block text-6xl md:text-3xl font-bold">
                  <AnimatedNumbers value={5} /> +
                </span>
                <h2 className="capitalize md:text-center">
                  years of experience
                </h2>
              </div>
            </div>
          </div>
          <Skills />
          <Experience />
        </Layout>
      </main>
    </>
  );
};

export default about;
