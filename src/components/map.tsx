"use client";

import { useEffect, useState } from "react";
import { MapContainer, GeoJSON, Marker, Tooltip } from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import "leaflet-boundary-canvas";
import Link from "next/link";

export default function PakistanMap() {
  const [map, setMap] = useState<L.Map | null>(null);

  // Regional data with statistics
  const regionalData = [
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
      position: [31.5204, 74.3587],
      stats: {
        total: "26,753 cases of gender based violence reported in 2024. (SSDO GBV Report for 2024)",
        details: [
          "6,624 rape cases registered in 2023 - 1 woman raped every 45 minutes."
        ]
      }
    },
    {
      name: "Sindh",
      position: [24.8607, 67.0011],
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
      position: [27.7089, 68.8354],
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
      position: [35.9200, 74.3080],
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

  useEffect(() => {
    if (!map) return;

    // White background
    (map.getContainer() as HTMLElement).style.background = "#ffffff";

    const loadPakistan = async () => {
      const response = await fetch("/geo/pakistan-map.json");
      const geoJSON = await response.json();

      // Add Pakistan shape with black fill
      const pkLayer = L.geoJSON(geoJSON, {
        style: {
          color: "#ffffff", // border color
          weight: 1,
          fillColor: "#000000", // inside color
          fillOpacity: 1,
        },
      }).addTo(map);

      map.fitBounds(pkLayer.getBounds());

      // Disable all interactions to prevent map movement
      map.dragging.disable();
      map.touchZoom.disable();
      map.doubleClickZoom.disable();
      map.scrollWheelZoom.disable();
      map.boxZoom.disable();
      map.keyboard.disable();
    };

    loadPakistan();
  }, [map]);

  // Custom red marker icon
  const redMarkerIcon = L.divIcon({
    html: `<img src="/pin.png" style="width: 22px; height: 22px;" />`,
    className: "",
    iconSize: [22, 22],
    iconAnchor: [11, 22],
  });

  return (
    <section className="bg-white py-12 md:py-16">
      <div className="max-w-7xl mx-auto px-6 md:px-16">
        <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
          {/* LEFT SIDE - MAP */}
          <div className="relative">
            {/* Decorative floral element - top left */}
            <div className="absolute -top-4 -left-4 w-16 h-16 opacity-30 z-10">
              <svg viewBox="0 0 100 100" className="text-pink-300 fill-current">
                <circle cx="30" cy="30" r="8" />
                <circle cx="50" cy="20" r="6" />
                <circle cx="20" cy="50" r="6" />
              </svg>
            </div>

            <div className="h-[400px] md:h-[500px] rounded-sm overflow-hidden">
              <MapContainer
                center={[30.3753, 69.3451]}
                zoom={5}
                style={{ height: "100%", width: "100%" }}
                ref={setMap}
                zoomControl={false}
                attributionControl={false}
                dragging={false}
                doubleClickZoom={false}
                scrollWheelZoom={false}
                boxZoom={false}
                keyboard={false}
                touchZoom={false}
              >
                {/* Add markers with tooltips that show on hover */}
                {regionalData.map((region, i) => (
                  <Marker
                    key={i}
                    position={region.position as [number, number]}
                    icon={redMarkerIcon}
                    eventHandlers={{
                      mouseover: (e) => {
                        e.target.openTooltip();
                      },
                      mouseout: (e) => {
                        e.target.closeTooltip();
                      }
                    }}
                  >
                    <Tooltip
                      direction="top"
                      offset={[0, -10]}
                      opacity={1}
                      permanent={false}
                      className="custom-tooltip"
                    >
                      <div className="p-2 min-w-[250px]">
                        <h3 className="font-bold text-[#AC1514] mb-2 text-sm">
                          {region.name}
                        </h3>
                        <p className="text-xs text-black mb-2 font-semibold">
                          {region.stats.total}
                        </p>
                        <ul className="text-xs text-black space-y-1">
                          {region.stats.details.map((detail, idx) => (
                            <li key={idx} className="leading-tight">• {detail}</li>
                          ))}
                        </ul>
                      </div>
                    </Tooltip>
                  </Marker>
                ))}
              </MapContainer>
            </div>
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

            {/* Disclaimer Section */}

          </div>
        </div>
        <div className="pt-6 border-t border-gray-200">
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
