"use client";

import { motion, easeOut } from "framer-motion";
import Image from "next/image";
import aboutImg from "../../../public/assets/about-img.png";
import headImg from "../../../public/assets/rumah-img.jpg";
import { FaChevronRight } from "react-icons/fa";
import Link from "next/link";

export default function AboutPage() {
  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: easeOut },
    },
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 },
    },
  };

  return (
    <div className="min-h-screen w-[90vw] mx-auto flex flex-col items-center justify-between">
      <div className="mx-auto px-4 pt-8 pb-12">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-8 border-l-8 border-black pl-6"
        >
          <h1 className="text-3xl md:text-4xl font-bold tracking-tighter uppercase leading-tight">
            The Story of <br /> Kampung Kemasan
          </h1>
          <p className="text-gray-500 mt-4 text-sm font-light tracking-[0.3em] uppercase">
            Gresik&apos;s Historical Gold Standard
          </p>
        </motion.div>

        {/* Hero Image */}
        <motion.section
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className="mb-8 overflow-hidden rounded-lg"
        >
          <Image
            src={headImg}
            alt="Kampung Kemasan Heritage"
            loading="eager"
            className="w-full h-[60vh] object-cover shadow-sm "
          />
        </motion.section>

        {/* Introduction Section */}
        <motion.section
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="mb-24"
        >
          <div className="grid grid-cols-1 md:grid-cols-5 gap-12">
            <motion.div variants={fadeInUp} className="md:col-span-3">
              <h2 className="text-3xl md:text-4xl font-medium leading-tight text-zinc-900">
                A neighborhood historically tied to the gold merchants of
                Gresik, blending wealth with timeless architecture.
              </h2>
            </motion.div>
            <motion.div
              variants={fadeInUp}
              className="md:col-span-2 flex flex-col justify-end"
            >
              <p className="text-gray-600 leading-relaxed text-lg italic border-b border-zinc-200 pb-6">
                &quot;Unlike many historical districts lost to modernization,
                Kampung Kemasan survived thanks to community awareness and
                preservation efforts.&quot;
              </p>
              <p className="text-zinc-500 mt-6 leading-relaxed">
                In the late 1800s, successful traders built luxurious residences
                here, reflecting their status through a mix of Dutch colonial
                techniques, Chinese Peranakan details, and Javanese
                craftsmanship.
              </p>
            </motion.div>
          </div>
        </motion.section>

        {/* Bento Grid Content */}
        <motion.section
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="mb-8"
        >
          <div className="grid grid-cols-1 md:grid-cols-3 md:grid-rows-2 gap-6">
            {/* 1. Architecture */}
            <motion.div
              variants={fadeInUp}
              className="rounded-lg p-8 row-span-2 bg-zinc-50 border border-zinc-100"
            >
              <h3 className="text-xs font-bold uppercase tracking-widest text-zinc-400 mb-6">
                01. Architecture
              </h3>
              <h1 className="text-2xl font-bold mb-6">
                Architectural Highlights
              </h1>
              <ul className="space-y-6 text-gray-700">
                {[
                  "Ornamental Façades",
                  "High Ceilings & Windows",
                  "Imported Materials",
                  "Symmetry & Color",
                ].map((item, i) => (
                  <li key={i}>
                    <strong className="block text-zinc-900">{item}</strong>
                    <span className="text-sm">
                      Historical details that define the unique Kemasan
                      aesthetic.
                    </span>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* 2. Goals */}
            <motion.div
              variants={fadeInUp}
              className="rounded-lg p-8 bg-zinc-900 text-white"
            >
              <h3 className="text-xs font-bold uppercase tracking-widest text-zinc-200 mb-4">
                02. Goals
              </h3>
              <h4 className="text-xl font-bold mb-2 text-white">Our Vision</h4>
              <p className="text-zinc-200 text-sm leading-relaxed mb-6">
                To preserve Kampung Kemasan as a symbol of multicultural
                harmony.
              </p>
              <h4 className="text-xl font-bold mb-2 text-white">Our Mission</h4>
              <ul className="space-y-1 text-zinc-200 text-sm italic">
                <li>— Protect historical architecture</li>
                <li>— Educate future generations</li>
              </ul>
            </motion.div>

            {/* 3. Detail Image */}
            <motion.div
              variants={fadeInUp}
              className="relative aspect-square overflow-hidden rounded-lg grayscale"
            >
              <Image
                src={aboutImg}
                alt="Detail"
                fill
                loading="eager"
                sizes="100"
                className="object-cover -scale-x-100"
              />
            </motion.div>

            {/* 4. Harmony */}
            <motion.div
              variants={fadeInUp}
              className="rounded-lg p-8 bg-zinc-50 border border-zinc-100"
            >
              <h3 className="text-xs font-bold uppercase tracking-widest text-zinc-400 mb-4">
                03. Harmony
              </h3>
              <h1 className="text-2xl font-bold mb-3">Cultural Harmony</h1>
              <div className="flex gap-2 flex-wrap">
                {["Javanese", "Peranakan", "Dutch"].map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 bg-white border border-zinc-200 text-[10px] uppercase font-bold tracking-tighter"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>

            {/* 5. Action */}
            <motion.div
              variants={fadeInUp}
              className="rounded-lg p-8 bg-zinc-50 border border-zinc-100"
            >
              <h3 className="text-xs font-bold uppercase tracking-widest text-zinc-400 mb-4">
                04. Action
              </h3>
              <h1 className="text-2xl font-bold mb-3">Preservation Efforts</h1>
              <p className="text-xs font-bold text-zinc-900 border-t border-zinc-200 pt-4">
                Community participation is key.
              </p>
            </motion.div>
          </div>
        </motion.section>

        {/* Footer CTA */}
        <motion.section
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="h-[40vh] flex flex-col items-center justify-center max-w-4xl mx-auto text-center"
        >
          <h2 className="text-2xl md:text-3xl font-light italic mb-8 text-zinc-800">
            &quot;More than just old buildings, Kampung Kemasan is a living
            legacy.&quot;
          </h2>
          <Link
            href="/contact"
            className="group flex flex-row items-center text-black font-bold uppercase tracking-[0.2em] text-sm transition-all"
          >
            Contact Us
            <span className="text-xs ml-3 flex flex-row">
              <FaChevronRight className="transition-transform group-hover:translate-x-1" />
              <FaChevronRight className="transition-transform group-hover:translate-x-2" />
            </span>
          </Link>
        </motion.section>
      </div>
    </div>
  );
}
