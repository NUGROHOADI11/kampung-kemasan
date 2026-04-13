"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import heroImg from "../../../public/assets/hero-img.jpg";
import { FaArrowRight } from "react-icons/fa";

export default function EventPage() {
  const annualEvents = [
    {
      title: "Pasar Bandeng Festive",
      period: "Tahunan (Jelang Idul Fitri)",
      tag: "Tradisi & Kuliner",
      description:
        "Tradisi turun-temurun masyarakat Gresik berupa lelang ikan Bandeng hasil budidaya petambak lokal. Festival ini dimeriahkan bazar UMKM, kompetisi memasak, dan menjadi ruang temu sosial yang mempererat kebersamaan antar warga.",
    },
    {
      title: "Festival Badoghan",
      period: "Desember (Akhir Tahun)",
      tag: "Bonding & Culture",
      description:
        "Mengusung tagline 'Gresik Ono Roso', festival ini menyajikan 60 tenant kuliner khas seperti Nasi Krawu dan Pudak. Digelar untuk mempererat ikatan antara nelayan, warga, dan akademisi melalui pentas budaya kolosal.",
    },
  ];

  return (
    <div className="min-h-screen bg-[#F6F6EC] text-zinc-900 pb-24">
      {/* Header Section */}
      <section className="pt-20 px-4 md:px-8 max-w-7xl mx-auto mb-20">
        <div className="border-l-8 border-black pl-6">
          <h1 className="text-5xl md:text-7xl font-bold tracking-tighter uppercase leading-none">
            Events.
          </h1>
          <p className="text-zinc-500 mt-4 text-sm font-light tracking-[0.4em] uppercase">
            Celebrating Heritage, Trade, and Art
          </p>
        </div>
      </section>

      {/* Main Events - Section 1: Festival */}
      <section className="px-4 md:px-8 max-w-7xl mx-auto mb-32">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          <div className="lg:col-span-4">
            <h2 className="text-sm font-bold uppercase tracking-widest text-[#C9A051] mb-6">
              01. Major Festivals
            </h2>
            <p className="text-zinc-500 font-light leading-relaxed">
              Perayaan tahunan yang menjadi denyut nadi kehidupan sosial di
              Kampung Kemasan, menggabungkan potensi maritim dan kekayaan
              kuliner Gresik.
            </p>
          </div>

          <div className="lg:col-span-8 space-y-16">
            {annualEvents.map((event, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="group border-b border-zinc-300 pb-12"
              >
                <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6 gap-4">
                  <h3 className="text-3xl md:text-4xl font-bold tracking-tight group-hover:text-[#C9A051] transition-colors">
                    {event.title}
                  </h3>
                  <span className="text-xs font-bold px-3 py-1 bg-black text-white uppercase tracking-tighter">
                    {event.period}
                  </span>
                </div>
                <p className="text-zinc-600 leading-relaxed max-w-2xl font-light italic mb-4">
                  &quot;{event.tag}&quot;
                </p>
                <p className="text-zinc-600 leading-relaxed text-sm md:text-base">
                  {event.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 2: Art & Culture Exhibition (MTN Lab Focus) */}
      <section className="bg-zinc-900 text-white py-24 mb-32">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="relative h-[60vh] grayscale hover:grayscale-0 transition-all duration-700">
              <Image
                src={heroImg}
                alt="MTN Lab Exhibition"
                fill
                className="object-cover rounded-sm shadow-2xl"
              />
              <div className="absolute -bottom-6 -right-6 bg-[#C9A051] p-8 hidden md:block">
                <p className="text-black font-bold text-4xl tracking-tighter">
                  Sept &apos;25
                </p>
                <p className="text-black/70 text-xs font-bold uppercase tracking-widest">
                  MTN Lab Residency
                </p>
              </div>
            </div>

            <div className="space-y-8">
              <h2 className="text-4xl md:text-6xl font-bold tracking-tighter leading-none">
                MTN Lab: <br />{" "}
                <span className="text-[#C9A051]">Ruang Talenta</span>
              </h2>
              <p className="text-zinc-400 font-light leading-relaxed">
                Diinisiasi oleh Kementerian Kebudayaan RI, program ini
                menjadikan Kampung Kemasan sebagai laboratorium kreatif. Seniman
                muda dari berbagai etnis berkumpul untuk mengeksplorasi narasi
                pesisir melalui seni rupa, kriya, dan film.
              </p>
              <div className="grid grid-cols-2 gap-8 pt-4">
                <div>
                  <h4 className="font-bold text-[#C9A051] uppercase text-xs tracking-widest mb-2">
                    Duration
                  </h4>
                  <p className="text-sm text-zinc-300">14 Days Residency</p>
                </div>
                <div>
                  <h4 className="font-bold text-[#C9A051] uppercase text-xs tracking-widest mb-2">
                    Focus
                  </h4>
                  <p className="text-sm text-zinc-300">
                    Residensi & Masterclass
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 3: Educational & Photography */}
      <section className="px-4 md:px-8 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
          {/* Heritage Education */}
          <div className="border-t border-black pt-8">
            <h3 className="text-2xl font-bold uppercase tracking-tighter mb-6">
              Heritage Education Tours
            </h3>
            <p className="text-zinc-500 font-light mb-8">
              Program Outing Class bagi sekolah dan universitas (seperti SMP
              Semen Gresik) untuk mengenali jejak historis &quot;Kota Lama&quot;
              melalui walking tour gresik.
            </p>
            <ul className="space-y-3 text-sm font-bold uppercase tracking-widest">
              <li className="flex items-center gap-3">
                <span className="w-2 h-2 bg-[#C9A051]"></span> Architecture
                Studies
              </li>
              <li className="flex items-center gap-3">
                <span className="w-2 h-2 bg-[#C9A051]"></span> Cultural
                Documentation
              </li>
              <li className="flex items-center gap-3">
                <span className="w-2 h-2 bg-[#C9A051]"></span> Historical
                Reminisce
              </li>
            </ul>
          </div>

          {/* Photography */}
          <div className="border-t border-black pt-8">
            <h3 className="text-2xl font-bold uppercase tracking-tighter mb-6">
              Heritage Photography
            </h3>
            <p className="text-zinc-500 font-light mb-8">
              Ruang terbuka bagi fotografer profesional, pelajar, dan travel
              blogger untuk menangkap estetika simetris dan warna vibran Kampung
              Kemasan.
            </p>
            <div className="flex flex-wrap gap-2">
              {["Professional", "Students", "Bloggers", "Workshops"].map(
                (tag) => (
                  <span
                    key={tag}
                    className="border border-zinc-300 px-4 py-1 text-[10px] uppercase font-bold tracking-widest"
                  >
                    {tag}
                  </span>
                ),
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action Footer */}
      <section className="mt-32 text-center py-24 border-t border-zinc-200">
        <p className="text-zinc-400 uppercase tracking-[0.5em] text-xs mb-8">
          Partner with Us
        </p>
        <h2 className="text-3xl md:text-5xl font-light italic mb-12 text-zinc-800 px-4">
          &quot;Seni selalu lahir dari ruang hidup{" "}
          <br className="hidden md:block" /> yang paling dekat.&quot;
        </h2>
        <div className="flex flex-row justify-center">
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 bg-black text-white px-10 py-4 uppercase font-bold tracking-widest text-xs hover:bg-[#C9A051] transition-all duration-500"
          >
            Kolaborasi Event
            <FaArrowRight />
          </Link>
        </div>
      </section>
    </div>
  );
}
