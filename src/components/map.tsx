"use client";

import { useEffect, useState } from "react";
import { MapContainer, GeoJSON, Marker } from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import "leaflet-boundary-canvas";

export default function PakistanMap() {
  const [map, setMap] = useState<L.Map | null>(null);

  // Marker positions — roughly covering major areas
  const markerPositions = [
    [33.6844, 73.0479], // Islamabad
    [31.5204, 74.3587], // Lahore
    [30.1575, 71.5249], // Multan
    [24.8607, 67.0011], // Karachi
    [25.3960, 68.3578], // Hyderabad
    [34.0150, 71.5805], // Peshawar
    [27.7089, 68.8354], // Sukkur
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
                {/* Add markers */}
                {markerPositions.map((pos, i) => (
                  <Marker key={i} position={pos as [number, number]} icon={redMarkerIcon} />
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
              <p className="text-sm md:text-base text-gray-900 leading-relaxed">
                More than 90% of women in Pakistan have faced some type of violence at least once in their lives.
              </p>
            </div>

            {/* National Numbers Section */}
            <div>
              <h2 className="text-lg md:text-xl font-bold text-black mb-4">
                National Numbers
              </h2>

              <div className="space-y-4 text-sm md:text-base text-gray-900 leading-relaxed">
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
                <button className="bg-[#AC1514] text-white px-8 py-2.5 text-sm font-semibold hover:bg-[#8B0000] transition-all">
                  READ MORE
                </button>
              </div>
            </div>

            {/* Disclaimer Section */}

          </div>
        </div>
        <div className="pt-6 border-t border-gray-200">
          <h3 className="text-lg md:text-xl font-bold text-[#AC1514] mb-3">
            Disclaimer:
          </h3>
          <p className="text-xs md:text-sm text-gray-800 leading-relaxed">
            It must be noted that the numbers quoted are simply those that have been reported in their respective provinces / areas. It must also be remembered that these are the reports that were made "specifically" in regards to the crime mentioned. However, the actual numbers on the ground far exceed these statistics.
          </p>
        </div>
      </div>
    </section>
  );
}
