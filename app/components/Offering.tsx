import Image from "next/image";
import React from "react";
import { FaArrowRightLong } from "react-icons/fa6";
import { FaRegCircleCheck } from "react-icons/fa6";

const Offering = () => {
  const offers = [
    "Safe Storage",
    "Fast Transactions",
    "NFT Integration",
    "Automated Smart Contracts",
  ];

  return (
    <div className="relative z-3 flex h-full w-full flex-col items-center justify-between rounded-3xl border bg-[#16181e] p-12.5 md:flex-row">
      <div>
        <header>
          <h1 className="mb-4 text-6xl font-medium">We are Offering,</h1>
        </header>
        <ul>
          {offers.map((offer, index) => (
            <li className="mb-2 flex items-center gap-2 py-2.5 text-2xl font-semibold" key={index}>
              <FaRegCircleCheck />
              {offer}
            </li>
          ))}
        </ul>
        <button className="flex h-12 w-auto flex-row items-center justify-between gap-3 rounded-lg border border-transparent bg-linear-to-r from-[#805AF5] to-[#CD99FF] bg-[length:200%_auto] p-7 text-center text-base leading-0.25 font-semibold tracking-tighter text-black no-underline transition duration-400">
          Start Exploring Now <FaArrowRightLong />
        </button>
      </div>
      <section>
        <Image src="/offer.jpg" alt="offer image" width={569} height={483} />
      </section>
    </div>
  );
};

export default Offering;
