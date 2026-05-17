"use client";

import { useEffect, useState } from "react";

type ClientOnlyProps = {
  children: React.ReactNode;
  fallback?: React.ReactNode;
};

/**
 * Renders children only after mount so server HTML matches the initial client render.
 * Use for Leaflet, maps, and other browser-only UI.
 */
export default function ClientOnly({ children, fallback = null }: ClientOnlyProps) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return <>{fallback}</>;
  }

  return <>{children}</>;
}
