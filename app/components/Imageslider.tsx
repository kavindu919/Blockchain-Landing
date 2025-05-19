"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";

const images = [
  "/brands/Blockchain white.png",
  "/brands/Ethereum White.png",
  "/brands/Hardhat White.png",
  "/brands/mapbox.png",
  "/brands/Metamask white.png",
  "/brands/slack.png",
];

const Imageslider = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 3000); // change every 3 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full max-w-4xl mx-auto overflow-hidden">
      <div
        className="flex transition-transform duration-500 ease-in-out"
        style={{ transform: `translateX(-${current * 100}%)` }}
      >
        {images.map((src, index) => (
          <div key={index} className="min-w-full">
            <Image
              src={src}
              alt={`Slide ${index + 1}`}
              width={1200}
              height={500}
              className="w-full h-auto object-cover"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Imageslider;
