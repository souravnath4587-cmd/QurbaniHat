"use Client";
import Image from "next/image";
import qurbaniCow from "@/assets/quarbniCow.webp";
import React from "react";
import Link from "next/link";

const Hero = () => {
  return (
    <div className="bg-[#e1e1e1] py-16 px-6">
      <div className="grid grid-cols-12 justify-between items-center gap-4">
        <div className="md:col-span-6 col-span-full">
          <Image
            src={qurbaniCow}
            alt="Cow image of hero section"
            width={800}
            height={300}
          ></Image>
        </div>
        <div className="md:col-span-6 col-span-full ">
          <div className="text-center md:text-left">
            <h1 className="text-4xl md:text-5xl font-bold text-green-800 leading-tight">
              কুরবানির পশু কিনুন এখন ঘরে বসেই 🐄
            </h1>

            <p className="mt-4 text-gray-700 text-lg">
              ঈদুল আযহার জন্য স্বাস্থ্যবান ও যাচাইকৃত গরু, ছাগল ও ভেড়া খুঁজে নিন
              সহজেই।
              <br />
              <span className="font-semibold text-green-700">
                QurbaniHat – আপনার বিশ্বস্ত অনলাইন পশুর হাট।
              </span>
            </p>

            <div className="mt-6 flex gap-4 justify-center md:justify-start">
              <button className="bg-green-700 text-white px-6 py-3 rounded-lg hover:bg-green-800 transition">
                <Link href={"/animals"}>পশু দেখুন</Link>
              </button>

              <button className="border border-green-700 text-green-700 px-6 py-3 rounded-lg hover:bg-green-100 transition">
                আরও জানুন
              </button>
            </div>

            {/* highlight */}
            <p className="mt-6 text-sm text-gray-600">
              ✔ স্বাস্থ্য যাচাইকৃত পশু &nbsp; ✔ সারা বাংলাদেশ ডেলিভারি &nbsp; ✔
              নিরাপদ লেনদেন
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
