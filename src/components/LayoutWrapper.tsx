"use client";

import { useState } from "react";
import Header from "@/components/Header";
import MenuBar from "@/components/MenuBar";
import Footer from "@/components/Footer";
import GlobalSearchBar from "@/components/GlobalSearchBar";

export default function LayoutWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  const toggleSearch = () => setIsSearchOpen((prev) => !prev);

  return (
    <>
      <Header onSearchToggle={toggleSearch} isSearchOpen={isSearchOpen} />
      <MenuBar />
      <GlobalSearchBar />
      {children}
      <Footer />
    </>
  );
}
