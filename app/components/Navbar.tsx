import React from "react";
import Image from "next/image";
import Link from "next/link";

function ColorlessNavbar() {
  return (
    <nav className="fixed start-0 top-0 z-20 w-full bg-transparent">
      <div className="mx-auto flex max-w-screen-xl flex-wrap items-center justify-between p-4">
        <Link href="/" className="flex items-center space-x-3 rtl:space-x-reverse">
          <Image src="/logo.png" width={135} height={35} alt="Logo" />
        </Link>

        <div className="flex space-x-3 md:order-2 md:space-x-0 rtl:space-x-reverse">
          <button
            type="button"
            className="rounded-lg bg-white px-4 py-2 text-center text-xl font-medium text-black focus:ring-4 focus:ring-gray-200 focus:outline-none"
          >
            Connect Wallet
          </button>

          <button
            data-collapse-toggle="navbar-sticky"
            type="button"
            className="inline-flex h-10 w-10 items-center justify-center rounded-lg p-2 text-sm text-gray-500 focus:ring-2 focus:ring-gray-200 focus:outline-none md:hidden"
            aria-controls="navbar-sticky"
            aria-expanded="false"
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className="h-5 w-5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 17 14"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M1 1h15M1 7h15M1 13h15"
              />
            </svg>
          </button>
        </div>

        <div
          className="hidden w-full items-center justify-between rounded-4xl bg-[#16181E] p-6 text-base md:order-1 md:flex md:w-auto"
          id="navbar-sticky"
        >
          <ul className="mt-4 flex flex-col rounded-lg p-4 text-xl font-medium md:mt-0 md:flex-row md:space-x-8 md:p-0 rtl:space-x-reverse">
            <li>
              <Link
                href="/"
                className="relative block rounded px-3 py-2 text-gray-300 after:absolute after:bottom-0 after:left-1/2 after:h-0.5 after:w-0 after:-translate-x-1/2 after:bg-blue-600 after:opacity-0 after:transition-all after:duration-300 after:content-[''] hover:after:w-full hover:after:opacity-100 md:p-0"
                aria-current="page"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                href="/aboutus"
                className="relative block rounded px-3 py-2 text-gray-300 after:absolute after:bottom-0 after:left-1/2 after:h-0.5 after:w-0 after:-translate-x-1/2 after:bg-blue-600 after:opacity-0 after:transition-all after:duration-300 after:content-[''] hover:after:w-full hover:after:opacity-100 md:p-0"
              >
                About Us
              </Link>
            </li>
            <li>
              <Link
                href="/contactus"
                className="relative block rounded px-3 py-2 text-gray-300 after:absolute after:bottom-0 after:left-1/2 after:h-0.5 after:w-0 after:-translate-x-1/2 after:bg-blue-600 after:opacity-0 after:transition-all after:duration-300 after:content-[''] hover:after:w-full hover:after:opacity-100 md:p-0"
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default ColorlessNavbar;
