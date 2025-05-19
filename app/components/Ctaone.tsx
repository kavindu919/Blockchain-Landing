"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";

const CtaOne = () => {
  return (
    <div className="relative flex flex-wrap items-center rounded-xl bg-[#805AF5] p-14">
      {/* Left Content */}
      <div className="w-full lg:w-8/12">
        <div className="p-4">
          <div className="text-left">
            <h4 className="mb-4 text-2xl font-bold">Join our AI Experts community</h4>
            <p className="text-lg text-white">
              Connect with finance and inventory experts leveraging blockchain for secure,
              transparent, and decentralized management.
            </p>
          </div>
        </div>
      </div>

      {/* Right Content */}
      <div className="w-full lg:w-4/12">
        <div className="p-4 text-left lg:text-right">
          <div className="flex flex-col items-end gap-4">
            <div className="team-image">
              <Image
                src="/team-01.png"
                width={149}
                height={49}
                alt="Group Image"
                className="object-contain"
              />
            </div>
            <Link
              href="#"
              className="rounded-lg bg-white px-4 py-2 text-center text-xl font-medium text-black focus:ring-4 focus:ring-gray-200 focus:outline-none"
            >
              Join Now Today Free
            </Link>
          </div>
        </div>
      </div>

      {/* Background Shape */}
    </div>
  );
};

export default CtaOne;
