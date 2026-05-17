"use client";

import dynamic from "next/dynamic";
import ClientOnly from "@/components/ClientOnly";
import MapPlaceholder from "@/components/MapPlaceholder";

const PakistanMap = dynamic(() => import("@/components/map"), { ssr: false });

/** Social/Corporate map block: no SSR, consistent placeholder (avoids hydration #418). */
export default function PakistanMapSection() {
  return (
    <ClientOnly fallback={<MapPlaceholder />}>
      <PakistanMap />
    </ClientOnly>
  );
}
