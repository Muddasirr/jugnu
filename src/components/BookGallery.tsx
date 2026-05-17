"use client";

import Image from "next/image";
import { useState } from "react";
import { BOOK_COVER_FILES } from "@/lib/publicAssets";

type Book = {
  title: string;
  author: string;
  color: string;
  textColor: string;
  description?: string;
};

export default function BookGallery({ books }: { books: Book[] }) {
  const [selected, setSelected] = useState<number | null>(null);

  return (
    <>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-x-6 gap-y-10">
        {books.map((book, index) => {
          const cover = BOOK_COVER_FILES[index];
          return (
            <button
              key={index}
              type="button"
              onClick={() => setSelected(index)}
              className="group flex flex-col space-y-3 text-left cursor-pointer"
            >
              <div
                className={`w-full aspect-[2/3] rounded-lg shadow-lg overflow-hidden transition-all duration-300 group-hover:shadow-2xl group-hover:scale-105 group-hover:-translate-y-1 relative ${
                  cover ? "" : book.color
                }`}
              >
                {cover ? (
                  <Image
                    src={cover}
                    alt={book.title}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 50vw, 20vw"
                  />
                ) : (
                  <div
                    className={`absolute inset-0 flex items-center justify-center p-4 ${book.color}`}
                  >
                    <span
                      className={`${book.textColor} font-bold text-[10px] md:text-xs leading-tight text-center`}
                    >
                      {book.title}
                    </span>
                  </div>
                )}
              </div>
              <div className="text-xs space-y-1">
                <p className="font-bold leading-tight text-gray-900 line-clamp-2">
                  {book.title}
                </p>
                <p className="text-gray-600 text-[10px] uppercase tracking-wide">
                  {book.author}
                </p>
              </div>
            </button>
          );
        })}
      </div>

      {selected !== null && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60"
          onClick={() => setSelected(null)}
          role="dialog"
          aria-modal="true"
        >
          <div
            className="bg-white rounded-lg max-w-lg w-full p-8 shadow-2xl relative"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              onClick={() => setSelected(null)}
              className="absolute top-4 right-4 text-gray-500 hover:text-black text-xl font-bold"
              aria-label="Close"
            >
              ×
            </button>
            <h3 className="text-xl font-extrabold text-[#AC1514] mb-2 pr-8">
              {books[selected].title}
            </h3>
            <p className="text-sm text-gray-600 mb-4">{books[selected].author}</p>
            <p className="text-sm text-gray-800 leading-relaxed text-justify">
              This title is part of our Jugnu Reads book club — selected for
              reflection on gender equity, trauma, healing, and survivor-centered
              change. Join our community to discuss this book in an upcoming session.
            </p>
          </div>
        </div>
      )}
    </>
  );
}
