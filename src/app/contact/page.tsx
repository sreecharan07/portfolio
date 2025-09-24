"use client";

import { useState } from "react";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState("");

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus("Sending...");

    const res = await fetch("/api/send", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form),
    });

    if (res.ok) {
      setStatus("✅ Message sent successfully!");
      setForm({ name: "", email: "", message: "" });
    } else {
      setStatus("❌ Something went wrong. Try again.");
    }
  }
  return (
    <section className="py-20">
      <h2 className="text-3xl md:text-4xl font-bold mb-6">Contact Me</h2>
      <p className="text-gray-400 mb-8">
        Interested in collaborating or just want to say hi? Let’s connect!
      </p>
      <form className="space-y-6 max-w-lg">
        <input
          type="text"
          placeholder="Your Name"
          className="w-full px-4 py-3 rounded-lg bg-gray-900 border border-gray-700 text-gray-200 focus:outline-none focus:border-blue-500"
        />
        <input
          type="email"
          placeholder="Your Email"
          className="w-full px-4 py-3 rounded-lg bg-gray-900 border border-gray-700 text-gray-200 focus:outline-none focus:border-blue-500"
        />
        <textarea
          rows={5}
          placeholder="Your Message"
          className="w-full px-4 py-3 rounded-lg bg-gray-900 border border-gray-700 text-gray-200 focus:outline-none focus:border-blue-500"
        ></textarea>
        <button
          type="submit"
          className="px-6 py-3 bg-blue-600 hover:bg-blue-500 rounded-lg text-white font-medium transition"
        >
          Send Message
        </button>
      </form>
    </section>
  );
}
