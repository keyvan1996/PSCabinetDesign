"use client";
import Image from "next/image";
import Header from "@/components/header";
import Hero from "@/components/hero";
import Carousel from "@/components/carousel";
import Footer from "@/components/footer";
import Tiles from "@/components/tiles";
import Services from "@/components/services";
import Quote from "@/components/quote";

export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      {/* <Carousel /> */}
      <Services />
      <Tiles />
      <Quote/>
      <Footer/>
    </>
  );
}
