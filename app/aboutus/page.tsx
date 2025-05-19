import React from "react";
import Image from "next/image";
import Link from "next/link";

const AboutUs = () => {
  return (
    <div className="min-h-screen bg-[#0F1117] text-white">
      {/* Navbar */}
      <nav className="fixed top-0 z-20 w-full bg-transparent">
        <div className="mx-auto flex max-w-screen-xl flex-wrap items-center justify-between p-4">
          <Link href="/" className="flex items-center space-x-3">
            <Image src="/logo.png" width={135} height={35} alt="Logo" className="h-8 w-auto" />
          </Link>

          <div className="flex space-x-3 md:order-2 md:space-x-0">
            <button
              type="button"
              className="rounded-lg bg-white px-4 py-2 text-center text-lg font-medium text-black transition-all hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 focus:outline-none"
            >
              Connect Wallet
            </button>
          </div>

          <div className="hidden w-full items-center justify-between rounded-3xl bg-[#16181E] p-6 text-base md:order-1 md:flex md:w-auto">
            <ul className="mt-4 flex flex-col rounded-lg p-4 font-medium md:mt-0 md:flex-row md:space-x-8 md:p-0">
              {["Home", "About Us", "Contact"].map((item) => (
                <li key={item}>
                  <Link
                    href={item === "Home" ? "/" : `/${item.toLowerCase().replace(" ", "-")}`}
                    className={`relative block px-3 py-2 text-gray-300 transition-all after:absolute after:bottom-0 after:left-1/2 after:h-0.5 after:w-0 after:-translate-x-1/2 after:bg-blue-600 after:opacity-0 after:transition-all after:duration-300 hover:text-white hover:after:w-full hover:after:opacity-100 md:p-0 ${item === "About Us" ? "text-white after:w-full after:opacity-100" : ""}`}
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </nav>

      {/* About Us Content */}
      <main className="container mx-auto px-4 pt-32 pb-16">
        <section className="mb-20 text-center">
          <h1 className="mb-6 text-4xl font-bold sm:text-5xl md:text-6xl">
            About Our Blockchain Platform
          </h1>
          <p className="mx-auto max-w-3xl text-xl text-[#BCC3D7]">
            Revolutionizing finance and inventory management through decentralized technology
          </p>
        </section>

        <section className="grid gap-12 md:grid-cols-2">
          <div className="relative aspect-video overflow-hidden rounded-3xl">
            <Image
              src="/about-hero.jpg"
              alt="Blockchain technology"
              fill
              className="object-cover"
            />
          </div>

          <div className="flex flex-col justify-center">
            <h2 className="mb-4 text-2xl font-semibold text-[#805AF5]">Our Mission</h2>
            <h3 className="mb-6 text-4xl font-bold">Building Trust Through Transparency</h3>
            <p className="mb-8 text-lg text-[#BCC3D7]">
              We leverage blockchain technology to create secure, tamper-proof systems for financial
              and inventory management. Our platform ensures complete transparency while maintaining
              enterprise-grade security.
            </p>
            <div className="flex gap-4">
              <button className="rounded-lg bg-gradient-to-r from-[#805AF5] to-[#CE99FF] px-6 py-3 font-medium text-white transition-all hover:shadow-lg">
                Learn More
              </button>
              <button className="rounded-lg border border-gray-600 px-6 py-3 font-medium text-white transition-all hover:bg-gray-800">
                Contact Team
              </button>
            </div>
          </div>
        </section>

        {/* Team Members Section */}
        <section className="mt-32">
          <h2 className="mb-12 text-center text-3xl font-bold md:text-4xl">Meet Our Team</h2>
          <div className="grid gap-8 md:grid-cols-3">
            {[
              {
                name: "Alice Johnson",
                role: "CEO & Co-Founder",
                image: "/team/alice.jpg",
              },
              {
                name: "Bob Smith",
                role: "CTO & Blockchain Architect",
                image: "/team/bob.jpg",
              },
              {
                name: "Charlie Lee",
                role: "Head of Operations",
                image: "/team/charlie.jpg",
              },
            ].map((member, index) => (
              <div key={index} className="rounded-2xl bg-[#16181E] p-8 text-center">
                <div className="relative mx-auto h-32 w-32 overflow-hidden rounded-full">
                  <Image src={member.image} alt={member.name} width={128} height={128} />
                </div>
                <h3 className="mt-4 text-xl font-semibold">{member.name}</h3>
                <p className="text-[#BCC3D7]">{member.role}</p>
              </div>
            ))}
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-[#16181E] py-12">
        <div className="container mx-auto px-4">
          <div className="flex flex-col items-center justify-between md:flex-row">
            <div className="mb-6 md:mb-0">
              <Image src="/logo.png" width={135} height={35} alt="Logo" />
            </div>
            <div className="flex space-x-6">
              <Link href="#" className="text-gray-400 hover:text-white">
                Terms
              </Link>
              <Link href="#" className="text-gray-400 hover:text-white">
                Privacy
              </Link>
              <Link href="#" className="text-gray-400 hover:text-white">
                Docs
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default AboutUs;
