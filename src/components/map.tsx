"use client";

import React, { useState } from "react";
import { ComposableMap, Geographies, Geography, Marker } from "react-simple-maps";
import Link from "next/link";

const geoUrl = "/geo/pakistan-map.json";

interface Stats {
  total: string;
  details: string[];
}

interface RegionData {
  name: string;
  position: [number, number]; // [lat, long]
  stats: Stats;
}

const regionalData: RegionData[] = [
  {
    name: "Islamabad Capital Territory (ICT)",
    position: [33.6844, 73.0479],
    stats: {
      total: "220 cases of gender based violence reported in 2024 (SSDO GBV Report for 2024)",
      details: [
        "22 cases of domestic violence",
        "22 cases of honor killings",
        "176 cases of rape"
      ]
    }
  },
  {
    name: "Punjab",
    position: [30.5204, 70.3587],
    stats: {
      total: "26,753 cases of gender based violence reported in 2024. (SSDO GBV Report for 2024)",
      details: [
        "6,624 rape cases registered in 2023 - 1 woman raped every 45 minutes."
      ]
    }
  },
  {
    name: "Sindh",
    position: [25.8607, 68.5011],
    stats: {
      total: "1,781 cases of gender based violence reported in 2024. (SSDO GBV Report for 2024)",
      details: [
        "243 cases of rape",
        "375 cases of domestic violence",
        "134 cases of honor killings"
      ]
    }
  },
  {
    name: "Khyber Pakhtunkhwa (KP)",
    position: [34.0150, 71.5805],
    stats: {
      total: "3,397 cases of gender based violence reported in 2024 (SSDO GBV Report for 2024)",
      details: [
        "446 cases of domestic violence",
        "134 cases of honor killings",
        "258 cases of rape"
      ]
    }
  },
  {
    name: "Balochistan",
    position: [28.4089, 65.8354],
    stats: {
      total: "398 cases of gender based violence reported in 2024 (SSDO GBV Report for 2024)",
      details: [
        "32 cases of honor killings",
        "160 cases of domestic violence"
      ]
    }
  },
  {
    name: "Gilgit Baltistan",
    position: [35.9500, 74.5080],
    stats: {
      total: "Married women reported a higher level of domestic violence:",
      details: [
        "88% reported being subject to domestic violence",
        "69.4% reported being subjected to psychological violence",
        "37.5% reported being subject to physical violence",
        "21.2% reported being subject to sexual violence"
      ]
    }
  }
];

export default function PakistanMap() {
  const [tooltipContent, setTooltipContent] = useState<RegionData | null>(null);
  const [tooltipPosition, setTooltipPosition] = useState({ x: 0, y: 0 });

  return (
    <section className="bg-white py-8 md:py-8">
      <div className="max-w-7xl mx-auto px-6 md:px-16">
        <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
          {/* LEFT SIDE - MAP */}
          <div className="relative h-[400px] md:h-[700px] w-full rounded-sm overflow-hidden bg-white">
            {/* Decorative floral element */}
            <div className="absolute -top-4 -left-4 w-16 h-16 opacity-30 z-10 pointer-events-none">
              <svg viewBox="0 0 100 100" className="text-pink-300 fill-current">
                <circle cx="30" cy="30" r="8" />
                <circle cx="50" cy="20" r="6" />
                <circle cx="20" cy="50" r="6" />
              </svg>
            </div>

            <ComposableMap
              projection="geoMercator"
              projectionConfig={{
                scale: 3000,
                center: [69, 30] // Longitude, Latitude
              }}
              className="w-full h-full"
              style={{ width: "100%", height: "100%" }}
            >
              <Geographies geography={geoUrl}>
                {({ geographies }) =>
                  geographies.map((geo) => (
                    <Geography
                      key={geo.rsmKey}
                      geography={geo}
                      fill="#000000"
                      stroke="#FFFFFF"
                      strokeWidth={0.5}
                      style={{
                        default: { outline: "none" },
                        hover: { outline: "none" },
                        pressed: { outline: "none" },
                      }}
                    />
                  ))
                }
              </Geographies>
              {regionalData.map((region, i) => (
                <Marker
                  key={region.name}
                  coordinates={[region.position[1], region.position[0]]} // swap to [long, lat]
                  onMouseEnter={(e) => {
                    setTooltipContent(region);
                    setTooltipPosition({ x: e.clientX, y: e.clientY });
                  }}
                  onMouseMove={(e) => {
                    setTooltipPosition({ x: e.clientX, y: e.clientY });
                  }}
                  onMouseLeave={() => {
                    setTooltipContent(null);
                  }}
                  style={{
                    default: { outline: "none" },
                    hover: { outline: "none", cursor: "pointer" },
                    pressed: { outline: "none" },
                  }}
                >
                  <image href="/pin.png" x="-20" y="-40" height="80" width="80" />
                </Marker>
              ))}
            </ComposableMap>

            {/* Tooltip */}
            {tooltipContent && (
              <div
                className="fixed z-50 bg-white border-2 border-[#AC1514] rounded-lg shadow-xl p-3 pointer-events-none max-w-xs"
                style={{
                  top: tooltipPosition.y,
                  left: tooltipPosition.x,
                  transform: "translate(-50%, -100%)",
                  marginTop: "-10px",
                  fontFamily: "Merriweather, serif"
                }}
              >
                <h3 className="font-bold text-[#AC1514] mb-2 text-sm">
                  {tooltipContent.name}
                </h3>
                <p className="text-xs text-black mb-2 font-semibold">
                  {tooltipContent.stats.total}
                </p>
                <ul className="text-xs text-black space-y-1">
                  {tooltipContent.stats.details.map((detail, idx) => (
                    <li key={idx} className="leading-tight">• {detail}</li>
                  ))}
                </ul>
              </div>
            )}
          </div>

          {/* RIGHT SIDE - CONTENT */}
          <div className="space-y-6">
            {/* Header */}
            <div>
              <h1 className="text-3xl md:text-4xl font-bold mb-4">
                <span className="text-[#AC1514]">KNOW</span>{" "}
                <span className="text-black">THE NUMBERS</span>
              </h1>
              <p className="text-sm md:text-base text-black leading-relaxed">
                More than 90% of women in desi society have faced some type of violence at least once in their lives.
              </p>
            </div>

            {/* National Numbers Section */}
            <div>
              <h2 className="text-lg md:text-xl font-bold text-black mb-4">
                National Numbers
              </h2>

              <div className="space-y-4 text-sm md:text-base text-black leading-relaxed">
                <p>
                  <span className="text-[#AC1514] font-bold">63,000 cases of violence against women and girls</span>{" "}
                  were reported in just three years (between 2021 - 2024). (NCHR, 2024)
                </p>

                <p>
                  <span className="text-[#AC1514] font-bold">80%</span> of these cases are regarding{" "}
                  <span className="text-[#AC1514] font-bold">domestic and family violence</span>.
                </p>

                <p>
                  <span className="text-[#AC1514] font-bold">34,617 cases of gender based violence</span>{" "}
                  were reported from across Pakistan in just the year 2024 (SSDO Report, 2024).
                </p>

                <p>
                  82% of women in Pakistan remain unbanked (Strive Women, 2024)
                </p>

                <p>
                  Pakistan has the <span className="text-[#AC1514] font-bold">6th largest number</span> of child marriages in the world.{" "}
                  An estimated <span className="text-[#AC1514] font-bold">19 million girls are married off before they turn 18-years-old</span>.
                </p>

                <p>
                  Nearly half that number <span className="text-[#AC1514] font-bold">(9.5 million girls) become pregnant before their 18th birthday</span>.{" "}
                  <span className="text-gray-700 italic">(UNICEF Pakistan)</span>
                </p>
              </div>

              {/* Read More Button */}
              <div className="pt-6">
                <Link href="/know-the-numbers" target="_blank" rel="noopener noreferrer">
                  <button className="bg-[#AC1514] rounded-[8px] text-white px-8 py-2.5 text-sm font-bold hover:bg-[#8B0000] transition-all">
                    READ MORE
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Disclaimer Section */}
        <div className="pt-6 border-t border-gray-200 mt-8">
          <h3
            className="mb-3 text-[#AC1514]"
            style={{
              fontFamily: "Merriweather",
              fontWeight: 700,
              fontSize: "32px",
              lineHeight: "140%",
              letterSpacing: "0px",
              textDecorationLine: "underline",
              textDecorationStyle: "solid",
              textDecorationSkipInk: "auto",
            }}
          >
            Disclaimer:
          </h3>

          <p
            className="text-black"
            style={{
              fontFamily: "Merriweather",
              fontWeight: 400,
              fontSize: "24px",
              lineHeight: "140%",
              letterSpacing: "0px",
              textAlign: "justify",
            }}
          >
            *It must be noted that the numbers quoted are simply those that have been reported
            in their respective provinces / areas. It must also be remembered that these are
            the reports that were made "specifically" in regards to the crime mentioned.
            However, the actual numbers on the ground far exceed these statistics.
          </p>
        </div>
      </div>
    </section>
  );
}
