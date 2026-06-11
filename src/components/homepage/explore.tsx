"use client";

import { useState } from "react";
import { useTranslation } from "react-i18next";
import Link from "next/link";
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
  FaMapMarkerAlt,
  FaArrowRight,
} from "react-icons/fa";

// Updated IDs to match the translation keys
const exploreTabs = [
  { id: "transportation", icon: FaMapMarkedAlt },
  { id: "activities", icon: FaCamera },
  { id: "culinary", icon: FaUtensils },
  { id: "accommodation", icon: FaBed },
];

export default function Explore() {
  const { t } = useTranslation();
  const [activeExplore, setActiveExplore] = useState("transportation");

  const renderContent = () => {
    switch (activeExplore) {
      case "transportation":
        return (
          <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
            <div>
              <h3 className="text-2xl font-bold text-[#8B2615] mb-3">
                {t("explore.transportation.heading")}
              </h3>
              {/* Using dangerouslySetInnerHTML to render the <strong> tags from JSON */}
              <p
                className="text-zinc-600 leading-relaxed"
                dangerouslySetInnerHTML={{
                  __html: t("explore.transportation.description"),
                }}
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-zinc-50 p-5 rounded-2xl border border-zinc-100">
                <div className="flex items-center gap-3 mb-3">
                  <div className="bg-[#8B2615] p-2 rounded-lg text-white">
                    <FaCar />
                  </div>
                  <h4 className="font-bold text-zinc-800">
                    {t("explore.transportation.by_car.title")}
                  </h4>
                </div>
                <ul className="text-sm text-zinc-600 space-y-2">
                  <li className="flex items-start gap-2">
                    <FaCheckCircle className="text-[#8B2615] mt-1 shrink-0" />
                    {t("explore.transportation.by_car.step1")}
                  </li>
                  <li className="flex items-start gap-2">
                    <FaCheckCircle className="text-[#8B2615] mt-1 shrink-0" />
                    {t("explore.transportation.by_car.step2")}
                  </li>
                  <li className="flex items-start gap-2">
                    <FaCheckCircle className="text-[#8B2615] mt-1 shrink-0" />
                    {t("explore.transportation.by_car.step3")}
                  </li>
                  <li className="flex items-start gap-2">
                    <FaCheckCircle className="text-[#8B2615] mt-1 shrink-0" />
                    {t("explore.transportation.by_car.step4")}
                  </li>
                </ul>
              </div>

              <div className="bg-zinc-50 p-5 rounded-2xl border border-zinc-100">
                <div className="flex items-center gap-3 mb-3">
                  <div className="bg-[#8B2615] p-2 rounded-lg text-white">
                    <FaBus />
                  </div>
                  <h4 className="font-bold text-zinc-800">
                    {t("explore.transportation.by_bus.title")}
                  </h4>
                </div>
                <ul className="text-sm text-zinc-600 space-y-2">
                  <li className="flex items-start gap-2">
                    <FaCheckCircle className="text-[#8B2615] mt-1 shrink-0" />
                    {t("explore.transportation.by_bus.step1")}
                  </li>
                  <li className="flex items-start gap-2">
                    <FaCheckCircle className="text-[#8B2615] mt-1 shrink-0" />
                    {t("explore.transportation.by_bus.step2")}
                  </li>
                  <li className="flex items-start gap-2">
                    <FaCheckCircle className="text-[#8B2615] mt-1 shrink-0" />
                    {t("explore.transportation.by_bus.step3")}
                  </li>
                </ul>
              </div>

              <div className="bg-zinc-50 p-5 rounded-2xl border border-zinc-100">
                <div className="flex items-center gap-3 mb-3">
                  <div className="bg-[#8B2615] p-2 rounded-lg text-white">
                    <FaTrain />
                  </div>
                  <h4 className="font-bold text-zinc-800">
                    {t("explore.transportation.by_train.title")}
                  </h4>
                </div>
                <ul className="text-sm text-zinc-600 space-y-2">
                  <li className="flex items-start gap-2">
                    <FaCheckCircle className="text-[#8B2615] mt-1 shrink-0" />
                    {t("explore.transportation.by_train.step1")}
                  </li>
                  <li className="flex items-start gap-2">
                    <FaCheckCircle className="text-[#8B2615] mt-1 shrink-0" />
                    {t("explore.transportation.by_train.step2")}
                  </li>
                </ul>
              </div>

              <div className="bg-zinc-50 p-5 rounded-2xl border border-zinc-100">
                <div className="flex items-center gap-3 mb-3">
                  <div className="bg-[#8B2615] p-2 rounded-lg text-white">
                    <FaPlane />
                  </div>
                  <h4 className="font-bold text-zinc-800">
                    {t("explore.transportation.by_plane.title")}
                  </h4>
                </div>
                <ul className="text-sm text-zinc-600 space-y-2">
                  <li className="flex items-start gap-2">
                    <FaCheckCircle className="text-[#8B2615] mt-1 shrink-0" />
                    {t("explore.transportation.by_plane.step1")}
                  </li>
                  <li className="flex items-start gap-2">
                    <FaCheckCircle className="text-[#8B2615] mt-1 shrink-0" />
                    {t("explore.transportation.by_plane.step2")}
                  </li>
                </ul>
              </div>
            </div>

            <div>
              <h4 className="font-bold text-lg text-[#8B2615] mb-4 flex items-center gap-2">
                <FaBicycle />{" "}
                {t("explore.transportation.local_transport.title")}
              </h4>
              <p className="text-sm text-zinc-600 mb-3">
                {t("explore.transportation.local_transport.desc")}
              </p>
              <div className="flex flex-wrap gap-3">
                <span className="px-4 py-2 bg-white border border-zinc-200 rounded-full text-sm font-medium text-zinc-700 shadow-sm">
                  {t("explore.transportation.local_transport.opt1")}
                </span>
                <span className="px-4 py-2 bg-white border border-zinc-200 rounded-full text-sm font-medium text-zinc-700 shadow-sm">
                  {t("explore.transportation.local_transport.opt2")}
                </span>
                <span className="px-4 py-2 bg-white border border-zinc-200 rounded-full text-sm font-medium text-zinc-700 shadow-sm">
                  {t("explore.transportation.local_transport.opt3")}
                </span>
                <span className="px-4 py-2 bg-white border border-zinc-200 rounded-full text-sm font-medium text-zinc-700 shadow-sm">
                  {t("explore.transportation.local_transport.opt4")}
                </span>
              </div>
            </div>
          </div>
        );

      case "activities":
        return (
          <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
            <div>
              <h3 className="text-2xl font-bold text-[#8B2615] mb-3">
                {t("explore.activities.heading")}
              </h3>
              <p className="text-zinc-600 leading-relaxed">
                {t("explore.activities.description")}
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <div className="bg-white p-6 rounded-3xl border border-zinc-100 shadow-sm">
                <h4 className="font-bold text-lg text-zinc-800 mb-4 border-b pb-2">
                  {t("explore.activities.exploration.title")}
                </h4>
                <ul className="space-y-4">
                  <li className="flex items-center gap-3 text-zinc-600">
                    <div className="p-2 bg-orange-100 text-orange-600 rounded-lg">
                      <FaUtensils />
                    </div>
                    <span className="font-medium">
                      {t("explore.activities.exploration.item1")}
                    </span>
                  </li>
                  <li className="flex items-center gap-3 text-zinc-600">
                    <div className="p-2 bg-blue-100 text-blue-600 rounded-lg">
                      <FaMapMarkedAlt />
                    </div>
                    <span className="font-medium">
                      {t("explore.activities.exploration.item2")}
                    </span>
                  </li>
                  <li className="flex items-center gap-3 text-zinc-600">
                    <div className="p-2 bg-emerald-100 text-emerald-600 rounded-lg">
                      <FaBus />
                    </div>
                    <span className="font-medium">
                      {t("explore.activities.exploration.item3")}
                    </span>
                  </li>
                </ul>
              </div>

              <div className="bg-white p-6 rounded-3xl border border-zinc-100 shadow-sm">
                <h4 className="font-bold text-lg text-zinc-800 mb-4 border-b pb-2">
                  {t("explore.activities.documentation.title")}
                </h4>
                <ul className="space-y-4">
                  <li className="flex items-center gap-3 text-zinc-600">
                    <div className="p-2 bg-pink-100 text-pink-600 rounded-lg">
                      <FaCamera />
                    </div>
                    <span className="font-medium">
                      {t("explore.activities.documentation.item1")}
                    </span>
                  </li>
                  <li className="flex items-center gap-3 text-zinc-600">
                    <div className="p-2 bg-purple-100 text-purple-600 rounded-lg">
                      <FaCamera />
                    </div>
                    <span className="font-medium">
                      {t("explore.activities.documentation.item2")}
                    </span>
                  </li>
                  <li className="flex items-center gap-3 text-zinc-600">
                    <div className="p-2 bg-rose-100 text-rose-500 rounded-lg">
                      <FaCamera />
                    </div>
                    <span className="font-medium">
                      {t("explore.activities.documentation.item3")}
                    </span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="flex justify-end pt-2">
              <Link
                href="/event"
                className="inline-flex items-center gap-2 px-6 py-3 bg-[#8B2615] text-white font-semibold rounded-full shadow-sm hover:bg-[#731f11] transition-all duration-300 group"
              >
                {t("explore.activities.cta")}
                <FaArrowRight className="transform group-hover:translate-x-1 transition-transform duration-300" />
              </Link>
            </div>
          </div>
        );

      case "culinary":
        return (
          <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
            <div>
              <h3 className="text-2xl font-bold text-[#8B2615] mb-3">
                {t("explore.culinary.heading")}
              </h3>
              <p className="text-zinc-600 leading-relaxed">
                {t("explore.culinary.description")}
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
              <div className="bg-zinc-50 p-5 rounded-2xl border border-zinc-100">
                <div className="text-[#8B2615] mb-3">
                  <FaUtensils size={24} />
                </div>
                <h4 className="font-bold text-zinc-800 mb-3">
                  {t("explore.culinary.popular.title")}
                </h4>
                <ul className="text-sm text-zinc-600 space-y-3">
                  <li>
                    <strong>
                      {t("explore.culinary.popular.item1_title")}:
                    </strong>{" "}
                    {t("explore.culinary.popular.item1_desc")}
                  </li>
                  <li>
                    <strong>
                      {t("explore.culinary.popular.item2_title")}:
                    </strong>{" "}
                    {t("explore.culinary.popular.item2_desc")}
                  </li>
                  <li>
                    <strong>
                      {t("explore.culinary.popular.item3_title")}:
                    </strong>{" "}
                    {t("explore.culinary.popular.item3_desc")}
                  </li>
                </ul>
              </div>

              <div className="bg-zinc-50 p-5 rounded-2xl border border-zinc-100">
                <div className="text-[#8B2615] mb-3">
                  <FaShoppingBag size={24} />
                </div>
                <h4 className="font-bold text-zinc-800 mb-3">
                  {t("explore.culinary.souvenir.title")}
                </h4>
                <div className="text-sm text-zinc-600">
                  <p className="font-bold text-zinc-800 mb-1">
                    {t("explore.culinary.souvenir.item_title")}
                  </p>
                  <p>{t("explore.culinary.souvenir.item_desc")}</p>
                </div>
              </div>

              <div className="bg-zinc-50 p-5 rounded-2xl border border-zinc-100 md:col-span-2 xl:col-span-1">
                <div className="text-[#8B2615] mb-3">
                  <FaCoffee size={24} />
                </div>
                <h4 className="font-bold text-zinc-800 mb-3">
                  {t("explore.culinary.hangout.title")}
                </h4>
                <ul className="text-sm text-zinc-600 space-y-2">
                  <li className="flex items-center gap-2">
                    <FaMapMarkerAlt className="text-zinc-400" /> Sualoka Hub
                  </li>
                  <li className="flex items-center gap-2">
                    <FaMapMarkerAlt className="text-zinc-400" /> Kamari
                  </li>
                  <li className="flex items-center gap-2">
                    <FaMapMarkerAlt className="text-zinc-400" /> Gresiknesia
                  </li>
                </ul>
              </div>
            </div>
          </div>
        );

      case "accommodation":
        return (
          <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
            <div>
              <h3 className="text-2xl font-bold text-[#8B2615] mb-3">
                {t("explore.accommodation.heading")}
              </h3>
              <p className="text-zinc-600 leading-relaxed">
                {t("explore.accommodation.description")}
              </p>
            </div>

            <div className="bg-zinc-50 rounded-3xl p-6 lg:p-8 border border-zinc-100 flex flex-col gap-6">
              <div className="space-y-4">
                <div className="inline-block bg-green-100 text-green-700 font-bold px-3 py-1 rounded-full text-xs tracking-wider uppercase mb-1">
                  {t("explore.accommodation.recommendation")}
                </div>
                <h4 className="text-3xl font-extrabold text-zinc-800">
                  The Bahagia Hotel
                </h4>
                <p className="text-2xl font-semibold text-[#8B2615]">
                  IDR 150.000{" "}
                  <span className="text-sm text-zinc-400 font-normal">
                    {t("explore.accommodation.per_night")}
                  </span>
                </p>
                <div className="h-px w-full bg-zinc-200 my-4" />
                <p className="text-zinc-600 leading-relaxed">
                  {t("explore.accommodation.desc1")}
                  <br />
                  <br />
                  {t("explore.accommodation.desc2")}
                </p>
              </div>
            </div>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <section className="py-20 px-4 md:px-8 bg-zinc-50 min-h-screen">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-6 md:gap-10">
        <div className="w-full lg:w-1/3 xl:w-[30%] flex flex-col gap-4 lg:gap-6 shrink-0">
          <div className="text-center lg:text-left mb-2 lg:mb-0">
            <h2 className="text-3xl font-black tracking-tighter uppercase leading-none text-[#8B2615]">
              {t("explore.title")} <br className="hidden lg:block" />
              <span className="text-zinc-800 text-2xl">
                {t("explore.subtitle")}
              </span>
            </h2>
            <p className="text-zinc-500 text-sm mt-2 lg:mt-3 leading-relaxed hidden lg:block">
              {t("explore.description")}
            </p>
          </div>

          <div className="grid grid-cols-4 gap-2 md:gap-4 lg:flex lg:flex-col lg:gap-3">
            {exploreTabs.map((tab) => {
              const isActive = activeExplore === tab.id;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveExplore(tab.id)}
                  className={`relative p-2 lg:p-4 rounded-2xl border transition-all duration-300 flex items-center justify-center lg:justify-start lg:gap-4 text-left group overflow-hidden
                    ${
                      isActive
                        ? "bg-[#8B2615] border-[#8B2615] shadow-lg shadow-[#8B2615]/20 lg:scale-[1.02]"
                        : "bg-white border-zinc-200 shadow-sm hover:border-[#8B2615]/30 hover:bg-zinc-50"
                    }`}
                >
                  <div
                    className={`p-3 lg:p-4 rounded-xl transition-colors duration-300 shrink-0 ${
                      isActive
                        ? "bg-white/20 text-white"
                        : "bg-zinc-100 text-[#8B2615] group-hover:bg-[#8B2615]/10"
                    }`}
                  >
                    <tab.icon className="text-2xl" />
                  </div>

                  <div className="hidden lg:block">
                    <span
                      className={`block text-base font-extrabold uppercase tracking-wide transition-colors ${
                        isActive ? "text-white" : "text-zinc-800"
                      }`}
                    >
                      {t(`explore.tabs.${tab.id}.title`)}
                    </span>
                    <p
                      className={`mt-1 text-xs line-clamp-2 transition-colors ${
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

        <div className="flex-1 min-w-0 bg-white rounded-4xl border border-zinc-200 p-6 md:p-10 lg:p-12 shadow-xl shadow-zinc-200/40">
          {renderContent()}
        </div>
      </div>
    </section>
  );
}
