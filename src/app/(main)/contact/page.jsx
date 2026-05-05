"use client";

import Image from "next/image";
import Logo from "@/assets/qurbaniHatLogo.png";
import { useState } from "react";
import { useSpring, animated } from "@react-spring/web";

export default function ContactPage() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(form);
    alert("Message sent successfully!");
    setForm({ name: "", email: "", message: "" });
  };
  const AnimatedImage = animated(Image);
  const styles = useSpring({
    from: { transform: "translateY(0px)" },
    to: { transform: "translateY(-20px)" },
    loop: { reverse: true }, // 🔥 up-down repeat
    config: {
      duration: 1500,
    },
  });

  return (
    <div className="max-w-6xl mx-auto pt-6 space-y-6">
      {/* Header */}
      <div className="flex justify-center">
        <AnimatedImage
          src={Logo}
          style={styles}
          alt="Website Logo"
          width={300}
          height={200}
        />
      </div>
      <div className="text-center">
        <h1 className="text-4xl font-bold mb-3">Contact Us</h1>
        <p className="text-gray-600">
          Have questions? Feel free to reach out to us anytime.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Contact Info */}
        <div className="bg-white shadow rounded-2xl p-6 space-y-4">
          <h2 className="text-2xl font-semibold">Get in Touch</h2>

          <p className="text-gray-600">
            📍 Location: Feni, Chattogram, Bangladesh
          </p>

          <p className="text-gray-600">📞 Phone: +880 1234-567890</p>

          <p className="text-gray-600">📧 Email: support@qurbanihat.com</p>

          <p className="text-gray-600">
            Our team is active and ready to help you with any queries about
            animals, pricing, or delivery.
          </p>
        </div>

        {/* Contact Form */}
        <form
          onSubmit={handleSubmit}
          className="bg-white shadow rounded-2xl p-6 space-y-4"
        >
          <h2 className="text-2xl font-semibold">Send Message</h2>

          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={form.name}
            onChange={handleChange}
            className="w-full border p-3 rounded-xl"
            required
          />

          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={form.email}
            onChange={handleChange}
            className="w-full border p-3 rounded-xl"
            required
          />

          <textarea
            name="message"
            placeholder="Your Message"
            value={form.message}
            onChange={handleChange}
            className="w-full border p-3 rounded-xl h-32"
            required
          />

          <button
            type="submit"
            className="w-full bg-green-600 text-white py-3 rounded-xl hover:bg-green-700 transition"
          >
            Send Message
          </button>
        </form>
      </div>

      {/* Extra Section */}
      <div className="bg-green-50 border border-green-200 rounded-2xl p-6 text-center">
        <h2 className="text-2xl font-semibold mb-2">We are here for you</h2>
        <p className="text-gray-700">
          Our support team and farm members are always active to ensure the best
          service for your Qurbani experience.
        </p>
      </div>
    </div>
  );
}

// --- Tests ---
// 1. Should render contact info section
// 2. Should render form inputs (name, email, message)
// 3. Should update state on input change
// 4. Should reset form after submit
// 5. Should show alert on submit
