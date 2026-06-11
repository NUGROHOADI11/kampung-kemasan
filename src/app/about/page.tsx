"use client";

import { motion, easeOut } from "framer-motion";
import Image from "next/image";
import AboutImg from "../../../public/assets/images/about.webp";
import VisionImg from "../../../public/assets/images/visi.webp";
import { FaChevronRight } from "react-icons/fa";
import Link from "next/link";
import { useTranslation } from "react-i18next";

export default function AboutPage() {
  const { t } = useTranslation();
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
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-8 border-l-8 border-black pl-6"
        >
          <h1 className="text-3xl md:text-4xl font-bold tracking-tighter uppercase leading-tight">
            {t("about.title")}
          </h1>
          <p className="text-3xl md:text-4xl font-bold tracking-tighter uppercase leading-tight">
            Kampung Kemasan
          </p>
          <p className="text-gray-500 mt-2 text-sm font-light tracking-[0.15em] uppercase">
            {t("about.description")}
          </p>
          <p className="text-zinc-500 mt-2 text-sm">Jawa Timur, Indonesia</p>
        </motion.div>

        <motion.section
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className="mb-8 overflow-hidden rounded-lg"
        >
          <Image
            src={AboutImg}
            alt="Kampung Kemasan Heritage"
            loading="eager"
            className="w-full h-[60vh] object-cover shadow-sm "
          />
        </motion.section>

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
                {t("about.intro.heading")}
              </h2>
            </motion.div>
            <motion.div
              variants={fadeInUp}
              className="md:col-span-2 flex flex-col justify-end"
            >
              <p className="text-gray-600 leading-relaxed text-lg italic border-b border-zinc-200 pb-6">
                {t("about.intro.p1")}
              </p>
              <p className="text-zinc-500 mt-6 leading-relaxed">
                {t("about.intro.p2")}
              </p>
            </motion.div>
          </div>
        </motion.section>

        <motion.section
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="mb-8"
        >
          <div className="grid grid-cols-1 gap-6">
            <div className="flex flex-col md:flex-row gap-4 items-center justify-between w-full">
              <div className="text-center p-6 bg-white border rounded-lg w-full md:w-1/3">
                <div className="text-4xl font-extrabold">1855</div>
                <div className="text-xs uppercase tracking-widest mt-2">
                  {t("about.stats.year_label")}
                </div>
              </div>
              <div className="text-center p-6 bg-white border rounded-lg w-full md:w-1/3">
                <div className="text-4xl font-extrabold">3</div>
                <div className="text-xs uppercase tracking-widest mt-2">
                  {t("about.stats.culture_label")}
                </div>
              </div>
              <div className="text-center p-6 bg-white border rounded-lg w-full md:w-1/3">
                <div className="text-4xl font-extrabold">170+</div>
                <div className="text-xs uppercase tracking-widest mt-2">
                  {t("about.stats.heritage_label")}
                </div>
              </div>
            </div>

            <div className="rounded-lg p-8 bg-zinc-50 border border-zinc-100">
              <h3 className="text-lg font-bold mb-4">
                {t("about.history.title")}
              </h3>
              <div className="space-y-6 text-zinc-700">
                <div>
                  <h4 className="font-bold">
                    {t("about.history.item1_title")}
                  </h4>
                  <p className="text-sm mt-2">
                    {t("about.history.item1_desc")}
                  </p>
                </div>
                <div>
                  <h4 className="font-bold">
                    {t("about.history.item2_title")}
                  </h4>
                  <p className="text-sm mt-2">
                    {t("about.history.item2_desc")}
                  </p>
                </div>
                <div>
                  <h4 className="font-bold">
                    {t("about.history.item3_title")}
                  </h4>
                  <p className="text-sm mt-2">
                    {t("about.history.item3_desc")}
                  </p>
                </div>
                <div>
                  <h4 className="font-bold">
                    {t("about.history.item4_title")}
                  </h4>
                  <p className="text-sm mt-2">
                    {t("about.history.item4_desc")}
                  </p>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="rounded-lg p-6 bg-white border">
                <h4 className="font-bold uppercase text-sm mb-2">
                  {t("about.cultures.chinese_title")}
                </h4>
                <p className="text-sm">{t("about.cultures.chinese_desc")}</p>
              </div>
              <div className="rounded-lg p-6 bg-white border">
                <h4 className="font-bold uppercase text-sm mb-2">
                  {t("about.cultures.dutch_title")}
                </h4>
                <p className="text-sm">{t("about.cultures.dutch_desc")}</p>
              </div>
              <div className="rounded-lg p-6 bg-white border">
                <h4 className="font-bold uppercase text-sm mb-2">
                  {t("about.cultures.javanese_title")}
                </h4>
                <p className="text-sm">{t("about.cultures.javanese_desc")}</p>
              </div>
            </div>
          </div>
        </motion.section>

        <motion.section
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mb-24 w-full relative overflow-hidden rounded-3xl shadow-xl flex flex-col md:flex-row"
        >
          <div className="md:w-1/2 bg-[#8B2615] p-8 md:p-16 text-white relative">
            <div className="relative z-10">
              <h2 className="text-4xl md:text-5xl font-serif italic mb-6">
                Our{" "}
                <span className="font-sans not-italic font-bold uppercase">
                  Vision
                </span>
              </h2>
              <p className="text-xl md:text-2xl leading-relaxed font-light mb-12">
                {t("about.vision_mission.vision_desc")}
              </p>
              <div className="rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  src={VisionImg}
                  alt="Vision"
                  className="w-full h-64 object-cover"
                />
              </div>
            </div>

            <div className="hidden md:block absolute top-1/6 -right-8 transform -translate-y-1/2 z-20">
              <span className="text-[10rem] font-imperial-script font-semibold text-[#E9C46A] opacity-90">
                &
              </span>
            </div>
            <div className="hidden md:block absolute top-1/6 -right-10 transform -translate-y-1/2 z-20">
              <span className="text-[10rem] font-imperial-script font-semibold text-[#8B2615] opacity-90">
                &
              </span>
            </div>
          </div>

          <div className="md:w-1/2 bg-[#F5F8DF] p-8 md:p-16 text-zinc-900 flex flex-col justify-center">
            <h2 className="text-4xl md:text-5xl font-serif italic mb-12">
              Our{" "}
              <span className="font-sans not-italic font-bold uppercase">
                Mission
              </span>
            </h2>

            <div className="space-y-10">
              <div className="flex items-center gap-6 md:gap-8">
                <div className="shrink-0 w-16 md:w-20 flex justify-center">
                  <h4 className="text-[5rem] md:text-[6.5rem] font-black text-[#AD2A14] leading-none tracking-tighter drop-shadow-sm font-serif">
                    1
                  </h4>
                </div>
                <p className="text-lg md:text-xl font-medium leading-snug text-zinc-800">
                  {t("about.vision_mission.mission1")}
                </p>
              </div>

              <div className="flex items-center gap-6 md:gap-8">
                <div className="shrink-0 w-16 md:w-20 flex justify-center">
                  <h4 className="text-[5rem] md:text-[6.5rem] font-black text-[#AD2A14] leading-none tracking-tighter drop-shadow-sm font-serif">
                    2
                  </h4>
                </div>
                <p className="text-lg md:text-xl font-medium leading-snug text-zinc-800">
                  {t("about.vision_mission.mission2")}
                </p>
              </div>

              <div className="flex items-center gap-6 md:gap-8">
                <div className="shrink-0 w-16 md:w-20 flex justify-center">
                  <h4 className="text-[5rem] md:text-[6.5rem] font-black text-[#AD2A14] leading-none tracking-tighter drop-shadow-sm font-serif">
                    3
                  </h4>
                </div>
                <p className="text-lg md:text-xl font-medium leading-snug text-zinc-800">
                  {t("about.vision_mission.mission3")}
                </p>
              </div>
            </div>
          </div>
        </motion.section>

        <motion.section
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="h-[40vh] flex flex-col items-center justify-center max-w-4xl mx-auto text-center"
        >
          <h2 className="text-2xl md:text-3xl font-light italic mb-8 text-zinc-800">
            {t("about.closing_quote")}
          </h2>
          <Link
            href="/contact"
            className="group flex flex-row items-center text-black font-bold uppercase tracking-[0.2em] text-sm transition-all"
          >
            {t("about.contact")}
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
