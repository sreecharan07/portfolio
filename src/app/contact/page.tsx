"use client";

import { useState } from "react";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setIsLoading(true);
    setStatus("Sending...");

    try {
      const res = await fetch("/api/send", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      const data = await res.json();

      if (res.ok) {
        setStatus("✅ Message sent successfully!");
        setForm({ name: "", email: "", message: "" });
      } else {
        setStatus(`❌ Error: ${data.error || "Something went wrong"}`);
      }
    } catch (error) {
      console.error("Form submission error:", error);
      setStatus("❌ Network error. Please try again.");
    } finally {
      setIsLoading(false);
    }
  }

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  }

  return (
    <section className="py-20">
      <h2 className="text-3xl md:text-4xl font-bold mb-6">Contact Me</h2>
      <p className="text-gray-400 mb-8">
        Interested in collaborating or just want to say hi? Let's connect!
      </p>
      
      <form onSubmit={handleSubmit} className="space-y-6 max-w-lg">
        <input
          type="text"
          name="name"
          value={form.name}
          onChange={handleChange}
          placeholder="Your Name"
          required
          className="w-full px-4 py-3 rounded-lg bg-gray-900 border border-gray-700 text-gray-200 focus:outline-none focus:border-blue-500"
        />
        
        <input
          type="email"
          name="email"
          value={form.email}
          onChange={handleChange}
          placeholder="Your Email"
          required
          className="w-full px-4 py-3 rounded-lg bg-gray-900 border border-gray-700 text-gray-200 focus:outline-none focus:border-blue-500"
        />
        
        <textarea
          name="message"
          value={form.message}
          onChange={handleChange}
          rows={5}
          placeholder="Your Message"
          required
          className="w-full px-4 py-3 rounded-lg bg-gray-900 border border-gray-700 text-gray-200 focus:outline-none focus:border-blue-500"
        />
        
        <button
          type="submit"
          disabled={isLoading}
          className="px-6 py-3 bg-blue-600 hover:bg-blue-500 disabled:bg-gray-600 disabled:cursor-not-allowed rounded-lg text-white font-medium transition"
        >
          {isLoading ? "Sending..." : "Send Message"}
        </button>
        
        {status && (
          <p className={`text-sm ${status.includes('✅') ? 'text-green-400' : 'text-red-400'}`}>
            {status}
          </p>
        )}
      </form>
    </section>
  );
}