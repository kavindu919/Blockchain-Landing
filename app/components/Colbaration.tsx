import Image from "next/image";
import React from "react";

function Colbaration() {
  return (
    <div className="container mx-auto px-4 py-12">
      <span className="block bg-gradient-to-r from-[#805AF5] to-[#CE99FF] bg-clip-text text-center text-base font-semibold tracking-wide text-transparent">
        AI Collaboration
      </span>
      <h1 className="text-center text-4xl font-medium text-white md:text-6xl">
        How we handle things Internally
      </h1>
      <div className="mt-8 flex justify-center">
        <Image
          src="/11.jpg"
          width={1305}
          height={712}
          alt="collaboration-image"
          className="rounded-xl shadow-xl"
        />
      </div>
    </div>
  );
}

export default Colbaration;
