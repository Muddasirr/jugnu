/** Placeholder shown during SSR / before client-only maps mount (avoids hydration mismatch). */
export default function MapPlaceholder({
  className = "h-[400px] md:h-[700px]",
}: {
  className?: string;
}) {
  return (
    <div
      className={`w-full rounded-sm bg-gray-100 animate-pulse ${className}`}
      aria-hidden
    />
  );
}
