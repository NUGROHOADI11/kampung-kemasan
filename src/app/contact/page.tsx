"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitted(true);
    setFormData({ name: "", email: "", message: "" });
    setTimeout(() => setSubmitted(false), 5000);
  };

  return (
    <div className="min-h-screen bg-[#F6F6EC] py-20 px-4 sm:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Header Section */}
        <div className="mb-20 border-l-8 border-black pl-6">
          <h1 className="text-5xl md:text-7xl font-bold tracking-tighter uppercase leading-none">
            Get in Touch.
          </h1>
          <p className="text-zinc-500 mt-4 text-sm font-light tracking-[0.4em] uppercase">
            Collaboration & Inquiry
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
          {/* Left Side: Contact Info */}
          <div className="space-y-12">
            <div>
              <h3 className="text-xs font-bold uppercase tracking-[0.3em] text-[#C9A051] mb-6">
                01. Address
              </h3>
              <p className="text-2xl font-medium text-zinc-900 leading-tight">
                Jl. Nyai Ageng Arem-Arem No.3 <br />
                Pekelingan, Gresik, East Java <br />
                Indonesia, 61114
              </p>
            </div>

            <div>
              <h3 className="text-xs font-bold uppercase tracking-[0.3em] text-[#C9A051] mb-6">
                02. Digital
              </h3>
              <div className="space-y-2">
                <p className="text-xl font-medium">hello@kampungkemasan.id</p>
                <p className="text-xl font-medium">+62 812 3456 7890</p>
              </div>
            </div>

            <div>
              <h3 className="text-xs font-bold uppercase tracking-[0.3em] text-[#C9A051] mb-6">
                03. Socials
              </h3>
              <div className="flex gap-6">
                {["Instagram", "YouTube", "Twitter"].map((social) => (
                  <a
                    key={social}
                    href="#"
                    className="text-sm font-bold uppercase border-b border-black pb-1 hover:text-[#C9A051] hover:border-[#C9A051] transition-all"
                  >
                    {social}
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Right Side: Form */}
          <div className="bg-white border border-zinc-200 p-8 md:p-12 shadow-[20px_20px_0px_0px_rgba(0,0,0,0.05)]">
            <AnimatePresence>
              {submitted ? (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0 }}
                  className="h-full flex flex-col items-center justify-center text-center space-y-4 py-20"
                >
                  <div className="w-16 h-16 bg-black text-white rounded-full flex items-center justify-center text-2xl">
                    ✓
                  </div>
                  <h2 className="text-2xl font-bold uppercase tracking-tighter">
                    Message Sent
                  </h2>
                  <p className="text-zinc-500 font-light">
                    Thank you. We will respond to your <br /> inquiry within 24
                    hours.
                  </p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-8">
                  <div className="group">
                    <label className="block text-[10px] font-bold uppercase tracking-widest text-zinc-400 mb-2 group-focus-within:text-[#C9A051] transition-colors">
                      Full Name
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      placeholder="John Doe"
                      className="w-full bg-transparent border-b border-zinc-200 py-3 outline-none focus:border-black transition-colors text-zinc-900 placeholder:text-zinc-200"
                    />
                  </div>

                  <div className="group">
                    <label className="block text-[10px] font-bold uppercase tracking-widest text-zinc-400 mb-2 group-focus-within:text-[#C9A051] transition-colors">
                      Email Address
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      placeholder="email@example.com"
                      className="w-full bg-transparent border-b border-zinc-200 py-3 outline-none focus:border-black transition-colors text-zinc-900 placeholder:text-zinc-200"
                    />
                  </div>

                  <div className="group">
                    <label className="block text-[10px] font-bold uppercase tracking-widest text-zinc-400 mb-2 group-focus-within:text-[#C9A051] transition-colors">
                      Your Message
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={4}
                      placeholder="How can we help you?"
                      className="w-full bg-transparent border-b border-zinc-200 py-3 outline-none focus:border-black transition-colors text-zinc-900 placeholder:text-zinc-200 resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-black text-white py-5 font-bold uppercase tracking-[0.3em] text-xs hover:bg-[#C9A051] transition-all duration-500 transform active:scale-[0.98]"
                  >
                    Send Inquiry →
                  </button>
                </form>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </div>
  );
}
