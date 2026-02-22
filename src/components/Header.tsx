"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Instagram, Facebook, Youtube, Linkedin, Menu, X, Search } from "lucide-react";

interface HeaderProps {
  onSearchToggle: () => void;
  isSearchOpen: boolean;
}

const Header: React.FC<HeaderProps> = ({ onSearchToggle, isSearchOpen }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-[#AC1514] text-white top-0 z-50 shadow-md overflow-hidden">
      <div className="w-full flex items-center justify-between gap-2 md:gap-3 xl:gap-5 px-2 md:px-3 lg:px-4 xl:px-6 py-3 md:py-4">
        {/* Logo */}
        <Link href="/" className="flex-shrink-0 z-50">
          <img src="/logojugnu.svg" alt="Jugnu Logo" className="h-8 md:h-9 lg:h-10 xl:h-12 w-auto" />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center md:space-x-1.5 lg:space-x-2.5 xl:space-x-5 2xl:space-x-8 text-[10px] md:text-[11px] lg:text-xs xl:text-sm 2xl:text-base font-normal tracking-normal lg:tracking-wide">
          <Link href="/Social" className="hover:text-gray-200 transition whitespace-nowrap">HOME</Link>
          <div className="flex items-center hover:text-gray-200 cursor-pointer">
            <Link href="/about">ABOUT</Link>
          </div>
          <Link href="/getinvolved" className="hover:text-gray-200 transition whitespace-nowrap">GET INVOLVED</Link>
          <Link href="/podcast" className="hover:text-gray-200 transition whitespace-nowrap">PODCAST</Link>
          <Link href="/gethelp" className="hover:text-gray-200 transition whitespace-nowrap">GET HELP</Link>
          <Link href="/contact" className="hover:text-gray-200 transition whitespace-nowrap">CONTACT</Link>
          <Link href="/reads" className="hover:text-gray-200 transition whitespace-nowrap">BOOK CLUB</Link>
        </nav>

        {/* Desktop Social Icons + Search + Buttons */}
        <div className="hidden md:flex items-center flex-shrink-0 md:space-x-1.5 lg:space-x-2 xl:space-x-4 2xl:space-x-6">
          <div className="flex items-center space-x-1 md:space-x-1.5 lg:space-x-2 xl:space-x-3">
            <Instagram size={14} className="hover:text-gray-200 cursor-pointer lg:w-4 lg:h-4 xl:w-[18px] xl:h-[18px]" />
            <Facebook size={14} className="hover:text-gray-200 cursor-pointer lg:w-4 lg:h-4 xl:w-[18px] xl:h-[18px]" fill="currentColor" />
            <Youtube size={14} className="hover:text-gray-200 cursor-pointer lg:w-4 lg:h-4 xl:w-[18px] xl:h-[18px]" />
            <Linkedin size={14} className="hover:text-gray-200 cursor-pointer lg:w-4 lg:h-4 xl:w-[18px] xl:h-[18px]" fill="currentColor" />
            <button
              onClick={onSearchToggle}
              className="hover:text-gray-200 cursor-pointer transition-colors"
              aria-label="Toggle search"
            >
              <Search size={14} className={`lg:w-4 lg:h-4 xl:w-[18px] xl:h-[18px] transition-colors ${isSearchOpen ? "text-gray-300" : ""}`} />
            </button>
          </div>

          <Link href="/survivor-stories">
            <button className="bg-white text-black px-1.5 lg:px-2 xl:px-3 2xl:px-4 py-1 lg:py-1.5 xl:py-2 text-[8px] md:text-[9px] lg:text-[10px] xl:text-xs font-bold uppercase tracking-wider hover:bg-gray-100 transition shadow-sm whitespace-nowrap">
              SURVIVOR&apos;S DIRECTORY
            </button>
          </Link>

          <a href="https://www.google.com" className="bg-black text-white px-1.5 lg:px-2 xl:px-3 2xl:px-4 py-1 lg:py-1.5 xl:py-2 text-[8px] md:text-[9px] lg:text-[10px] xl:text-xs font-bold uppercase tracking-wider hover:bg-gray-900 transition shadow-sm whitespace-nowrap">
            LEAVE THIS SITE
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden z-50 focus:outline-none p-1"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <div
        className={`fixed inset-0 bg-[#AC1514] z-40 flex flex-col items-center justify-center space-y-8 transition-transform duration-300 ease-in-out ${isMenuOpen ? "translate-x-0" : "translate-x-full"
          } md:hidden`}
      >
        <nav className="flex flex-col items-center space-y-6 text-lg font-medium tracking-wide">
          <Link href="/Social" onClick={() => setIsMenuOpen(false)} className="hover:text-gray-200 transition">HOME</Link>
          <Link href="/about" onClick={() => setIsMenuOpen(false)} className="hover:text-gray-200 transition">ABOUT</Link>
          <Link href="/getinvolved" onClick={() => setIsMenuOpen(false)} className="hover:text-gray-200 transition">GET INVOLVED</Link>
          <Link href="/podcast" onClick={() => setIsMenuOpen(false)} className="hover:text-gray-200 transition">PODCAST</Link>
          <Link href="/gethelp" onClick={() => setIsMenuOpen(false)} className="hover:text-gray-200 transition">GET HELP</Link>
          <Link href="/contact" onClick={() => setIsMenuOpen(false)} className="hover:text-gray-200 transition">CONTACT</Link>
          <Link href="/reads" onClick={() => setIsMenuOpen(false)} className="hover:text-gray-200 transition">BOOK CLUB</Link>
        </nav>

        <div className="flex flex-col items-center space-y-6">
          <div className="flex items-center space-x-6">
            <Instagram size={24} className="hover:text-gray-200 cursor-pointer" />
            <Facebook size={24} className="hover:text-gray-200 cursor-pointer" fill="currentColor" />
            <Youtube size={24} className="hover:text-gray-200 cursor-pointer" />
            <Linkedin size={24} className="hover:text-gray-200 cursor-pointer" fill="currentColor" />
            <button onClick={() => { onSearchToggle(); setIsMenuOpen(false); }} aria-label="Toggle search">
              <Search size={24} className="hover:text-gray-200 cursor-pointer" />
            </button>
          </div>

          <Link href="/survivor-stories" onClick={() => setIsMenuOpen(false)}>
            <button className="bg-white text-black px-6 py-3 text-sm font-bold uppercase tracking-wider hover:bg-gray-100 transition shadow-sm w-full">
              SURVIVOR&apos;S DIRECTORY
            </button>
          </Link>

          <a href="https://www.google.com" className="bg-black text-white px-6 py-3 text-sm font-bold uppercase tracking-wider hover:bg-gray-900 transition shadow-sm w-full text-center">
            LEAVE THIS SITE
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;
