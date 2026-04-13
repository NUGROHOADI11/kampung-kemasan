"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

interface GalleryItem {
  id: string;
  src: string;
  alt: string;
  category: string;
  title: string;
}

const galleryItems: GalleryItem[] = [
  {
    id: "1",
    src: "/assets/rumah-img.jpg",
    alt: "Heritage House",
    category: "Architecture",
    title: "Oemar Bin Ahmad Residence",
  },
  {
    id: "2",
    src: "/assets/hero-img.jpg",
    alt: "Street View",
    category: "Lifestyle",
    title: "Morning in Kemasan",
  },
  {
    id: "3",
    src: "/assets/hero-img.jpg",
    alt: "Carving Detail",
    category: "Detail",
    title: "Peranakan Woodwork",
  },
  {
    id: "4",
    src: "/assets/rumah-img.jpg",
    alt: "Facade",
    category: "Architecture",
    title: "Colonial Symmetry",
  },
  {
    id: "5",
    src: "/assets/hero-img.jpg",
    alt: "Pattern",
    category: "Detail",
    title: "Imported Floor Tiles",
  },
  {
    id: "6",
    src: "/assets/rumah-img.jpg",
    alt: "Night View",
    category: "Lifestyle",
    title: "Golden Hour Glow",
  },
];

export default function GalleryPage() {
  const [selectedItem, setSelectedItem] = useState<GalleryItem | null>(null);

  return (
    <div className="min-h-screen py-20 px-4 sm:px-8 bg-[#F6F6EC]">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="mb-16 border-l-8 border-black pl-6">
          <h1 className="text-5xl md:text-7xl font-bold tracking-tighter uppercase leading-none">
            Gallery.
          </h1>
          <p className="text-zinc-500 mt-4 text-sm font-light tracking-[0.4em] uppercase">
            Visual Documentation of Kampung Kemasan
          </p>
        </div>

        {/* Masonry-Style Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 auto-rows-[300px]">
          {galleryItems.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className={`group relative overflow-hidden cursor-pointer bg-zinc-200
                ${index === 0 ? "md:row-span-2 md:col-span-1" : ""}
                ${index === 3 ? "md:col-span-2" : ""}
              `}
              onClick={() => setSelectedItem(item)}
            >
              <Image
                src={item.src}
                alt={item.alt}
                fill
                loading="eager"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                className="object-cover group-hover:scale-105 transition-all duration-700 ease-in-out"
              />

              {/* Minimal Overlay */}
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-all duration-500 flex flex-col justify-end p-6">
                <div className="translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                  <p className="text-[#C9A051] text-xs font-bold uppercase tracking-widest mb-1">
                    {item.category}
                  </p>
                  <h3 className="text-white text-xl font-bold uppercase tracking-tighter">
                    {item.title}
                  </h3>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Lightbox / Modal */}
      <AnimatePresence>
        {selectedItem && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-10000 bg-black/95 backdrop-blur-sm flex items-center justify-center p-4 md:p-12"
            onClick={() => setSelectedItem(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="relative w-full max-w-5xl h-full max-h-[80vh]"
              onClick={(e) => e.stopPropagation()}
            >
              <Image
                src={selectedItem.src}
                alt={selectedItem.alt}
                fill
                loading="eager"
                sizes="(max-width: 768px) 90vw, (max-width: 1200px) 80vw, 60vw"
                className="object-contain"
              />
              <div className="absolute -bottom-16 left-0 right-0 text-center">
                <h2 className="text-white text-2xl font-bold uppercase tracking-widest">
                  {selectedItem.title}
                </h2>
                <p className="text-zinc-500 uppercase text-xs tracking-[0.3em] mt-2">
                  {selectedItem.category}
                </p>
              </div>
              <button
                className="absolute -top-12 right-0 text-white hover:text-[#C9A051] transition-colors uppercase text-xs font-bold tracking-widest"
                onClick={() => setSelectedItem(null)}
              >
                Close [esc]
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
