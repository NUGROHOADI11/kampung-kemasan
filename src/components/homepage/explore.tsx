"use client";

import { useState } from "react";
import { useTranslation } from "react-i18next";
import {
  FaCamera,
  FaMapMarkedAlt,
  FaUtensils,
  FaBed,
  FaCar,
  FaBus,
  FaTrain,
  FaPlane,
  FaBicycle,
  FaShoppingBag,
  FaCoffee,
  FaCheckCircle,
  FaArrowRight,
  FaTimes,
  FaStore,
} from "react-icons/fa";
import Image from "next/image";

import TrainImg from "../../../public/assets/images/train.webp";
import BusImg from "../../../public/assets/images/tj2.webp";
import PlaneImg from "../../../public/assets/images/plane.webp";
import Becak from "../../../public/assets/images/becak.webp";
import BatikImg from "../../../public/assets/images/batik.webp";
import DepotKrawuImg from "../../../public/assets/images/depot-krawu.webp";
import CafeKemasanImg from "../../../public/assets/images/cafe.webp";
import HotelBahagiaImg from "../../../public/assets/images/hotel-bahagia.webp";
import HotelBatikImg from "../../../public/assets/images/hotel-batik.webp";
import ArtEventImg from "../../../public/assets/images/art-event.webp";
import JalanJajanImg from "../../../public/assets/images/tiktok7.webp";
import DocomentasiImg from "../../../public/assets/images/dokumentasi.webp";

const exploreTabs = [
  { id: "transportation", icon: FaMapMarkedAlt },
  { id: "activities", icon: FaCamera },
  { id: "culinary", icon: FaUtensils },
  { id: "accommodation", icon: FaBed },
];

const images = {
  bus: BusImg,
  train: TrainImg,
  plane: PlaneImg,
  local: Becak,
  activities: [ArtEventImg, JalanJajanImg, DocomentasiImg],
  culinary: [DepotKrawuImg, BatikImg, CafeKemasanImg],
  hotel: [HotelBahagiaImg, HotelBatikImg],
};

export default function Explore() {
  const { t } = useTranslation();
  const [activeExplore, setActiveExplore] = useState("transportation");
  const [activeTransport, setActiveTransport] = useState("car");
  const [modalContent, setModalContent] = useState<{
    title: string;
    content: string;
  } | null>(null);

  const renderContent = () => {
    switch (activeExplore) {
      case "transportation":
        return (
          <div className="space-y-4 animate-in fade-in slide-in-from-bottom-4 duration-500 flex flex-col h-full min-h-0">
            <div className="shrink-0">
              <h3 className="text-xl font-bold text-[#8B2615] mb-1">
                {t("explore.transportation.heading")}
              </h3>
              <p
                className="text-sm text-zinc-600 leading-relaxed line-clamp-2"
                dangerouslySetInnerHTML={{
                  __html: t("explore.transportation.description"),
                }}
              />
            </div>

            <div className="flex overflow-x-auto gap-2 pb-1 shrink-0 custom-scrollbar">
              {[
                {
                  id: "car",
                  icon: FaCar,
                  label: t("explore.transportation.by_car.title"),
                },
                {
                  id: "bus",
                  icon: FaBus,
                  label: t("explore.transportation.by_bus.title"),
                },
                {
                  id: "train",
                  icon: FaTrain,
                  label: t("explore.transportation.by_train.title"),
                },
                {
                  id: "plane",
                  icon: FaPlane,
                  label: t("explore.transportation.by_plane.title"),
                },
                {
                  id: "local",
                  icon: FaBicycle,
                  label: t("explore.transportation.local_transport.title"),
                },
              ].map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTransport(tab.id)}
                  className={`flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-bold transition-all whitespace-nowrap border ${
                    activeTransport === tab.id
                      ? "bg-[#8B2615] text-white border-[#8B2615] shadow-sm"
                      : "bg-white text-zinc-600 border-zinc-200 hover:bg-zinc-50 hover:border-zinc-300"
                  }`}
                >
                  <tab.icon size={12} />
                  {tab.label}
                </button>
              ))}
            </div>

            <div className="flex-1 overflow-y-auto bg-zinc-50 p-4 rounded-2xl border border-zinc-100 custom-scrollbar">
              {activeTransport === "car" && (
                <div className="animate-in fade-in flex flex-col md:flex-row gap-4 h-full">
                  <div className="flex-1">
                    <h4 className="font-bold text-base text-zinc-800 mb-3 flex items-center gap-2">
                      <div className="bg-[#8B2615] p-1.5 rounded-md text-white">
                        <FaCar size={12} />
                      </div>
                      {t("explore.transportation.by_car.title")}
                    </h4>
                    <ul className="text-xs text-zinc-600 space-y-2.5">
                      <li className="flex items-start gap-2">
                        <FaCheckCircle className="text-[#8B2615] mt-0.5 shrink-0" />
                        {t("explore.transportation.by_car.step1")}
                      </li>
                      <li className="flex items-start gap-2">
                        <FaCheckCircle className="text-[#8B2615] mt-0.5 shrink-0" />
                        {t("explore.transportation.by_car.step2")}
                      </li>
                      <li className="flex items-start gap-2">
                        <FaCheckCircle className="text-[#8B2615] mt-0.5 shrink-0" />
                        {t("explore.transportation.by_car.step3")}
                      </li>
                      <li className="flex items-start gap-2">
                        <FaCheckCircle className="text-[#8B2615] mt-0.5 shrink-0" />
                        {t("explore.transportation.by_car.step4")}
                      </li>
                    </ul>
                  </div>
                </div>
              )}

              {activeTransport === "bus" && (
                <div className="animate-in fade-in flex flex-col md:flex-row gap-4 h-full">
                  <div className="relative h-48 md:h-full md:w-2/5 shrink-0 rounded-xl overflow-hidden bg-zinc-100">
                    <Image
                      src={images.bus}
                      alt={t("explore.transportation.by_bus.title")}
                      className="object-contain"
                      fill
                      sizes="(max-width: 768px) 100vw, 40vw"
                    />
                  </div>
                  <div className="flex-1">
                    <h4 className="font-bold text-base text-zinc-800 mb-3 flex items-center gap-2">
                      <div className="bg-[#8B2615] p-1.5 rounded-md text-white">
                        <FaBus size={12} />
                      </div>
                      {t("explore.transportation.by_bus.title")}
                    </h4>
                    <ul className="text-xs text-zinc-600 space-y-2.5">
                      <li className="flex items-start gap-2">
                        <FaCheckCircle className="text-[#8B2615] mt-0.5 shrink-0" />
                        {t("explore.transportation.by_bus.step1")}
                      </li>
                      <li className="flex items-start gap-2">
                        <FaCheckCircle className="text-[#8B2615] mt-0.5 shrink-0" />
                        {t("explore.transportation.by_bus.step2")}
                      </li>
                      <li className="flex items-start gap-2">
                        <FaCheckCircle className="text-[#8B2615] mt-0.5 shrink-0" />
                        {t("explore.transportation.by_bus.step3")}
                      </li>
                    </ul>
                  </div>
                </div>
              )}

              {activeTransport === "train" && (
                <div className="animate-in fade-in flex flex-col md:flex-row gap-4 h-full">
                  <div className="relative h-48 md:h-full md:w-2/5 shrink-0 rounded-xl overflow-hidden bg-zinc-100">
                    <Image
                      src={images.train}
                      alt={t("explore.transportation.by_train.title")}
                      className="object-contain"
                      fill
                      sizes="(max-width: 768px) 100vw, 40vw"
                    />
                  </div>
                  <div className="flex-1">
                    <h4 className="font-bold text-base text-zinc-800 mb-3 flex items-center gap-2">
                      <div className="bg-[#8B2615] p-1.5 rounded-md text-white">
                        <FaTrain size={12} />
                      </div>
                      {t("explore.transportation.by_train.title")}
                    </h4>
                    <ul className="text-xs text-zinc-600 space-y-2.5">
                      <li className="flex items-start gap-2">
                        <FaCheckCircle className="text-[#8B2615] mt-0.5 shrink-0" />
                        {t("explore.transportation.by_train.step1")}
                      </li>
                      <li className="flex items-start gap-2">
                        <FaCheckCircle className="text-[#8B2615] mt-0.5 shrink-0" />
                        {t("explore.transportation.by_train.step2")}
                      </li>
                    </ul>
                  </div>
                </div>
              )}

              {activeTransport === "plane" && (
                <div className="animate-in fade-in flex flex-col md:flex-row gap-4 h-full">
                  <div className="relative h-48 md:h-full md:w-2/5 shrink-0 rounded-xl overflow-hidden bg-zinc-100">
                    <Image
                      src={images.plane}
                      alt={t("explore.transportation.by_plane.title")}
                      className="object-contain"
                      fill
                      sizes="(max-width: 768px) 100vw, 40vw"
                    />
                  </div>
                  <div className="flex-1">
                    <h4 className="font-bold text-base text-zinc-800 mb-3 flex items-center gap-2">
                      <div className="bg-[#8B2615] p-1.5 rounded-md text-white">
                        <FaPlane size={12} />
                      </div>
                      {t("explore.transportation.by_plane.title")}
                    </h4>
                    <ul className="text-xs text-zinc-600 space-y-2.5">
                      <li className="flex items-start gap-2">
                        <FaCheckCircle className="text-[#8B2615] mt-0.5 shrink-0" />
                        {t("explore.transportation.by_plane.step1")}
                      </li>
                      <li className="flex items-start gap-2">
                        <FaCheckCircle className="text-[#8B2615] mt-0.5 shrink-0" />
                        {t("explore.transportation.by_plane.step2")}
                      </li>
                    </ul>
                  </div>
                </div>
              )}

              {activeTransport === "local" && (
                <div className="animate-in fade-in flex flex-col md:flex-row gap-4 h-full">
                  <div className="relative h-48 md:h-full md:w-2/5 shrink-0 rounded-xl overflow-hidden bg-zinc-100">
                    <Image
                      src={images.local}
                      alt={t("explore.transportation.local_transport.title")}
                      className="object-contain"
                      fill
                      sizes="(max-width: 768px) 100vw, 40vw"
                    />
                  </div>
                  <div className="flex-1 flex flex-col">
                    <h4 className="font-bold text-base text-zinc-800 mb-3 flex items-center gap-2">
                      <div className="bg-[#8B2615] p-1.5 rounded-md text-white">
                        <FaBicycle size={12} />
                      </div>
                      {t("explore.transportation.local_transport.title")}
                    </h4>
                    <div className="flex flex-wrap gap-2 mb-3">
                      <span className="px-2.5 py-1 bg-white border border-zinc-200 rounded-full text-[10px] font-bold text-zinc-700 shadow-sm">
                        {t("explore.transportation.local_transport.opt1")}
                      </span>
                      <span className="px-2.5 py-1 bg-white border border-zinc-200 rounded-full text-[10px] font-bold text-zinc-700 shadow-sm">
                        {t("explore.transportation.local_transport.opt2")}
                      </span>
                      <span className="px-2.5 py-1 bg-white border border-zinc-200 rounded-full text-[10px] font-bold text-zinc-700 shadow-sm">
                        {t("explore.transportation.local_transport.opt3")}
                      </span>
                      <span className="px-2.5 py-1 bg-white border border-zinc-200 rounded-full text-[10px] font-bold text-zinc-700 shadow-sm">
                        {t("explore.transportation.local_transport.opt4")}
                      </span>
                    </div>
                    <p
                      className="text-xs text-zinc-600 leading-relaxed bg-white border border-zinc-100 p-3 rounded-xl flex-1"
                      dangerouslySetInnerHTML={{
                        __html: t(
                          "explore.transportation.local_transport.bus_info",
                        ),
                      }}
                    />
                  </div>
                </div>
              )}
            </div>
          </div>
        );

      case "activities":
        const fetchedActivities = t("explore.activities.items", {
          returnObjects: true,
        });
        const activitiesList = Array.isArray(fetchedActivities)
          ? fetchedActivities
          : [];
        const actIcons = [FaStore, FaMapMarkedAlt, FaCamera];

        return (
          <div className="space-y-4 animate-in fade-in slide-in-from-bottom-4 duration-500 h-full flex flex-col min-h-0">
            <div className="shrink-0">
              <h3 className="text-xl font-bold text-[#8B2615] mb-1">
                {t("explore.activities.heading")}
              </h3>
              <p className="text-sm text-zinc-600 leading-relaxed">
                {t("explore.activities.description")}
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 flex-1 overflow-y-auto custom-scrollbar pb-2">
              {activitiesList.map((act: { title: string; short: string; full: string }, index: number) => {
                const Icon = actIcons[index % actIcons.length];
                return (
                  <div
                    key={index}
                    className="bg-white p-4 rounded-2xl border border-zinc-100 shadow-sm flex flex-col h-full"
                  >
                    <div className="relative w-full h-40 md:h-48 mb-3 shrink-0 rounded-xl overflow-hidden bg-zinc-100">
                      <Image
                        src={
                          images.activities[index % images.activities.length]
                        }
                        alt={act.title}
                        className="object-cover"
                        fill
                        sizes="(max-width: 768px) 100vw, 33vw"
                      />
                    </div>

                    <div className="flex items-center gap-2 mb-2">
                      <div className="w-8 h-8 bg-orange-100 text-[#8B2615] rounded-lg flex items-center justify-center shrink-0">
                        <Icon size={14} />
                      </div>
                      <h4 className="font-bold text-sm text-zinc-800 leading-snug line-clamp-1">
                        {act.title}
                      </h4>
                    </div>
                    <p className="text-xs text-zinc-600 mb-3 flex-1 line-clamp-3">
                      {act.short}
                    </p>
                    <button
                      onClick={() =>
                        setModalContent({ title: act.title, content: act.full })
                      }
                      className="text-xs font-bold text-[#8B2615] hover:text-black uppercase tracking-wider text-left transition-colors flex items-center gap-1 mt-auto shrink-0"
                    >
                      {t("explore.activities.read_more")}{" "}
                      <FaArrowRight size={10} />
                    </button>
                  </div>
                );
              })}
            </div>
          </div>
        );

      case "culinary":
        const fetchedCulinary = t("explore.culinary.cards", {
          returnObjects: true,
        });
        const culinaryCards = Array.isArray(fetchedCulinary)
          ? fetchedCulinary
          : [];

        return (
          <div className="space-y-4 animate-in fade-in slide-in-from-bottom-4 duration-500 h-full flex flex-col min-h-0">
            <div className="shrink-0">
              <h3 className="text-xl font-bold text-[#8B2615] mb-1">
                {t("explore.culinary.heading")}
              </h3>
              <p className="text-sm text-zinc-600 leading-relaxed max-w-2xl">
                {t("explore.culinary.description")}
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 flex-1 overflow-y-auto custom-scrollbar pb-2">
              {/* Card Index 0 */}
              {culinaryCards[0] && (
                <div className="bg-white p-4 rounded-2xl border border-zinc-100 shadow-sm md:col-span-3 xl:col-span-1 h-full flex flex-col">
                  <div className="relative w-full h-40 mb-4 rounded-xl overflow-hidden shrink-0 bg-zinc-100">
                    <Image
                      src={images.culinary[0]}
                      alt={culinaryCards[0].title}
                      className="object-cover"
                      fill
                      sizes="(max-width: 1280px) 100vw, 33vw"
                    />
                  </div>
                  <div className="flex items-center gap-3 mb-4 text-[#8B2615] shrink-0">
                    <FaUtensils size={18} />
                    <h4 className="font-bold text-lg text-zinc-800">
                      {culinaryCards[0].title}
                    </h4>
                  </div>
                  <ul className="text-sm text-zinc-600 space-y-4 flex-1">
                    {culinaryCards[0].items?.map(
                      (item: { name: string; desc: string }, idx: number) => (
                        <li
                          key={idx}
                          className="bg-zinc-50 p-3 rounded-lg border border-zinc-100"
                        >
                          <strong className="text-sm text-zinc-900 block mb-1">
                            {item.name}
                          </strong>
                        </li>
                      ),
                    )}
                  </ul>
                  <button
                    onClick={() =>
                      setModalContent({
                        title: culinaryCards[0].title,
                        content:
                          culinaryCards[0].full ||
                          culinaryCards[0].items
                            ?.map(
                              (i: { name: string; desc: string }) =>
                                `${i.name}:\n${i.desc}`,
                            )
                            .join("\n\n"),
                      })
                    }
                    className="text-xs font-bold text-[#8B2615] hover:text-black uppercase tracking-wider text-left transition-colors flex items-center gap-1 mt-4 shrink-0"
                  >
                    {t("explore.culinary.read_more")} <FaArrowRight size={10} />
                  </button>
                </div>
              )}

              {/* Cards Index 1 & 2 */}
              <div className="md:col-span-3 xl:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-4">
                {[1, 2].map((idx) => {
                  const card = culinaryCards[idx];
                  if (!card) return null;
                  const Icon = idx === 1 ? FaShoppingBag : FaCoffee;
                  return (
                    <div
                      key={idx}
                      className="bg-white p-4 rounded-2xl border border-zinc-100 shadow-sm flex flex-col h-full"
                    >
                      <div className="relative w-full h-40 mb-4 rounded-xl overflow-hidden shrink-0 bg-zinc-100 group">
                        <Image
                          src={images.culinary[idx]}
                          alt={card.title}
                          className="object-cover group-hover:scale-105 transition-transform duration-700"
                          fill
                          sizes="(max-width: 768px) 100vw, 33vw"
                        />
                      </div>
                      <div className="flex items-center gap-3 mb-3 text-[#8B2615] shrink-0">
                        <div className="bg-orange-100 p-2 rounded-lg">
                          <Icon size={14} />
                        </div>
                        <h4 className="font-bold text-base text-zinc-800">
                          {card.title}
                        </h4>
                      </div>
                      <p className="text-xs text-zinc-600 mb-4 flex-1 line-clamp-3">
                        {card.short}
                      </p>
                      <button
                        onClick={() =>
                          setModalContent({
                            title: card.title,
                            content: card.full,
                          })
                        }
                        className="text-xs font-bold text-[#8B2615] hover:text-black uppercase tracking-wider text-left transition-colors flex items-center gap-1 mt-auto shrink-0"
                      >
                        {t("explore.culinary.read_more")}{" "}
                        <FaArrowRight size={10} />
                      </button>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        );

      case "accommodation":
        const fetchedHotels = t("explore.accommodation.hotels", {
          returnObjects: true,
        });
        const hotelsList = Array.isArray(fetchedHotels) ? fetchedHotels : [];

        return (
          <div className="space-y-4 animate-in fade-in slide-in-from-bottom-4 duration-500 h-full flex flex-col min-h-0">
            <div className="shrink-0">
              <h3 className="text-xl font-bold text-[#8B2615] mb-1">
                {t("explore.accommodation.heading")}
              </h3>
              <p className="text-sm text-zinc-600 leading-relaxed">
                {t("explore.accommodation.description")}
              </p>
            </div>

            <div className="grid grid-cols-1 gap-4 flex-1 overflow-y-auto custom-scrollbar pb-2">
              {hotelsList.map((hotel: { name: string; price: string; desc1: string; desc2: string; desc3: string }, index: number) => (
                <div
                  key={index}
                  className="bg-zinc-50 rounded-2xl p-4 border border-zinc-100 flex flex-col md:flex-row gap-4 items-start"
                >
                  <div className="relative w-full md:w-48 h-48 md:h-32 rounded-xl overflow-hidden bg-zinc-100 shrink-0">
                    <Image
                      src={images.hotel[index % images.hotel.length]}
                      alt={hotel.name}
                      className="object-cover"
                      fill
                      sizes="(max-width: 768px) 100vw, 200px"
                    />
                  </div>
                  <div className="flex-1 flex flex-col justify-center h-full space-y-1">
                    {index === 0 && (
                      <div className="inline-block bg-green-100 text-green-700 font-bold px-2 py-0.5 rounded-full text-[10px] tracking-wider uppercase mb-1 w-max">
                        {t("explore.accommodation.recommendation")}
                      </div>
                    )}
                    <div className="flex justify-between items-start flex-wrap gap-2 mb-1">
                      <h4 className="text-lg font-extrabold text-zinc-800 leading-tight">
                        {hotel.name}
                      </h4>
                      <p className="text-base font-semibold text-[#8B2615] whitespace-nowrap">
                        {hotel.price}{" "}
                        <span className="text-xs text-zinc-400 font-normal">
                          {t("explore.accommodation.per_night")}
                        </span>
                      </p>
                    </div>
                    <p className="text-xs text-zinc-600 leading-relaxed line-clamp-3">
                      {hotel.desc1} {hotel.desc2} {hotel.desc3}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <section className="h-screen max-h-screen py-6 md:py-12 px-4 md:px-8 bg-zinc-50 relative flex flex-col justify-center overflow-hidden">
      {modalContent && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-in fade-in duration-200">
          <div className="bg-white rounded-2xl shadow-2xl w-full max-w-xl max-h-[85vh] flex flex-col relative animate-in zoom-in-95 duration-200">
            <div className="flex justify-between items-center p-4 border-b border-gray-100">
              <h2 className="text-base font-bold uppercase text-[#A63011] tracking-wider leading-tight pr-4">
                {modalContent.title}
              </h2>
              <button
                onClick={() => setModalContent(null)}
                className="text-gray-400 hover:text-gray-800 transition-colors bg-gray-100 hover:bg-gray-200 rounded-full p-1.5 focus:outline-none shrink-0"
              >
                <FaTimes size={16} />
              </button>
            </div>
            <div className="p-5 overflow-y-auto custom-scrollbar">
              <p className="text-zinc-800 text-sm leading-relaxed text-justify whitespace-pre-wrap">
                {modalContent.content}
              </p>
            </div>
          </div>
        </div>
      )}

      <div className="max-w-7xl mx-auto w-full h-full flex flex-col lg:flex-row gap-4 md:gap-6 min-h-0">
        <div className="w-full lg:w-[25%] xl:w-[20%] flex flex-col gap-4 shrink-0 overflow-y-auto lg:overflow-visible custom-scrollbar pb-2">
          <div className="text-center lg:text-left shrink-0">
            <h2 className="text-2xl font-black tracking-tighter uppercase leading-none text-[#8B2615]">
              {t("explore.title")} <br className="hidden lg:block" />
              <span className="text-zinc-800 text-lg">
                {t("explore.subtitle")}
              </span>
            </h2>
          </div>

          <div className="grid grid-cols-4 gap-2 lg:flex lg:flex-col lg:gap-2">
            {exploreTabs.map((tab) => {
              const isActive = activeExplore === tab.id;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveExplore(tab.id)}
                  className={`relative p-2 lg:p-3 rounded-xl border transition-all duration-300 flex items-center justify-center lg:justify-start lg:gap-3 text-left group overflow-hidden
                    ${
                      isActive
                        ? "bg-[#8B2615] border-[#8B2615] shadow-md shadow-[#8B2615]/20"
                        : "bg-white border-zinc-200 shadow-sm hover:border-[#8B2615]/30 hover:bg-zinc-50"
                    }`}
                >
                  <div
                    className={`p-2 lg:p-2.5 rounded-lg transition-colors duration-300 shrink-0 ${
                      isActive
                        ? "bg-white/20 text-white"
                        : "bg-zinc-100 text-[#8B2615] group-hover:bg-[#8B2615]/10"
                    }`}
                  >
                    <tab.icon className="text-lg" />
                  </div>

                  <div className="hidden lg:block">
                    <span
                      className={`block text-sm font-extrabold uppercase tracking-wide transition-colors ${
                        isActive ? "text-white" : "text-zinc-800"
                      }`}
                    >
                      {t(`explore.tabs.${tab.id}.title`)}
                    </span>
                    <p
                      className={`mt-0.5 text-[10px] line-clamp-1 transition-colors ${
                        isActive ? "text-white/80" : "text-zinc-500"
                      }`}
                    >
                      {t(`explore.tabs.${tab.id}.desc`)}
                    </p>
                  </div>
                </button>
              );
            })}
          </div>
        </div>

        <div className="flex-1 min-w-0 bg-white rounded-3xl border border-zinc-200 p-4 md:p-6 shadow-xl shadow-zinc-200/40 flex flex-col h-full overflow-hidden">
          {renderContent()}
        </div>
      </div>

      <style
        dangerouslySetInnerHTML={{
          __html: `
        .custom-scrollbar::-webkit-scrollbar {
          width: 4px;
          height: 4px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: transparent;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: #e4e4e7;
          border-radius: 4px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover {
          background: #d4d4d8;
        }
      `,
        }}
      />
    </section>
  );
}
