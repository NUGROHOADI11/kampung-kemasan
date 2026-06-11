"use client";

import React, { useState } from "react";
import Image from "next/image";
import Rumah1 from "../../../public/assets/images/history.webp";
import Rumah2 from "../../../public/assets/images/rumah2.webp";
import Rumah3 from "../../../public/assets/images/rumah3.webp";
import Jendela from "../../../public/assets/images/jendela.webp";
import GaleryImg1 from "../../../public/assets/images/gallery1.webp";
import GaleryImg2 from "../../../public/assets/images/gallery2.webp";
import GaleryImg3 from "../../../public/assets/images/gallery3.webp";
import GaleryImg4 from "../../../public/assets/images/gallery4.webp";
import GajahMungkur from "../../../public/assets/images/history2.png";
import LangitLangit from "../../../public/assets/images/langit-langit.webp";

import { FaArrowCircleRight, FaTimes } from "react-icons/fa";

const CircleArrow = ({ bgClass = "bg-white", arrowClass = "text-black" }) => (
  <div
    className={`${bgClass} rounded-full p-2 flex items-center justify-center shrink-0 shadow-md w-10 h-10`}
  >
    <svg
      className={`w-6 h-6 ${arrowClass}`}
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth={3}
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
    </svg>
  </div>
);

const GalleryImage = [
  { src: GaleryImg1, alt: "Gallery Image 1" },
  { src: GaleryImg2, alt: "Gallery Image 2" },
  { src: GaleryImg3, alt: "Gallery Image 3" },
  { src: GaleryImg4, alt: "Gallery Image 4" },
];

const Koleksi = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const fullText = `Kampung Kemasan di Gresik merupakan salah satu kawasan bersejarah yang memiliki banyak cerita tentang perkembangan budaya dan kehidupan masyarakat pada masa lampau. Salah satu bangunan yang memiliki keterkaitan erat dengan sejarah Kampung Kemasan adalah Rumah Gajah Mungkur. Rumah ini menjadi bagian penting dari jejak sejarah keluarga besar yang pernah tinggal dan berkembang di kawasan tersebut. 

Keterkaitan Rumah Gajah Mungkur dengan Kampung Kemasan dapat dilihat dari garis keturunan pemiliknya. Di Kampung Kemasan terdapat keturunan H. Oemar bin Achmad, seorang pengrajin kain dari sarang kulit walet yang terkenal pada masanya karena keahlian dan usahanya yang cukup dikenal masyarakat. Dari keluarga inilah kemudian lahir Rumah Gajah Mungkur yang didirikan oleh anak keempat beliau, yaitu Abdoel Rachmad atau yang juga dikenal dengan nama H. D. Jaelan. 

Rumah Gajah Mungkur didirikan pada tahun 1896 dan berlokasi di Jalan Nyai Ageng Arem-Arem No. 38, Kabupaten Gresik, Jawa Timur. Letaknya yang tidak jauh dari Kampung Kemasan menunjukkan adanya hubungan sejarah dan keluarga yang erat antara kedua tempat tersebut. Hingga saat ini, Rumah Gajah Mungkur masih menjadi salah satu bangunan bersejarah yang memiliki nilai budaya dan menjadi pengingat perkembangan masyarakat Gresik pada masa lalu. 

Selain dikenal sebagai bangunan bersejarah, Rumah Gajah Mungkur juga memiliki usaha keluarga yang terus dilestarikan hingga generasi ketiga. Salah satu produk yang paling terkenal adalah Batik Gajah Mungkur, yaitu batik khas yang menjadi identitas dan warisan budaya keluarga tersebut. Keberadaan batik ini tidak hanya menjadi bagian dari usaha keluarga, tetapi juga turut memperkenalkan kekayaan budaya lokal Gresik.`;

  return (
    <div className="w-full bg-[#F8F9FA] overflow-hidden font-sans pb-20 relative">
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-in fade-in duration-200">
          <div className="bg-white rounded-3xl shadow-2xl w-full max-w-3xl max-h-[85vh] flex flex-col relative animate-in zoom-in-95 duration-200">
            <div className="flex justify-between items-center p-6 border-b border-gray-100">
              <h2 className="text-xl font-bold uppercase text-[#A63011] tracking-wider">
                Sejarah Gajah Mungkur
              </h2>
              <button
                onClick={() => setIsModalOpen(false)}
                className="text-gray-400 hover:text-gray-800 transition-colors bg-gray-100 hover:bg-gray-200 rounded-full p-2 focus:outline-none"
              >
                <FaTimes size={20} />
              </button>
            </div>
            <div className="p-6 md:p-8 overflow-y-auto">
              <p className="text-zinc-800 text-base leading-loose text-justify font-medium whitespace-pre-wrap">
                {fullText}
              </p>
            </div>
          </div>
        </div>
      )}

      <section className="relative w-full max-w-6xl mx-auto px-4 mb-24">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 justify-center items-start mx-auto max-w-3xl">
          <div className="flex flex-col rounded-b-4xl overflow-hidden shadow-xl">
            <div className="relative w-full h-64 md:h-96">
              <Image
                src={Rumah1}
                alt="House Type 1"
                fill
                className="object-cover"
              />
            </div>
            <div className="bg-[#FDF2CB] h-36 md:h-40 flex pb-6 items-end justify-center">
              <CircleArrow bgClass="bg-[#A13312]" arrowClass="text-[#FDF2CB]" />
            </div>
          </div>

          <div className="flex flex-col rounded-b-4xl overflow-hidden shadow-xl">
            <div className="relative w-full h-64 md:h-96">
              <Image
                src={Rumah2}
                alt="House Type 2"
                fill
                className="object-cover object-center"
              />
            </div>

            <div className="bg-[#A13312] h-28 md:h-32 flex pb-6 items-end justify-center">
              <CircleArrow bgClass="bg-white" arrowClass="text-[#A13312]" />
            </div>
          </div>

          <div className="relative flex flex-col rounded-b-4xl overflow-visible shadow-xl">
            <div className="relative w-full h-64 md:h-96">
              <Image
                src={Rumah3}
                alt="House Type 3"
                fill
                className="object-cover"
              />
            </div>
            <div className="bg-[#F0BB51] h-20 md:h-20 flex pb-6 items-end justify-center rounded-b-4xl">
              <CircleArrow bgClass="bg-white" arrowClass="text-[#F0BB51]" />
            </div>

            <div className="absolute -bottom-6 -right-4 md:-right-24 z-20 transform rotate-[-5deg]">
              <span className="font-dancing-script italic text-3xl md:text-4xl text-[#78594d] drop-shadow-sm whitespace-pre-line leading-[0.8]">
                Koleksi rumah{"\n"}
                <span className="ml-8">warisan</span>
              </span>
            </div>
          </div>
        </div>
      </section>

      <section className="relative w-full max-w-6xl mx-auto px-4 md:px-8 mb-24 z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="relative">
            <div className="absolute -top-12 -left-2 md:-left-6 z-20 transform rotate-[-5deg]">
              <span className="font-dancing-script italic text-3xl md:text-4xl text-[#78594d] drop-shadow-sm whitespace-pre-line leading-[0.8]">
                Koleksi rumah{"\n"}
                <span className="ml-4">warisan</span>
              </span>
            </div>

            <div className="bg-white rounded-4xl p-8 md:p-10 shadow-[0_10px_40px_-10px_rgba(0,0,0,0.1)] relative z-10">
              <h1 className="text-2xl md:text-[1.6rem] font-black uppercase leading-tight tracking-tight text-black mb-6">
                Koleksi Rumah Warisan Di
                <br />
                Kampung Kemasan
              </h1>
              <p className="text-gray-700 text-sm md:text-base leading-loose text-justify font-medium">
                Berlokasi di Kabupaten Gresik, Jawa Timur, Kampung Kemasan
                Gresik merupakan salah satu destinasi wisata yang paling ikonik
                di daerah tersebut. Kampung ini dikenal dengan gaya
                arsitekturnya yang unik dan cukup berbeda dari beberapa bangunan
                era kolonial pada umumnya. Bagian arsitektur yang ada di Kampung
                Kemasan terpengaruh dari budaya Tionghoa atau Cina, Belanda, dan
                Jawa.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4 md:gap-6">
            {GalleryImage.map((image, index) => (
              <div
                key={index}
                className="relative aspect-4/3 rounded-3xl overflow-hidden shadow-lg bg-white"
              >
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  className="object-cover rounded-3xl"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="relative w-full pt-16 pb-16 overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full z-0 pointer-events-none">
          <div
            className="absolute inset-0 bg-[radial-gradient(#444_1px,transparent_1px)] bg-size-[5px_5px] opacity-30"
            style={{
              maskImage:
                "linear-gradient(to bottom, black 0%, transparent 90%)",
              WebkitMaskImage:
                "linear-gradient(to bottom, black 0%, transparent 90%)",
            }}
          ></div>
        </div>

        <div className="relative z-10 max-w-6xl mx-auto px-4 md:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="bg-white rounded-4xl p-8 md:p-10 shadow-[0_10px_40px_-10px_rgba(0,0,0,0.1)]">
              <h1 className="text-2xl md:text-[1.6rem] font-black uppercase leading-tight tracking-tight text-black mb-6">
                Fitur Unik Struktural
                <br />
                (Jendela Tipuan)
              </h1>
              <p className="text-gray-700 text-sm md:text-base leading-loose text-justify font-medium">
                Jendela tipuan yang terdapat pada rumah-rumah di kawasan Kampung
                kemasan menjadi salah satu ciri khas arsitektur yang unik dan
                menarik. Sekilas, jendela tersebut tampak seperti jendela pada
                umumnya, ternyata itu hanya ornamen rumah. Desain ini dibuat
                sebagai bagian dari sistem keamanan rumah untuk mengelabui
                pencuri, sehingga mereka kesulitan menemukan jalan keluar saat
                memasuki bangunan. Selain memiliki fungsi keamanan, keberadaan
                jendela tipuan ini juga menambah nilai historis dan keunikan
                arsitektur heritage di Kampung Kemasan.
              </p>
            </div>

            <div className="relative flex justify-center items-center h-full">
              <div className="w-full max-w-md flex flex-col rounded-4xl shadow-2xl relative">
                <div className="absolute bottom-[30%] -right-6 md:-right-20 z-30 transform rotate-[-5deg]">
                  <span className="font-dancing-script italic text-3xl md:text-4xl text-[#78594d] drop-shadow-sm whitespace-pre-line leading-[0.8]">
                    Koleksi rumah{"\n"}
                    <span className="ml-8">warisan</span>
                  </span>
                </div>

                <div className="relative w-full aspect-4/5 rounded-t-4xl overflow-hidden bg-blue-100">
                  <Image
                    src={Jendela}
                    alt="Jendela Tipuan"
                    fill
                    className="object-cover"
                  />
                </div>

                <div className="bg-[#A13312] text-white py-5 px-6 rounded-b-4xl w-full text-center z-10">
                  <span className="font-bold tracking-[0.25em] uppercase text-sm md:text-base">
                    Jendela Tipuan
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="relative w-full pt-16 pb-16 overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full z-0 pointer-events-none">
          <div
            className="absolute inset-0 bg-[radial-gradient(#444_1px,transparent_1px)] bg-size-[5px_5px] opacity-30"
            style={{
              maskImage:
                "linear-gradient(to bottom, black 0%, transparent 90%)",
              WebkitMaskImage:
                "linear-gradient(to bottom, black 0%, transparent 90%)",
            }}
          ></div>
        </div>

        <div className="relative z-10 max-w-6xl mx-auto px-4 md:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="relative flex justify-center items-center h-full">
              <div className="w-full max-w-md flex flex-col rounded-4xl shadow-2xl relative">
                <div className="absolute bottom-[30%] -right-6 md:-right-20 z-30 transform rotate-[-5deg]">
                  <span className="font-dancing-script italic text-3xl md:text-4xl text-[#78594d] drop-shadow-sm whitespace-pre-line leading-[0.8]">
                    Koleksi rumah{"\n"}
                    <span className="ml-8">warisan</span>
                  </span>
                </div>

                <div className="relative w-full aspect-4/5 rounded-t-4xl overflow-hidden bg-blue-100">
                  <Image
                    src={LangitLangit}
                    alt="Langit-Langit Tinggi"
                    fill
                    className="object-cover"
                  />
                </div>

                <div className="bg-[#A13312] text-white py-5 px-6 rounded-b-4xl w-full text-center z-10">
                  <span className="font-bold tracking-[0.25em] uppercase text-sm md:text-base">
                    Langit-Langit Tinggi & Jendela Besar
                  </span>
                </div>
              </div>
            </div>
            <div className="bg-white rounded-4xl p-8 md:p-10 shadow-[0_10px_40px_-10px_rgba(0,0,0,0.1)]">
              <h1 className="text-2xl md:text-[1.6rem] font-black uppercase leading-tight tracking-tight text-black mb-6">
                Langit-Langit Tinggi & Jendela Besar
              </h1>
              <p className="text-gray-700 text-sm md:text-base leading-loose text-justify font-medium">
                Dirancang khusus untuk iklim tropis, rumah-rumah ini tetap sejuk
                secara alami dengan sirkulasi udara yang optimal, dan nyaman
                tanpa perlu pendingin modern. Ubin Impor & Detail Besi Artistik
                Sentuhan elegan hadir melalui ubin keramik Eropa dan ornamen
                besi cor yang didatangkan langsung pada masa kolonial,
                memperkuat nilai sejarahnya. Simetri & Warna yang Menawan
                Perpaduan bentuk simetris dan warna-warna cerah menjadikan
                Kampung Kemasan tampil berbeda—anggun, hidup, dan penuh
                karakter.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="relative w-full pt-16 pb-24 overflow-hidden bg-gray-50">
        <div className="absolute top-0 left-0 w-full h-full z-0 pointer-events-none">
          <div
            className="absolute inset-0 bg-[radial-gradient(#888_1px,transparent_1px)] bg-size-[8px_8px] opacity-30"
            style={{
              maskImage:
                "linear-gradient(to bottom, black 0%, transparent 90%)",
              WebkitMaskImage:
                "linear-gradient(to bottom, black 0%, transparent 90%)",
            }}
          ></div>
        </div>

        <div className="relative z-10 max-w-6xl mx-auto px-4 md:px-12 mt-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-12 items-center">
            <div className="relative flex justify-center items-center h-full w-full max-w-md mx-auto">
              <div className="relative w-full flex flex-col items-center">
                <div className="relative w-full aspect-square md:aspect-4/5 rounded-3xl ">
                  <Image
                    src={GajahMungkur}
                    alt="Rumah Gajah Mungkur"
                    fill
                    className="object-contain "
                  />
                </div>

                <div className="absolute bottom-0 -left-4 -right-4 z-10">
                  <div className="bg-[#A63011] py-4 px-6 rounded-xl w-full text-center shadow-[8px_8px_0px_0px_#5A5A5A]">
                    <span className="font-extrabold tracking-[0.3em] uppercase text-xl md:text-2xl text-[#FCE195]">
                      Gajah Mungkur
                    </span>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-3xl p-8 md:p-10 shadow-[0_15px_40px_-10px_rgba(0,0,0,0.15)] relative">
              <p className="text-zinc-800 text-sm md:text-base leading-loose text-justify font-medium line-clamp-10">
                {fullText}
              </p>

              <div className="flex justify-end mt-6">
                <button
                  onClick={() => setIsModalOpen(true)}
                  aria-label="Read more about Gajah Mungkur"
                  className="focus:outline-none"
                >
                  <FaArrowCircleRight className="text-4xl text-[#A63011] hover:text-[#8a270e] transition-colors cursor-pointer shadow-sm rounded-full" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Koleksi;
