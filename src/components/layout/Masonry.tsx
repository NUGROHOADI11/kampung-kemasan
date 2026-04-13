import React from "react";
import Masonry from "react-masonry-css";
import Image from "next/image";
import Link from "next/link";
import { FaChevronRight } from "react-icons/fa";

import madonna_saints from "../../../public/assets/rumah-img.jpg";
import pallas_centaur from "../../../public/assets/hero-img.jpg";
import adoration_magi from "../../../public/assets/hero-img.jpg";
import calumny_apelles from "../../../public/assets/hero-img.jpg";
import annunciation from "../../../public/assets/hero-img.jpg";
import profile_woman from "../../../public/assets/hero-img.jpg";

const artworkData = [
  {
    id: 1,
    title: "Madonna with Saints",
    years: "from 1484 until 1485",
    src: madonna_saints,
  },
  {
    id: 2,
    title: "Pallas and the Centaur",
    years: "1482",
    src: pallas_centaur,
  },
  {
    id: 4,
    title: "Madonna with Saints",
    years: "from 1484 until 1485",
    src: madonna_saints,
  },
  {
    id: 3,
    title: "The Adoration of the Magi",
    years: "from 1478 until 1482",
    src: adoration_magi,
  },
  {
    id: 5,
    title: "Calumny of Apelles",
    years: "from 1494 until 1495",
    src: calumny_apelles,
  },
  {
    id: 6,
    title: "Annunciation",
    years: "from 1489 until 1490",
    src: annunciation,
  },
  {
    id: 7,
    title: "Alessandro di Mariano Filipepi",
    years: "from 1476 until 1480",
    src: profile_woman,
  },
  {
    id: 8,
    title: "Calumny of Apelles",
    years: "from 1494 until 1495",
    src: calumny_apelles,
  },
];

const CollectionGallery = () => {
  const breakpointColumnsObj = {
    default: 4,
    1100: 3,
    700: 2,
    500: 1,
  };

  return (
    <section className="bg-[#F6F6EC] py-16 px-6 lg:px-24 text-zinc-900">
      {/* Header Section */}
      <div className="flex flex-col justify-between items-end mb-12 gap-6">
        <div className="w-full">
          <div className="flex flex-row justify-between items-center">
            <h2 className="text-4xl font-bold mb-4">Engage with Culture</h2>
            <div className="flex flex-row items-center">
              <Link
                href="/gallery"
                className="group flex items-center text-black font-bold uppercase tracking-[0.2em] text-[10px] md:text-xs transition-all"
              >
                Explore All Gallery
                <div className="flex items-center ml-2 transition-all duration-300 group-hover:ml-4">
                  <FaChevronRight className="inline-block transition-transform duration-300 group-hover:-translate-x-1" />
                  <FaChevronRight className="inline-block transition-transform duration-300" />
                </div>
              </Link>
            </div>
          </div>
          <div className="h-0.5 bg-black mb-6 w-full"></div>
          <p className="text-zinc-500 font-light">
            Kampung Kemasan is not just preserved — it is celebrated. Join our
            local community in keeping the spirit of Gresik alive.
          </p>
        </div>
      </div>

      {/* The Masonry Grid */}
      <Masonry
        breakpointCols={breakpointColumnsObj}
        className="my-masonry-grid"
        columnClassName="my-masonry-grid_column"
      >
        {artworkData.map((artwork) => (
          <div key={artwork.id} className="mb-10 group overflow-hidden">
            <div className="relative h-full overflow-hidden bg-zinc-100 rounded-sm">
              <Image
                src={artwork.src}
                alt={artwork.title}
                className="w-full h-auto object-cover  transition-all duration-700 transform group-hover:scale-105"
                placeholder="blur"
              />
            </div>

            <div className="pt-5 space-y-1">
              <h4 className="text-xl font-bold tracking-tight text-zinc-900">
                {artwork.title}
              </h4>
              <p className="text-xs font-medium tracking-widest text-zinc-500 uppercase">
                {artwork.years}
              </p>
            </div>
          </div>
        ))}
      </Masonry>

      <div className="mt-16 flex justify-center">
        <button className="bg-black text-white px-12 py-4 rounded-full font-bold uppercase tracking-[0.2em] text-xs hover:bg-zinc-800 transition-colors">
          Load More
        </button>
      </div>

    
    </section>
  );
};

export default CollectionGallery;
