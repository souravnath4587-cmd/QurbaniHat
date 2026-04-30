import Image from "next/image";
import React from "react";

const Hero = () => {
  return (
    <div>
      {" "}
      <section className="relative w-full h-[90vh] flex items-center justify-center text-white">
        {/* Background Image */}
        <Image
          src="https://images.unsplash.com/photo-1598514982901-1d60f4cbb3c2"
          alt="Cow"
          fill
          priority
          className="object-cover"
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-black/60"></div>

        {/* Content */}
        <div className="relative z-10 text-center px-4">
          <h1 className="text-4xl md:text-6xl font-bold leading-tight">
            QurbaniHat 🐄
          </h1>

          <p className="mt-4 text-lg md:text-xl max-w-2xl mx-auto">
            Find healthy and verified cows for :contentReference[oaicite:0]
            {/* {(index = 0)} */}. Buy your Qurbani animal online with trust and
            ease.
          </p>

          <div className="mt-6 flex gap-4 justify-center">
            <button className="bg-green-500 hover:bg-green-600 px-6 py-3 rounded-lg font-semibold">
              Browse Cows
            </button>

            <button className="bg-white text-black hover:bg-gray-200 px-6 py-3 rounded-lg font-semibold">
              Sell Your Cow
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Hero;
