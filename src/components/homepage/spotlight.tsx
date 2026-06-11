"use client";

import React, { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import Tiktok1 from "../../../public/assets/images/tiktok1.webp";
import Tiktok2 from "../../../public/assets/images/tiktok2.webp";
import Tiktok3 from "../../../public/assets/images/tiktok3.webp";
import Tiktok4 from "../../../public/assets/images/tiktok4.webp";
import Tiktok5 from "../../../public/assets/images/tiktok5.webp";
import Tiktok6 from "../../../public/assets/images/tiktok6.webp";
import Tiktok7 from "../../../public/assets/images/tiktok7.webp";
import Tiktok8 from "../../../public/assets/images/tiktok8.webp";

const tiktokVideos = [
  {
    id: 1,
    category: "Explore",
    title: "Keindahan Kampung Kemasan",
    url: "https://vt.tiktok.com/ZSxDLxWt7/",
    image: Tiktok1, 
  },
  {
    id: 2,
    category: "Explore",
    title: "Menyusuri Jalan Heritage",
    url: "https://vt.tiktok.com/ZSxDLvemS/",
    image: Tiktok2,
  },
  {
    id: 3,
    category: "Explore",
    title: "Vlog Seru di Kemasan",
    url: "https://vt.tiktok.com/ZSxDN8wRu/",
    image: Tiktok3,
  },
  {
    id: 4,
    category: "Bus Tumpuk",
    title: "Keliling Naik Bus Wisata",
    url: "https://vt.tiktok.com/ZSxDNDTU3/",
    image: Tiktok4,
  },
  {
    id: 5,
    category: "Bus Tumpuk",
    title: "Keseruan Bus Bandar Grissee",
    url: "https://vt.tiktok.com/ZSxDNN77R/",
    image: Tiktok5,
  },
  {
    id: 6,
    category: "Walking Tour",
    title: "Jelajah Sejarah Jalan Kaki",
    url: "https://vt.tiktok.com/ZSxDNr6AM/",
    image: Tiktok6,
  },
  {
    id: 7,
    category: "Walking Tour",
    title: "Cerita di Balik Bangunan",
    url: "https://vt.tiktok.com/ZSxDN87yy/",
    image: Tiktok7,
  },
  {
    id: 8,
    category: "Art Space Event",
    title: "Pameran & Ruang Seni",
    url: "https://vt.tiktok.com/ZSxDNNbhn/",
    image: Tiktok8,
  },
];

const PlayIcon = () => (
  <svg
    viewBox="0 0 24 24"
    fill="currentColor"
    className="w-12 h-12 text-white/90 drop-shadow-lg group-hover:scale-110 transition-transform duration-300"
  >
    <path
      fillRule="evenodd"
      d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm14.024-.983a1.125 1.125 0 010 1.966l-5.603 3.113A1.125 1.125 0 019 15.113V8.887c0-.857.921-1.4 1.671-.983l5.603 3.113z"
      clipRule="evenodd"
    />
  </svg>
);

const TikTokIcon = () => (
  <svg viewBox="0 0 448 512" fill="currentColor" className="w-5 h-5 text-white">
    <path d="M448,209.91a210.06,210.06,0,0,1-122.77-39.25V349.38A162.55,162.55,0,1,1,185,188.31V278.2a74.62,74.62,0,1,0,52.23,71.18V0l88,0a121.18,121.18,0,0,0,1.86,22.17h0A122.18,122.18,0,0,0,381,102.39a121.43,121.43,0,0,0,67,20.14Z" />
  </svg>
);

const Spotlight = () => {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      const scrollAmount = direction === "left" ? -320 : 320;
      scrollRef.current.scrollBy({ left: scrollAmount, behavior: "smooth" });
    }
  };

  return (
    <section className="relative w-full py-20 bg-[#1A1A1A] overflow-hidden font-sans">
      <div className="absolute top-0 left-0 w-full h-full z-0 pointer-events-none">
        <div className="absolute -top-32 -left-32 w-96 h-96 bg-[#9C2810] rounded-full blur-[120px] opacity-20"></div>
        <div className="absolute -bottom-32 -right-32 w-96 h-96 bg-[#E0A96D] rounded-full blur-[120px] opacity-10"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-8">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
          <div className="flex flex-col">
            <h2 className="font-luxurious-script italic text-5xl md:text-7xl text-[#E0A96D] mb-2 drop-shadow-md">
              Spotlight
            </h2>
            <p className="text-[#FAF3E0] font-serif text-lg md:text-xl opacity-80 max-w-lg">
              Temukan pengalaman seru, keindahan budaya, dan momen tak
              terlupakan melalui lensa para pengunjung.
            </p>
          </div>

          <div className="hidden md:flex gap-4">
            <button
              onClick={() => scroll("left")}
              className="w-12 h-12 rounded-full border border-[#E0A96D] flex justify-center items-center text-[#E0A96D] hover:bg-[#E0A96D] hover:text-[#1A1A1A] transition-colors"
            >
              <svg
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15.75 19.5L8.25 12l7.5-7.5"
                />
              </svg>
            </button>
            <button
              onClick={() => scroll("right")}
              className="w-12 h-12 rounded-full border border-[#E0A96D] flex justify-center items-center text-[#E0A96D] hover:bg-[#E0A96D] hover:text-[#1A1A1A] transition-colors"
            >
              <svg
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M8.25 4.5l7.5 7.5-7.5 7.5"
                />
              </svg>
            </button>
          </div>
        </div>

        <div
          ref={scrollRef}
          className="flex overflow-x-auto gap-6 snap-x snap-mandatory pb-8 pt-4 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
        >
          {tiktokVideos.map((video, index) => (
            <motion.div
              key={video.id}
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="snap-center shrink-0 w-65 md:w-75"
            >
              <Link
                href={video.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group block h-full"
              >
                <div className="relative w-full aspect-9/16 rounded-4xl overflow-hidden shadow-2xl bg-[#2A2A2A] border-4 border-transparent group-hover:border-[#9C2810] transition-all duration-300">
                  <Image
                    src={video.image}
                    alt={video.title}
                    fill
                    sizes="w-full h-full"
                    loading="eager"
                    className="object-cover opacity-60 group-hover:opacity-40 transition-opacity duration-300"
                  />

                  <div className="absolute inset-0 bg-linear-to-b from-black/20 via-transparent to-black/90"></div>

                  <div className="absolute top-5 left-5 bg-black/50 backdrop-blur-md text-white text-xs font-bold uppercase tracking-wider py-1.5 px-3 rounded-full flex items-center gap-2">
                    <TikTokIcon />
                    {video.category}
                  </div>

                  <div className="absolute inset-0 flex justify-center items-center">
                    <PlayIcon />
                  </div>

                  <div className="absolute bottom-0 left-0 w-full p-6 text-left">
                    <h3 className="text-[#FAF3E0] font-serif text-lg leading-tight font-bold group-hover:-translate-y-2 transition-transform duration-300">
                      {video.title}
                    </h3>
                    <p className="text-white/70 text-xs font-sans mt-2 opacity-0 group-hover:opacity-100 group-hover:-translate-y-2 transition-all duration-300">
                      Tonton di TikTok &rarr;
                    </p>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Spotlight;
