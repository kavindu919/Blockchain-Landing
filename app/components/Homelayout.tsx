import Image from "next/image";
import React from "react";
import Imageslider from "./Imageslider";
import Offering from "./Offering";
import ServiceStyleOne from "./Servicestyle";
import { FaArrowRightLong } from "react-icons/fa6";
import Works from "./Works";
import Colbaration from "./Colbaration";
import CtaOne from "./Ctaone";
import ServiceTwo from "./Servicetwo";
import Details from "./Details";

const Homelayout = () => {
  return (
    <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:py-16">
      {/* Hero Header */}
      <header className="mb-10 text-center">
        <h1 className="text-4xl leading-tight font-bold text-white sm:text-5xl md:text-6xl lg:text-7xl">
          Experience the true power of
        </h1>
        <h1 className="text-4xl leading-tight font-bold text-white sm:text-5xl md:text-6xl lg:text-7xl">
          Blockchain web3.0
        </h1>
      </header>

      {/* Subheader */}
      <section className="mx-auto mb-16 max-w-3xl text-center">
        <p className="text-xl leading-relaxed text-[#BCC3D7] sm:text-2xl">
          Where security, transparency, and innovation come together to redefine the future of
          technology
        </p>
      </section>

      {/* Banner Image */}
      <section className="mb-20 flex justify-center rounded-3xl border border-transparent bg-[url(/slider-main-bg.png)] bg-cover bg-center p-8">
        <div className="relative aspect-video w-full max-w-4xl">
          <Image src="/slider-main-image.png" alt="banner image" fill className="object-contain" />
        </div>
      </section>

      {/* Image Slider */}
      <section className="mb-24">
        <Imageslider />
      </section>

      {/* Web3 Section */}
      <header className="mx-auto mb-20 max-w-4xl text-center">
        <span className="mb-6 inline-block bg-gradient-to-r from-[#805AF5] to-[#CE99FF] bg-clip-text text-2xl font-bold text-transparent sm:text-3xl">
          Empowering Decentralization & User Ownership with Web 3.0
        </span>
        <h2 className="text-2xl font-medium text-white sm:text-3xl">
          Web 3.0 is made for decentralization, user ownership, and secure blockchain interactions.
        </h2>
      </header>

      {/* Offering Section */}
      <section className="mb-10">
        <Offering />
      </section>
      <section className="mb-18">
        <ServiceStyleOne />
      </section>
      <section className="mb-10">
        <Works />
      </section>
      <section className="mb-10">
        <Colbaration />
      </section>
      <section className="mb-10">
        <CtaOne />
      </section>
      <section className="mb-10">
        <ServiceTwo />
      </section>
      <section className="mb-10">
        <Details />
      </section>
    </section>
  );
};

export default Homelayout;
