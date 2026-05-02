"use client";

import Image from "next/image";
import Logo from "@/assets/qurbaniHatLogo.png";
import Link from "next/link";

export default function AboutPage() {
  return (
    <div className="max-w-6xl mx-auto p-6 space-y-6">
      {/* Hero Section */}
      <div className="text-center">
        <div className="flex justify-center">
          <Image src={Logo} alt="Website Logo" width={300} height={200}></Image>
        </div>
        <h1 className="text-4xl font-bold mb-3">About QurbaniHat</h1>
        <p className="text-gray-600 max-w-2xl mx-auto">
          QurbaniHat is a trusted online platform where you can buy healthy and
          well-cared animals for Qurbani. We focus on quality, transparency, and
          customer satisfaction.
        </p>
      </div>

      {/* Farm Info */}
      <div className="bg-white shadow rounded-2xl p-6">
        <h2 className="text-2xl font-semibold mb-3">Our Farm</h2>
        <p className="text-gray-600">
          Our farm is located in a peaceful rural environment where animals are
          raised with natural food and proper care. We ensure hygienic
          conditions and regular health monitoring for all animals.
        </p>
      </div>

      {/* Location */}
      <div className="bg-white shadow rounded-2xl p-6">
        <h2 className="text-2xl font-semibold mb-3">Our Location</h2>
        <p className="text-gray-600">
          We are based in Bangladesh and operate from a well-maintained farm
          area. You can visit our farm directly or order online from anywhere in
          the country.
        </p>
      </div>

      {/* Team */}
      <div className="bg-white shadow rounded-2xl p-6">
        <h2 className="text-2xl font-semibold mb-3">Our Active Team</h2>
        <p className="text-gray-600">
          Our dedicated team members are always active and ready to assist
          customers. From animal care to delivery, every process is handled with
          responsibility and professionalism.
        </p>
      </div>

      {/* Government Officers */}
      <div className="bg-white shadow rounded-2xl p-6">
        <h2 className="text-2xl font-semibold mb-3">Animal Care & Safety</h2>
        <p className="text-gray-600">
          For ensuring proper animal health and safety, 4 government-approved
          officers are always available. They regularly check the animals to
          maintain quality and health standards.
        </p>
      </div>

      {/* Extra Section */}
      <div className="bg-green-50 border border-green-200 rounded-2xl p-6">
        <h2 className="text-2xl font-semibold mb-3">Why Choose Us?</h2>
        <ul className="list-disc pl-6 text-gray-700 space-y-2">
          <li>Healthy and well-fed animals</li>
          <li>Transparent pricing</li>
          <li>Home delivery available</li>
          <li>Trusted and verified sellers</li>
          <li>24/7 customer support</li>
        </ul>
      </div>

      {/* Call to Action */}
      <div className="text-center">
        <h2 className="text-2xl font-bold mb-3">Ready for Qurbani?</h2>
        <p className="text-gray-600 mb-4">
          Explore our collection and choose the perfect animal for your Qurbani.
        </p>
        <Link
          href="/animals"
          className="bg-green-600 text-white px-6 py-3 rounded-xl hover:bg-green-700 transition"
        >
          Browse Animals
        </Link>
      </div>
    </div>
  );
}
