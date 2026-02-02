import React from "react";
import Link from "next/link";
import { Instagram, Facebook, Youtube, Linkedin } from "lucide-react";

const Header: React.FC = () => {
  return (
    <header className="bg-[#AC1514] text-white border-b border-gray-800">
      <div className="container mx-auto flex items-center justify-between px-6 py-3">
        {/* Logo */}
        <div className="font-bold text-lg tracking-wide"><img src={"/logojugnu.svg"} style={{ width: "60%" }} /></div>

        {/* Navigation */}
        <nav className="hidden md:flex items-center space-x-4 text-sm font-medium">
          <Link href="/about" className="hover:text-gray-300 transition">ABOUT</Link>
          <Link href="/getinvolved" className="hover:text-gray-300 transition">GET INVOLVED</Link>
          <Link href="/podcast" className="hover:text-gray-300 transition">PODCAST</Link>
          <Link href="/reads" className="hover:text-gray-300 transition">BOOK CLUB</Link>
          <Link href="/contact" className="hover:text-gray-300 transition">CONTACT</Link>
        </nav>

        {/* Social Icons + Buttons */}
        <div className="flex items-center space-x-4">
          <div className="flex items-center space-x-3">
            <Instagram size={16} className="hover:text-gray-400 cursor-pointer" />
            <Facebook size={16} className="hover:text-gray-400 cursor-pointer" fill="currentColor" />
            <Youtube size={16} className="hover:text-gray-400 cursor-pointer" />
            <Linkedin size={16} className="hover:text-gray-400 cursor-pointer" fill="currentColor" />
          </div>

          <button className="text-black bg-white hover:bg-gray-100 px-3 py-1.5 text-xs font-semibold rounded">
            VICTIM’S DIRECTORY
          </button>

          <button className="bg-red-600 hover:bg-red-700 px-3 py-1.5 text-xs font-semibold rounded">
            LEAVE THIS SITE
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
