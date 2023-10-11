"use client";
import Image from "next/image";
import Header from "@/components/header";
import Hero from "@/components/hero";
import Carousel from "@/components/carousel";
import Footer from "@/components/footer";
import Tiles from "@/components/tiles"
import Services from "@/components/services"

export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      {/* <Carousel /> */}
      <Tiles/>
      <Services/>
      <Footer/>
    </>
  );
}
