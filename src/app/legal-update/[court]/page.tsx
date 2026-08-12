"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { useParams } from "next/navigation";

const LABELS: Record<string, string> = {
  sc: "Supreme Court",
  fsc: "Federal Shariat Court",
  hc: "High Court",
  cc: "Constitutional Court",
};

type Item = {
  id?: string;
  title: string;
  description?: string;
  file?: string;
};

export default function LegalCourtPage() {
  const params = useParams();
  const court = String(params.court || "");
  const [items, setItems] = useState<Item[]>([]);

  useEffect(() => {
    if (!LABELS[court]) return;
    fetch(`/cms/legal/${court}.json`)
      .then((r) => (r.ok ? r.json() : []))
      .then((d) => setItems(Array.isArray(d) ? d : []))
      .catch(() => setItems([]));
  }, [court]);

  if (!LABELS[court]) {
    return (
      <main className="max-w-3xl mx-auto px-6 py-16">
        <p>Unknown court.</p>
        <Link href="/legal-update" className="text-[#AC1514] underline">
          Back
        </Link>
      </main>
    );
  }

  return (
    <main className="w-full bg-white py-12 md:py-16">
      <div className="max-w-4xl mx-auto px-6 md:px-8 space-y-8">
        <Link href="/legal-update" className="text-sm font-semibold text-[#AC1514] hover:underline">
          ← Back to Legal Updates
        </Link>
        <h1 className="text-3xl md:text-4xl font-extrabold text-[#AC1514]">
          {LABELS[court]} Judgements
        </h1>

        {items.length === 0 && (
          <p className="text-lg text-gray-700">
            No judgements uploaded yet. Add them from the admin panel.
          </p>
        )}

        <ul className="space-y-4">
          {items.map((item) => (
            <li
              key={item.id || item.title}
              className="border border-gray-200 p-6 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4"
            >
              <div>
                <h2 className="text-lg font-bold">{item.title}</h2>
                {item.description && (
                  <p className="text-sm text-gray-600 mt-1">{item.description}</p>
                )}
              </div>
              {item.file ? (
                <a
                  href={item.file}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block bg-[#AC1514] text-white px-6 py-2.5 text-sm font-bold uppercase hover:bg-[#8B0E0E]"
                >
                  View PDF
                </a>
              ) : (
                <span className="text-sm text-gray-500">No file</span>
              )}
            </li>
          ))}
        </ul>
      </div>
    </main>
  );
}
