"use client";

import { useEffect, useState } from "react";
import { MapContainer, Marker } from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";

export default function PakistanMapOnly() {
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

        // Red background to match the page
        (map.getContainer() as HTMLElement).style.background = "#b91c1c";

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
        <div className="h-[400px] md:h-[500px] rounded-sm overflow-hidden">
            <MapContainer
                center={[30.3753, 69.3451]}
                zoom={5}
                style={{ height: "100%", width: "100%", background: "#b91c1c" }}
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
    );
}
