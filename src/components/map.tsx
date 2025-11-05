"use client";

import { useEffect, useState } from "react";
import { MapContainer, GeoJSON,Marker } from "react-leaflet";
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

    // White background instead of gray
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

  // Custom red marker icon with white center
  const redMarkerIcon = L.divIcon({
    html: `<img src="/pin.png" style="width: 22px; height: 22px;" />`,
    className: "",
    iconSize: [22, 22],
    iconAnchor: [11, 22], // bottom tip aligns to coordinate
  });

  return (
    <div className="flex flex-row h-screen w-full bg-white">
      {/* LEFT SIDE MAP */}
      <div className="flex-1 flex items-center justify-center">
        <div className="w-[90%] h-[100%] shadow-lg rounded-2xl overflow-hidden border border-gray-200">
        <MapContainer
  center={[30.3753, 69.3451]}
  zoom={5}
  style={{ height: "100%", width: "100%" }}
  whenReady={(event) => setMap(event.target)}
  zoomControl={false}
  attributionControl={false}
  dragging={false}
  doubleClickZoom={false}
  scrollWheelZoom={false}
  boxZoom={false}
  keyboard={false}
  touchZoom={false}
  tap={false}
>

              {/* Add markers after map loads */}
          {markerPositions.map((pos, i) => (
            <Marker key={i} position={pos as [number, number]} icon={redMarkerIcon} />
          ))}
          </MapContainer>
        
        </div>
      </div>

      {/* RIGHT SIDE CONTENT */}
      <div className="flex-1 p-10 flex flex-col text-left text-black">
        <h2 className="text-xl font-semibold mb-2">Pakistan Map</h2>
        <h1 className="text-4xl font-extrabold text-[#AC1514] mb-6">
          KNOW THE NUMBERS
        </h1>
        <p className="text-gray-700 mb-4">
          More than 90% of women in desi society have faced some type of violence at least once in their lives.
        </p>

        <h3 className="text-lg text-[#AC1514] font-semibold underline underline-offset-4 decoration-text-[#AC1514] mb-4">
          National Numbers
        </h3>

        <ul className="space-y-2 text-gray-800">
          <li><span className="text-[#AC1514] font-bold">63,000</span> cases of <strong>violence against women and girls</strong> were reported between 2021–2024. (NCHR, 2024)</li>
          <li><span className="text-[#AC1514] font-bold">80%</span> of these cases involve <strong>domestic and family violence</strong>.</li>
          <li><span className="text-[#AC1514] font-bold">34,617</span> cases of <strong>gender-based violence</strong> were reported in 2024 (SSDO Report).</li>
          <li><strong>82%</strong> of women remain unbanked (Strive Women, 2024).</li>
          <li>Pakistan has the <span className="text-[#AC1514] font-bold">6th largest</span> number of child marriages globally.</li>
          <li>An estimated <span className="text-[#AC1514] font-bold">19 million girls</span> are married before 18, and nearly <span className="text-text-[#AC1514] font-bold">9.5 million</span> become <strong>pregnant before 18</strong>. (UNICEF Pakistan)</li>
        </ul>
      </div>
    </div>
  );
}
