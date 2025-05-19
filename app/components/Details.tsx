import Image from "next/image";
import React from "react";
import { FaArrowRightLong } from "react-icons/fa6";

function Details() {
  return (
    <>
      <div className="from-0.5% to-99.5% relative flex flex-col items-center bg-gradient-to-br from-[#171A21] to-[rgba(23,26,33,0)] p-16 md:flex-row">
        <div className="flex-1 px-8">
          <p className="mb-2.5 bg-gradient-to-r from-[#805AF5] to-[#CE99FF] bg-clip-text text-base font-bold text-transparent">
            Experience Decentralized Finance & Inventory
          </p>
          <h1 className="text-6xl">Your Blockchain Powered</h1>
          <h1 className="mb-2.5 text-6xl"> Management Solution</h1>
          <p className="mb-2.5 text-base font-medium text-[#BCC3D7]">
            Manage accounts, finances, and inventory securely using blockchain technology.
          </p>
        </div>
        <div>
          <Image src="/blockchain1.jpg" alt="Blockchain technology" width={600} height={879} />
        </div>
      </div>
    </>
  );
}

export default Details;
