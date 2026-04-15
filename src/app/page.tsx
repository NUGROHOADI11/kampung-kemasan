"use client";
import dynamic from "next/dynamic";
import Image from "next/image";
import heroImg from "../../public/assets/rumah-img.jpg";
import Link from "next/link";
import Masonry from "../components/layout/Masonry";
import { motion, easeInOut, AnimatePresence } from "framer-motion";
import { FaArrowRight, FaStop, FaPlay } from "react-icons/fa";
import { useState, useRef } from "react";
import { useTranslation } from "react-i18next";

const Map = dynamic(() => import("../components/ui/Maps"), {
  ssr: false,
  loading: () => (
    <div className="h-full w-full bg-zinc-200 animate-pulse flex items-center justify-center text-[10px] uppercase tracking-widest text-zinc-400">
      Loading Maps...
    </div>
  ),
});

export default function Home() {
  const { t } = useTranslation();
  const [isPlaying, setIsPlaying] = useState(false);
  const [isVideoLoaded, setIsVideoLoaded] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  const handlePlay = () => {
    if (videoRef.current) {
      videoRef.current.play();
      setIsPlaying(true);
    }
  };

  const handleStop = () => {
    if (videoRef.current) {
      videoRef.current.pause();
      videoRef.current.currentTime = 0;
      setIsPlaying(false);
    }
  };

  const fadeInUp = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: easeInOut },
    },
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.2 } },
  };

  return (
    <main className="min-h-screen bg-[#F6F6EC] overflow-x-hidden selection:bg-[#C9A051] selection:text-white">
      {/* Hero Section */}
      <div className="h-[95vh] w-full relative overflow-hidden">
        <motion.div
          initial={{ scale: 1.1, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1.5 }}
          className="absolute inset-0"
        >
          <Image
            src={heroImg}
            alt="Hero Image"
            placeholder="blur"
            priority
            fill
            sizes="95vh"
            className="object-cover brightness-[0.65]"
          />
        </motion.div>

        <div className="absolute inset-0 flex flex-col items-center justify-center gap-4 z-10 text-center px-4">
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="text-white text-xs md:text-sm uppercase tracking-[0.4em] bg-[#C9A051]/80 py-2 px-4 backdrop-blur-sm"
          >
            {t("hero.est")}
          </motion.h3>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 1 }}
            className="text-white text-5xl md:text-8xl font-bold tracking-tighter leading-none drop-shadow-2xl uppercase"
          >
            {t("hero.title")} <br />
            <span className="italic font-light lowercase">
              {t("hero.subtitle")}
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2, duration: 1 }}
            className="text-white/80 text-lg md:text-xl font-light italic tracking-wide"
          >
            “{t("hero.tagline")}”
          </motion.p>
        </div>
      </div>

      {/* Feature Section */}
      <motion.section
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="py-24 px-4 md:px-8 border-b border-zinc-200"
      >
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-16">
          {[
            { key: "architecture" },
            { key: "history" },
            { key: "photography" },
          ].map((item, idx) => (
            <motion.div key={idx} variants={fadeInUp} className="space-y-4">
              <div className="h-px w-12 bg-[#C9A051] mb-6"></div>
              <h3 className="text-2xl font-bold uppercase tracking-tighter leading-tight">
                {t(`features.${item.key}_title`)}
              </h3>
              <p className="text-zinc-500 font-light leading-relaxed">
                {t(`features.${item.key}_desc`)}
              </p>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* Narrative Section */}
      <section className="bg-[#EFEDE0] overflow-hidden">
        <div className="grid grid-cols-1 md:grid-cols-2 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="p-12 md:p-24 space-y-8"
          >
            <h2 className="text-4xl md:text-6xl font-bold leading-[0.9] tracking-tighter uppercase">
              {t("narrative.title")}
            </h2>
            <p className="text-zinc-600 font-light text-lg leading-relaxed">
              {t("narrative.description")}
            </p>
            <div className="pt-4">
              <Link
                href="/about"
                className="group inline-flex items-center gap-4 border-b-2 border-black pb-2 font-bold uppercase tracking-widest text-sm hover:text-[#C9A051] hover:border-[#C9A051] transition-all"
              >
                {t("narrative.cta")}
                <span className="group-hover:translate-x-2 transition-transform">
                  →
                </span>
              </Link>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 1.1 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className="relative h-[60vh] md:h-full w-full min-h-125"
          >
            <Image
              src={heroImg}
              alt="Architecture Detail"
              fill
              sizes="60vh"
              className="object-cover grayscale hover:grayscale-0 transition-all duration-700"
            />
          </motion.div>
        </div>
      </section>

      {/* Events Highlight */}
      <section className="py-24 px-4 md:px-8 bg-[#F6F6EC] border-t border-zinc-200">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex flex-col md:flex-row justify-between items-center mb-16 gap-6"
          >
            <div className="border-l-4 border-[#C9A051] pl-6">
              <h2 className="text-4xl md:text-6xl font-bold tracking-tighter uppercase leading-none">
                {t("events.title")} highlight.
              </h2>
              <p className="text-zinc-500 mt-4 text-xs font-light tracking-[0.4em] uppercase">
                {t("events.subtitle")}
              </p>
            </div>
            <Link
              href="/event"
              className="group flex items-center gap-3 text-sm font-bold uppercase tracking-widest border-b-2 border-black pb-1 hover:text-[#C9A051] hover:border-[#C9A051] transition-all"
            >
              {t("navbar.event")}
              <span className="group-hover:translate-x-2 transition-transform">
                <FaArrowRight />
              </span>
            </Link>
          </motion.div>

          {/* Event List */}
          <div className="flex flex-col">
            {["pasar_bandeng", "badoghan"].map((key, idx) => (
              <motion.div
                key={key}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="group relative border-b border-zinc-300 py-10 flex flex-col md:flex-row md:items-center justify-between gap-6 overflow-hidden"
              >
                <div className="absolute inset-0 bg-[#C9A051]/5 scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-500" />
                <div className="relative z-10 flex flex-col md:flex-row md:items-center gap-8 grow">
                  <div className="min-w-30">
                    <p className="text-[#C9A051] text-xs font-bold tracking-widest mb-1 uppercase">
                      ARCHIVE
                    </p>
                    <p className="text-zinc-400 text-sm font-medium uppercase">
                      ANNUAL
                    </p>
                  </div>
                  <div>
                    <h3 className="text-2xl md:text-3xl font-bold tracking-tight group-hover:pl-4 transition-all duration-300 uppercase">
                      {t(`events.${key}`)}
                    </h3>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Video Section */}
      <section className="group relative h-[70vh] w-full overflow-hidden bg-black">
        <AnimatePresence>
          {!isVideoLoaded && (
            <motion.div
              initial={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.8 }}
              className="absolute inset-0 z-20 bg-zinc-900 flex flex-col items-center justify-center"
            >
              <div className="w-12 h-12 border-2 border-[#C9A051]/20 border-t-[#C9A051] rounded-full animate-spin mb-4" />
              <p className="text-[10px] uppercase tracking-[0.4em] text-zinc-500">
                Loading Archive
              </p>
              <div className="absolute inset-0 bg-linear-to-r from-transparent via-white/5 to-transparent -translate-x-full animate-[shimmer_2s_infinite]" />
            </motion.div>
          )}
        </AnimatePresence>

        <motion.div
          animate={{ opacity: isVideoLoaded ? 1 : 0 }}
          className="absolute inset-0 z-0"
        >
          <video
            ref={videoRef}
            onLoadedData={() => setIsVideoLoaded(true)}
            loop
            muted
            playsInline
            preload="auto"
            className={`h-full w-full object-cover transition-all duration-1000 ${isPlaying ? "opacity-100 grayscale-0" : "opacity-60 grayscale"}`}
          >
            <source src="/assets/vid-example.mp4" type="video/mp4" />
          </video>
        </motion.div>

        {/* Video Overlay */}
        <AnimatePresence>
          {isPlaying && (
            <motion.button
              initial={{ opacity: 0 }}
              whileHover={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={handleStop}
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20 h-20 w-20 rounded-full bg-black/40 backdrop-blur-md flex items-center justify-center text-white border border-white/20 hover:bg-[#C9A051]"
            >
              <FaStop className="text-2xl" />
            </motion.button>
          )}
        </AnimatePresence>

        <AnimatePresence>
          {!isPlaying && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0, y: 20 }}
              className="relative z-10 flex h-full flex-col items-center justify-center px-4 text-center"
            >
              <div className="space-y-6">
                <h3 className="text-xs font-bold uppercase tracking-[0.5em] text-[#C9A051]">
                  Experience Atmosphere
                </h3>
                <h2 className="text-4xl md:text-6xl font-bold tracking-tighter text-white uppercase leading-none">
                  A Visual Journey <br />{" "}
                  <span className="italic font-light">Through Time</span>
                </h2>
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  onClick={handlePlay}
                  className="group relative flex items-center justify-center mx-auto mt-8 h-20 w-20 rounded-full border border-white/30 bg-white/10 backdrop-blur-sm transition-colors hover:bg-[#C9A051] hover:border-[#C9A051]"
                >
                  <FaPlay className="text-2xl pl-1 text-white" />
                </motion.button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </section>

      <Masonry />

      {/* Location Section */}
      <section className="px-4 md:px-8 bg-[#EFEDE0] md:bg-[linear-gradient(to_left,#000_50%,#EFEDE0_50%)]">
        <div className="md:max-w-[70vw] mx-auto py-20">
          <div className="grid grid-cols-1 md:grid-cols-5 gap-16 items-center">
            <motion.div
              variants={fadeInUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="md:col-span-2 text-zinc-900"
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-8 tracking-tighter uppercase leading-none md:text-black text-white">
                Find the <br /> Heart of Gresik
              </h2>
              <p className="font-light leading-relaxed mb-12 opacity-80">
                {t("contact.address_label")}: Located in the historic center.
              </p>
              <Link
                href="https://maps.google.com"
                target="_blank"
                className="inline-block border border-white md:border-black px-8 py-4 uppercase font-bold tracking-widest text-xs hover:bg-[#C9A051] hover:border-[#C9A051] hover:text-white transition-all"
              >
                View on Map
              </Link>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="md:col-span-3 h-[50vh] w-full shadow-2xl grayscale hover:grayscale-0 transition-all duration-700"
            >
              <Map />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 px-4 md:px-8 bg-[#F6F6EC]">
        <div className="max-w-6xl mx-auto">
          <motion.div
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            className="text-center mb-20"
          >
            <h2 className="text-4xl font-bold tracking-tighter uppercase mb-4">
              Voice of the Village
            </h2>
            <div className="h-1 w-20 bg-[#C9A051] mx-auto"></div>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[1, 2, 3].map((i) => (
              <motion.div
                key={i}
                variants={fadeInUp}
                initial="hidden"
                whileInView="visible"
                transition={{ delay: i * 0.2 }}
                className="bg-white p-10 border border-zinc-100 shadow-sm relative group"
              >
                <span className="text-8xl font-serif text-[#C9A051]/20 absolute top-4 left-4 group-hover:text-[#C9A051]/40 transition-colors">
                  “
                </span>
                <p className="text-zinc-600 italic leading-relaxed mb-8 relative z-10">
                  Historical testimony from the residents of Kampung Kemasan.
                </p>
                <div className="border-t pt-6">
                  <h3 className="font-bold uppercase tracking-widest text-sm">
                    Residen {i}
                  </h3>
                  <p className="text-[10px] text-zinc-400 uppercase tracking-widest mt-1">
                    Gresik Local
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
