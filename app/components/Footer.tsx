import Image from "next/image";
import Link from "next/link";
import React from "react";

const footerData = {
  footer: [
    {
      links: [
        { title: "Home", url: "#" },
        { title: "About", url: "#" },
        { title: "Services", url: "#" },
        { title: "Contact", url: "#" },
      ],
      services: [
        { title: "Blockchain", url: "#" },
        { title: "Web3", url: "#" },
        { title: "Finance", url: "#" },
        { title: "Inventory", url: "#" },
      ],
      contact: [
        {
          location: "123 Blockchain St, Crypto City",
          mail: "info@yourdomain.com",
          number: "1234567890",
        },
      ],
    },
  ],
};

const Footer = () => {
  return (
    <footer className="relative bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          {/* Logo and Description */}
          <div className="space-y-4">
            <Link href="/" className="inline-block">
              <Image
                src="/logo55.png"
                width={135}
                height={35}
                alt="ChatBot Logo"
                className="h-8 w-auto"
              />
            </Link>
            <p className="text-gray-400">
              Our Account, Finance & Inventory Management System leverages the power of blockchain
              technology to deliver secure, transparent, and efficient operations.
            </p>
          </div>

          {/* Links */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Quick Links</h4>
            <ul className="space-y-2">
              {footerData.footer[0].links.map((link, index) => (
                <li key={index}>
                  <Link
                    href={link.url}
                    className="text-gray-400 transition-colors hover:text-white"
                  >
                    {link.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Services</h4>
            <ul className="space-y-2">
              {footerData.footer[0].services.map((service, index) => (
                <li key={index}>
                  <Link
                    href={service.url}
                    className="text-gray-400 transition-colors hover:text-white"
                  >
                    {service.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Contact</h4>
            <ul className="space-y-3 text-gray-400">
              <li className="flex items-start gap-3">
                <svg
                  className="mt-0.5 h-5 w-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
                <span>{footerData.footer[0].contact[0].location}</span>
              </li>
              <li className="flex items-center gap-3">
                <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
                <Link
                  href={`mailto:${footerData.footer[0].contact[0].mail}`}
                  className="transition-colors hover:text-white"
                >
                  {footerData.footer[0].contact[0].mail}
                </Link>
              </li>
              <li className="flex items-center gap-3">
                <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                  />
                </svg>
                <Link
                  href={`tel:+${footerData.footer[0].contact[0].number}`}
                  className="transition-colors hover:text-white"
                >
                  +{footerData.footer[0].contact[0].number}
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
