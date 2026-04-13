"use client";
import dynamic from "next/dynamic";
import Image from "next/image";
import heroImg from "../../public/assets/rumah-img.jpg";
import Link from "next/link";
import Masonry from "../components/layout/Masonry";
import { motion, easeInOut } from "framer-motion";

const Map = dynamic(() => import("../components/ui/Maps"), {
  ssr: false,
  loading: () => (
    <div className="h-full w-full bg-gray-200 animate-pulse flex items-center justify-center">
      Loading Map...
    </div>
  ),
});

export default function Home() {
  // Animation Variants
  const fadeInUp = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: easeInOut } }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 }
    }
  };

  return (
    <main className="min-h-screen bg-[#F6F6EC] overflow-x-hidden">
      {/* Hero Section with Entrance Animation */}
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
            loading="eager"
            sizes="100vw"
            className="object-cover brightness-[0.65]"
          />
        </motion.div>

        <div className="absolute inset-0 flex flex-col items-center justify-center gap-4 z-10">
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="text-white text-xs md:text-sm uppercase tracking-[0.4em] bg-[#C9A051]/80 py-2 px-4 shadow-xl"
          >
            EST. 1855
          </motion.h3>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 1 }}
            className="text-white text-center text-5xl md:text-8xl font-bold tracking-tighter leading-none drop-shadow-2xl"
          >
            Step into Heritage <br />
            <span className="italic font-light">Kampung Kemasan</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2, duration: 1 }}
            className="text-white/80 text-lg md:text-xl font-light italic tracking-wide"
          >
            “Where History Lives in Every Corner”
          </motion.p>
        </div>
      </div>

      {/* Feature Section - Staggered Reveal */}
      <motion.section
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="py-24 px-4 md:px-8 border-b border-zinc-200"
      >
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-16">
          {[
            {
              title: "Unique Architecture",
              desc: "A fusion of Dutch structures, Chinese carvings, and Javanese spatial concepts.",
            },
            {
              title: "Historical Significance",
              desc: "Flourished as a settlement for traders when Gresik was an international trading hub.",
            },
            {
              title: "Photographer's Paradise",
              desc: "Vibrant façades and symmetrical windows provide the perfect backdrops.",
            },
          ].map((item, idx) => (
            <motion.div key={idx} variants={fadeInUp} className="space-y-4">
              <div className="h-px w-12 bg-[#C9A051] mb-6"></div>
              <h3 className="text-2xl font-bold uppercase tracking-tighter leading-tight">
                {item.title}
              </h3>
              <p className="text-zinc-500 font-light leading-relaxed">
                {item.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* Narrative Section - Side Slide Reveal */}
      <section className="bg-[#EFEDE0] overflow-hidden">
        <div className="grid grid-cols-1 md:grid-cols-2 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="p-12 md:p-24 space-y-8"
          >
            <h2 className="text-4xl md:text-6xl font-bold leading-[0.9] tracking-tighter">
              More than just old buildings, a{" "}
              <span className="text-[#C9A051]">living legacy.</span>
            </h2>
            <p className="text-zinc-600 font-light text-lg leading-relaxed">
              Located in East Java, Kampung Kemasan is a cultural treasure
              reflecting centuries of trade and tradition. Rows of historic
              houses painted in vibrant colors showcase a unique fusion.
            </p>
            <div className="pt-4">
              <Link
                href="/about"
                className="group inline-flex items-center gap-4 border-b-2 border-black pb-2 font-bold uppercase tracking-widest text-sm hover:text-[#C9A051] hover:border-[#C9A051] transition-all"
              >
                Learn The Full Story
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
              className="object-cover"
            />
          </motion.div>
        </div>
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
              className="md:col-span-2 text-white md:text-zinc-900"
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-8 tracking-tighter uppercase leading-none md:text-black text-white">
                Find the <br /> Heart of Gresik
              </h2>
              <p className="font-light leading-relaxed mb-12 opacity-80">
                Located in the historic center, we welcome visitors to explore
                our preserved architecture and living history.
              </p>

              <Link
                href="https://www.google.com/maps/place/Kampung+Kemasan/@-7.1531566,112.6534572,17z/data=!3m1!4b1!4m6!3m5!1s0x2dd80142167c325f:0x8f38cfe880ca997e!8m2!3d-7.1531619!4d112.6560321!16s%2Fg%2F11rkpd52jm?entry=ttu&g_ep=EgoyMDI2MDQwOC4wIKXMDSoASAFQAw%3D%3D"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block border border-white md:border-black px-8 py-4 uppercase font-bold tracking-widest text-xs hover:bg-[#C9A051] hover:border-[#C9A051] hover:text-white transition-all duration-300"
              >
                View on Map
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="md:col-span-3 h-[50vh] w-full shadow-2xl"
            >
              <Map />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Testimonials with Quote Reveal */}
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
            {[
              {
                quote:
                  "The atmosphere feels like stepping into a living museum.",
                name: "Alya Putri",
                role: "Visitor",
              },
              {
                quote:
                  "Kampung Kemasan preserves history while feeling warm and welcoming.",
                name: "Budi Santoso",
                role: "Local Guide",
              },
              {
                quote:
                  "The architecture and community spirit make this place truly memorable.",
                name: "Siti Rahma",
                role: "Traveler",
              },
            ].map((item, idx) => (
              <motion.div
                key={idx}
                variants={fadeInUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                transition={{ delay: idx * 0.2 }}
                className="bg-white p-10 border border-zinc-100 shadow-sm relative"
              >
                <span className="text-8xl font-serif text-[#C9A051]/20 absolute top-4 left-4">
                  “
                </span>
                <p className="text-zinc-600 italic leading-relaxed mb-8 relative z-10">
                  {item.quote}
                </p>
                <div className="border-t pt-6">
                  <h3 className="font-bold uppercase tracking-widest text-sm">
                    {item.name}
                  </h3>
                  <p className="text-[10px] text-zinc-400 uppercase tracking-widest mt-1">
                    {item.role}
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