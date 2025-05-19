import Image from "next/image";
import React from "react";
import { FaArrowRightLong } from "react-icons/fa6";

function Works() {
  return (
    <>
      <div className="from-0.5% to-99.5% relative flex flex-col items-center bg-gradient-to-br from-[#171A21] to-[rgba(23,26,33,0)] p-16 md:flex-row">
        <div className="flex-1 px-8">
          <p className="mb-2.5 bg-gradient-to-r from-[#805AF5] to-[#CE99FF] bg-clip-text text-base font-bold text-transparent">
            How it works
          </p>
          <h1 className="text-6xl">Connect Your web 3</h1>
          <h1 className="mb-2.5 text-6xl"> account</h1>
          <p className="mb-2.5 text-base font-medium text-[#BCC3D7]">
            Securely connect your Web3 wallet to access our blockchain-powered platform. Enjoy
            seamless transactions, transparent data management, and automated processes with
            cutting-edge blockchain technology.
          </p>
          <button className="flex h-12 w-auto flex-row items-center justify-between gap-3 rounded-lg border border-transparent bg-linear-to-r from-[#805AF5] to-[#CD99FF] bg-[length:200%_auto] p-7 text-center text-base leading-0.25 font-semibold tracking-tighter text-black no-underline transition duration-400">
            Try it Now <FaArrowRightLong />
          </button>
        </div>
        <div>
          <Image src="/blockchain.jpeg" alt="Blockchain technology" width={630} height={879} />
        </div>
      </div>
    </>
  );
}

export default Works;
