"use client";

import { useState } from "react";
import { Send, Loader2 } from "lucide-react";

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
    <section className="py-20 max-w-2xl mx-auto">
      <h2 className="text-3xl md:text-4xl font-bold mb-6 text-foreground">Contact Me</h2>
      <p className="text-muted mb-10 text-lg">
        Interested in collaborating or just want to say hi? Fill out the form below and I&apos;ll get back to you.
      </p>

      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-2">
            <label htmlFor="name" className="text-sm font-medium text-foreground">Name</label>
            <input
              id="name"
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="Your Name"
              required
              className="w-full px-4 py-3 rounded-lg bg-secondary/30 border border-border text-foreground focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all placeholder:text-muted/50"
            />
          </div>

          <div className="space-y-2">
            <label htmlFor="email" className="text-sm font-medium text-foreground">Email</label>
            <input
              id="email"
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="Your Email"
              required
              className="w-full px-4 py-3 rounded-lg bg-secondary/30 border border-border text-foreground focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all placeholder:text-muted/50"
            />
          </div>
        </div>

        <div className="space-y-2">
          <label htmlFor="message" className="text-sm font-medium text-foreground">Message</label>
          <textarea
            id="message"
            name="message"
            value={form.message}
            onChange={handleChange}
            rows={5}
            placeholder="Your Message..."
            required
            className="w-full px-4 py-3 rounded-lg bg-secondary/30 border border-border text-foreground focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all placeholder:text-muted/50 resize-y min-h-[120px]"
          />
        </div>

        <button
          type="submit"
          disabled={isLoading}
          className="px-8 py-3 bg-primary hover:bg-blue-600 disabled:bg-primary/50 disabled:cursor-not-allowed rounded-lg text-white font-medium transition-all shadow-lg hover:shadow-primary/25 flex items-center gap-2"
        >
          {isLoading ? <Loader2 className="animate-spin" size={20} /> : <Send size={20} />}
          {isLoading ? "Sending..." : "Send Message"}
        </button>

        {status && (
          <div className={`p-4 rounded-lg mt-4 ${status.includes('✅') ? 'bg-green-500/10 text-green-500 border border-green-500/20' : 'bg-red-500/10 text-red-500 border border-red-500/20'}`}>
            <p className="font-medium flex items-center gap-2">
              {status}
            </p>
          </div>
        )}
      </form>
    </section>
  );
}