"use client";

import React from "react";
import Image from "next/image";

const serviceData = {
  serviceTwo: [
    {
      img: "/service-icon-01.png",
      title: "100% Secure Transactions",
      desc: "All transactions are encrypted and recorded on the blockchain for complete security.",
    },
    {
      img: "/service-icon-02.png",
      title: "Seamless Wallet Integration",
      desc: "Connect your Web3 wallet for smooth and hassle-free access.",
    },
    {
      img: "/service-icon-03.png",
      title: "Decentralized Data Ownership",
      desc: "Users have full control over their financial and inventory records with no central authority.",
    },
  ],
};

const ServiceTwo = () => {
  return (
    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {serviceData.serviceTwo.map((data, index) => (
        <div key={index} className="group transition-all hover:scale-[1.02]">
          <div className="flex h-full flex-col items-center rounded-xl p-8 shadow-lg transition-all hover:shadow-xl">
            <div className="mb-6 flex h-24 w-24 items-center justify-center rounded-full p-4">
              <Image
                src={data.img}
                width={91}
                height={90}
                alt={data.title}
                className="object-contain"
              />
            </div>
            <div className="text-center">
              <h4 className="mb-3 text-xl font-semibold text-white">{data.title}</h4>
              <p className="text-white">{data.desc}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ServiceTwo;
