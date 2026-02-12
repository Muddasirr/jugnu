import React from "react";
import Link from "next/link";
import { Instagram, Facebook, Youtube, Linkedin } from "lucide-react";

const Header: React.FC = () => {
  return (
    <header className="bg-[#AC1514] text-white">
      <div className="container mx-auto flex items-center justify-between px-6 py-4">
        {/* Logo */}
        <Link href="/" className="flex-shrink-0">
          <img src="/logojugnu.svg" alt="Jugnu Logo" className="h-12 w-auto" />
        </Link>

        {/* Navigation */}
        <nav className="hidden md:flex items-center space-x-8 text-sm font-medium tracking-wide">
          <div className="flex items-center space-x-1 hover:text-gray-200 cursor-pointer">
            <Link href="/about">ABOUT</Link>
          </div>
          <Link href="/getinvolved" className="hover:text-gray-200 transition">GET INVOLVED</Link>
          <Link href="/podcast" className="hover:text-gray-200 transition">PODCAST</Link>
          <Link href="/gethelp" className="hover:text-gray-200 transition">GET HELP</Link>
          <Link href="/contact" className="hover:text-gray-200 transition">CONTACT</Link>
          <Link href="/reads" className="hover:text-gray-200 transition">BOOK CLUB</Link>
        </nav>

        {/* Social Icons + Buttons */}
        <div className="flex items-center space-x-6">
          <div className="flex items-center space-x-4">
            <Instagram size={18} className="hover:text-gray-200 cursor-pointer" />
            <Facebook size={18} className="hover:text-gray-200 cursor-pointer" fill="currentColor" />
            <Youtube size={18} className="hover:text-gray-200 cursor-pointer" />
            <Linkedin size={18} className="hover:text-gray-200 cursor-pointer" fill="currentColor" />
          </div>

          <Link href="/survivor-stories">
            <button className="bg-white text-black px-4 py-2 text-xs font-bold uppercase tracking-wider hover:bg-gray-100 transition shadow-sm">
              SURVIVOR'S DIRECTORY
            </button>
          </Link>

          <a href="https://www.google.com" className="bg-black text-white px-4 py-2 text-xs font-bold uppercase tracking-wider hover:bg-gray-900 transition shadow-sm">
            LEAVE THIS SITE
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;
