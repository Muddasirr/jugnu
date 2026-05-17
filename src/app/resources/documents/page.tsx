"use client";

import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { Suspense } from "react";
import {
  RESOURCE_PDFS,
  RESOURCE_PDF_GROUPS,
  pdfHref,
  type ResourcePdf,
} from "@/lib/publicAssets";

function matchesFilter(pdf: ResourcePdf, category: string | null): boolean {
  if (!category) return true;
  const id = parseInt(category, 10);
  const allowed = RESOURCE_PDF_GROUPS[id];
  if (!allowed) return true;
  return allowed.includes(pdf.id);
}

function DocumentsContent() {
  const searchParams = useSearchParams();
  const category = searchParams.get("category");
  const filtered = RESOURCE_PDFS.filter((p) => matchesFilter(p, category));

  return (
    <main className="w-full bg-white text-black py-12 md:py-16">
      <div className="max-w-4xl mx-auto px-6 md:px-8 space-y-8">
        <div>
          <Link
            href="/resources"
            className="text-sm font-semibold text-[#AC1514] hover:underline"
          >
            ← Back to Resource Library
          </Link>
          <h1 className="text-3xl font-extrabold mt-4 mb-2">Resource Documents</h1>
          <p className="text-base text-gray-700 leading-relaxed">
            Download and read our evidence-based guides. Share them with anyone
            who may need support or information.
          </p>
        </div>

        <ul className="space-y-4">
          {filtered.map((pdf) => (
            <li
              key={pdf.id}
              className="border border-gray-200 rounded-lg p-6 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 hover:border-[#AC1514] transition-colors"
            >
              <div>
                <h2 className="text-lg font-bold text-black">{pdf.title}</h2>
                {pdf.description && (
                  <p className="text-sm text-gray-600 mt-1">{pdf.description}</p>
                )}
              </div>
              <a
                href={pdfHref(pdf)}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-[#AC1514] text-white px-6 py-2.5 rounded-md text-sm font-bold hover:bg-[#8B0000] transition whitespace-nowrap text-center"
              >
                VIEW PDF
              </a>
            </li>
          ))}
        </ul>

        {filtered.length === 0 && (
          <p className="text-gray-600">
            No documents in this category yet.{" "}
            <Link href="/resources/documents" className="text-[#AC1514] underline">
              View all resources
            </Link>
          </p>
        )}
      </div>
    </main>
  );
}

export default function ResourceDocumentsPage() {
  return (
    <Suspense
      fallback={
        <main className="py-16 px-6 text-center text-gray-600">Loading…</main>
      }
    >
      <DocumentsContent />
    </Suspense>
  );
}
