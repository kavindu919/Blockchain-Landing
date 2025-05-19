"use client";

import Link from "next/link";
import Image from "next/image";
import React, { useState, useEffect, useCallback } from "react";

const ServiceStyleOne = () => {
  const serviceData = {
    serviceOne: [
      {
        img: "/icons/service-icon-01.svg",
        title: "Enhanced security",
        desc: "By creating a record that can't be altered and is encrypted end-to-end, the blockchain helps prevent fraud and unauthorized activity.",
      },
      {
        img: "/icons/service-icon-02.svg",
        title: "Greater transparency",
        desc: "All network participants with permissioned access see the same information at the same time, providing full transparency.",
      },
      {
        img: "/icons/service-icon-03.svg",
        title: "Instant traceability",
        desc: "In industries where consumers are concerned about environmental or human rights issues surrounding a product—or an industry troubled by counterfeiting.",
      },
      {
        img: "/icons/service-icon-01.svg",
        title: "Increased efficiency and speed",
        desc: "There's no need to reconcile multiple ledgers, so clearing and settlement can be much faster.",
      },
      {
        img: "/icons/service-icon-02.svg",
        title: "Automation",
        desc: "Smart contracts reduce human intervention and reliance on third parties to verify the fulfillment of the contract terms.",
      },
      {
        img: "/icons/service-icon-03.svg",
        title: "Decentralization",
        desc: "Blockchain does not store any of its information in a central location.",
      },
    ],
  };

  const [currentSlide, setCurrentSlide] = useState(0);
  const [touchStart, setTouchStart] = useState(0);
  const [touchEnd, setTouchEnd] = useState(0);
  const [slidesToShow, setSlidesToShow] = useState(3);

  // Handle window resize for responsive slides
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 581) {
        setSlidesToShow(1);
      } else if (window.innerWidth < 769) {
        setSlidesToShow(1);
      } else if (window.innerWidth < 992) {
        setSlidesToShow(2);
      } else if (window.innerWidth < 1200) {
        setSlidesToShow(2);
      } else {
        setSlidesToShow(3);
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Touch events for mobile swipe
  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = useCallback(() => {
    if (touchStart - touchEnd > 50) {
      nextSlide();
    }

    if (touchStart - touchEnd < -50) {
      prevSlide();
    }
  }, [touchStart, touchEnd]);

  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) =>
      prev >= serviceData.serviceOne.length - slidesToShow ? 0 : prev + 1
    );
  }, [slidesToShow, serviceData.serviceOne.length]);

  const prevSlide = useCallback(() => {
    setCurrentSlide((prev) =>
      prev <= 0 ? serviceData.serviceOne.length - slidesToShow : prev - 1
    );
  }, [slidesToShow, serviceData.serviceOne.length]);

  // Auto-rotate slides
  useEffect(() => {
    const interval = setInterval(nextSlide, 5000);
    return () => clearInterval(interval);
  }, [nextSlide]);

  return (
    <div className="relative mx-auto max-w-7xl px-4 py-12">
      {/* Slider Container */}
      <div
        className="relative overflow-hidden"
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        <div
          className="flex transition-transform duration-300 ease-in-out"
          style={{
            transform: `translateX(-${currentSlide * (100 / slidesToShow)}%)`,
            width: `${(serviceData.serviceOne.length / slidesToShow) * 100}%`,
          }}
        >
          {serviceData.serviceOne.map((data, index) => (
            <div
              key={index}
              className="px-2"
              style={{
                flex: `0 0 ${100 / slidesToShow}%`,
                maxWidth: `${100 / slidesToShow}%`,
              }}
            >
              <div className="group relative h-full overflow-hidden rounded-xl bg-gradient-to-b from-gray-900 to-gray-800 p-8 shadow-lg transition-all duration-300 hover:from-indigo-900 hover:to-purple-900">
                <div className="relative z-10 flex h-full flex-col items-center text-center">
                  <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-full bg-white/10 p-2">
                    <Image
                      src={data.img}
                      width={48}
                      height={48}
                      alt="Service Icon"
                      className="h-8 w-8 object-contain"
                    />
                  </div>

                  <h5 className="mb-3 text-xl font-semibold text-white">{data.title}</h5>
                  <p className="mb-4 text-gray-300">{data.desc}</p>

                  <Link
                    href="#"
                    className="mt-auto flex items-center text-sm font-medium text-indigo-400 transition-colors hover:text-white"
                  >
                    Explore More
                    <span className="ml-2 inline-block transition-transform group-hover:translate-x-1">
                      →
                    </span>
                  </Link>
                </div>

                <div className="absolute inset-0 opacity-10 transition-opacity group-hover:opacity-20">
                  <div className="absolute inset-0 bg-[url('/images/service/bg.png')] bg-cover bg-center" />
                </div>
                <div className="absolute inset-0 opacity-0 transition-opacity group-hover:opacity-20">
                  <div className="absolute inset-0 bg-[url('/images/service/bg-hover.png')] bg-cover bg-center" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        className="absolute top-1/2 left-2 z-10 -translate-y-1/2 rounded-full bg-black/30 p-2 text-white hover:bg-black/50"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
      </button>
      <button
        onClick={nextSlide}
        className="absolute top-1/2 right-2 z-10 -translate-y-1/2 rounded-full bg-black/30 p-2 text-white hover:bg-black/50"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </button>

      {/* Dots Indicator */}
      <div className="mt-8 flex justify-center space-x-2">
        {Array.from({ length: serviceData.serviceOne.length - slidesToShow + 1 }).map(
          (_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`h-2 w-2 rounded-full transition-all ${currentSlide === index ? "w-6 bg-indigo-500" : "bg-gray-500"}`}
            />
          )
        )}
      </div>
    </div>
  );
};

export default ServiceStyleOne;
