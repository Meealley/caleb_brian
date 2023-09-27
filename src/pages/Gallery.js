import React from "react";
import Head from "next/head";
import Layout from "@/components/Layout";
import AnimatedText from "@/components/AnimatedText";
import SlideGallery from "@/components/SildeImages/SlideGallery";
import TransitionEffect from "@/components/TransitionEffect";

const Gallery = () => {
  return (
    <>
      <Head>
        <title>Caleb | Gallery</title>
        <meta name="description" content="Caleb | Gallery" />
      </Head>
      <TransitionEffect />
      <main >
        <Layout className="pt-12">
          <AnimatedText text="Gallery" className="mb-12 xl:!text-4xl lg:!text-center lg:!text-3xl sm:text-2xl"/>
          <SlideGallery />
        </Layout>
      </main>
    </>
  );
};

export default Gallery;
