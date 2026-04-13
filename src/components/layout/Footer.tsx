import { FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";
import Link from "next/link";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-black text-white pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 pb-16 border-b border-white/10">
          {/* Brand Column */}
          <div className="lg:col-span-5 space-y-6">
            <h3 className="text-[#C9A051] text-3xl font-bold uppercase tracking-tighter leading-none">
              Kampung <br /> Kemasan Heritage
            </h3>
            <p className="text-zinc-500 text-sm font-light leading-relaxed max-w-sm">
              Dedikasi untuk pelestarian arsip budaya dan keagungan arsitektur
              nusantara. Merawat memori, membangun masa depan melalui
              dokumentasi dan edukasi.
            </p>
          </div>

          {/* Navigation Column */}
          <div className="lg:col-span-4 grid grid-cols-2 gap-8">
            <div className="space-y-4">
              <h4 className="text-[10px] font-bold uppercase tracking-[0.3em] text-zinc-500">
                Explore
              </h4>
              <ul className="space-y-2 text-sm uppercase tracking-widest font-medium">
                <li>
                  <Link
                    href="/"
                    className="hover:text-[#C9A051] transition-colors"
                  >
                    Home
                  </Link>
                </li>
                <li>
                  <Link
                    href="/gallery"
                    className="hover:text-[#C9A051] transition-colors"
                  >
                    Archive
                  </Link>
                </li>
                <li>
                  <Link
                    href="/event"
                    className="hover:text-[#C9A051] transition-colors"
                  >
                    Events
                  </Link>
                </li>
              </ul>
            </div>
            <div className="space-y-4">
              <h4 className="text-[10px] font-bold uppercase tracking-[0.3em] text-zinc-500">
                Organization
              </h4>
              <ul className="space-y-2 text-sm uppercase tracking-widest font-medium">
                <li>
                  <Link
                    href="/about"
                    className="hover:text-[#C9A051] transition-colors"
                  >
                    About Us
                  </Link>
                </li>
                <li>
                  <Link
                    href="/contact"
                    className="hover:text-[#C9A051] transition-colors"
                  >
                    Contact
                  </Link>
                </li>
                <li>
                  <Link
                    href="/privacy"
                    className="hover:text-[#C9A051] transition-colors"
                  >
                    Privacy
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          {/* Social & Contact Column */}
          <div className="lg:col-span-3 flex flex-col justify-between items-start lg:items-end">
            <div className="flex gap-6">
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
            <div className="mt-8 lg:mt-0 text-start lg:text-end">
              <p className="text-[10px] font-bold uppercase tracking-widest text-zinc-500 mb-1">
                Office
              </p>
              <p className="text-xs text-zinc-400 leading-relaxed">
                Jl. Nyai Ageng Arem-Arem No.3 <br />
                Gresik, Jawa Timur 61114
              </p>
            </div>
          </div>
        </div>

        {/* Copyright Section */}
        <div className="pt-10 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-[10px] uppercase tracking-[0.2em] text-zinc-600">
            &copy; {currentYear} Kampung Kemasan. All rights reserved.
          </p>
          <div className="flex items-center gap-2">
            <div className="h-px w-8 bg-zinc-800"></div>
            <p className="text-[10px] uppercase tracking-[0.2em] text-zinc-600">
              Gresik Heritage Corridor
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
