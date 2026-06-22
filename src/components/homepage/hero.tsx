"use client";

import Image, { StaticImageData } from "next/image";
import { motion } from "framer-motion";

type HeroProps = {
  image: StaticImageData;
  t: (key: string) => string;
};

export default function Hero({ image, t }: HeroProps) {
  
  const textColor = "text-[#ffe88b]";

  return (
    <div className="h-[95vh] w-full relative overflow-hidden">
      <motion.div
        initial={{ scale: 1.1, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1.5 }}
        className="absolute inset-0"
      >
        <Image
          src={image}
          alt="Kampoeng Kemasan"
          placeholder="blur"
          priority
          fill
          sizes="100vw"
          className="object-cover brightness-90"
        />
      </motion.div>

      <div className="absolute inset-0 z-10 w-full h-full pointer-events-none">
        <div className="absolute top-[12%] md:top-[15%] left-[5%] md:left-[10%] flex flex-col items-start pointer-events-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="z-20 mb-4"
          >
            <span
              className={`inline-block border-2 border-[#ffe88b] ${textColor} rounded-[50%] px-6 py-2 text-sm md:text-xl font-bold tracking-widest shadow-sm `}
            >
              {t("hero.est")}
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 1 }}
            className="font-extrabold text-[#ffe88b] max-w-[60vw] text-6xl md:text-8xl"
          >
            <span suppressHydrationWarning>
              {t("hero.title")}
            </span>
          </motion.h1>
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 1 }}
            className={`font-luxurious-script ${textColor} text-6xl md:text-[7rem] tracking-wide leading-[0.8] drop-shadow-2xl text-left`}
          >
            <span suppressHydrationWarning>
              {t("hero.subtitle")}
            </span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2, duration: 1 }}
            className={`w-full text-start max-w-2xl ${textColor} text-base md:text-xl font-sans tracking-wide drop-shadow-lg pointer-events-auto`}
          >
            <span suppressHydrationWarning>
            &quot;{t("hero.tagline")} &quot;
            </span>
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.5, duration: 0.8 }}
            className=""
          >
            <button
              className={`${textColor} bg-[#8B2615] mt-4 2xl:mt-6 uppercase font-bold px-8 py-3 rounded-full shadow-lg hover:shadow-xl hover:scale-105 transition-all flex items-center gap-3`}
              onClick={() => window.open("/about")}
            >
              <span suppressHydrationWarning>
                {t("hero.cta")}
              </span>
            </button>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
