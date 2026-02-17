"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Instagram, Facebook, Youtube, Linkedin, Menu, X } from "lucide-react";

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-[#AC1514] text-white sticky top-0 z-50 shadow-md">
      <div className="container flex items-center justify-between px-1  py-4">
        {/* Logo */}
        <Link href="/" className="flex-shrink-0 z-50">
          <img src="/logojugnu.svg" alt="Jugnu Logo" className="h-12 w-auto" />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden xl:flex items-center xl:space-x-6 2xl:space-x-8 text-sm font-medium tracking-wide">
          <Link href="/Social" className="hover:text-gray-200 transition">HOME</Link>
          <div className="flex items-center space-x-1 hover:text-gray-200 cursor-pointer">
            <Link href="/about">ABOUT</Link>
          </div>
          <Link href="/getinvolved" className="hover:text-gray-200 transition">GET INVOLVED</Link>
          <Link href="/podcast" className="hover:text-gray-200 transition">PODCAST</Link>
          <Link href="/gethelp" className="hover:text-gray-200 transition">GET HELP</Link>
          <Link href="/contact" className="hover:text-gray-200 transition">CONTACT</Link>
          <Link href="/reads" className="hover:text-gray-200 transition">BOOK CLUB</Link>
        </nav>

        {/* Desktop Social Icons + Buttons */}
        <div className="hidden xl:flex items-center xl:space-x-4 2xl:space-x-6">
          <div className="flex items-center space-x-4">
            <Instagram size={18} className="hover:text-gray-200 cursor-pointer" />
            <Facebook size={18} className="hover:text-gray-200 cursor-pointer" fill="currentColor" />
            <Youtube size={18} className="hover:text-gray-200 cursor-pointer" />
            <Linkedin size={18} className="hover:text-gray-200 cursor-pointer" fill="currentColor" />
          </div>

          <Link href="/survivor-stories">
            <button className="bg-white text-black xl:px-3 2xl:px-4 py-2 text-xs font-bold uppercase tracking-wider hover:bg-gray-100 transition shadow-sm whitespace-nowrap">
              SURVIVOR'S DIRECTORY
            </button>
          </Link>

          <a href="https://www.google.com" className="bg-black text-white xl:px-3 2xl:px-4 py-2 text-xs font-bold uppercase tracking-wider hover:bg-gray-900 transition shadow-sm whitespace-nowrap">
            LEAVE THIS SITE
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="xl:hidden z-50 focus:outline-none"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile/Tablet Menu Overlay */}
      <div
        className={`fixed inset-0 bg-[#AC1514] z-40 flex flex-col items-center justify-center space-y-8 transition-transform duration-300 ease-in-out ${isMenuOpen ? "translate-x-0" : "translate-x-full"
          } xl:hidden`}
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
          </div>

          <Link href="/survivor-stories" onClick={() => setIsMenuOpen(false)}>
            <button className="bg-white text-black px-6 py-3 text-sm font-bold uppercase tracking-wider hover:bg-gray-100 transition shadow-sm w-full">
              SURVIVOR'S DIRECTORY
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
