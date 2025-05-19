import React from "react";
import Image from "next/image";
import Link from "next/link";

const ContactUs = () => {
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
            <ul className="flex flex-col rounded-lg p-4 font-medium md:flex-row md:space-x-8 md:p-0">
              {["Home", "About Us", "Contact"].map((item) => (
                <li key={item}>
                  <Link
                    href={item === "Home" ? "/" : `/${item.toLowerCase().replace(" ", "-")}`}
                    className={`relative block px-3 py-2 text-gray-300 transition-all after:absolute after:bottom-0 after:left-1/2 after:h-0.5 after:w-0 after:-translate-x-1/2 after:bg-blue-600 after:opacity-0 after:transition-all after:duration-300 hover:text-white hover:after:w-full hover:after:opacity-100 md:p-0 ${item === "Contact" ? "text-white after:w-full after:opacity-100" : ""}`}
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </nav>

      {/* Contact Us Content */}
      <main className="container mx-auto px-4 pt-32 pb-16">
        <section className="mb-20 text-center">
          <h1 className="mb-6 text-4xl font-bold sm:text-5xl md:text-6xl">Get in Touch</h1>
          <p className="mx-auto max-w-3xl text-xl text-[#BCC3D7]">
            Have questions or want to collaborate? We’d love to hear from you!
          </p>
        </section>

        <section className="grid items-center gap-12 md:grid-cols-2">
          <div className="flex flex-col space-y-6">
            <h2 className="text-3xl font-semibold text-[#805AF5]">Contact Information</h2>
            <p className="text-lg text-[#BCC3D7]">
              Reach out via email, phone, or our social media channels.
            </p>
            <div className="space-y-4 text-lg">
              <p>
                📧 <strong>Email:</strong>{" "}
                <a href="mailto:support@example.com" className="text-[#805AF5]">
                  support@example.com
                </a>
              </p>
              <p>
                📞 <strong>Phone:</strong> <span className="text-[#BCC3D7]">+1 (555) 123-4567</span>
              </p>
              <p>
                🌍 <strong>Address:</strong>{" "}
                <span className="text-[#BCC3D7]">123 Blockchain Street, Tech City</span>
              </p>
            </div>
          </div>

          <div className="relative aspect-video overflow-hidden rounded-3xl">
            <Image src="/contact-hero.jpg" alt="Contact Us" fill className="object-cover" />
          </div>
        </section>

        {/* Contact Form Section */}
        <section className="mt-20">
          <h2 className="mb-8 text-center text-3xl font-bold md:text-4xl">Send Us a Message</h2>
          <form className="mx-auto max-w-lg space-y-6 rounded-2xl bg-[#16181E] p-8">
            <div>
              <label className="mb-2 block text-lg">Your Name</label>
              <input
                type="text"
                className="w-full rounded-lg border border-gray-600 bg-[#0F1117] px-4 py-3 text-white focus:ring-2 focus:ring-blue-600"
              />
            </div>
            <div>
              <label className="mb-2 block text-lg">Your Email</label>
              <input
                type="email"
                className="w-full rounded-lg border border-gray-600 bg-[#0F1117] px-4 py-3 text-white focus:ring-2 focus:ring-blue-600"
              />
            </div>
            <div>
              <label className="mb-2 block text-lg">Message</label>
              <textarea className="h-32 w-full rounded-lg border border-gray-600 bg-[#0F1117] px-4 py-3 text-white focus:ring-2 focus:ring-blue-600"></textarea>
            </div>
            <button
              type="submit"
              className="w-full rounded-lg bg-gradient-to-r from-[#805AF5] to-[#CE99FF] px-6 py-3 font-medium text-white transition-all hover:shadow-lg"
            >
              Send Message
            </button>
          </form>
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

export default ContactUs;
