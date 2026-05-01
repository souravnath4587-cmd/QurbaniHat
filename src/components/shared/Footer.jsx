"use client";
import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <footer className="bg-green-900 text-white mt-10">
      <div className="max-w-7xl mx-auto px-6 py-10 grid md:grid-cols-3 gap-8">
        {/* About Section */}
        <div>
          <h2 className="text-2xl font-bold text-green-400">QurbaniHat</h2>
          <p className="mt-3 text-gray-300">
            QurbaniHat is your trusted online marketplace for buying healthy and
            verified Qurbani animals. We ensure quality, safety, and easy
            delivery for your Eid-ul-Adha.
          </p>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="text-xl font-semibold text-green-400">Contact Us</h3>
          <ul className="mt-3 space-y-2 text-gray-300">
            <li>📍 Feni, Chattogram, Bangladesh</li>
            <li>📞 +880 1799 052958</li>
            <li>📧 support@qurbanihat.com</li>
          </ul>
        </div>

        {/* Social Links */}
        <div>
          <h3 className="text-xl font-semibold text-green-400">Follow Us</h3>
          <div className="mt-3 flex gap-4">
            <Link href="#" className="hover:text-green-300">
              Facebook
            </Link>
            <Link href="#" className="hover:text-green-300">
              Instagram
            </Link>
            <Link href="#" className="hover:text-green-300">
              YouTube
            </Link>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="border-t border-green-700 text-center py-4 text-gray-400 text-sm">
        © {new Date().getFullYear()} QurbaniHat. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
