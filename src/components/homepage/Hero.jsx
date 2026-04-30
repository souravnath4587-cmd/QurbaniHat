import Image from "next/image";
import React from "react";

const Hero = () => {
  return (
    <div>
      {" "}
      <section className="relative w-full h-[90vh] flex items-center justify-center text-white">
        {/* Background Image */}
        <Image
          src="https://images.unsplash.com/photo-1527153857715-3908f2bae5e8?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y293fGVufDB8fDB8fHww"
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
