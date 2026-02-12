"use client";

import { useEffect, useState } from "react";
import { MapContainer, GeoJSON, Marker, Tooltip } from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import "leaflet-boundary-canvas";

export default function PakistanMapVisual() {
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

            map.fitBounds(pkLayer.getBounds(), { padding: [-50, -50], maxZoom: 7 });

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
        <div className="relative">
            {/* Decorative floral element - top left */}
            <div className="absolute -top-4 -left-4 w-16 h-16 opacity-30 z-10">
                <svg viewBox="0 0 100 100" className="text-pink-300 fill-current">
                    <circle cx="30" cy="30" r="8" />
                    <circle cx="50" cy="20" r="6" />
                    <circle cx="20" cy="50" r="6" />
                </svg>
            </div>

            <div className="h-[400px] md:h-[700px] rounded-sm overflow-hidden">
                <MapContainer
                    center={[30.3753, 69.3451]}
                    zoom={10}
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
    );
}
