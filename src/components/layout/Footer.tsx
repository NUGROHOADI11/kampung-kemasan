"use client";

import { FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";
import Link from "next/link";
import { useTranslation } from "react-i18next";
import "../../i18n";

export default function Footer() {
  const { t } = useTranslation();
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-black text-white pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 pb-16 border-b border-white/10">
          {/* Brand Column */}
          <div className="lg:col-span-5 space-y-6">
            <h3 className="text-[#C9A051] text-3xl font-bold uppercase tracking-tighter leading-none">
              {t("hero.subtitle")} <br /> Heritage
            </h3>
            <p className="text-zinc-500 text-sm font-light leading-relaxed max-w-sm">
              {t("footer.description")}
            </p>
          </div>

          {/* Navigation Column */}
          <div className="lg:col-span-4 grid grid-cols-2 gap-8">
            <div className="space-y-4">
              <h4 className="text-[10px] font-bold uppercase tracking-[0.3em] text-zinc-500">
                {t("footer.explore")}
              </h4>
              <ul className="space-y-2 text-sm uppercase tracking-widest font-medium">
                <li>
                  <Link
                    href="/"
                    className="hover:text-[#C9A051] transition-colors"
                  >
                    {t("navbar.home")}
                  </Link>
                </li>
                <li>
                  <Link
                    href="/gallery"
                    className="hover:text-[#C9A051] transition-colors"
                  >
                    {t("navbar.gallery")}
                  </Link>
                </li>
                <li>
                  <Link
                    href="/event"
                    className="hover:text-[#C9A051] transition-colors"
                  >
                    {t("navbar.event")}
                  </Link>
                </li>
              </ul>
            </div>
            <div className="space-y-4">
              <h4 className="text-[10px] font-bold uppercase tracking-[0.3em] text-zinc-500">
                {t("footer.organization")}
              </h4>
              <ul className="space-y-2 text-sm uppercase tracking-widest font-medium">
                <li>
                  <Link
                    href="/about"
                    className="hover:text-[#C9A051] transition-colors"
                  >
                    {t("navbar.about")}
                  </Link>
                </li>
                <li>
                  <Link
                    href="/contact"
                    className="hover:text-[#C9A051] transition-colors"
                  >
                    {t("navbar.contact")}
                  </Link>
                </li>
                {/* <li>
                  <Link
                    href="/privacy"
                    className="hover:text-[#C9A051] transition-colors text-zinc-600"
                  >
                    Privacy
                  </Link>
                </li> */}
              </ul>
            </div>
          </div>

          {/* Social & Contact Column */}
          <div className="lg:col-span-3 flex flex-col justify-between items-start lg:items-end text-start lg:text-end">
            <div className="flex gap-6 lg:justify-end w-full">
              {[
                { icon: <FaInstagram />, href: "#" },
                { icon: <FaTwitter />, href: "#" },
                { icon: <FaYoutube />, href: "#" },
              ].map((social, i) => (
                <a
                  key={i}
                  href={social.href}
                  className="text-xl hover:text-[#C9A051] transition-all duration-300 transform hover:-translate-y-1"
                >
                  {social.icon}
                </a>
              ))}
            </div>
            <div className="mt-8 lg:mt-0">
              <p className="text-[10px] font-bold uppercase tracking-widest text-zinc-500 mb-1">
                {t("footer.office")}
              </p>
              <p className="text-xs text-zinc-400 leading-relaxed uppercase tracking-tighter">
                Jl. Nyai Ageng Arem-Arem No.3 <br />
                Gresik, Jawa Timur 61114
              </p>
            </div>
          </div>
        </div>

        {/* Copyright Section */}
        <div className="pt-10 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-[10px] uppercase tracking-[0.2em] text-zinc-600">
            &copy; {currentYear} {t("hero.subtitle")}. {t("footer.copyright")}
          </p>
          <div className="flex items-center gap-2">
            <div className="h-px w-8 bg-zinc-800"></div>
            <p className="text-[10px] uppercase tracking-[0.2em] text-zinc-600">
              Kampung Kemasan Heritage
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
