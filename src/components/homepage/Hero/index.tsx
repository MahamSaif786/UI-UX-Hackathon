

import { cn } from "@/lib/utils";
import { integralCF } from "@/styles/fonts";
import Image from "next/image";
import React from "react";

const Header: React.FC = () => {
  return (
    <header className="bg-[#F2F0F1] overflow-hidden relative">
      {/* Header Section */}
      <div className="w-full max-w-[1440px] mx-auto grid grid-cols-1 md:grid-cols-2 items-center">
        {/* Left Section */}
        <section className="px-4 md:px-8 py-8 md:py-12">
          <h2
            className={cn([
              integralCF.className,
              "text-4xl lg:text-[64px] lg:leading-[64px] mb-5 lg:mb-8",
            ])}
          >
            FIND CLOTHES THAT MATCHES YOUR STYLE
          </h2>
          <p className="text-black/60 text-sm lg:text-base mb-6 lg:mb-8 max-w-[545px]">
            Browse through our diverse range of meticulously crafted garments,
            designed to bring out your individuality and cater to your sense of
            style.
          </p>
          <div>
            <button className="w-full md:w-52 mb-5 md:mb-12 inline-block text-center bg-black hover:bg-black/80 transition-all text-white px-14 py-4 rounded-full">
              Shop Now
            </button>
          </div>
        </section>

        {/* Right Section */}
        <section
          className="relative bg-cover bg-center bg-no-repeat"
          style={{
            height: "calc(91vh - 64px)", // Adjust this value if necessary
          }}
        >
          {/* Main Image */}
          <Image
            priority
            src="/images/header-homepage.png" // Replace with the correct image path
            alt="Header Image"
            layout="fill"
            objectFit="cover"
            objectPosition="top"
            className="rounded-lg"
          />

          {/*  Stars */}

          <Image
            priority
            src="/icons/big-star.svg"
            height={104}
            width={104}
            alt="big star"
            className="absolute right-7 xl:right-0 top-24 sm:top-28 md:top-32 lg:top-36 max-w-[40px] sm:max-w-[56px] md:max-w-[76px] lg:max-w-24 xl:max-w-[104px]"
          />

          <Image
            priority
            src="/icons/small-star.svg"
            height={56}
            width={56}
            alt="small star"
            className="absolute left-7 md:left-0 top-36 sm:top-64 md:top-44 lg:top-56 max-w-11 max-h-11 md:max-w-14 md:max-h-14"
          />





        </section>
      </div>
    </header>
  );
};

export default Header;
